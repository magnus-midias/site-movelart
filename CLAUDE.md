# CLAUDE.md — site-movelart

> Leia este arquivo antes de qualquer alteração no projeto.

---

## O que é este projeto

Site institucional multi-página para empresa de móveis planejados localizada na Grande Florianópolis (SC). Projeto com dupla finalidade: entrega real ao cliente (que não possui presença digital própria) e projeto prático da disciplina de ADS de Cristian Dornelles.

**Objetivos principais:**
- Apresentar portfólio de projetos por categoria de ambiente
- Gerar leads via formulário de contato e botão WhatsApp flutuante
- SEO local competitivo para buscas em Florianópolis/SC
- Base para manutenção mensal contratada pelo cliente

**Público-alvo:** Classe A/B, faixa 30–55 anos, Grande Florianópolis. Ciclo de decisão longo — o site precisa gerar confiança, não apenas capturar contato.

**Referência visual:** imobal.com.br

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 14+ (App Router) |
| UI | React 18 + TypeScript |
| Estilização | Tailwind CSS (mobile-first, sem libs de UI pesadas) |
| E-mail | Resend via Route Handler |
| Notificação alternativa | Telegram Bot API (a definir com cliente) |
| Hospedagem | Vercel (free tier) |
| Repositório | GitHub — `magnus-midias/site-movelart` |
| Imagens | Vercel Image Optimization via `<Image>` do Next.js |

---

## Scripts

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Lint
npm run lint
```

---

## Estrutura de pastas relevante

```
docs/
  constitution.md          → princípios invioláveis — ler PRIMEIRO, sempre
  prd-e-arquitetura/       → instrucoes.md, arquitetura.md, plano-de-acao.md, product-requirements-document.md
  historico/               → registro sequencial de alterações (ler antes de modificar)
  design-system/           → MASTER.md + assets de marca
    MASTER.md              → fonte única de verdade sobre identidade visual
    pages/                 → overrides por página (criar só se necessário)
    logos/
    icones/
    favicon/
  specs/                   → especificações de feature (001-nome-da-feature/)
  prompt-inicial/          → referência do prompt padrão de projetos
CLAUDE.md                  → este arquivo
```

---

## Ordem de leitura obrigatória antes de qualquer tarefa

1. `docs/constitution.md` — princípios invioláveis (ler antes de tudo)
2. `docs/prd-e-arquitetura/instrucoes.md` — regras de trabalho e histórico
3. `docs/historico/` — em ordem numérica crescente
4. `docs/prd-e-arquitetura/product-requirements-document.md` — visão do produto
5. `docs/prd-e-arquitetura/arquitetura.md` — decisões técnicas
6. `docs/design-system/MASTER.md` — apenas se a tarefa tiver impacto visual

---

## Regra de ouro — histórico obrigatório

**Antes de qualquer alteração relevante:**
1. Seguir a ordem de leitura acima.

**Depois de qualquer alteração relevante:**
1. Criar `docs/historico/NN-descricao-curta-AAAA-MM-DD.md` (próximo número disponível).
2. Atualizar `docs/prd-e-arquitetura/arquitetura.md` se a arquitetura mudou.
3. Atualizar `docs/design-system/MASTER.md` se tokens ou assets mudaram.

Instruções completas em [`docs/prd-e-arquitetura/instrucoes.md`](docs/prd-e-arquitetura/instrucoes.md).

---

## Marca / Design system

Paleta definitiva da marca (confirmada em 2026-06-12). Ver `docs/design-system/MASTER.md`.
