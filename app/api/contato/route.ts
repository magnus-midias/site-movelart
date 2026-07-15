import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  nome: z.string().min(2).max(100),
  whatsapp: z.string().min(8).max(30),
  whatsappNormalizado: z.string().optional(),
  whatsappLinkLead: z.string().url().optional(),
  email: z.string().email().nullable().optional(),
  mensagem: z.string().min(1).max(2000),
  temProjeto: z.boolean(),
  _hp: z.string().optional(),
  timestamp: z.string().optional(),
});

// Rate limiter em memória: máx 5 req/minuto por IP
const rateMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  if (entry.count >= 5) return true;
  entry.count++;
  return false;
}

function log(event: string, data: Record<string, unknown> = {}) {
  process.stdout.write(
    JSON.stringify({ event, timestamp: new Date().toISOString(), ...data }) + "\n"
  );
}

function sanitize(str: string): string {
  return str.trim().replace(/<[^>]*>/g, "").slice(0, 2000);
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    log("contact_blocked", { reason: "rate_limit" });
    return NextResponse.json({ error: "Muitas tentativas. Tente novamente em breve." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Payload inválido." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  const { _hp, ...dados } = parsed.data;

  // Honeypot: aceita silenciosamente para não revelar ao bot
  if (_hp) {
    log("contact_blocked", { reason: "honeypot" });
    return NextResponse.json({ ok: true });
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    log("contact_submitted", { status: "no_webhook_configured", nome: dados.nome });
    return NextResponse.json({ ok: true });
  }

  const payload = {
    nome: sanitize(dados.nome),
    whatsapp: sanitize(dados.whatsapp),
    whatsappNormalizado: dados.whatsappNormalizado ?? "",
    whatsappLinkLead: dados.whatsappLinkLead ?? "",
    email: dados.email ? sanitize(dados.email) : null,
    mensagem: sanitize(dados.mensagem),
    temProjeto: dados.temProjeto,
    timestamp: dados.timestamp ?? new Date().toISOString(),
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      log("webhook_error", { status: res.status, nome: dados.nome });
    } else {
      log("contact_submitted", { status: "ok", nome: dados.nome });
    }
  } catch (err) {
    log("webhook_error", { error: String(err), nome: dados.nome });
  }

  // Sempre retorna 200 — o WhatsApp já foi aberto no cliente
  return NextResponse.json({ ok: true });
}
