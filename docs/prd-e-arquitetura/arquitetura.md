# Arquitetura — site-movelart

> Atualizar este arquivo sempre que a arquitetura mudar. Registrar a mudança em `docs/historico/`.

---

## Stack tecnológica

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Framework | Next.js 14+ (App Router) | SSG nativo, SEO via HTML pré-renderizado, roteamento por arquivo |
| UI | React 18 + TypeScript | Padrão de mercado; tipagem estática para qualidade de código |
| Estilização | Tailwind CSS | Mobile-first nativo, purge de CSS não utilizado em build, sem libs pesadas |
| E-mail | Resend (Route Handler) | Gratuito até 3.000 e-mails/mês; integração simples com Next.js |
| Notificação alternativa | Telegram Bot API | Sem custo, sem dependência paga; notificação em tempo real no celular do cliente |
| Hospedagem | Vercel (free tier) | Deploy automático via Git, HTTPS automático, integração nativa com Next.js |
| Repositório | GitHub | `magnus-midias/site-movelart` |
| Imagens | Vercel Image Optimization | WebP automático, lazy loading, via componente `<Image>` do Next.js |

---

## Estrutura de rotas (App Router)

```
app/
  layout.tsx              → layout raiz: Header + Footer + WhatsAppButton globais
  page.tsx                → Home (/)
  robots.ts               → /robots.txt — gerado automaticamente
  sitemap.ts              → /sitemap.xml — gerado automaticamente
  empresa/
    page.tsx              → Empresa (/empresa)
  ambientes/
    page.tsx              → Ambientes — index (/ambientes)
    [slug]/
      page.tsx            → Categoria de ambiente (/ambientes/cozinha, etc.)
  processo/
    page.tsx              → Nosso Processo (/processo)
  contato/
    page.tsx              → Contato (/contato) — inclui Schema.org LocalBusiness
  api/
    contato/
      route.ts            → Route Handler: recebe form, dispara Resend e/ou Telegram
```

### Categorias de ambientes (lista definitiva — v1)

| Slug | Nome exibido |
|---|---|
| `cozinha` | Cozinha |
| `dormitorio` | Dormitório |
| `closet` | Closet |
| `sala` | Sala |
| `sala-de-jantar` | Sala de Jantar |
| `home-office` | Home Office |
| `banheiro` | Banheiro |
| `area-de-servico` | Área de Serviço |

---

## Componentes globais

### Header (`components/Header.tsx`) — `"use client"`
- Fixo no topo em todas as páginas
- Logo à esquerda (`<Logo variant="dark" />`)
- Menu de navegação central (desktop) / drawer (mobile)
- Bloco direito: ícones Instagram + WhatsApp + CTA "Solicitar orçamento"
- **Scroll effect:** `bg-brand-surface/80 backdrop-blur` no topo → `bg-brand-surface shadow-sm` após 60px
- Mobile: hamburguer com drawer; logo e ícones sempre visíveis

### Footer (`components/Footer.tsx`)
- Fundo `bg-brand-surface`, borda topo `border-brand-border`
- Logo (`variant="dark"`), navegação rápida, bloco de contato
- Instagram: `https://www.instagram.com/movelartoficial/`
- WhatsApp: `(48) 9634-0636` / link `wa.me/5548963406360`
- Crédito: "Desenvolvido por Magnus Mídias" → `https://magnusmidias.com`

### WhatsApp Flutuante (`components/WhatsAppButton.tsx`)
- `fixed z-50`, canto inferior direito
- Mensagem pré-preenchida: `"Olá! Vim pelo site e gostaria de saber mais sobre móveis planejados."`
- Animação CSS `whatsapp-pulse` (scale 1→1.12, 2s ease-in-out infinite)

### Logo (`components/Logo.tsx`)
- `variant="dark"` → `public/images/icone-vermelho.svg` (fundos claros)
- `variant="light"` → `public/images/icone-branco.svg` (fundos escuros)

---

## Formulário de contato e notificação

**Campos (simplificado em 2026-06-12):**
- Nome completo (obrigatório)
- Telefone/WhatsApp (obrigatório, com validação de formato)
- Mensagem (opcional)

**Fluxo:**
```
Usuário submete form
  → Route Handler (app/api/contato/route.ts)
    → Resend: e-mail para cliente (Fase 3 — canal a confirmar)
    → Telegram Bot API: mensagem no Telegram do cliente (Fase 3 — canal a confirmar)
  → Resposta: sucesso ou erro para o frontend
```

**Variáveis de ambiente necessárias:**
```
RESEND_API_KEY=
RESEND_TO_EMAIL=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
NEXT_PUBLIC_WHATSAPP_NUMBER=5548963406360
```

---

## Rendering strategy

- **SSG (Static Site Generation)** para todas as páginas — HTML pré-renderizado
- Páginas de ambiente (`/ambientes/[slug]`) geradas via `generateStaticParams`
- `/robots.txt` e `/sitemap.xml` gerados via `app/robots.ts` e `app/sitemap.ts`
- Route Handler de contato: único endpoint dinâmico (`ƒ`)

---

## SEO implementado (Fase 3 — parcial)

- `generateMetadata()` com Open Graph e Twitter Card em todas as páginas
- Canonical via `alternates.canonical` por página
- `app/robots.ts` → libera tudo, bloqueia `/api/`
- `app/sitemap.ts` → 13 URLs com prioridade e frequência
- Schema.org `LocalBusiness` em `app/contato/page.tsx` via `<Script type="application/ld+json">`
- `og-image.jpg` — placeholder; substituir por imagem real na Fase 4

---

## Requisitos de performance (metas não-negociáveis)

| Métrica | Alvo |
|---|---|
| LCP (mobile) | ≤ 2,5s |
| INP | ≤ 200ms |
| CLS | ≤ 0,1 |
| Lighthouse Performance (mobile) | ≥ 90 |
| Lighthouse SEO | ≥ 95 |
| Lighthouse Accessibility | ≥ 90 |

---

## Acessibilidade

- `alt` descritivo em todas as imagens
- Contraste mínimo 4,5:1 (WCAG AA)
- Navegação por teclado em todos os elementos interativos
- Semântica HTML: `<header>`, `<nav>`, `<main>`, `<footer>`
- `h1` único por página; hierarquia `h1 → h2 → h3` correta
- Área de toque mínima de 44×44px em todos os elementos interativos

---

## Decisões arquiteturais

| Decisão | Escolha | Motivo |
|---|---|---|
| App Router vs Pages Router | App Router | Padrão atual do Next.js 14+; Server Components; melhor performance |
| Estilização | Tailwind CSS | Mobile-first nativo; sem overhead de CSS não utilizado |
| Libs de ícones | SVGs inline | Sem dependência de CDN externo; tree-shaking nativo |
| Formulário | Nome + Telefone + Mensagem | Simplificado em 2026-06-12 a pedido do cliente — remove email e seleção de ambientes |
| Deploy | Somente após Fase 5 concluída | Evitar exposição de site incompleto |

---

## Lacunas conhecidas / pendências

- [ ] Canal de notificação de leads: e-mail (Resend), Telegram ou ambos — definir com cliente
- [ ] E-mail de destino dos leads (se Resend)
- [ ] Chat ID do Telegram (se Bot)
- [ ] Domínio definitivo do cliente (atualmente placeholder `movelart.com.br`)
- [ ] Imagem `og-image.jpg` para Open Graph (Fase 4)
- [ ] Fotos dos projetos por ambiente (Fase 4)
- [ ] Depoimentos reais (Fase 4)
- [ ] Endereço real do showroom para Google Maps e Schema.org (Fase 4)
- [ ] Logo real do cliente em alta resolução (Fase 4)
