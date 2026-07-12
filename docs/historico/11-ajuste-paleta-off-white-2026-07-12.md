# 11 — Ajuste de paleta: pergaminho → off-white

**Data:** 2026-07-12

## Motivo

O fundo `#F5F0EB` (parchment) deixava o site com aparência amarelada/quente demais. Cliente/dev percebeu que o visual ficou distante do "branco de site" esperado para um projeto de alto padrão. Opção escolhida: off-white levemente quente (em vez de branco puro), para manter alguma personalidade sem o amarelado.

## Tokens alterados

| Token | Antes | Depois |
|---|---|---|
| `brand-bg` | `#F5F0EB` (Parchment) | `#FAFAF8` (Off-white) |
| `brand-surface` | `#FBFBFB` | `#F2F2F0` (Light gray) |
| `brand-border` | `#D6CCBF` (Border Warm) | `#E2E0DC` (Border Neutral) |

## Tokens sem alteração

`brand-dark`, `brand-ebony`, `brand-muted`, `brand-accent`, `brand-accent-hover` — mantidos. A personalidade da marca segue intacta via tipografia e vermelho.

## Arquivos alterados

- `tailwind.config.ts` — 3 tokens atualizados
- `docs/design-system/MASTER.md` — tabela de cores e personalidade visual atualizadas
