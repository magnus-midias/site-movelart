# Plano de ação — site-movelart

Data de referência: 2026-06-28

Estado atual: Fases 1, 2 e 3A concluídas. Fase 3B concluída (animações, segurança, acessibilidade, BreadcrumbList). Próxima: checkpoint com cliente → Fase 4.

---

## Fase 0 — Coleta de Assets e Validação (Pré-desenvolvimento)

**Objetivo:** Reunir todos os insumos do cliente. Assets não entregues não bloqueiam — usam placeholders integrados na Fase 4.

**Responsável:** Cristian (coordenação) + Cliente (entrega)

- [ ] Logo em alta resolução (SVG preferível; PNG aceitável)
- [ ] Fotos dos projetos organizadas por ambiente
- [x] Lista definitiva de categorias de ambientes — **confirmada:** cozinha, dormitório, closet, sala, sala-de-jantar, home-office, banheiro, área-de-serviço
- [ ] Textos reais: história da empresa, diferenciais
- [ ] Depoimentos de clientes (mínimo 3)
- [ ] **Definir canal de notificação de leads:** e-mail (Resend), Telegram Bot, ou ambos
- [ ] Confirmar e-mail de destino dos leads (se Resend)
- [ ] Confirmar Telegram para recebimento (se Bot)
- [x] Confirmar número de WhatsApp comercial — `(48) 9634-0636`
- [x] Confirmar redes sociais — Instagram: `@movelartoficial`
- [ ] Confirmar URL do domínio definitivo do cliente
- [ ] Fornecer container ID do GTM (se o cliente quiser Analytics)

**Status:** 🔄 Em andamento — pendente: canal de leads, logo, fotos, textos, domínio, GTM

---

## Fase 1 — Setup Local e Estrutura Base

**Objetivo:** Projeto Next.js funcionando localmente com estrutura completa de rotas e componentes globais.

- [x] Inicializar projeto: Next.js 14 com TypeScript + Tailwind + App Router
- [x] Estrutura de pastas App Router criada (todas as rotas)
- [x] Paleta de cores com tokens `brand.*` em `tailwind.config.ts`
- [x] Tipografia base via `next/font` (Open Sans, Yantramanav, Mulish)
- [x] `<Header>` sticky com logo, nav, ícones sociais, CTA
- [x] `<Footer>` com logo, nav, contato, crédito Magnus Mídias
- [x] `<WhatsAppButton>` flutuante com pulsação CSS
- [x] `<Logo />` com variantes dark/light (SVGs)
- [x] Layout raiz com Header + Footer + WhatsAppButton global
- [x] `.env.local` configurado

**Status:** ✅ Concluída — ver histórico `02-fase1-setup-e-estrutura-base-2026-06-11.md`

---

## Fase 2 — Desenvolvimento das Páginas

**Objetivo:** Todas as páginas com conteúdo placeholder e estrutura visual completa.

- [x] Home — Hero, grid de ambientes, diferenciais, depoimentos, localização, CTA final
- [x] Empresa — banner, números, história, diferenciais, localização, CTA
- [x] Ambientes index — grid de 8 categorias com link para slug
- [x] Ambientes slug — back button, galeria placeholder, CTA
- [x] Nosso Processo — grid de 6 etapas, CTA
- [x] Contato — layout 2 colunas (texto + formulário), mapa placeholder
- [x] Formulário simplificado: nome + telefone + mensagem
- [x] Sistema de botões padronizado (primário, secundário claro, secundário escuro)
- [x] Dados reais integrados: Instagram, WhatsApp, Magnus Mídias
- [x] Header scroll effect (transparente → sólido)

**Status:** ✅ Concluída — ver históricos `03`, `05`, `06`

---

## Fase 3A — SEO, Segurança e Acessibilidade Base

**Objetivo:** Conformidade de SEO técnico, segurança e acessibilidade antes das animações.

- [x] SEO técnico: Open Graph, Twitter Card, canonical em todas as páginas
- [x] `robots.txt` via `app/robots.ts`
- [x] Sitemap via `app/sitemap.ts`
- [x] Schema.org LocalBusiness em `/contato`
- [x] Schema.org Organization em `/`
- [x] HTTP Security Headers em `next.config.mjs`
- [x] `public/llms.txt` para crawlers de IA
- [x] `prefers-reduced-motion` em `globals.css`
- [x] Lightbox em `GaleriaAmbiente.tsx` (keyboard nav, aria-modal)
- [x] Validação Zod + rate limiting + honeypot no `POST /api/contato`
- [x] GTM condicional via `NEXT_PUBLIC_GTM_ID`
- [x] Skip link para acessibilidade por teclado
- [x] `id="main-content"` em todas as páginas
- [x] Mobile padding reduzido (`py-12 md:py-20`)

**Status:** ✅ Concluída — ver histórico `08-framework-institucional-qualidade-2026-06-27.md`

---

## Fase 3B — Animações, Segurança Avançada e BreadcrumbList

**Objetivo:** Animações premium, sanitização de inputs, acessibilidade de menu e Schema.org BreadcrumbList.

- [x] Instalar Framer Motion
- [x] `MotionProvider.tsx` — `MotionConfig reducedMotion="user"` global no layout
- [x] `AnimateIn.tsx` — fade-up com trigger por mount ou scroll (viewport)
- [x] `StaggerList.tsx` + `StaggerItem.tsx` — stagger de cards com 80ms de delay entre itens
- [x] `CounterNumber.tsx` — contagem animada ao entrar na viewport (ease-out-cubic 1.4s)
- [x] `BreadcrumbSchema.tsx` — componente de Schema.org BreadcrumbList reutilizável
- [x] Home — hero fade-up (mount), seções fade-up (scroll), cards stagger
- [x] Empresa — hero fade-up, counter animado nos números, cards stagger
- [x] Ambientes index — hero fade-up, cards stagger
- [x] Ambientes [slug] — hero fade-up, BreadcrumbList 3 níveis, breadcrumb visual
- [x] Processo — hero fade-up, etapas stagger
- [x] Contato — hero fade-up, colunas animadas com delay
- [x] Sanitização de inputs (`sanitize()`) em `route.ts` — trim + strip HTML
- [x] Header: Escape + clique fora fecha menu mobile
- [x] Header: `focus-visible:ring` nos links de nav desktop
- [x] Audit npm: vulnerabilidades registradas (Next.js 14.2.35 — upgrade recomendado na Fase 5)

**Status:** ✅ Concluída — ver histórico `09-fase-3b-animacoes-seguranca-2026-06-28.md`

---

## Checkpoint com cliente (antes da Fase 4)

**Objetivo:** Validar direção visual e coletar todos os assets antes de integrar conteúdo real.

- [ ] Apresentar site com animações ao cliente
- [ ] Coletar logo, fotos, textos, depoimentos
- [ ] Confirmar canal de leads (Resend / Telegram / ambos)
- [ ] Confirmar container ID do GTM
- [ ] Confirmar domínio
- [ ] Validar paleta de cores e tipografia

---

## Fase 4 — Assets Reais e Conteúdo Final

**Objetivo:** Substituir todos os placeholders pelos assets e textos reais do cliente.

- [ ] Logo real integrado no Header e Footer
- [ ] Favicon real em `app/favicon.ico` e variantes
- [ ] Fotos reais dos projetos integradas por categoria
- [ ] Nomes dos arquivos de imagem renomeados para SEO (ex: `cozinha-planejada-florianopolis.webp`)
- [ ] Textos reais: história da empresa, diferenciais, processo
- [ ] Depoimentos reais integrados
- [ ] Imagem `og-image.jpg` para Open Graph
- [ ] URL real do domínio em todos os metadados e Schema.org
- [ ] Endereço real para Google Maps embed e Schema.org
- [ ] Google Maps embed (após confirmar endereço)
- [ ] Integração de leads via Resend e/ou Telegram (após confirmar canal com cliente)
- [ ] GTM container integrado via `NEXT_PUBLIC_GTM_ID`
- [ ] Paleta de cores ajustada conforme identidade real (se fornecida)
- [ ] Validação visual completa com o cliente

**Status:** ⏳ Aguardando checkpoint com cliente

---

## Fase 5 — Testes Completos (Local)

**Objetivo:** Zero regressões antes do deploy.

**Segurança**
- [ ] Upgrade Next.js para versão mais recente (vulnerabilidades identificadas em 14.2.35)
- [ ] Re-executar `npm audit` após upgrade e confirmar zero high/critical

**Smoke Test**
- [ ] Todas as páginas carregam sem erro (7 rotas + 8 slugs de ambiente)
- [ ] Sem crash de componente no console
- [ ] Animações respeitam `prefers-reduced-motion`

**Teste de Navegação**
- [ ] Todos os links internos funcionando (sem 404)
- [ ] Links externos com `target="_blank" rel="noopener noreferrer"`
- [ ] Back button em páginas de categoria funcionando

**Teste de Responsividade**
- [ ] iPhone SE (375px)
- [ ] iPhone 14 (390px)
- [ ] Pixel 7 (412px)
- [ ] iPad (768px)
- [ ] Desktop 1280px
- [ ] Desktop 1920px
- [ ] Teste em dispositivo físico

**Teste de Formulário**
- [ ] Envio com dados reais → recebimento confirmado no canal do cliente
- [ ] Validação de campos obrigatórios (frontend)
- [ ] Feedback visual: loading, sucesso, erro
- [ ] Honeypot funcionando (bot não recebe confirmação)
- [ ] Rate limiting (mais de 5 envios/min por IP retorna 429)

**Teste do WhatsApp**
- [ ] Botão flutuante → mensagem pré-preenchida correta
- [ ] Ícone no header → mensagem correta
- [ ] Ícone no footer → mensagem correta

**Teste de Performance (Lighthouse mobile)**
- [ ] Performance ≥ 90
- [ ] SEO ≥ 95
- [ ] Accessibility ≥ 90
- [ ] Registrar scores no histórico

**Teste de SEO**
- [ ] Open Graph validado (og:debugger)
- [ ] Schema.org LocalBusiness válido (validator.schema.org)
- [ ] BreadcrumbList em páginas internas validado
- [ ] Sitemap.xml acessível
- [ ] Canonical correto

**Cross-Browser**
- [ ] Chrome (desktop e mobile)
- [ ] Safari (iOS)
- [ ] Firefox

**Status:** ⏳ Aguardando Fase 4

---

## Fase 6 — Publicação

**Objetivo:** Go live em produção com domínio do cliente.

- [x] Repositório GitHub criado: `magnus-midias/site-movelart`
- [x] Push inicial realizado (branch `main`)
- [ ] Criar projeto na Vercel e conectar ao GitHub
- [ ] Configurar variáveis de ambiente na Vercel (`NEXT_PUBLIC_WHATSAPP_NUMBER`, `RESEND_API_KEY`, `RESEND_TO_EMAIL` ou Telegram, `NEXT_PUBLIC_GTM_ID`)
- [ ] Configurar DNS do domínio do cliente
- [ ] Smoke test em produção
- [ ] Submeter sitemap.xml ao Google Search Console
- [ ] Solicitar indexação manual das páginas
- [ ] **Configurar UptimeRobot** — criar conta Magnus Mídias, monitorar URL do site, alertas para Cristian via e-mail/Telegram (gratuito, verificação a cada 5 min)
- [ ] Go live confirmado — avisar cliente

**Nota de infraestrutura:** A conta UptimeRobot fica com a Magnus Mídias (não com o cliente). Todos os outros serviços (Resend, GTM, GA4, domínio) são de propriedade do cliente; Magnus Mídias como admin/colaborador.

**Status:** ⏳ Aguardando Fase 5

---

## Fora de escopo (pós-MVP)

- Painel administrativo ou CMS para o cliente
- E-commerce ou orçamento online automatizado
- Upload de arquivos pelo lead
- Blog ou área editorial
- Integração com CRM externo
- Chat em tempo real
- Sentry (desnecessário para SSG com complexidade JS baixa — logs estruturados já implementados)
