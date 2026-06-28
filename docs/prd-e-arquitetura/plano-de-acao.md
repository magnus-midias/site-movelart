# Plano de ação — site-movelart

Data de referência: 2026-06-27

Estado atual: Fases 1 e 2 concluídas. Fase 3 em andamento (SEO técnico parcialmente feito; leads e lightbox pendentes). Fase 0 bloqueada em items que dependem do cliente. Próxima: concluir Fase 3 (integração de leads, Google Maps, lightbox).

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

**Status:** 🔄 Em andamento — pendente: canal de leads, logo, fotos, textos, domínio

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

## Fase 3 — Funcionalidades e Integrações

**Objetivo:** Todas as integrações funcionando com dados de teste.

- [ ] **Integração de leads** — Resend e/ou Telegram Bot _(bloqueado: canal a confirmar com cliente)_
- [ ] **Lightbox** de galeria nas páginas de ambiente (sem lib pesada)
- [ ] **Google Maps embed** na página de Contato e Empresa _(bloqueado: endereço real pendente)_
- [x] SEO técnico: Open Graph, Twitter Card, canonical em todas as páginas
- [x] `robots.txt` via `app/robots.ts`
- [x] Sitemap via `app/sitemap.ts`
- [x] Schema.org LocalBusiness em `/contato`
- [x] Header scroll effect

**Pendentes que NÃO dependem de cliente:**
- [ ] Lightbox de galeria

**Status:** 🔄 Em andamento — SEO técnico concluído; leads e Google Maps aguardam cliente; lightbox pendente

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
- [ ] Paleta de cores ajustada conforme identidade real (se fornecida)
- [ ] Validação visual completa com o cliente

**Status:** ⏳ Aguardando Fase 3 e assets do cliente

---

## Fase 5 — Testes Completos (Local)

**Objetivo:** Zero regressões antes do deploy.

**Smoke Test**
- [ ] Todas as páginas carregam sem erro (7 rotas + 8 slugs de ambiente)
- [ ] Sem crash de componente no console

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
- [ ] Configurar variáveis de ambiente na Vercel
- [ ] Configurar DNS do domínio do cliente
- [ ] Smoke test em produção
- [ ] Submeter sitemap.xml ao Google Search Console
- [ ] Solicitar indexação manual das páginas
- [ ] Go live confirmado — avisar cliente

**Status:** ⏳ Aguardando Fase 5

---

## Fora de escopo (pós-MVP)

- Painel administrativo ou CMS para o cliente
- E-commerce ou orçamento online automatizado
- Upload de arquivos pelo lead
- Blog ou área editorial
- Integração com CRM externo
- Chat em tempo real
- Google Analytics (pode entrar na manutenção mensal pós-go live)
