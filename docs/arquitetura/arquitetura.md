# Arquitetura — site-movelart

> Atualizar este arquivo sempre que a arquitetura mudar.

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
| Repositório | GitHub | Versionamento e portfólio |
| Imagens | Vercel Image Optimization | WebP automático, lazy loading, via componente `<Image>` do Next.js |

> ⚠️ GitHub e Vercel são criados apenas na Fase 6, após todos os testes locais aprovados.

---

## Estrutura de rotas (App Router)

```
app/
  layout.tsx              → layout raiz: Header + Footer + WhatsAppButton globais
  page.tsx                → Home (/)
  empresa/
    page.tsx              → Empresa (/empresa)
  ambientes/
    page.tsx              → Ambientes — index (/ambientes)
    [slug]/
      page.tsx            → Categoria de ambiente (/ambientes/cozinha, etc.)
  processo/
    page.tsx              → Nosso Processo (/processo)
  contato/
    page.tsx              → Contato (/contato)
  api/
    contato/
      route.ts            → Route Handler: recebe form, dispara Resend e/ou Telegram
```

### Categorias de ambientes (base inicial — validar com cliente)

| Slug | Nome exibido |
|---|---|
| `cozinha` | Cozinha |
| `dormitorio` | Dormitório |
| `closet` | Closet |
| `sala` | Sala |
| `escritorio` | Escritório Doméstico |
| `banheiro` | Banheiro |
| `area-de-servico` | Área de Serviço |

> Lista definitiva depende de confirmação do cliente (Fase 0).

---

## Componentes globais

### Header (sticky)
- Fixo no topo em todas as páginas durante toda a rolagem
- Logo à esquerda (componente `<Logo />` com fallback texto)
- Menu de navegação central
- Bloco direito: ícones de redes sociais + CTA de contato
- Mobile: menu hamburguer/drawer lateral; logo e ícones sociais visíveis no header recolhido
- Efeito de scroll opcional na Home: fundo transparente → sólido ao rolar

### Footer
- Logo (versão adequada ao fundo)
- Links de navegação rápida
- Bloco de contato: endereço, telefone, e-mail, WhatsApp
- Ícones de redes sociais (mesmos do header)
- Copyright + crédito "Desenvolvido por Magnus Mídias" (link para site da Magnus, `target="_blank" rel="noopener noreferrer"`)

### WhatsApp Flutuante
- Presente em todas as páginas, fixo no canto inferior direito
- Ícone com pulsação suave (CSS)
- Mensagem pré-preenchida: "Olá! Vim pelo site e gostaria de saber mais sobre móveis planejados."
- `z-index` acima de todos os elementos, incluindo header fixo
- Função distinta do ícone WhatsApp do header (coexistem)

---

## Formulário de contato e notificação

**Campos:**
- Nome completo (obrigatório)
- Telefone/WhatsApp (obrigatório)
- E-mail (opcional)
- Ambiente de interesse — select (opcional)
- Mensagem livre (opcional)

**Fluxo:**
```
Usuário submete form
  → Route Handler (app/api/contato/route.ts)
    → Resend: e-mail para cliente (se configurado)
    → Telegram Bot API: mensagem no Telegram do cliente (se configurado)
  → Resposta: sucesso ou erro para o frontend
```

**Canal de notificação:** a definir com cliente (e-mail, Telegram ou ambos).

**Variáveis de ambiente necessárias:**
```
RESEND_API_KEY=
RESEND_TO_EMAIL=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
NEXT_PUBLIC_WHATSAPP_NUMBER=
```

---

## Rendering strategy

- **SSG (Static Site Generation)** para todas as páginas — HTML pré-renderizado, sem espera de servidor, indexável pelo Googlebot
- Páginas de ambiente (`/ambientes/[slug]`) geradas estaticamente via `generateStaticParams`
- Route Handler de contato: único endpoint dinâmico (API)

---

## SEO

- Meta title e meta description únicos por página
- Open Graph tags completas (título, descrição, imagem de preview)
- Twitter Card tags
- Sitemap.xml via `next-sitemap`
- Canonical tags em todas as páginas
- `robots.txt` configurado
- Schema.org `LocalBusiness` na página de Contato
- NAP (Name, Address, Phone) consistente em todas as páginas

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

**Práticas obrigatórias:**
- Todas as imagens via `<Image>` do Next.js com `width`, `height` e `sizes` explícitos
- Fontes via `next/font` com `display: swap`
- Scripts de terceiros via `next/script` com `strategy="lazyOnload"`
- Animações em CSS puro ou Framer Motion com lazy import
- Sem Bootstrap, Material UI ou qualquer lib de UI pesada

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
| Libs de ícones | `lucide-react` ou SVGs inline | Sem dependência de CDN externo; tree-shaking nativo |
| Deploy | Somente após Fase 5 concluída | Evitar exposição de site incompleto; garantir qualidade antes do go live |

---

## Lacunas conhecidas / pendências

- [ ] Nome oficial da empresa (para título do site, NAP, Schema.org)
- [ ] Domínio existente do cliente
- [ ] Lista definitiva de categorias de ambientes (Fase 0)
- [ ] Canal de notificação de leads: e-mail, Telegram ou ambos (Fase 0)
- [ ] Número de WhatsApp comercial (Fase 0)
- [ ] Logo em alta resolução (Fase 0 / integração na Fase 4)
- [ ] Fotos dos projetos por ambiente (Fase 0 / integração na Fase 4)
- [ ] E-mail de destino dos leads (Fase 0)
- [ ] Redes sociais ativas e URLs dos perfis (Fase 0)
- [ ] Site da Magnus Mídias (URL para o crédito no footer)
