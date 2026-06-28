# 08 — Framework Site Institucional — Segurança, Acessibilidade, SEO, Mobile e Lightbox

- **Data:** 2026-06-27
- **Autor:** Claude
- **Escopo:** segurança, acessibilidade, SEO, performance mobile, funcionalidade (lightbox)

---

## Contexto / Motivação

Internalização do `framework-site-institucional.md` no projeto. Foram identificados e fechados todos os gaps entre o estado atual do site e o framework (seções 7–12), executando tudo que não depende de assets ou decisões do cliente.

---

## O que mudou

### Segurança (framework seção 7)

- **`next.config.mjs`** — adicionados HTTP Security Headers em todas as rotas:
  - `X-Frame-Options: SAMEORIGIN` (anti-clickjacking)
  - `X-Content-Type-Options: nosniff`
  - `X-DNS-Prefetch-Control: on`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Content-Security-Policy` (scripts, styles, fonts, frames, connect)

- **`app/api/contato/route.ts`** — reescrito com:
  - Validação Zod server-side (schema tipado)
  - Rate limiting in-memory: 5 req/min por IP (Map-based)
  - Honeypot check: campo `_hp` — se preenchido, aceita silenciosamente (não delata bots)
  - Logs estruturados JSON: `contact_submitted`, `contact_invalid`, `contact_blocked`

- **`components/ContactForm.tsx`** — campo honeypot `_hp` adicionado:
  - Invisível ao usuário (`position: absolute; left: -9999px; opacity: 0`)
  - `tabIndex={-1}`, `aria-hidden="true"` — não interfere em leitores de tela
  - Enviado junto ao body do POST; verificado no server

### Descoberta e SEO (framework seção 9)

- **`public/llms.txt`** — criado: descreve a empresa para rastreadores de IA (sobre, serviços, processo, área de atuação, contato)

- **`app/page.tsx`** — Schema.org `Organization` adicionado via `<Script id="schema-organization" type="application/ld+json">` com: name, url, logo, telephone, sameAs, areaServed

### Analytics — GTM (framework seção 9)

- **`app/layout.tsx`** — GTM preparado e condicional: carrega apenas se `NEXT_PUBLIC_GTM_ID` estiver definido no ambiente. Script no `<head>` com `strategy="afterInteractive"` + `<noscript>` iframe no body. Nenhum deploy necessário ao cliente fornecer o container ID — basta adicionar a env var na Vercel.

### Acessibilidade (framework seção 10)

- **`app/layout.tsx`** — Skip link "Pular para o conteúdo principal" adicionado:
  - `href="#main-content"`, classe `sr-only focus:not-sr-only`
  - Visível apenas via navegação por teclado (Tab)

- **`app/globals.css`** — `prefers-reduced-motion`:
  - `.animate-whatsapp-pulse { animation: none }` quando usuário prefere movimento reduzido
  - `scroll-behavior: auto` (desativa smooth scroll)

- **Todas as páginas** — `id="main-content"` adicionado ao `<main>` (alvo do skip link)

### Funcionalidade — Lightbox (PRD Fase 3)

- **`components/GaleriaAmbiente.tsx`** — novo componente client-side:
  - Grid de fotos com botões acessíveis (`aria-label`, `focus-visible:ring`)
  - Lightbox custom sem lib externa: overlay dark, imagem, navegação prev/next, contador
  - Keyboard: `Escape` fecha, `←/→` navega
  - Foco: `document.body.style.overflow = "hidden"` ao abrir
  - `role="dialog" aria-modal="true" aria-label` no overlay
  - Touch targets: `min-w-[44px] min-h-[44px]` em todos os botões

- **`app/ambientes/[slug]/page.tsx`** — galeria substituída por `<GaleriaAmbiente nome={nome} count={6} />`

### Mobile Dedicated Pass (framework seção 5, Fase 5)

Todas as páginas tiveram padding de seções reduzido para mobile:

| Padrão antes | Padrão depois |
|---|---|
| `py-20` | `py-12 md:py-20` |
| `py-16` | `py-10 md:py-16` |
| `py-14` | `py-10 md:py-14` |
| `mb-10 mb-12` | `mb-8 md:mb-10`, `mb-8 md:mb-12` |

Formulário de contato: `p-8` → `p-6 md:p-8` no card.
Mapa placeholder: altura fixa `h-80` → `h-64 md:h-80`.

### Correção de bug

- **`app/contato/page.tsx`** — indentação incorreta do `<main>` dentro do Fragment (`<>`) foi corrigida para estrutura limpa.

---

## Dependências adicionadas

| Pacote | Versão | Motivo |
|---|---|---|
| `zod` | (latest) | Validação server-side tipada no endpoint de contato |

---

## $10K Checklist — atualização

| Critério | Antes | Depois |
|---|---|---|
| O stuff invisível (LCP, WCAG, segurança) | ⬜ | 🔄 Headers HTTP ✅, skip link ✅, prefers-reduced-motion ✅, Zod ✅, rate limiting ✅ |
| Mobile projetado | ⬜ | 🔄 Mobile pass concluído (padding), lightbox mobile-first |
| Movimento que sussurra | ✅ | ✅ + resposta a prefers-reduced-motion |

---

## O que ainda falta (não depende de código)

- GTM Container ID → cliente deve fornecer (env var `NEXT_PUBLIC_GTM_ID` na Vercel)
- Google Maps embed → endereço real do cliente
- Integração de leads (Resend/Telegram) → decisão do cliente sobre canal
- Assets reais → Fase 4

---

## Próximo passo

Fase 4 — substituição de assets reais. Depende totalmente do cliente: logo, fotos, textos, depoimentos, domínio definitivo.
