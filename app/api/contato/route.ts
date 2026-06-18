import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nome, telefone, mensagem } = body;

  if (!nome || !telefone) {
    return NextResponse.json({ error: "Nome e telefone são obrigatórios." }, { status: 400 });
  }

  // TODO Fase 3: integrar Resend e/ou Telegram Bot
  console.log("Lead recebido:", { nome, telefone, mensagem });

  return NextResponse.json({ success: true });
}
