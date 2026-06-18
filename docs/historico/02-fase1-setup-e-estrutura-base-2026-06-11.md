# Fase 1 — Setup local e estrutura base

- **Data:** 2026-06-11
- **Autor:** Claude
- **Escopo:** arquitetura, config

## Contexto / Motivação

Execução da Fase 1 do plano de ação. Projeto Next.js inicializado e toda a estrutura base criada localmente: rotas, componentes globais, tokens de design e layout raiz. Nenhum asset real do cliente foi utilizado — todos os elementos visuais são placeholders.

## O que mudou

**Projeto Next.js 14 inicializado:**
- `package.json`, `tsconfig.json`, `next.config.mjs`, `postcss.config.mjs`
- `node_modules/` com dependências instaladas

**Configuração:**
- `tailwind.config.ts` — tokens de design (cores `brand.*`, border-radius, container, animação `whatsapp-pulse`)
- `app/globals.css` — reset base, background e cor padrão, scroll suave, `font-size: 16px` mínimo
- `.env.local` — variáveis de ambiente com placeholders (WhatsApp, Resend, Telegram)
- `.eslintrc.json` — ESLint configurado com `next/core-web-vitals`

**Layout raiz (`app/layout.tsx`):**
- Tipografia provisória: Inter via `next/font/google` com `display: swap` e variable `--font-sans`
- Metadata base: title template, description, metadataBase, Open Graph locale
- Header + Footer + WhatsAppButton aplicados globalmente
- `lang="pt-BR"` no HTML

**Componentes globais (`components/`):**
- `Logo.tsx` — placeholder com box colorido + texto "Movelart"; aceita variante `dark | light`
- `Header.tsx` — sticky, nav desktop, drawer mobile, ícones sociais (Instagram + WhatsApp), CTA "Solicitar orçamento"; area de toque mínima 44×44px
- `Footer.tsx` — 3 colunas (logo/tagline/sociais, nav, contato), barra inferior com copyright e crédito Magnus Mídias
- `WhatsAppButton.tsx` — fixo canto inferior direito, SVG inline, animação `whatsapp-pulse`, mensagem pré-preenchida via env

**Páginas (`app/`):**
- `page.tsx` — Home com Hero, grid de ambientes, diferenciais (4 cards), depoimentos (3 placeholders), CTA final
- `empresa/page.tsx` — esqueleto com h1 e placeholder
- `ambientes/page.tsx` — grid de cards com 7 categorias base e fotos placeholder
- `ambientes/[slug]/page.tsx` — galeria placeholder (6 fotos), `generateStaticParams` com slugs base, CTA de contato
- `processo/page.tsx` — 6 etapas em cards responsivos (coluna mobile, linha desktop)
- `contato/page.tsx` — formulário completo (5 campos), informações de contato, placeholder de mapa
- `api/contato/route.ts` — Route Handler POST esqueleto (integração Resend/Telegram reservada para Fase 3)

## Impacto

- `npm run lint` passa sem erros ou warnings.
- `npm run dev` deve subir o projeto em `localhost:3000` com todas as rotas acessíveis.
- Nenhum dado real do cliente está em produção — todos os contatos, URLs e imagens são placeholders.
- Próximo passo: Fase 2 — desenvolvimento visual das páginas com conteúdo placeholder definitivo e layout responsivo detalhado.
- Variáveis de ambiente a preencher na Fase 3 (Resend, Telegram) e quando o cliente confirmar o WhatsApp (Fase 0).
- Próximo número de histórico disponível: `03`.
