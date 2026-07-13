"use client";

import { useState } from "react";
import Link from "next/link";

type Segmento = "todos" | "residencial" | "corporativo" | "empreendimentos";

interface AmbienteItem {
  slug: string;
  nome: string;
  segmento: Segmento;
}

interface Props {
  ambientes: AmbienteItem[];
}

const FILTROS: { key: Segmento; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "residencial", label: "Residencial" },
  { key: "corporativo", label: "Corporativo" },
  { key: "empreendimentos", label: "Empreendimentos" },
];

export default function AmbientesGrid({ ambientes }: Props) {
  const [filtro, setFiltro] = useState<Segmento>("todos");

  const filtrados = filtro === "todos"
    ? ambientes
    : ambientes.filter((a) => a.segmento === filtro);

  return (
    <div>
      {/* Filtro por segmento */}
      <div
        role="tablist"
        aria-label="Filtrar por segmento"
        className="flex gap-2 overflow-x-auto pb-2 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {FILTROS.map((f) => (
          <button
            key={f.key}
            role="tab"
            aria-selected={filtro === f.key}
            onClick={() => setFiltro(f.key)}
            className={`whitespace-nowrap shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[40px] ${
              filtro === f.key
                ? "bg-brand-ebony text-white"
                : "bg-brand-bg border border-brand-border text-brand-muted hover:border-brand-ebony hover:text-brand-dark"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid de categorias */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {filtrados.map((ambiente) => (
          <Link
            key={ambiente.slug}
            href={`/ambientes/${ambiente.slug}`}
            className="group block bg-brand-bg rounded-md overflow-hidden border border-brand-border hover:border-brand-ebony transition-colors"
          >
            <div className="aspect-[4/3] bg-brand-border flex items-center justify-center overflow-hidden">
              {/* FASE 4: substituir por <Image> */}
              <span className="text-brand-muted text-xs sm:text-sm group-hover:scale-105 transition-transform duration-300">
                Foto
              </span>
            </div>
            <div className="p-3 sm:p-4 flex items-center justify-between gap-2">
              <span className="font-semibold text-sm text-brand-dark group-hover:text-brand-accent transition-colors leading-tight">
                {ambiente.nome}
              </span>
              <span className="text-brand-ebony group-hover:text-brand-accent transition-colors text-sm shrink-0" aria-hidden="true">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
