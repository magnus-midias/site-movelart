# Design System — MASTER — site-movelart (Movelart)

Identidade visual e tokens de UI desta aplicação. Atualize este arquivo sempre que introduzir ou alterar um token, componente com variação visual, animação ou asset de marca.

**Regra:** qualquer alteração com impacto visual deve ler este arquivo antes e atualizá-lo depois se introduzir ou alterar um token.

**Overrides por página:** quando uma página específica tem desvios do MASTER, criar o arquivo correspondente em `docs/design-system/pages/nome-da-pagina.md`.

---

## 1. Sobre a marca

**Movelart** — móveis planejados de alto padrão para residências na Grande Florianópolis (SC).

- **Posicionamento:** projetos exclusivos, instalação própria, atendimento consultivo. Foco em exclusividade, acabamento e personalização. Público classe A/B, ticket médio elevado, ciclo de decisão longo.
- **Tom de voz:** consultivo e sofisticado. Transmite experiência, credibilidade e atenção ao detalhe. Sem jargão, sem exageros.
- **Personalidade visual:** fundo pergaminho quente sobre texto quase preto, acento em vermelho escuro (sóbrio, não gritante), tipografia variada por papel (display sans, corpo humanista, acento geométrico). Premium sem poluição visual.
- **Referência visual:** imobal.com.br

---

## 2. Tipografia

Três fontes do Google Fonts, cada uma com papel distinto. Carregadas em `app/layout.tsx` via `next/font/google` com `display: swap`. Expostas como CSS variables e consumidas via classes Tailwind.

| Fonte | CSS Variable | Classe Tailwind | Papel |
|---|---|---|---|
| `Open Sans` | `--font-display` | `font-display` | Títulos (h1, h2, h3), headings, CTAs |
| `Mulish` | `--font-body` | `font-sans` (padrão do body) | Corpo de texto corrido, parágrafos |
| `Yantramanav` | `--font-yantra` | `font-yantra` | Eyebrows, dados numéricos, labels destacados |

### Hierarquia canônica Movelart

| Uso | Tailwind | Peso | Observação |
|---|---|---|---|
| H1 | `text-4xl md:text-5xl` ou `text-4xl md:text-6xl` | `font-bold` (700) | `font-display`, `text-balance`, `leading-tight` |
| H2 | `text-3xl` ou `text-2xl` | `font-bold` (700) | `font-display` |
| H3 | `text-lg` ou `text-base` | `font-semibold` (600) | `font-display` |
| Eyebrow | `text-sm` | `font-semibold` (600) | `font-yantra`, `uppercase tracking-widest` |
| Body | `text-lg` ou `text-base` | `font-normal` (400) | `font-sans` (Mulish), `leading-relaxed` |
| Caption / label | `text-sm` | `font-medium` (500) | `font-sans` |

> Mínimo de 16px no body é obrigatório — evita zoom automático do iOS.

---

## 3. Paleta de cores

Tokens definidos em `tailwind.config.ts` em `theme.extend.colors.brand`. Paleta definitiva da marca (confirmada em 2026-06-12).

### 3.1 Cores de marca (referência canônica)

| Nome | HEX | Token | Uso |
|---|---|---|---|
| Pergaminho (Parchment) | `#F5F0EB` | `brand-bg` | Fundo geral da página |
| Quase-branco | `#FBFBFB` | `brand-surface` | Cards, formulários, superfícies elevadas |
| Ink Black | `#0D1B2A` | `brand-dark` | Texto principal, fundos escuros (dark CTAs) |
| Ebony | `#5B5941` | `brand-ebony` | Acento secundário — bordas hover, botão outline, eyebrows |
| Muted Warm | `#6B6854` | `brand-muted` | Texto secundário, ícones, labels |
| Border Warm | `#D6CCBF` | `brand-border` | Bordas de cards, inputs, divisores |
| Crushed Berry | `#801611` | `brand-accent` | CTAs, botões primários, ícone do logo, eyebrow accent |
| Crushed Berry Dark | `#6B1210` | `brand-accent-hover` | Estado hover dos elementos de acento |
| Error | `#C0392B` | `brand-error` | Mensagens de erro no formulário |
| Success | `#27AE60` | `brand-success` | Confirmação de envio |
| Warning | `#E67E22` | `brand-warning` | Alertas gerais |

### 3.2 Regras de uso

| Contexto | Background | Texto / Elementos |
|---|---|---|
| Seções padrão (banner, hero) | `brand-bg` | `brand-dark`, `brand-muted` |
| Cards / formulários | `brand-surface` ou `bg-white` | `brand-dark`, `brand-muted` |
| Seção de números (Empresa) | `brand-ebony` | `brand-bg` (valores), `brand-bg/70` (labels) |
| CTAs finais escuros | `brand-dark` | `brand-bg`, botões em vermelho ou outline parchment |
| Botão primário | `brand-accent` → hover `brand-accent-hover` | `text-white` |
| Botão secundário (fundo claro) | `brand-bg` → hover `brand-ebony` | `border-brand-ebony text-brand-ebony` → hover `text-white` |
| Botão secundário (fundo escuro) | transparente → hover `brand-bg` | `border-brand-bg text-brand-bg` → hover `text-brand-dark` |

### 3.3 Bordas e transparências

- Inputs normal: `border border-brand-border`
- Inputs focus: `focus:border-brand-accent`
- Cards hover: `hover:border-brand-ebony`
- Divisores sutis: `border-brand-border/30`
- Header no topo: `bg-brand-surface/80 backdrop-blur-sm`

---

## 4. Border radius e espaçamentos

Escala Movelart: **`4 / 8 px`** (sem lg).

| Classe | Valor | Uso |
|---|---|---|
| `rounded-sm` | `4px` | inputs, tags, badges |
| `rounded-md` | `8px` | cards, botões, modais |

Espaçamentos: Tailwind default (`gap-*`, `p-*`, `m-*`). Container: `container mx-auto` com padding `px-4 md:px-6 lg:px-8`.

---

## 5. Componentes e padrões de UX/UI

### 5.1 Container

- Definido em `tailwind.config.ts`: centralizado, padding progressivo mobile → desktop.
- Uso: `<div className="container mx-auto">` em todas as seções.

### 5.2 Botão primário (CTA)

```
bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px]
```

### 5.3 Botão secundário — fundo claro

```
bg-brand-bg border-2 border-brand-ebony text-brand-ebony hover:bg-brand-ebony hover:text-white font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px]
```

### 5.4 Botão secundário — fundo escuro (`bg-brand-dark`)

```
border-2 border-brand-bg text-brand-bg hover:bg-brand-bg hover:text-brand-dark font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px]
```

### 5.5 Header (sticky)

- Fixo no topo, `z-40`.
- Scroll effect: topo → `bg-brand-surface/80 backdrop-blur-sm border-b border-transparent`; scrolled → `bg-brand-surface border-b border-brand-border shadow-sm`.
- Transição: `transition-all duration-300`.
- Mobile: hamburguer com drawer; logo e ícones sempre visíveis.
- Touch targets: `min-w-[44px] min-h-[44px]` em todos os elementos interativos.

### 5.6 WhatsApp flutuante

- `fixed bottom-6 right-6 z-50`
- Animação: `animate-whatsapp-pulse` (scale 1→1.12, 2s ease-in-out infinite)
- Cor: verde WhatsApp (`#25D366`).

### 5.7 Formulário de contato

- Campos: Nome (obrigatório), Telefone/WhatsApp (obrigatório), Mensagem (opcional).
- Validação no cliente antes do POST para `/api/contato`.
- Estados: idle → loading → success | error.
- Acessibilidade: `aria-invalid`, `aria-describedby`, `role="alert"`, `htmlFor/id` em todos os campos.

### 5.8 Cards de diferencial

```
flex flex-col gap-3 p-6 border border-brand-border rounded-md bg-white hover:border-brand-ebony transition-colors
```
Ícone decorativo: `w-8 h-8 rounded-sm bg-brand-ebony/10` com `text-brand-ebony`.

### 5.9 Cards de ambiente (portfólio)

```
group block bg-brand-bg rounded-md overflow-hidden border border-brand-border hover:border-brand-ebony transition-colors
```
Hover no texto: `group-hover:text-brand-accent`.

---

## 6. Animações

| Nome | Keyframe | Duração | Easing | Uso |
|---|---|---|---|---|
| `whatsapp-pulse` | `scale(1→1.12)` + opacity | 2s | `ease-in-out` | Botão flutuante WhatsApp |

**Padrão de hover em botões:** transição de cor `transition-colors duration-200`. Sem bounce, sem translate vertical.
**Seta de back button:** `group-hover:-translate-x-1 transition-transform` (desliza 1px para esquerda no hover do link pai).

---

## 7. Assets

Organizados em subpastas de `docs/design-system/`:

### 7.1 Ícone da marca — [`docs/design-system/logos/`](logos/)

| Arquivo | Cor | Uso |
|---|---|---|
| `icone-branco.svg` | `#FBFBFB` | sobre fundos escuros (`brand-dark`, `brand-accent`) |
| `icone-preto.svg` | `#0D1B2A` | sobre fundos claros (uso interno) |
| `icone-vermelho.svg` | `#801611` | Header (fundo claro `brand-surface`) |

Regra: `<Logo variant="dark" />` → icone-vermelho.svg; `<Logo variant="light" />` → icone-branco.svg.

**Os SVGs de uso no site estão em `public/images/`** (copiados de `docs/design-system/logos/`).

### 7.2 Favicon — [`docs/design-system/favicon/`](favicon/)

- `favicon.svg` — versão canônica (fundo `#FBFBFB`, ícone `#801611`)
- Promovido para `app/icon.svg` (detectado automaticamente pelo Next.js App Router).
- **Débito:** falta `.ico` de fallback e `apple-touch-icon.png` — resolver na Fase 5.

### 7.3 Ícones funcionais

SVGs inline nos componentes, estilo Feather (`viewBox 0 0 24 24`, `stroke: currentColor`, `strokeWidth={2}`).

### 7.4 Fotos de projetos

Placeholders ativos. Substituídos pelos assets reais do cliente na Fase 4.

---

## 8. $10K Checklist — Verificação antes de qualquer entrega de UI

| Critério | Status | Observação |
|---|---|---|
| Point of view — direção visual definida e executada | ✅ | Sofisticado premium, pergaminho + tinta preta + vermelho escuro |
| Tipografia com intenção — par display + body escolhido | ✅ | Open Sans (display) + Mulish (body) + Yantramanav (acento) |
| Sistema de cores restrito — 3 a 5 cores consistentes | ✅ | 5 cores base: bg, surface, dark, ebony, accent |
| Hierarquia que respira — whitespace e escala | ⬜ | Validar com Lighthouse Accessibility |
| Imagens com intenção — não genéricas | ⬜ | Aguardando assets reais (Fase 4) |
| Motion que sussurra — micro-interações sutis | ✅ | Hover de botão (cor), back button (translate), WhatsApp pulse |
| Mobile projetado, não encolhido | ⬜ | Testar em dispositivo físico (Fase 5) |
| O stuff invisível — LCP, WCAG, HTML semântico | ⬜ | Medir com Lighthouse e axe-core (Fase 5) |

---

## 9. Referências cruzadas

- Tokens de cor e fonte: [`tailwind.config.ts`](../../tailwind.config.ts)
- CSS global (bg, scroll, base): [`app/globals.css`](../../app/globals.css)
- Carga de fontes + metadata: [`app/layout.tsx`](../../app/layout.tsx)
- Componentes globais: [`components/`](../../components/)
- Histórico de alterações: [`docs/historico/`](../historico/)
- Instruções do agente: [`CLAUDE.md`](../../CLAUDE.md)
