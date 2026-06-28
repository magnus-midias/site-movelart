import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  nome: z.string().min(2, "Nome muito curto.").max(100),
  telefone: z.string().min(8, "Telefone inválido.").max(20),
  mensagem: z.string().max(2000).optional(),
  _hp: z.string().optional(),
});

// In-memory rate limiter: 5 requests per minute per IP
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
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    log("contact_blocked", { reason: "rate_limit" });
    return NextResponse.json(
      { error: "Muitas tentativas. Tente novamente em alguns minutos." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Payload inválido." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    log("contact_invalid", { errors: parsed.error.flatten() });
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  const { _hp, nome, telefone, mensagem } = parsed.data;

  const nomeSanitizado = sanitize(nome);
  const telefoneSanitizado = sanitize(telefone);
  const mensagemSanitizada = mensagem ? sanitize(mensagem) : undefined;

  // Honeypot: if filled, it's a bot — silently accept to avoid giving it away
  if (_hp) {
    log("contact_blocked", { reason: "honeypot" });
    return NextResponse.json({ success: true });
  }

  // TODO Fase 4: integrar Resend e/ou Telegram Bot
  log("contact_submitted", { status: "success" });
  void nomeSanitizado; void telefoneSanitizado; void mensagemSanitizada;

  return NextResponse.json({ success: true });
}
