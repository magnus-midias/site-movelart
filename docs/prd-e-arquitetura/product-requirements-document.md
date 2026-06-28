# PRD — Site Institucional Movelart

> **Este é o documento-raiz do produto.** Leia na seguinte ordem antes de qualquer alteração:
> 1. `docs/constitution.md` — princípios invioláveis
> 2. `docs/prd-e-arquitetura/instrucoes.md` — regras de trabalho
> 3. `docs/historico/` — histórico em ordem numérica crescente
> 4. Este arquivo

**Data de criação:** 2026-06-11
**Versão:** 1.1 (atualizado em 2026-06-27 — migração para padrão novo de docs)
**Responsável:** Cristian Dornelles
**Contexto:** Projeto acadêmico (ADS) + entrega real para cliente

---

## 1. Objetivo do produto

Site institucional multi-página para a **Movelart**, empresa de móveis planejados de alto padrão localizada na Grande Florianópolis, SC. O site apresenta o portfólio por categoria de ambiente, gera leads qualificados via formulário de contato e WhatsApp, e estabelece presença digital indexável no Google.

O site **não é** um e-commerce, não tem painel administrativo e não realiza orçamento automatizado.

### Resultado esperado

- Gerar leads qualificados (nome + telefone) via formulário e WhatsApp
- Posicionamento competitivo no Google para buscas locais ("móveis planejados Florianópolis")
- Transmitir credibilidade e portfólio para público classe A/B com ciclo de decisão longo
- Base de código limpa para manutenção mensal contratada pelo cliente

---

## 2. Público-alvo

- **Perfil:** Classe A/B, faixa 30–55 anos, Grande Florianópolis
- **Dispositivo primário:** Mobile (chegam via Google ou indicação)
- **Nível de consciência:** Comparando fornecedores — credibilidade e portfólio pesam mais que preço
- **Ciclo de decisão:** Longo (meses) — o site precisa gerar confiança, não apenas capturar contato

---

## 3. Escopo da v1

### Dentro do escopo

- Home com Hero, grid de ambientes, diferenciais, depoimentos e CTA final
- Página Empresa com história, números, diferenciais e localização
- Portfólio de ambientes por categoria (8 categorias, com galeria e lightbox)
- Página Nosso Processo (6 etapas)
- Página de Contato com formulário (nome + telefone + mensagem), mapa e Schema.org
- WhatsApp flutuante em todas as páginas
- SEO técnico completo: OG, canonical, robots.txt, sitemap, Schema.org LocalBusiness
- Notificação de leads via Resend e/ou Telegram Bot (a definir com cliente)
- Deploy na Vercel com domínio do cliente

### Fora do escopo (pós-v1)

- Painel administrativo ou CMS
- E-commerce ou orçamento automatizado
- Upload de arquivos pelo lead
- Blog ou área editorial
- Integração com CRM
- Google Analytics (manutenção mensal pós-go live)

---

## 4. Stack técnica

Ver detalhes em `docs/prd-e-arquitetura/arquitetura.md`.

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS |
| Autenticação | N/A |
| Banco | N/A |
| Deploy | Vercel (free tier) |
| Repositório | GitHub — `magnus-midias/site-movelart` |

---

## 5. Estrutura de pastas

```
site-movelart/
├── app/                  → rotas App Router (páginas + API)
├── components/           → Header, Footer, Logo, ContactForm, WhatsAppButton
├── public/images/        → SVGs de logo/ícone
├── docs/
│   ├── constitution.md
│   ├── prd-e-arquitetura/
│   │   ├── product-requirements-document.md  (este arquivo)
│   │   ├── arquitetura.md
│   │   ├── instrucoes.md
│   │   └── plano-de-acao.md
│   ├── design-system/
│   │   ├── MASTER.md
│   │   ├── logos/
│   │   ├── icones/
│   │   └── favicon/
│   ├── historico/
│   ├── specs/
│   └── prompt-inicial/
├── CLAUDE.md
└── tailwind.config.ts
```

---

## 6. Fluxo principal de conversão

```
Visitante chega via Google (busca local) ou indicação
  → Navega por portfólio de ambientes (/ambientes/[slug])
  → Preenche formulário (/contato) ou clica em WhatsApp flutuante
    → Formulário → Route Handler → Resend e/ou Telegram → Lead recebido pelo cliente
    → WhatsApp → abre com mensagem pré-preenchida → conversa direta
```

---

## 7. Não-negociáveis de segurança

1. Chaves de API e secrets: nunca no client — variáveis de ambiente server-side
2. Rate limiting em endpoints de formulário (Fase 3)
3. Links externos: `rel="noopener noreferrer"` em todos
4. Secrets nunca commitados — `.env.local` no `.gitignore`

---

## 8. Dependências externas críticas

| Item | Responsável | Status |
|---|---|---|
| Logo em alta resolução | Cliente | Pendente |
| Fotos dos projetos por ambiente | Cliente | Pendente |
| Canal de notificação de leads | Cliente | Pendente — decisão necessária |
| Domínio definitivo | Cliente | Pendente |
| Textos institucionais | Cliente | Pendente |
| Depoimentos de clientes | Cliente | Pendente |

---

## 9. Decisões registradas

| Data | Decisão | Motivo |
|---|---|---|
| 2026-06-11 | SSG para todas as páginas | Performance e SEO — HTML pré-renderizado, indexável pelo Googlebot |
| 2026-06-11 | Sem lib de UI pesada — só Tailwind | Zero overhead de CSS não utilizado; mobile-first nativo |
| 2026-06-12 | Formulário simplificado: nome + telefone + mensagem | Pedido do cliente — remove campos de e-mail e seleção de ambientes |
| 2026-06-12 | Token `brand-ebony` substitui `brand-gold` | Paleta definitiva da marca confirmada |

---

## 10. O que fazer quando este documento ficar desatualizado

Se este arquivo contradizer um registro mais recente em `docs/historico/`, **o histórico vence**. Atualizar este documento e registrar no histórico que o PRD foi atualizado e por quê.
