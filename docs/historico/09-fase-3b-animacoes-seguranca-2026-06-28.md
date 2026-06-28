# 09 — Fase 3B: Animações, Segurança Avançada e BreadcrumbList

**Data:** 2026-06-28
**Tipo:** feature
**Impacto:** animações globais, segurança de formulário, acessibilidade de menu, SEO Schema.org

---

## O que foi feito

### Framer Motion — sistema de animação

Instalado `framer-motion`. Criados 5 componentes de animação:

| Componente | Uso |
|---|---|
| `MotionProvider.tsx` | Wraps o layout com `MotionConfig reducedMotion="user"` — respeita prefers-reduced-motion globalmente |
| `AnimateIn.tsx` | Fade-up com trigger `"mount"` (hero, acima do fold) ou `"view"` (scroll, padrão). Delay e distância configuráveis |
| `StaggerList.tsx` | Container de stagger com 80ms entre filhos, dispara no scroll |
| `StaggerItem.tsx` | Item de stagger (exportado junto com StaggerList) |
| `CounterNumber.tsx` | Contador animado (ease-out-cubic 1.4s) ao entrar na viewport — usado nos números da Empresa |

**Filosofia de motion aplicada:** Sutil e premium — movimentos curtos (16–24px Y), duração moderada (0.4–0.5s), easing customizado `[0.25, 0.1, 0.25, 1]`. Nada chama atenção para si mesmo.

### Animações por página

- **Home:** hero com cascade de mount (eyebrow → h1 → descritivo → CTAs, delays 0–0.3s); todas as seções com `AnimateIn` scroll-triggered; cards de ambientes, diferenciais e depoimentos com `StaggerList`
- **Empresa:** hero cascade; seção de números com `StaggerList` + `CounterNumber` (contagem animada para +15, +500, 100%, 5★); cards de diferenciais com stagger
- **Ambientes index:** hero cascade; grid de 8 categorias com `StaggerList`
- **Ambientes [slug]:** hero cascade; galeria wrapped com `AnimateIn`
- **Processo:** hero cascade; 6 etapas numeradas com `StaggerList` (efeito de entrada sequencial)
- **Contato:** hero cascade; duas colunas com `AnimateIn` (delay 0 e 0.1s)

### Schema.org BreadcrumbList (3B.2 — SEO)

Criado `BreadcrumbSchema.tsx` — componente server-side reutilizável que gera JSON-LD. Integrado em todas as páginas internas:

| Página | Níveis |
|---|---|
| `/empresa` | Home → Nossa Empresa |
| `/ambientes` | Home → Ambientes |
| `/ambientes/[slug]` | Home → Ambientes → [Nome do Ambiente] |
| `/processo` | Home → Como Trabalhamos |
| `/contato` | Home → Contato |

A página `/ambientes/[slug]` também ganhou breadcrumb visual (HTML `<nav aria-label="Breadcrumb">` com `<ol>`).

### Segurança — sanitização de inputs (3B.1)

Em `app/api/contato/route.ts`: adicionada função `sanitize(str)` que faz trim + strip de tags HTML (regex `/<[^>]*>/g`) com limite de 2000 chars. Aplicada em `nome`, `telefone` e `mensagem` antes de qualquer processamento/log.

### Acessibilidade — menu mobile (3B.1)

Em `components/Header.tsx`:
- `useRef<HTMLElement>` para referência do `<header>`
- Segundo `useEffect` que escuta `keydown` (Escape fecha menu) e `mousedown` (clique fora fecha menu)
- Listeners só ativados quando `menuOpen === true` (performance)
- `focus-visible:ring-2 focus-visible:ring-brand-accent` em todos os links de nav desktop

### npm audit

5 vulnerabilidades encontradas (1 moderate, 4 high) em `next@14.2.35` e `glob` (via eslint-config-next). O fix automático exige upgrade para `next@16.x` (breaking change). Registrado como tarefa na Fase 5 antes do deploy.

---

## Arquivos criados

- `components/MotionProvider.tsx`
- `components/AnimateIn.tsx`
- `components/StaggerList.tsx` (exporta StaggerList + StaggerItem)
- `components/CounterNumber.tsx`
- `components/BreadcrumbSchema.tsx`

## Arquivos modificados

- `app/layout.tsx` — `MotionProvider` wrappando o body
- `app/page.tsx` — reescrita com animações
- `app/empresa/page.tsx` — reescrita com animações + CounterNumber + BreadcrumbList
- `app/ambientes/page.tsx` — reescrita com animações + BreadcrumbList
- `app/ambientes/[slug]/page.tsx` — reescrita com animações + BreadcrumbList 3 níveis + breadcrumb visual
- `app/processo/page.tsx` — reescrita com animações + BreadcrumbList
- `app/contato/page.tsx` — reescrita com animações + BreadcrumbList
- `app/api/contato/route.ts` — sanitize() adicionado
- `components/Header.tsx` — Escape + outside click + focus-visible
- `docs/prd-e-arquitetura/plano-de-acao.md` — Fase 3B concluída, UptimeRobot em Fase 6, Sentry descartado

---

## Build

`npm run build` — 21 páginas geradas, zero erros de tipo.

---

## Próximo passo

Checkpoint com o cliente. Aguardar: logo, fotos, textos, depoimentos, canal de leads, GTM e domínio. Após receber: executar Fase 4.
