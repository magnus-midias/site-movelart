# 05 — Ajuste de cores UX/UI + Design System real — 2026-06-11

## Motivação

O cliente identificou que o uso excessivo de preto e vermelho nos banners e CTAs criava uma experiência pesada e negativa para o público-alvo (classe A/B, ciclo de decisão longo). Vermelho em especial, fora do rodapé, remete a alertas e urgência — inadequado para marca de alto padrão.

## O que foi feito

### 1. Design system com cores e tipografia reais

- `tailwind.config.ts` atualizado com paleta real da marca: `brand.bg`, `brand.surface`, `brand.dark`, `brand.muted`, `brand.secondary`, `brand.border`, `brand.accent`, `brand.accent-hover`, `brand.error`, `brand.success`, `brand.warning`.
- Três fontes Google configuradas via `next/font/google`: Open Sans (`--font-display`), Yantramanav (`--font-yantra`), Mulish (`--font-body`).
- `app/layout.tsx` substituiu Inter pelas três fontes com variáveis CSS aplicadas no `<html>`.
- `docs/design-system/design-system.md` reescrito com paleta, tipografia, espaçamento e regras de uso.

### 2. Assets de marca (SVG)

- `public/images/icone-branco.svg` — ícone branco (fundos escuros).
- `public/images/icone-preto.svg` — ícone escuro (não utilizado ativamente).
- `public/images/icone-vermelho.svg` — ícone vermelho (header, fundo claro).
- `app/icon.svg` — favicon automático Next.js App Router.
- `components/Logo.tsx` atualizado: `variant="dark"` usa ícone vermelho; `variant="light"` usa ícone branco.

### 3. Ajuste de cores em todos os arquivos

**Regra aplicada:**
- Banners/hero de página: `bg-brand-bg` (claro) com `text-brand-dark` — elimina o fundo preto opressivo.
- Seção de números (Empresa): `bg-brand-dark` — destaque elegante sem ser vermelho.
- CTAs finais de página: `bg-brand-dark` com botão primário vermelho interno — hierarquia clara.
- Rodapé: `bg-brand-accent` (vermelho) — único elemento com vermelho de fundo, reforça identidade sem poluir.
- Vermelho reservado para: rodapé, botões primários de ação (CTA), ícone do logo, detalhe de eyebrow e marcadores.

**Arquivos alterados:**
- `components/Footer.tsx` — `bg-brand-dark` → `bg-brand-accent`; todos os textos `text-brand-bg/*` → `text-white/*`.
- `app/page.tsx` — hero claro; CTA final `bg-brand-accent` → `bg-brand-dark`; ghost button com cores claras.
- `app/empresa/page.tsx` — banner claro; números `bg-brand-accent` → `bg-brand-dark`; CTA final `bg-brand-dark` → `bg-brand-surface` com texto escuro.
- `app/ambientes/page.tsx` — banner claro.
- `app/ambientes/[slug]/page.tsx` — banner claro; CTA `bg-brand-accent` → `bg-brand-dark`.
- `app/processo/page.tsx` — banner claro; `text-brand-bg/70` → `text-brand-muted`.
- `app/contato/page.tsx` — banner claro.

## Classes de fonte aplicadas (todas as páginas)

- Eyebrows (labels de seção): `font-yantra`
- Headings (h1, h2, h3): `font-display`
- Corpo de texto: `font-sans` (default via Tailwind)
