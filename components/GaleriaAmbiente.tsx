"use client";

import { useState, useEffect, useCallback } from "react";

interface GaleriaAmbienteProps {
  nome: string;
  count?: number;
}

export default function GaleriaAmbiente({ nome, count = 6 }: GaleriaAmbienteProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);
  const goNext = useCallback(() => setCurrentIndex((p) => (p + 1) % count), [count]);
  const goPrev = useCallback(() => setCurrentIndex((p) => (p - 1 + count) % count), [count]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  return (
    <>
      {/* Mobile: scroll horizontal com swipe */}
      <div className="sm:hidden overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-3">
        <div className="flex gap-3">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              style={{ width: "72vw", flexShrink: 0 }}
              className="aspect-[4/3] snap-start bg-brand-border rounded-md flex items-center justify-center hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              aria-label={`Abrir foto ${i + 1} de ${count} de ${nome}`}
            >
              <div className="text-center text-brand-muted pointer-events-none">
                <p className="font-medium text-sm">Foto {i + 1}</p>
                <p className="text-xs mt-1 opacity-70">{nome}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Tablet+: grid */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className="aspect-[4/3] bg-brand-border rounded-md flex items-center justify-center hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent w-full"
            aria-label={`Abrir foto ${i + 1} de ${count} de ${nome}`}
          >
            <div className="text-center text-brand-muted pointer-events-none">
              <p className="font-medium text-sm">Foto {i + 1}</p>
              <p className="text-xs mt-1 opacity-70">{nome}</p>
            </div>
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria de ${nome}, foto ${currentIndex + 1} de ${count}`}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark/95 p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-4xl flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabeçalho: título + fechar */}
            <div className="flex items-center justify-between">
              <p className="text-white/60 text-sm">
                {nome} {currentIndex + 1} / {count}
              </p>
              <button
                onClick={closeLightbox}
                aria-label="Fechar galeria (Esc)"
                className="flex items-center justify-center min-w-[44px] min-h-[44px] text-white/70 hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Imagem */}
            <div className="aspect-[4/3] bg-brand-dark/60 border border-white/10 rounded-md flex items-center justify-center">
              <div className="text-center text-brand-muted">
                <p className="font-medium text-brand-bg/70">Foto {currentIndex + 1}</p>
                <p className="text-xs mt-1 text-brand-bg/40">Imagem real na Fase 4</p>
              </div>
            </div>

            {/* Navegação */}
            <div className="flex items-center justify-between">
              <button
                onClick={goPrev}
                aria-label="Foto anterior (tecla ←)"
                className="flex items-center gap-2 min-w-[44px] min-h-[44px] text-white/70 hover:text-white transition-colors text-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Anterior
              </button>
              <button
                onClick={goNext}
                aria-label="Próxima foto (tecla →)"
                className="flex items-center gap-2 min-w-[44px] min-h-[44px] text-white/70 hover:text-white transition-colors text-sm"
              >
                Próxima
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
