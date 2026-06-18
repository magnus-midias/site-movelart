# Fase 2 — Desenvolvimento das páginas

- **Data:** 2026-06-11
- **Autor:** Claude
- **Escopo:** UI, conteúdo

## Contexto / Motivação

Execução da Fase 2 do plano de ação. Todas as páginas foram desenvolvidas com estrutura visual completa, layout responsivo (mobile-first), conteúdo placeholder realista e navegação funcional. Nenhum asset real do cliente foi utilizado.

## O que mudou

**Página Empresa (`app/empresa/page.tsx`) — construída do zero:**
- Banner com h1, tagline e subtítulo
- Seção de números (4 cards: anos de mercado, projetos, instalação própria, avaliação)
- Seção "Nossa história" com texto placeholder e foto placeholder
- Seção "O que nos diferencia" com 6 cards de diferenciais
- Seção "Onde atuamos" com mapa placeholder e lista de cidades
- CTA final com dois botões

**Formulário de contato — `components/ContactForm.tsx` (novo):**
- Client Component com `useState` para campos, erros e status
- Validação JS: nome obrigatório, telefone obrigatório com regex de formato
- Estados de envio: `idle` → `loading` → `success | error`
- Loading: spinner CSS no botão, desabilitado durante envio
- Sucesso: mensagem de confirmação substituindo o formulário
- Erro: mensagem de fallback com sugestão de WhatsApp
- Acessibilidade: `aria-invalid`, `aria-describedby`, `role="alert"`, `htmlFor`/`id` em todos os campos

**Página Contato (`app/contato/page.tsx`) — refatorada:**
- Usa `<ContactForm />` no lugar do form estático anterior
- Banner com h1
- Coluna de informações: endereço, telefone, e-mail, horário com ícones e links
- Card de WhatsApp direto com link e mensagem pré-preenchida
- Placeholder de Google Maps

**Página Processo (`app/processo/page.tsx`) — redesenhada:**
- Banner com h1 e subtítulo
- Timeline: linha vertical decorativa em mobile (CSS), grid 2 col md / 3 col lg em desktop
- Cards com hover e transição de borda
- CTA final "Agendar visita técnica"

**Página Ambientes index (`app/ambientes/page.tsx`) — melhorada:**
- Banner com h1
- Grid com seta → em cada card e hover de escala na imagem
- CTA inferior "Projeto personalizado"

**Página Ambientes slug (`app/ambientes/[slug]/page.tsx`) — melhorada:**
- `generateMetadata` dinâmico por slug
- Banner com breadcrumb de navegação acessível
- Galeria com `role="button"` + `tabIndex` nos placeholders (lightbox na Fase 3)
- CTA em faixa brand-accent com dois botões

**Home (`app/page.tsx`):**
- Metadata explícita adicionada

**Novos arquivos:**
- `app/not-found.tsx` — página 404 com CTA de retorno ao início e contato
- `.gitignore` — padrão Next.js + `.env*.local` bloqueado

## Impacto

- `npm run lint` passa sem erros ou warnings.
- Todas as 5 páginas públicas + 404 renderizam com layout responsivo completo.
- `ContactForm` faz `fetch` para `/api/contato` — integração real (Resend/Telegram) na Fase 3.
- Lightbox da galeria reservado para Fase 3.
- Google Maps embed reservado para Fase 3.
- Próximo passo: Fase 3 — funcionalidades e integrações (Resend, Telegram, lightbox, Maps, SEO técnico completo).
- Próximo número de histórico disponível: `04`.
