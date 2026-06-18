# Plano de Ação — site-movelart

> Uma fase só começa quando a anterior está 100% concluída. Marcar como concluída aqui e criar registro em `docs/historico/`.

---

## Fase 0 — Coleta de Assets e Validação (Pré-desenvolvimento)

**Objetivo:** Reunir todos os insumos do cliente antes de iniciar o código. Assets não entregues não bloqueiam — usam placeholders integrados na Fase 4.

**Responsável:** Cristian (coordenação) + Cliente (entrega)

### Checklist

- [ ] Logo em alta resolução (SVG preferível; PNG aceitável)
- [ ] Fotos dos projetos organizadas por ambiente
- [ ] Lista definitiva de categorias de ambientes atendidos
- [ ] Textos: história da empresa, diferenciais
- [ ] Depoimentos de clientes (mínimo 3)
- [ ] Definir canal de notificação de leads: e-mail (Resend), Telegram Bot, ou ambos
- [ ] Confirmar e-mail de destino dos leads (se Resend)
- [ ] Confirmar Telegram para recebimento (se Bot)
- [ ] Confirmar número de WhatsApp comercial
- [ ] Confirmar redes sociais ativas e URLs dos perfis
- [ ] Confirmar URL do domínio já existente do cliente

**Critério de conclusão:** Todos os itens acima respondidos pelo cliente (mesmo que a resposta seja "use placeholder").

**Status:** 🔄 Em andamento — pendente: confirmar canal de leads (Resend/Telegram), e-mail do cliente, domínio

---

## Fase 1 — Setup Local e Estrutura Base

**Objetivo:** Projeto Next.js funcionando localmente com estrutura completa de rotas e componentes globais com placeholders.

### Checklist

- [ ] Inicializar projeto: `npx create-next-app@latest` com TypeScript + Tailwind + App Router
- [ ] Estrutura de pastas App Router criada (todas as rotas: `/`, `/empresa`, `/ambientes`, `/ambientes/[slug]`, `/processo`, `/contato`, `api/contato`)
- [ ] Paleta de cores provisória configurada em `tailwind.config.ts` (tokens do design system)
- [ ] Tipografia base configurada via `next/font`
- [ ] Componente `<Header>` sticky com placeholder de logo, nav, ícones sociais
- [ ] Componente `<Footer>` com placeholder de logo, nav, contato, ícones sociais, crédito Magnus Mídias
- [ ] Componente `<WhatsAppButton>` flutuante com pulsação CSS
- [ ] Componente `<Logo />` com fallback texto estilizado
- [ ] Layout raiz (`app/layout.tsx`) com Header + Footer + WhatsAppButton em todas as páginas
- [ ] Arquivo `.env.local` com variáveis de ambiente (sem valores reais ainda)
- [ ] `next.config.ts` configurado (domínios de imagem, etc.)
- [ ] Lint sem erros (`npm run lint`)

**Critério de conclusão:** `npm run dev` sobe sem erros, todas as rotas acessíveis com layout global aplicado.

**Status:** ✅ Concluída — ver histórico `02-fase1-setup-e-estrutura-base-2026-06-11.md`

---

## Fase 2 — Desenvolvimento das Páginas

**Objetivo:** Todas as páginas desenvolvidas com conteúdo placeholder e estrutura visual completa.

### Checklist

**Home (`/`)**
- [ ] Seção Hero: imagem/vídeo placeholder, tagline, CTA "Solicitar orçamento" (âncora) + WhatsApp
- [ ] Seção Ambientes em destaque: grid de categorias com foto placeholder e link para `/ambientes/[slug]`
- [ ] Seção Diferenciais: 3–4 cards com ícone, título e copy curto
- [ ] Seção Depoimentos: 3–5 cards de avaliação (placeholder)
- [ ] Seção CTA Final: faixa de conversão com botão de destaque

**Empresa (`/empresa`)**
- [ ] História, trajetória, valores (placeholder)
- [ ] Foto da equipe ou showroom (placeholder)
- [ ] Localização de atuação
- [ ] Diferenciais da empresa
- [ ] Dados básicos (tempo de mercado, projetos realizados — placeholder)

**Ambientes — index (`/ambientes`)**
- [ ] Grid de cards de categoria (foto placeholder + nome do ambiente)
- [ ] Cada card leva para `/ambientes/[slug]`

**Ambientes — categoria (`/ambientes/[slug]`)**
- [ ] Galeria de fotos placeholder
- [ ] `generateStaticParams` com as categorias base
- [ ] CTA "Quer um projeto como este? Fale conosco"

**Nosso Processo (`/processo`)**
- [ ] Timeline (horizontal desktop / vertical mobile) com 6 etapas
- [ ] Ícone + título + descrição por etapa

**Contato (`/contato`)**
- [ ] Formulário com validação frontend (Nome, Telefone/WhatsApp, E-mail, Ambiente, Mensagem)
- [ ] Informações de contato (WhatsApp, e-mail, endereço, horário)
- [ ] Placeholder de Google Maps embed
- [ ] Links para redes sociais

**Critério de conclusão:** Todas as páginas renderizando sem erros; navegação entre elas funcionando; layout responsivo mobile e desktop aplicado.

**Status:** ✅ Concluída — ver históricos `03-fase2-desenvolvimento-paginas-2026-06-11.md`, `05-ajuste-cores-ux-design-system-2026-06-11.md`, `06-ajustes-ux-dados-reais-formulario-2026-06-12.md`

> **Obs.:** O formulário de contato foi simplificado para nome + telefone + mensagem (sem e-mail e sem seleção de ambientes) por decisão do cliente em 2026-06-12.

---

## Fase 3 — Funcionalidades e Integrações

**Objetivo:** Todas as integrações funcionando com dados de teste.

### Checklist

- [ ] Route Handler `app/api/contato/route.ts` implementado
- [ ] Integração Resend: formulário → e-mail para o cliente (se canal definido)
- [ ] Integração Telegram Bot API: formulário → mensagem no Telegram do cliente (se canal definido)
- [ ] Teste de envio do formulário com dados reais em ambiente local
- [ ] WhatsApp flutuante: link com mensagem pré-preenchida funcionando
- [ ] Ícone WhatsApp no header: link funcionando
- [ ] Ícone WhatsApp no footer: link funcionando
- [ ] Lightbox de galeria nas páginas de ambiente (implementação leve, sem lib pesada)
- [ ] Google Maps embed na página de Contato
- [ ] SEO técnico: `<title>`, `<meta name="description">`, Open Graph e Twitter Card em todas as páginas
- [ ] Canonical tags em todas as páginas
- [ ] `robots.txt` configurado
- [ ] Sitemap via `next-sitemap` configurado
- [ ] Schema.org `LocalBusiness` na página de Contato
- [ ] Header scroll effect na Home (fundo transparente → sólido)

**Critério de conclusão:** Formulário enviando notificação real; todos os links e botões de WhatsApp funcionando; SEO validado com ferramenta (ex: validator.schema.org, og:debugger do Facebook).

**Status:** 🔄 Próxima fase — iniciar após confirmar canal de leads com o cliente (Resend e/ou Telegram Bot)

---

## Fase 4 — Assets Reais e Conteúdo Final

**Objetivo:** Substituir todos os placeholders pelos assets e textos reais do cliente; validação visual com o cliente.

### Checklist

- [ ] Logo real integrado no Header e Footer (componente `<Logo />` atualizado)
- [ ] Favicon real configurado em `app/favicon.ico` e variantes
- [ ] Fotos reais dos projetos integradas por categoria de ambiente
- [ ] Nomes dos arquivos de imagem renomeados para SEO (ex: `cozinha-planejada-florianopolis.webp`)
- [ ] Textos reais integrados: história da empresa, diferenciais, processo (validados com cliente)
- [ ] Depoimentos reais integrados
- [ ] Número de WhatsApp real no botão flutuante e ícones
- [ ] URLs reais das redes sociais no header e footer
- [ ] E-mail real de contato no footer e página de contato
- [ ] Endereço/região real na página de contato e Schema.org
- [ ] Google Maps embed com localização real do showroom
- [ ] Paleta de cores ajustada conforme identidade real do cliente (se fornecida)
- [ ] Meta titles e descriptions revisados com palavras-chave reais
- [ ] Crédito "Desenvolvido por Magnus Mídias" com URL real do site da Magnus
- [ ] Validação visual completa com o cliente (aprovação antes da Fase 5)

**Critério de conclusão:** Cliente aprovou visualmente; zero placeholders visíveis; todos os dados reais integrados.

**Status:** ⏳ Aguardando Fase 3

---

## Fase 5 — Testes Completos (Local)

**Objetivo:** Garantir qualidade total antes do deploy. Zero regressões aceitas.

### Checklist

**Smoke Test**
- [ ] Todas as páginas carregam sem erro (`/`, `/empresa`, `/ambientes`, `/ambientes/[slug]` × todas as categorias, `/processo`, `/contato`)
- [ ] Sem crash de componente no console

**Teste de Navegação**
- [ ] Todos os links internos funcionando (sem 404)
- [ ] Links externos com `target="_blank" rel="noopener noreferrer"`
- [ ] Breadcrumb/navegação de volta em páginas de categoria

**Teste de Responsividade (Chrome DevTools + dispositivo físico)**
- [ ] iPhone SE (375px)
- [ ] iPhone 14 (390px)
- [ ] Pixel 7 (412px)
- [ ] iPad (768px)
- [ ] Desktop 1280px
- [ ] Desktop 1920px
- [ ] Teste em dispositivo físico (Android ou iOS)

**Teste de Formulário**
- [ ] Envio com dados de teste → recebimento confirmado no canal do cliente
- [ ] Validação de campos obrigatórios (frontend)
- [ ] Feedback visual: loading, sucesso, erro
- [ ] Formulário utilizável com teclado virtual mobile

**Teste do WhatsApp**
- [ ] Botão flutuante → abre com mensagem pré-preenchida correta
- [ ] Ícone no header → abre com mensagem correta
- [ ] Ícone no footer → abre com mensagem correta

**Teste de Performance (Lighthouse mobile)**
- [ ] Performance ≥ 90
- [ ] SEO ≥ 95
- [ ] Accessibility ≥ 90
- [ ] Registrar scores no histórico

**Teste de SEO**
- [ ] Meta tags únicas em todas as páginas
- [ ] Open Graph: og:title, og:description, og:image em todas as páginas
- [ ] Sitemap.xml acessível
- [ ] Canonical correto em todas as páginas
- [ ] Schema.org LocalBusiness válido (validator.schema.org)

**Teste Cross-Browser**
- [ ] Chrome (desktop e mobile)
- [ ] Safari (iOS)
- [ ] Firefox

**Critério de conclusão:** Todos os itens acima marcados como aprovados. Nenhum item pendente ou com ressalva.

**Status:** ⏳ Aguardando Fase 4

---

## Fase 6 — Publicação

**Objetivo:** Go live em produção com domínio do cliente.

> Executar somente após aprovação completa da Fase 5.

### Checklist

- [ ] Criar repositório no GitHub (privado ou público — definir com cliente)
- [ ] Push do projeto para o repositório
- [ ] Criar conta/projeto na Vercel e conectar ao repositório GitHub
- [ ] Configurar variáveis de ambiente na Vercel (RESEND_API_KEY, TELEGRAM_BOT_TOKEN, etc.)
- [ ] Primeiro deploy automático via Vercel
- [ ] Configurar DNS do domínio do cliente para apontar para Vercel
- [ ] Aguardar propagação de DNS (pode levar até 48h)
- [ ] Smoke test rápido em produção (todas as páginas, formulário, WhatsApp)
- [ ] Submeter sitemap.xml ao Google Search Console
- [ ] Solicitar indexação manual das páginas no Search Console
- [ ] Go live confirmado — avisar cliente

**Critério de conclusão:** Site acessível pelo domínio do cliente em produção, formulário funcionando, Search Console configurado.

**Status:** ⏳ Aguardando Fase 5

---

## Fora de escopo (pós-MVP)

Não implementar nestes itens durante o desenvolvimento inicial:

- Painel administrativo ou CMS para o cliente
- E-commerce ou orçamento online automatizado
- Upload de arquivos pelo lead
- Blog ou área editorial
- Integração com CRM externo
- Chat em tempo real
- Google Analytics (pode entrar na manutenção mensal pós-go live)
