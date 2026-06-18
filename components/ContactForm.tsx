"use client";

import { useState } from "react";

interface FormFields {
  nome: string;
  telefone: string;
  mensagem: string;
}

interface FormErrors {
  nome?: string;
  telefone?: string;
}

type Status = "idle" | "loading" | "success" | "error";

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!fields.nome.trim()) errors.nome = "Nome é obrigatório.";
  if (!fields.telefone.trim()) {
    errors.telefone = "Telefone é obrigatório.";
  } else if (!/^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/.test(fields.telefone.replace(/\s/g, ""))) {
    errors.telefone = "Informe um telefone válido. Ex: (48) 9 0000-0000";
  }
  return errors;
}

export default function ContactForm() {
  const [fields, setFields] = useState<FormFields>({
    nome: "",
    telefone: "",
    mensagem: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("Erro no servidor.");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col gap-4 p-8 border border-brand-success/30 bg-brand-success/5 rounded-md text-center">
        <span className="text-3xl" aria-hidden="true">✅</span>
        <h2 className="text-xl font-semibold text-brand-dark">Mensagem enviada!</h2>
        <p className="text-brand-muted">
          Recebemos seu contato e retornaremos em breve pelo WhatsApp informado.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setFields({ nome: "", telefone: "", mensagem: "" });
          }}
          className="mt-2 text-sm text-brand-accent underline underline-offset-2"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  const inputBase =
    "w-full border rounded-md px-4 py-3 text-brand-dark bg-brand-surface focus:outline-none transition-colors text-base";
  const inputNormal = `${inputBase} border-brand-border focus:border-brand-accent`;
  const inputError = `${inputBase} border-brand-error focus:border-brand-error`;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Nome */}
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-brand-dark mb-1">
          Nome completo <span className="text-brand-error" aria-hidden="true">*</span>
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          autoComplete="name"
          value={fields.nome}
          onChange={handleChange}
          placeholder="Seu nome"
          aria-describedby={errors.nome ? "nome-error" : undefined}
          aria-invalid={!!errors.nome}
          className={errors.nome ? inputError : inputNormal}
        />
        {errors.nome && (
          <p id="nome-error" className="mt-1 text-xs text-brand-error" role="alert">
            {errors.nome}
          </p>
        )}
      </div>

      {/* Telefone */}
      <div>
        <label htmlFor="telefone" className="block text-sm font-medium text-brand-dark mb-1">
          Telefone / WhatsApp <span className="text-brand-error" aria-hidden="true">*</span>
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          autoComplete="tel"
          value={fields.telefone}
          onChange={handleChange}
          placeholder="(48) 9 0000-0000"
          aria-describedby={errors.telefone ? "telefone-error" : undefined}
          aria-invalid={!!errors.telefone}
          className={errors.telefone ? inputError : inputNormal}
        />
        {errors.telefone && (
          <p id="telefone-error" className="mt-1 text-xs text-brand-error" role="alert">
            {errors.telefone}
          </p>
        )}
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-brand-dark mb-1">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          value={fields.mensagem}
          onChange={handleChange}
          placeholder="Conte um pouco sobre seu projeto..."
          className={`${inputNormal} resize-none`}
        />
      </div>

      {/* Erro geral */}
      {status === "error" && (
        <p className="text-sm text-brand-error bg-brand-error/5 border border-brand-error/20 rounded-md px-4 py-3" role="alert">
          Ocorreu um erro ao enviar. Tente novamente ou fale conosco pelo WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-brand-accent hover:bg-brand-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-md transition-colors min-h-[44px] flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          "Enviar mensagem"
        )}
      </button>
    </form>
  );
}
