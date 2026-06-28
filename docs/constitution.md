# Constitution — site-movelart (Movelart)

Versão: 1.0 | Data: 2026-06-27

Este documento define os princípios governantes do projeto. É lido pelo agente **antes de qualquer tarefa** — antes do PRD, antes do histórico, antes de qualquer spec. Muda raramente e só com versão incrementada e motivo documentado.

Diferença do PRD: o PRD diz *o quê* construir. A constitution diz *como* construir — os princípios que nunca são violados.

---

## Princípios invioláveis

- **Mobile-first** em toda decisão de layout — o layout base (sem prefixo de breakpoint Tailwind) é sempre para viewport mobile. Breakpoints progressivos: `sm:` → `md:` → `lg:` → `xl:`.
- **WCAG AA obrigatório** — contraste mínimo 4,5:1, navegação por teclado em todos os elementos interativos, HTML semântico correto (`header`, `nav`, `main`, `footer`). `h1` único por página.
- **SSG em todas as páginas** — Static Site Generation via Next.js App Router. Sem server-side rendering desnecessário. O único endpoint dinâmico é `app/api/contato/route.ts`.
- **Sem libs de UI pesadas** — somente Tailwind CSS. Proibido Bootstrap, Material UI, Chakra, shadcn ou qualquer lib de componentes não aprovada.
- **Sem over-engineering** — nenhuma abstração não exigida pelo escopo atual. Site institucional: componentes simples, sem state management global, sem rotas protegidas.
- **SEO técnico desde o início** — meta tags, Open Graph, canonical, robots.txt, sitemap em todas as páginas antes do deploy. Schema.org LocalBusiness na página de Contato.
- **Área de toque mínima de 44×44px** em todos os elementos interativos (padrão Apple/Google). Obrigatório em botões, ícones de rede social e links de navegação mobile.

---

## Stack aprovada

| Camada | Tecnologia | Observação |
|---|---|---|
| Framework | Next.js 14+ (App Router) | SSG nativo, roteamento por arquivo, `generateStaticParams` |
| UI | React 18 + TypeScript | Padrão de mercado; tipagem estática obrigatória |
| Estilização | Tailwind CSS | Mobile-first nativo; purge automático em build |
| E-mail | Resend via Route Handler | Gratuito até 3.000 e-mails/mês |
| Notificação alternativa | Telegram Bot API | _(a confirmar com cliente)_ |
| Hospedagem | Vercel (free tier) | Deploy automático via Git |
| Repositório | GitHub | `magnus-midias/site-movelart` |
| Imagens | Vercel Image Optimization | Via `<Image>` do Next.js com `width`, `height` e `sizes` explícitos |
| Fontes | Google Fonts via `next/font` | `display: swap` obrigatório |

---

## Proibido sem aprovação explícita

- Novas dependências de UI (Material UI, Bootstrap, Chakra, Radix etc.)
- Chaves de API ou secrets em variáveis públicas (client-side)
- `console.log` em produção
- Deploy antes da Fase 5 (testes completos) estar 100% concluída
- Mudança de stack sem registro no histórico e aprovação do Cristian
- Imagens sem `width` e `height` explícitos (causa CLS)
- Links externos sem `rel="noopener noreferrer"`

---

## Padrões de qualidade

- LCP ≤ 2,5s no mobile (medir com PageSpeed Insights antes do deploy)
- CLS ≤ 0,1
- INP ≤ 200ms
- Lighthouse Performance (mobile) ≥ 90
- Lighthouse SEO ≥ 95
- Lighthouse Accessibility ≥ 90
- Build TypeScript sem warnings
- `npm run lint` sem erros antes de qualquer commit relevante

---

## Governança

Ordem de leitura obrigatória antes de qualquer tarefa:

1. **Este arquivo** (`docs/constitution.md`) — princípios invioláveis
2. `docs/prd-e-arquitetura/instrucoes.md` — regras de trabalho e histórico
3. `docs/historico/` — em ordem numérica crescente
4. `docs/prd-e-arquitetura/product-requirements-document.md` — visão do produto
5. `docs/prd-e-arquitetura/arquitetura.md` — decisões técnicas
6. `docs/design-system/MASTER.md` — apenas se a tarefa tiver impacto visual

Regra de alteração desta constitution:
- Só muda com versão incrementada (1.0 → 1.1 → 2.0)
- Toda mudança deve registrar: o que mudou, por que, data
- Mudança de stack ou princípio: aprovação explícita do Cristian antes de executar

---

## Histórico de versões

| Versão | Data | Mudança |
|---|---|---|
| 1.0 | 2026-06-27 | Criação durante migração para padrão novo de docs |
