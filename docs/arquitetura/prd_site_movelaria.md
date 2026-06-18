# PRD — Site Institucional para Movelaria de Móveis Planejados

**Versão:** 1.0  
**Data:** Junho/2026  
**Responsável pelo projeto:** Cristian Dornelles  
**Contexto:** Projeto acadêmico (ADS) + entrega real para cliente  
**Status:** Em definição — aguarda coleta de assets e lista de ambientes

---

## 1. Visão Geral do Projeto

### 1.1 Descrição

Desenvolvimento de um site institucional multi-página para uma empresa de móveis planejados localizada na Grande Florianópolis (SC). O site tem dupla função: ser o projeto prático da disciplina de ADS e entregar valor real ao cliente, que não possui presença digital própria atualmente.

### 1.2 Objetivos

- Apresentar a empresa, seus diferenciais e o portfólio de projetos realizados
- Gerar leads qualificados via formulário de contato e botão de WhatsApp
- Estabelecer presença digital profissional e indexável no Google (SEO local)
- Servir como base para manutenção e evolução mensal contratada pelo cliente

### 1.3 Público-Alvo

Pessoas físicas da região de Florianópolis e Grande Florianópolis que estejam planejando reformas, mudanças ou construindo imóvel novo e têm interesse em móveis planejados para ambientes residenciais.

**Perfil típico do visitante:**
- Classe A/B alta — projetos residenciais completos com ticket médio entre R$200k e R$300k
- Faixa etária 30–55 anos, proprietários de imóveis (apartamentos, casas em condomínio)
- Perfil exigente: valoriza qualidade de acabamento, projeto personalizado e atendimento consultivo
- Está comparando fornecedores, mas não necessariamente pelo menor preço — credibilidade e portfólio pesam mais que valor
- Chega ao site via Google (busca orgânica local), indicação de conhecido ou referência de construtora/arquiteto
- Decisão de compra tem ciclo longo (meses) — o site precisa gerar confiança, não apenas capturar contato

---

## 2. Escopo do Produto

### 2.1 O que está incluído (IN SCOPE)

- Site multi-página com navegação entre seções
- Portfólio de projetos por categoria de ambiente
- Formulário de contato com notificação ao cliente (e-mail via Resend ou Telegram Bot — a definir com cliente)
- Botão de WhatsApp flutuante com mensagem pré-preenchida
- Página de contato com localização e dados da empresa
- SEO robusto e competitivo (técnico + semântico + local) — não apenas meta tags básicas
- Design responsivo (mobile-first)
- Deploy em produção com domínio já existente do cliente

### 2.2 O que não está incluído (OUT OF SCOPE)

- Painel administrativo ou CMS para atualização autônoma pelo cliente
- E-commerce ou orçamento online automatizado
- Upload de arquivos pelo lead (plantas, referências visuais)
- Blog ou área de conteúdo editorial
- Integração com CRM externo
- Chat em tempo real

---

## 3. Arquitetura de Páginas

### Estrutura de Navegação

```
Home (/)
├── Empresa (/empresa)
├── Ambientes (/ambientes)
│   ├── [categoria] (/ambientes/cozinha)
│   ├── [categoria] (/ambientes/dormitorio)
│   ├── [categoria] (/ambientes/sala)
│   └── ... (demais categorias — a definir com cliente)
├── Nosso Processo (/processo)
└── Contato (/contato)
```

> **Nota:** A seção de Depoimentos está incorporada à Home como seção fixa — não é uma página separada.

> ⚠️ **Dependência externa:** A lista definitiva de categorias de ambientes deve ser coletada junto ao cliente antes do início do desenvolvimento. Usar como base inicial: Cozinha, Dormitório, Closet, Sala, Escritório Doméstico, Banheiro, Área de Serviço.

---

## 4. Especificação de Páginas

### 4.1 Home (`/`)

**Objetivo:** Capturar atenção, comunicar posicionamento e direcionar para ação.

**Seções:**

| Seção | Conteúdo | Observações |
|---|---|---|
| Hero | Imagem/vídeo de destaque, tagline, CTA principal | CTA: "Solicitar orçamento" (âncora ao form) + WhatsApp |
| Ambientes em destaque | Grid de categorias com foto e link para página de ambiente | Navegação visual, estilo Imobal |
| Diferenciais | 3–4 cards com ícone (ex: projeto 3D incluso, instalação própria, garantia) | Copy curto e objetivo |
| Depoimentos | 3–5 avaliações de clientes reais | Pode ser print estilizado do Google |
| CTA Final | Faixa de conversão com botão para formulário ou WhatsApp | Cor de destaque |

---

### 4.2 Empresa (`/empresa`)

**Objetivo:** Gerar confiança e humanizar a empresa para um público exigente de alto padrão.

**Conteúdo:**
- História da empresa (fundação, trajetória, valores)
- Foto da equipe ou do showroom
- Localização de atuação (Grande Floripa / SC)
- Diferenciais da empresa (o que a diferencia de concorrentes)
- Dados básicos: tempo de mercado, número de projetos realizados (se disponível)

> **Nota de posicionamento:** Por se tratar de um público de alto padrão, o tom desta página deve ser consultivo e sofisticado — não apenas descritivo. Destacar experiência, exclusividade dos projetos e qualidade de acabamento.

---

### 4.3 Ambientes (`/ambientes` e `/ambientes/[categoria]`)

**Objetivo:** Apresentar o portfólio de forma visual e organizada por tipo de ambiente.

**Página index (`/ambientes`):**
- Grid com cards de categoria (foto + nome do ambiente)
- Cada card leva para a página específica daquele ambiente

**Página de categoria (`/ambientes/[slug]`):**
- Galeria de fotos dos projetos realizados naquele ambiente
- Lightbox para abrir foto em destaque
- CTA lateral ou inferior: "Quer um projeto como este? Fale conosco"

> ⚠️ **Dependência externa:** As fotos reais dos projetos precisam ser organizadas e entregues pelo cliente antes do desenvolvimento da galeria. O PRD prevê uso de imagens placeholder durante o desenvolvimento, substituídas na etapa de integração de assets.

---

### 4.4 Nosso Processo (`/processo`)

**Objetivo:** Reduzir objeções e educar o lead sobre como funciona a compra.

**Etapas sugeridas (validar com cliente):**
1. Visita técnica e medição do ambiente
2. Desenvolvimento do projeto 3D
3. Aprovação e ajustes
4. Produção em fábrica
5. Entrega e instalação
6. Pós-venda e garantia

**Formato:** Timeline visual horizontal ou vertical com ícone, título e descrição curta por etapa.

---

### 4.5 Contato (`/contato`)

**Objetivo:** Converter visitante em lead.

**Componentes:**

- **Formulário de contato:**
  - Nome completo (obrigatório)
  - Telefone / WhatsApp (obrigatório)
  - E-mail (opcional)
  - Ambiente de interesse (select: Cozinha, Dormitório, etc.)
  - Mensagem livre (opcional)
  - Botão: "Enviar mensagem"

- **Notificação ao cliente após envio do formulário:**

  > ⚠️ **Decisão pendente com cliente:** definir canal de notificação preferido.

  | Opção | Como funciona | Indicado quando |
  |---|---|---|
  | **E-mail (Resend)** | Lead submetido → e-mail automático com os dados chegam na caixa do cliente | Cliente prefere e-mail, já acompanha caixa regularmente |
  | **Telegram Bot** | Lead submetido → mensagem instantânea no Telegram do cliente com os dados | Cliente usa Telegram, quer notificação em tempo real no celular |

  Ambas as integrações são viáveis tecnicamente no Next.js via Route Handler. A opção Telegram usa a API oficial do Telegram Bot — sem custo, sem dependência de terceiros pagos. As duas podem coexistir (notificação dupla: e-mail + Telegram), se o cliente quiser redundância.

- **Informações de contato:**
  - WhatsApp (link direto com mensagem pré-preenchida)
  - E-mail
  - Endereço / região de atendimento
  - Horário de funcionamento

- **Mapa:** Embed do Google Maps com localização do showroom ou área de atendimento

- **Redes sociais:** Links para Instagram e demais perfis ativos

---

## 5. Componentes Globais

### 5.1 Header

O header é **fixo (sticky)** — permanece visível no topo da página durante toda a rolagem, em todas as páginas do site. Isso garante acesso permanente à navegação, às redes sociais e ao CTA de contato sem que o usuário precise voltar ao topo.

**Composição do header:**

- Logo da empresa (SVG ou PNG de alta resolução — a obter com cliente), alinhado à esquerda, com link para Home
- Menu de navegação com links para todas as páginas
- Bloco à direita com ícones de redes sociais + CTA de contato

**Ícones de redes sociais no header:**
- Exibidos à direita do menu de navegação, presentes em todas as páginas
- Ícones: Instagram, WhatsApp e demais redes ativas do cliente (a confirmar com ele)
- Cada ícone abre o perfil ou contato correspondente em nova aba
- Tamanho com área de toque mínima de 44×44px (obrigatório para mobile)
- Implementação via `lucide-react` ou SVGs inline — sem dependência de CDN externo

**Comportamento mobile:**
- Menu de navegação recolhido em ícone hamburguer
- Ao abrir o menu mobile (drawer lateral), os ícones de redes sociais também aparecem dentro do menu aberto
- Logo e ícones de redes sociais permanecem visíveis no header mesmo com menu recolhido

**Efeito de scroll (opcional):**
- Header com fundo transparente no topo da Home, com transição para fundo sólido ao rolar — aumenta impacto visual do hero sem comprometer a usabilidade

### 5.2 Footer

O footer aparece em todas as páginas e replica os ícones de redes sociais do header, garantindo que o usuário sempre tenha acesso aos canais de contato independentemente de onde esteja na página.

**Composição do footer:**

- Logo da empresa (versão clara ou escura conforme fundo do footer)
- Links de navegação rápida (todas as páginas do site)
- Bloco de contato: endereço, telefone, e-mail, WhatsApp
- **Ícones de redes sociais** — mesmos do header (Instagram, WhatsApp e demais redes ativas), com links para os perfis em nova aba
- Texto de copyright (ex: "© 2026 [Nome da empresa] — Todos os direitos reservados")
- Crédito ao desenvolvedor: "Desenvolvido por **Magnus Mídias**" — com o nome clicável abrindo o site da Magnus em nova aba

### 5.3 Botão WhatsApp Flutuante

- Presente em **todas as páginas**, fixo no canto inferior direito durante toda a rolagem
- Ícone do WhatsApp com efeito de pulsação suave (attention grabber sem ser intrusivo)
- Ao clicar, abre o WhatsApp com mensagem pré-preenchida contextual
- Mensagem padrão: "Olá! Vim pelo site e gostaria de saber mais sobre móveis planejados."
- Em mobile, posicionado de forma a não sobrepor conteúdo crítico (formulários, botões de ação)
- Deve ter `z-index` suficiente para ficar acima de todos os outros elementos, incluindo o header fixo
- **Não substituído** pelo ícone do WhatsApp no header — os dois coexistem com funções distintas: o do header é parte da identidade visual e navegação; o flutuante é um CTA de conversão sempre acessível

---

## 6. Stack Tecnológica

### 6.1 Frontend

| Tecnologia | Função | Justificativa |
|---|---|---|
| Next.js 14+ (App Router) | Framework React principal | SEO nativo via SSR/SSG, roteamento por arquivo, performance |
| React 18 | UI component library | Padrão de mercado, alinhado com stack de estudo do Cristian |
| TypeScript | Tipagem estática | Qualidade de código, melhor para portfolio e faculdade |
| Tailwind CSS | Estilização | Agilidade, consistência, mobile-first nativo |

### 6.2 Envio de Formulário

| Tecnologia | Função | Justificativa |
|---|---|---|
| Resend | Envio de e-mail via API | Gratuito até 3.000 e-mails/mês, integração simples com Next.js via Route Handler |

### 6.3 Infraestrutura

| Componente | Solução | Justificativa |
|---|---|---|
| Hospedagem | Vercel (free tier) | Integração nativa com Next.js, deploy automático via Git, HTTPS automático |
| Repositório | GitHub | Versionamento, portfólio, integração com Vercel |
| Domínio | Já existente (cliente) | Apenas configurar DNS para apontar para Vercel |
| Imagens | Vercel Image Optimization | Next.js já usa automaticamente via componente `<Image>` |

---

## 7. Requisitos Técnicos

### 7.1 Performance e Leveza

O site deve ser **rápido e leve como requisito não-negociável**, não como otimização posterior. A maioria dos visitantes chegará via mobile em conexões 4G — cada segundo a mais de carregamento representa perda direta de lead.

**Metas de Core Web Vitals (medidas no PageSpeed Insights em mobile):**

| Métrica | Alvo | Descrição |
|---|---|---|
| LCP (Largest Contentful Paint) | ≤ 2,5s | Tempo até o maior elemento visível carregar |
| FID / INP (Interação) | ≤ 200ms | Tempo de resposta a interações do usuário |
| CLS (Cumulative Layout Shift) | ≤ 0,1 | Estabilidade visual — sem elementos "pulando" |
| Lighthouse Performance (mobile) | ≥ 90 | Score geral de performance |
| Lighthouse SEO | ≥ 95 | Score de otimização para buscadores |

**Práticas obrigatórias de performance:**

- Todas as imagens usam o componente `<Image>` do Next.js — WebP automático, lazy loading nativo, tamanho responsivo via `sizes`
- Nenhuma imagem carregada sem dimensões explícitas (`width` e `height`) — evita CLS
- Fontes carregadas via `next/font` com `display: swap` — elimina FOUT e layout shift
- Zero bibliotecas de UI pesadas (sem Bootstrap, sem Material UI) — apenas Tailwind, que purga CSS não utilizado em build
- Animações e efeitos visuais implementados com CSS puro ou Framer Motion com `lazy` — nunca bloquear o thread principal
- Scripts de terceiros (Google Analytics, WhatsApp widget) carregados com `strategy="lazyOnload"` via `next/script`
- Static Site Generation (SSG) para todas as páginas — HTML pré-renderizado, sem espera de servidor
- Sem dependências desnecessárias no `package.json` — cada lib adicionada deve ter justificativa clara

### 7.2 Mobile-First (Princípio Central de Design)

> **O site é primariamente um site mobile que também funciona no desktop — não o contrário.**

Todo o desenvolvimento segue a abordagem mobile-first:

- O layout base (sem prefixo de breakpoint no Tailwind) é sempre o layout mobile
- Breakpoints aplicados de forma progressiva: `sm:` → `md:` → `lg:` → `xl:`
- Breakpoints definidos:

| Breakpoint | Largura | Contexto |
|---|---|---|
| base | < 640px | Smartphones (prioridade máxima) |
| `sm:` | ≥ 640px | Smartphones grandes |
| `md:` | ≥ 768px | Tablets |
| `lg:` | ≥ 1024px | Desktops e notebooks |
| `xl:` | ≥ 1280px | Telas largas |

**Requisitos específicos de mobile:**

- Todos os botões e elementos interativos com área de toque mínima de 44×44px (padrão Apple/Google)
- Formulário de contato 100% utilizável em teclado virtual (sem campos sobrepostos pelo teclado)
- Menu de navegação mobile com drawer lateral ou menu hamburguer — nunca menu horizontal colapsado
- Galeria de portfólio com scroll horizontal ou grid adaptado em mobile
- Nenhum elemento com `overflow: hidden` que esconda conteúdo crítico em telas pequenas
- Textos com tamanho mínimo de 16px em mobile (evita zoom automático do iOS)
- Botão de WhatsApp flutuante posicionado para não sobrepor conteúdo importante em mobile

**Testes obrigatórios antes do go live:**

- Chrome DevTools: simulação de iPhone SE (menor viewport comum), iPhone 14, Pixel 7
- Teste real em dispositivo físico mobile (Android ou iOS)
- PageSpeed Insights rodado na versão mobile do site com score registrado

### 7.3 SEO — Robusto e Competitivo

O SEO não é camada de finalização — é estrutura. Implementado desde o início para que o site seja competitivo nos mecanismos de busca na região de Florianópolis/SC.

**SEO Técnico:**
- Meta title e meta description únicos, otimizados por palavra-chave, em cada página
- Open Graph tags completas para compartilhamento em redes sociais (título, descrição, imagem de preview)
- Twitter Card tags
- Sitemap.xml gerado automaticamente via `next-sitemap` e submetido ao Google Search Console
- Canonical tags em todas as páginas para evitar conteúdo duplicado
- `robots.txt` configurado corretamente
- Estrutura de URLs limpa, semântica e sem parâmetros desnecessários
- Sem conteúdo bloqueado por JavaScript crítico — SSG garante HTML indexável pelo Googlebot

**SEO Semântico:**
- Hierarquia de headings correta e única por página (`h1` → `h2` → `h3`)
- Atributos `alt` descritivos e otimizados para todas as imagens (não apenas para acessibilidade — também indexados pelo Google Imagens)
- Textos das páginas escritos com intenção de busca em mente (não apenas copy bonito)
- Nomes dos arquivos de imagem descritivos (ex: `cozinha-planejada-florianopolis.webp` — não `IMG_0042.jpg`)

**SEO Local (prioridade máxima para esse negócio):**
- Structured data Schema.org `LocalBusiness` na página de Contato com: nome, endereço, telefone, horário, área de atendimento, URL, logo
- NAP (Name, Address, Phone) consistente em todas as páginas onde aparece
- Palavras-chave locais incorporadas naturalmente nos textos: "móveis planejados Florianópolis", "móveis planejados São José SC", "móveis planejados Grande Floripa"
- Integração com Google Business Profile recomendada ao cliente (fora do escopo do site, mas orientação entregue)

**Monitoramento pós-lançamento (orientação ao cliente):**
- Submissão ao Google Search Console logo após go live
- Indexação das páginas solicitada manualmente no Search Console
- Acompanhamento de posicionamento nos primeiros 60–90 dias

### 7.4 Acessibilidade

- Atributos `alt` descritivos em todas as imagens (não apenas `alt=""`)
- Contraste de cores mínimo 4,5:1 para texto normal (WCAG AA)
- Navegação por teclado funcional em todos os elementos interativos
- Semântica HTML correta: `<header>`, `<nav>`, `<main>`, `<footer>`, hierarquia de headings (`h1` único por página)

---

## 8. Identidade Visual

A empresa possui logo e cores que costuma utilizar, mas **não tem um branding formalmente definido**. Isso não bloqueia o desenvolvimento — a estratégia adotada é a seguinte:

**Estratégia de desenvolvimento com identidade parcial:**

O site será construído do início ao fim com uma identidade visual provisória funcional (paleta e tipografia definidas pelo dev com base no posicionamento da empresa). Os elementos de logo, imagens e eventuais ajustes de cor do cliente são integrados na Fase 4, sem necessidade de refatoração estrutural.

**Placeholders previstos:**
- Logo: componente `<Logo />` com fallback para texto estilizado com o nome da empresa — substituído pelo arquivo real quando disponível
- Fotos de projetos: imagens placeholder com as dimensões corretas (aspect ratio preservado) — substituídas pelos assets reais na Fase 4
- Cores: paleta provisória de alto padrão (tons de off-white, cinza antracite, dourado/bronze suave) — ajustada conforme cores reais do cliente quando fornecidas

**O que coletar com o cliente (sem urgência, não bloqueia):**
- Logo em alta resolução (vetorial SVG preferível)
- Paleta de cores que costuma usar (pode ser print, referência, hex)
- Referências visuais de sites que ele gosta além do Imobal

**Paleta provisória (fallback):** Off-white (#F5F0EB), cinza antracite (#2C2C2C), tom de madeira/bronze (#8B6F47) — transmite sofisticação e é coerente com o produto.

---

## 9. Fases de Desenvolvimento

> **Princípio de desenvolvimento:** Todo o trabalho acontece localmente no VSCode. Repositório GitHub e deploy na Vercel são criados apenas na fase final, depois de todos os testes concluídos e aprovados.

---

### Fase 0 — Coleta de Assets e Validação (Pré-desenvolvimento)

| Atividade | Responsável | Status |
|---|---|---|
| Coletar logo em alta resolução (SVG preferível) | Cliente | Pendente |
| Coletar e organizar fotos de projetos por ambiente | Cliente + Cristian | Pendente |
| Definir lista definitiva de ambientes atendidos | Cliente | Pendente |
| Coletar textos: história da empresa, diferenciais | Cliente | Pendente |
| Coletar depoimentos de clientes | Cliente | Pendente |
| Definir canal de notificação dos leads (e-mail ou Telegram) | Cliente | Pendente |
| Confirmar e-mail e/ou Telegram para recebimento dos leads | Cliente | Pendente |
| Confirmar número de WhatsApp comercial | Cliente | Pendente |
| Confirmar redes sociais ativas e URLs dos perfis | Cliente | Pendente |

> Assets não entregues na Fase 0 não bloqueiam o desenvolvimento — serão substituídos por placeholders e integrados na Fase 4.

---

### Fase 1 — Setup Local e Estrutura Base

- Inicializar projeto Next.js + TypeScript + Tailwind localmente no VSCode
- Criar estrutura de pastas e arquivos por página (App Router)
- Implementar Header fixo (sticky) e Footer globais com placeholders de logo e ícones
- Configurar roteamento de todas as páginas
- Definir paleta de cores provisória e tipografia base
- Configurar variáveis de ambiente (`.env.local`) para chaves de API

---

### Fase 2 — Desenvolvimento das Páginas

- Home (Hero, grid de ambientes, diferenciais, depoimentos, CTA final)
- Empresa (`/empresa`)
- Ambientes — index (`/ambientes`) + página dinâmica de categoria (`/ambientes/[slug]`)
- Nosso Processo (`/processo`)
- Contato (`/contato`)

---

### Fase 3 — Funcionalidades e Integrações

- Integração do formulário com canal de notificação definido pelo cliente (Resend para e-mail e/ou Telegram Bot API)
- Botão WhatsApp flutuante com mensagem pré-preenchida
- Lightbox de galeria de fotos nas páginas de ambiente
- Google Maps embed na página de contato
- SEO: meta tags, Open Graph, sitemap, canonical tags, Schema.org LocalBusiness

---

### Fase 4 — Assets Reais e Conteúdo Final

- Substituição de logos e imagens placeholder pelos assets reais do cliente
- Revisão e integração de todos os textos (Empresa, Home, Processo)
- Ajuste de paleta de cores conforme identidade real do cliente (se fornecida)
- Validação visual final com o cliente antes dos testes

---

### Fase 5 — Testes Completos (Local)

Todos os testes realizados no ambiente local antes de qualquer publicação.

| Tipo de Teste | O que cobre |
|---|---|
| **Smoke Test** | Verificação rápida de que todas as páginas carregam sem erro (200 OK, sem crash de componente) |
| **Teste de Navegação (Spider)** | Todos os links internos funcionando, sem links quebrados (404), navegação entre páginas correta |
| **Teste de Responsividade** | Viewport: iPhone SE, iPhone 14, Pixel 7, iPad, desktop 1280px, desktop 1920px — via Chrome DevTools e dispositivo físico |
| **Teste de Formulário** | Envio real do formulário com dados de teste, confirmação de recebimento no canal definido (e-mail e/ou Telegram) |
| **Teste do WhatsApp** | Botão flutuante + ícone no header + ícone no footer — todos abrindo com mensagem correta |
| **Teste de Performance** | Lighthouse rodado localmente (mobile e desktop) — Performance ≥ 90, SEO ≥ 95 |
| **Teste de Acessibilidade** | Lighthouse Accessibility ≥ 90, verificação manual de navegação por teclado |
| **Teste de SEO** | Meta tags, Open Graph, sitemap, canonical e structured data validados |
| **Teste Cross-Browser** | Chrome, Safari (iOS), Firefox — comportamento consistente |

---

### Fase 6 — Publicação

Executada somente após aprovação de todos os testes da Fase 5.

- Criar repositório no GitHub e fazer push do projeto
- Conectar repositório à Vercel (deploy automático via Git)
- Configurar variáveis de ambiente na Vercel (chaves de API, tokens)
- Configurar DNS do domínio do cliente para apontar para a Vercel
- Validar site em produção (smoke test rápido pós-deploy)
- Go live

---

## 10. Dependências Externas (Resumo)

| Item | Responsável | Impacto se atrasado |
|---|---|---|
| Logo da empresa | Cliente | Bloqueia identidade visual e header |
| Fotos dos projetos organizadas por ambiente | Cliente | Bloqueia galeria — use placeholders enquanto isso |
| Lista definitiva de ambientes | Cliente | Define estrutura de roteamento do portfólio |
| Textos institucionais (Sobre, Diferenciais) | Cliente | Bloqueia páginas Sobre e Home |
| Depoimentos de clientes | Cliente | Bloqueia seção de depoimentos — pode entrar depois |
| E-mail de destino dos leads | Cliente | Bloqueia configuração do Resend |
| Número de WhatsApp comercial | Cliente | Bloqueia botão flutuante e CTA |

---

## 11. Critérios de Aceite

O projeto será considerado pronto para publicação quando todos os itens abaixo estiverem verificados e aprovados:

| Critério | Referência |
|---|---|
| Todas as páginas carregam sem erro em ambiente local | Smoke Test (Fase 5) |
| Todos os links internos funcionando, sem 404 | Teste de Navegação (Fase 5) |
| Site responsivo e funcional em iPhone SE, iPhone 14, Pixel 7, tablet e desktop | Teste de Responsividade (Fase 5) |
| Formulário enviando notificação corretamente no canal definido pelo cliente | Teste de Formulário (Fase 5) |
| Botão WhatsApp flutuante + ícones de header e footer funcionando em todas as páginas | Teste WhatsApp (Fase 5) |
| Lighthouse Performance (mobile) ≥ 90 | Teste de Performance (Fase 5) |
| Lighthouse SEO ≥ 95 | Teste de SEO (Fase 5) |
| Todos os assets reais integrados e aprovados pelo cliente | Fase 4 concluída |
| Site funcionando corretamente em produção após deploy | Smoke test pós-deploy (Fase 6) |

---

## 12. Modelo de Manutenção Mensal (Pós-entrega)

O site será mantido por Cristian após a entrega, com contrato de manutenção mensal que cobre:

- Atualização de fotos e projetos no portfólio
- Ajustes de texto e conteúdo
- Monitoramento de funcionamento e uptime
- Pequenas melhorias de design ou UX

> O valor da taxa mensal deve ser definido em proposta separada.

---

*PRD elaborado por Cristian Dornelles — Projeto ADS / Movelaria*  
*Referência visual de mercado: imobal.com.br*
