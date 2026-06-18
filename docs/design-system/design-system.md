# Design System — site-movelart (Movelart)

Este documento é a **fonte única de verdade sobre a identidade visual da Movelart aplicada ao projeto `site-movelart`**. Qualquer alteração com impacto visual deve ler este arquivo antes e atualizá-lo depois, se introduzir ou alterar um token.

---

## 1. Sobre a marca

**Movelart** — móveis planejados de alto padrão para residências na Grande Florianópolis (SC).

- **Posicionamento:** projetos exclusivos, instalação própria, atendimento consultivo. Foco em exclusividade, acabamento e personalização. Público classe A/B, ticket médio elevado, ciclo de decisão longo.
- **Tom de voz:** consultivo e sofisticado. Transmite experiência, credibilidade e atenção ao detalhe. Sem jargão, sem exageros.
- **Personalidade visual:** off-white quase branco sobre quase preto, acento em vermelho escuro (sóbrio, não gritante), tipografia variada por papel (display sans, corpo humanista, acento geométrico). Premium sem poluição visual.
- **Referência visual:** imobal.com.br

---

## 2. Tipografia

Três fontes do Google Fonts, cada uma com papel distinto. Carregadas em `app/layout.tsx` via `next/font/google` com `display: swap`. Expostas como CSS variables e consumidas via classes Tailwind (`font-display`, `font-sans`, `font-yantra`).

| Fonte | CSS Variable | Classe Tailwind | Papel |
|---|---|---|---|
| `Open Sans` | `--font-display` | `font-display` | Títulos, headings, CTAs |
| `Mulish` | `--font-body` | `font-sans` (padrão do body) | Corpo de texto corrido, parágrafos |
| `Yantramanav` | `--font-yantra` | `font-yantra` | Uso pontual: eyebrows, dados numéricos, labels destacados |

### Hierarquia canônica Movelart

| Uso | Tamanho | Peso | Letter-spacing | Line-height | Observação |
|---|---|---|---|---|---|
| H1 | `clamp(2.25rem, 5vw, 4rem)` | 700–800 | -0.02em | 1.1 | `font-display`, `max-width: 20ch` |
| H2 | `clamp(1.75rem, 3vw, 2.5rem)` | 700 | — | 1.2 | `font-display` |
| H3 | `1.25rem` | 600 | — | — | `font-display` |
| Eyebrow | `0.75rem` | 600 | 0.18em | — | `font-yantra`, uppercase, `opacity: 0.7` |
| Body | `1rem` (mín. 16px) | 400 | — | 1.6 | `font-sans` (Mulish) |
| Caption / label | `0.875rem` | 500 | 0.02em | — | `font-sans` |

> Mínimo de 16px no body é obrigatório — evita zoom automático do iOS.

---

## 3. Paleta de cores

### 3.1 Cores de marca (referência canônica)

| Nome | HEX | Uso |
|---|---|---|
| Vermelho escuro | `#801611` | cor primária de acento — CTAs, destaques, links |
| Rose acinzentado | `#BCABAE` | elemento secundário, bordas, superfícies sutis |
| Off-white | `#FBFBFB` | fundo geral da página |
| Slate azulado | `#555B6E` | texto secundário, ícones, labels |
| Quase preto | `#0E1116` | texto principal, fundos escuros, nav, footer |

### 3.2 Tokens em uso — `tailwind.config.ts`

Definidos em `theme.extend.colors.brand`:

| Token | Valor | Significado |
|---|---|---|
| `brand-bg` | `#FBFBFB` | fundo geral (off-white) |
| `brand-surface` | `#FFFFFF` | cards, formulários, superfícies elevadas |
| `brand-dark` | `#0E1116` | texto principal, fundos escuros (header, footer) |
| `brand-muted` | `#555B6E` | texto secundário, ícones, labels |
| `brand-secondary` | `#BCABAE` | elementos de apoio, separadores visuais |
| `brand-border` | `#BCABAE` | bordas de cards, inputs, divisores |
| `brand-accent` | `#801611` | CTAs, botões primários, links de destaque |
| `brand-accent-hover` | `#6B1210` | estado hover dos elementos de acento |
| `brand-error` | `#C0392B` | mensagens de erro no formulário |
| `brand-success` | `#27AE60` | confirmação de envio |
| `brand-warning` | `#E67E22` | alertas gerais |

### 3.3 Bordas e transparências

Padrão para bordas sobre `brand-bg`: `brand-border` (`#BCABAE`) ou `brand-border/30` (com opacidade Tailwind) para divisores sutis.

- Inputs (estado normal): `border border-brand-border`
- Inputs (estado focus): `focus:border-brand-accent focus:ring-1 focus:ring-brand-accent`
- Cards hover: `hover:border-brand-accent`
- Divisores e linhas finas: `border-brand-border/30`

### 3.4 Gradientes

Não utilizados atualmente. Reserva para uso futuro em seções hero ou CTA com fundo escuro.

---

## 4. Border radius

Escala Movelart: **`4 / 8 / 12 px`**.

Definidos em `tailwind.config.ts` (`theme.extend.borderRadius`):

| Token | Valor | Uso |
|---|---|---|
| `rounded-sm` | `4px` | inputs, tags, badges |
| `rounded-md` | `8px` | cards, botões, modais |
| `rounded-lg` | `12px` | blocos grandes (hero, CTA, painéis) |
| `rounded-full` | `9999px` | avatares circulares, pills |

---

## 5. Componentes e padrões de UX/UI

### 5.1 Container

- Definido em `tailwind.config.ts`: centralizado, padding `1rem / 1.5rem / 2rem` (mobile → desktop).
- `max-width` por breakpoint: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`.
- Uso: `<div className="container mx-auto">` em todas as seções.

### 5.2 Botão primário (CTA)

| Propriedade | Valor |
|---|---|
| Background (normal) | `bg-brand-accent` (`#801611`) |
| Texto (normal) | `text-white` |
| Border radius | `rounded-md` (8px) |
| Padding | `px-8 py-4` |
| Min height | `min-h-[44px]` (touch target) |
| Hover | `hover:bg-brand-accent-hover` (`#6B1210`) |
| Transition | `transition-colors` |

### 5.3 Botão secundário (ghost)

| Propriedade | Valor |
|---|---|
| Background (normal) | transparente |
| Borda | `border border-brand-accent` |
| Texto | `text-brand-accent` |
| Hover | `hover:bg-brand-accent hover:text-white` |

### 5.4 Header (sticky)

- Fundo `brand-dark` fixo (sem transição transparente por enquanto).
- Logo à esquerda, nav central, ícones sociais + CTA à direita.
- Mobile: hamburger com drawer; logo e ícones sociais sempre visíveis.
- Touch targets: mín. `44×44px` em todos os elementos interativos.

### 5.5 WhatsApp flutuante

- Posição: canto inferior direito, `fixed z-50`.
- Animação: `animate-whatsapp-pulse` (2s ease-in-out infinite).
- Cor: verde WhatsApp (`#25D366`).

### 5.6 Formulário de contato

- Campos: Nome (obrigatório), Telefone (obrigatório), E-mail (opcional), Mensagem (opcional).
- Validação no cliente (JS) antes do POST para `/api/contato`.
- Estados: idle → loading → success | error.
- Acessibilidade: `aria-invalid`, `aria-describedby`, `role="alert"`, `htmlFor/id` em todos os campos.

---

## 6. Animações

| Nome | Keyframe | Duração | Easing | Uso |
|---|---|---|---|---|
| `whatsapp-pulse` | `scale(1→1.12)` + opacity | 2s | `ease-in-out` | Botão flutuante WhatsApp |

**Padrão de hover:** translação vertical pequena (`-2px` a `-3px`) + transição de cor. Sem bounce.

---

## 7. Assets

### 7.1 Ícone da marca — [`docs/design-system/logos/`](logos/)

O ícone é o logotipo da Movelart (mark sem texto). Disponível em três variantes cromáticas:

| Arquivo | Cor | Uso |
|---|---|---|
| `icone-branco.svg` | `#FBFBFB` | sobre fundos escuros (`brand-dark`, `brand-accent`) |
| `icone-preto.svg` | `#0E1116` | sobre fundos claros (`brand-bg`, `brand-surface`) |
| `icone-vermelho.svg` | `#801611` | uso pontual em contextos neutros (cinza, bege) |

**Regra de uso:** escolher a variante pelo contraste com o fundo, não por preferência estética.

### 7.2 Favicon — [`docs/design-system/favicon/`](favicon/)

- `favicon.svg` — versão canônica (quadrado com cantos arredondados, fundo `#FBFBFB`, ícone `#801611`)

**Uso no projeto:** promovido para `app/icon.svg`. O Next.js App Router detecta este arquivo automaticamente e o usa como favicon em todos os browsers modernos.

**Débito conhecido:** falta `.ico` de fallback para browsers legados e `apple-touch-icon.png`. Resolver na fase de polimento/SEO.

### 7.3 Ícones funcionais

Ícones de UI (setas, redes sociais, formulário) são SVGs inline nos componentes, estilo Feather (viewBox `0 0 24 24`, `stroke: currentColor`, `stroke-width: 2`).

### 7.4 Fotos de projetos

Placeholders ativos. Substituídos pelos assets reais do cliente na Fase 4.

---

## 8. Referências cruzadas

- Tokens de cor e fonte: [`tailwind.config.ts`](../../tailwind.config.ts)
- CSS global (bg, scroll, base): [`app/globals.css`](../../app/globals.css)
- Carga de fontes + metadata: [`app/layout.tsx`](../../app/layout.tsx)
- Componentes globais: [`components/`](../../components/)
- Histórico de alterações: [`docs/historico/`](../historico/)
- Instruções do agente: [`CLAUDE.md`](../../CLAUDE.md)
