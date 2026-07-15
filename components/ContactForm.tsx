"use client";

import { useState, type FormEvent } from "react";

const WA_MOVELART = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5548996340636";

interface Dados {
  nome: string;
  whatsapp: string;
  email: string;
  mensagem: string;
  temProjeto: boolean;
  _hp: string;
}

type Status = "idle" | "sending" | "success";

function normalizarWA(raw: string): string {
  const d = raw.replace(/\D/g, "");
  if (d.startsWith("55") && d.length >= 12) return d;
  return `55${d}`;
}

function buildMsgWA(dados: Dados): string {
  const linhas = [
    `Olá! Me chamo ${dados.nome}.`,
    "",
    dados.temProjeto
      ? "Já tenho projeto de arquiteto ou designer de interiores e gostaria de orçar a execução."
      : "Ainda não tenho projeto e gostaria de desenvolvê-lo com vocês.",
    "",
    dados.mensagem,
  ];
  if (dados.email) linhas.push("", `E-mail: ${dados.email}`);
  return linhas.join("\n");
}

export default function ContactForm() {
  const [dados, setDados] = useState<Dados>({
    nome: "", whatsapp: "", email: "", mensagem: "", temProjeto: false, _hp: "",
  });
  const [erros, setErros] = useState<Partial<Record<"nome" | "whatsapp" | "mensagem", string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (campo: keyof Dados, valor: string | boolean) => {
    setDados((prev) => ({ ...prev, [campo]: valor }));
    if (campo in erros) setErros((prev) => ({ ...prev, [campo]: undefined }));
  };

  const validar = (): boolean => {
    const e: typeof erros = {};
    if (!dados.nome.trim()) e.nome = "Informe seu nome.";
    if (!dados.whatsapp.trim()) e.whatsapp = "Informe seu WhatsApp.";
    if (!dados.mensagem.trim()) e.mensagem = "Conte um pouco sobre o projeto.";
    setErros(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validar()) return;

    // Abre WhatsApp enquanto ainda está no contexto do gesto do usuário
    const waUrl = `https://wa.me/${WA_MOVELART}?text=${encodeURIComponent(buildMsgWA(dados))}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setStatus("sending");

    // Webhook em background — falha silenciosa (WA já abriu)
    try {
      await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: dados.nome,
          whatsapp: dados.whatsapp,
          whatsappNormalizado: normalizarWA(dados.whatsapp),
          whatsappLinkLead: `https://wa.me/${normalizarWA(dados.whatsapp)}`,
          email: dados.email || null,
          mensagem: dados.mensagem,
          temProjeto: dados.temProjeto,
          _hp: dados._hp,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch {
      // silencioso
    }

    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#27AE60" strokeWidth={2.5} aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-brand-dark text-lg">Conversa iniciada!</h3>
        <p className="text-brand-muted text-sm max-w-xs leading-relaxed">
          Você foi redirecionado ao WhatsApp. A equipe Movelart também recebeu um resumo
          por e-mail e entrará em contato em breve.
        </p>
        <button
          onClick={() => {
            setDados({ nome: "", whatsapp: "", email: "", mensagem: "", temProjeto: false, _hp: "" });
            setStatus("idle");
          }}
          className="text-brand-accent text-sm font-semibold hover:underline mt-2"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  const inputBase =
    "w-full border rounded-md px-4 py-3 text-brand-dark bg-brand-bg placeholder-brand-muted text-sm focus:outline-none focus:ring-2 focus:ring-brand-ebony transition";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot anti-spam */}
      <input
        type="text"
        name="_hp"
        value={dados._hp}
        onChange={(e) => set("_hp", e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
      />

      {/* Nome */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="nome" className="text-sm font-medium text-brand-dark">
          Nome <span className="text-brand-accent" aria-hidden="true">*</span>
        </label>
        <input
          id="nome"
          type="text"
          value={dados.nome}
          onChange={(e) => set("nome", e.target.value)}
          placeholder="Seu nome completo"
          autoComplete="name"
          aria-invalid={!!erros.nome}
          className={`${inputBase} ${erros.nome ? "border-brand-error" : "border-brand-border"}`}
        />
        {erros.nome && <p className="text-xs text-brand-error" role="alert">{erros.nome}</p>}
      </div>

      {/* WhatsApp */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="whatsapp" className="text-sm font-medium text-brand-dark">
          WhatsApp <span className="text-brand-accent" aria-hidden="true">*</span>
        </label>
        <input
          id="whatsapp"
          type="tel"
          value={dados.whatsapp}
          onChange={(e) => set("whatsapp", e.target.value)}
          placeholder="(48) 9xxxx-xxxx"
          autoComplete="tel"
          aria-invalid={!!erros.whatsapp}
          className={`${inputBase} ${erros.whatsapp ? "border-brand-error" : "border-brand-border"}`}
        />
        {erros.whatsapp && <p className="text-xs text-brand-error" role="alert">{erros.whatsapp}</p>}
      </div>

      {/* E-mail opcional */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-brand-dark">
          E-mail <span className="text-brand-muted font-normal">(opcional)</span>
        </label>
        <input
          id="email"
          type="email"
          value={dados.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder="seuemail@exemplo.com"
          autoComplete="email"
          className={`${inputBase} border-brand-border`}
        />
      </div>

      {/* Situação do projeto */}
      <div className="flex flex-col gap-2.5" role="group" aria-labelledby="projeto-label">
        <p id="projeto-label" className="text-sm font-medium text-brand-dark">
          Situação do projeto <span className="text-brand-accent" aria-hidden="true">*</span>
        </p>
        {([
          { value: false, label: "Ainda não tenho projeto" },
          { value: true,  label: "Já tenho projeto de arquiteto ou designer" },
        ] as const).map((opcao) => (
          <label key={String(opcao.value)} className="flex items-center gap-3 cursor-pointer select-none">
            <div className="relative shrink-0 w-5 h-5">
              <input
                type="radio"
                name="temProjeto"
                checked={dados.temProjeto === opcao.value}
                onChange={() => set("temProjeto", opcao.value)}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              <div className={`w-5 h-5 rounded-full border-2 transition-colors flex items-center justify-center ${
                dados.temProjeto === opcao.value ? "border-brand-ebony" : "border-brand-border"
              }`}>
                {dados.temProjeto === opcao.value && (
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-ebony" />
                )}
              </div>
            </div>
            <span className="text-sm text-brand-muted leading-relaxed">{opcao.label}</span>
          </label>
        ))}
      </div>

      {/* Mensagem */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="mensagem" className="text-sm font-medium text-brand-dark">
          Sobre o projeto <span className="text-brand-accent" aria-hidden="true">*</span>
        </label>
        <textarea
          id="mensagem"
          rows={4}
          value={dados.mensagem}
          onChange={(e) => set("mensagem", e.target.value)}
          placeholder="Conte sobre o ambiente, o espaço e o que você tem em mente."
          aria-invalid={!!erros.mensagem}
          className={`${inputBase} resize-none ${erros.mensagem ? "border-brand-error" : "border-brand-border"}`}
        />
        {erros.mensagem && <p className="text-xs text-brand-error" role="alert">{erros.mensagem}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2.5 bg-brand-accent hover:bg-brand-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-4 rounded-md transition-colors min-h-[48px] mt-1"
      >
        {status === "sending" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-hidden="true" />
            Abrindo WhatsApp...
          </>
        ) : (
          <>
            Iniciar conversa no WhatsApp
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.856L.057 23.882a.5.5 0 0 0 .61.61l6.026-1.475A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 0 1-5.031-1.382l-.36-.214-3.733.914.932-3.622-.235-.373A9.808 9.808 0 0 1 2.182 12C2.182 6.58 6.58 2.182 12 2.182c5.421 0 9.818 4.398 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z" />
            </svg>
          </>
        )}
      </button>
      <p className="text-xs text-brand-muted text-center leading-relaxed">
        Ao enviar, você será redirecionado ao WhatsApp para iniciar a conversa.
      </p>
    </form>
  );
}
