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
| Repositório | GitHub |
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
  arquitetura/       → arquitetura.md — stack, rotas, componentes, decisões técnicas
  instrucoes/        → instrucoes.md + plano-de-acao-movelart.md
  historico/         → registro sequencial de alterações (ler antes de modificar)
  design-system/     → design-system.md + assets de marca
    logos/
    icones/
    favicon/
  prompt-inicial/    → referência do prompt padrão de projetos
CLAUDE.md            → este arquivo
```

---

## Regra de ouro — histórico obrigatório

**Antes de qualquer alteração relevante:**
1. Ler todo o histórico em `docs/historico/` (ordem numérica crescente).
2. Ler `docs/arquitetura/arquitetura.md`.
3. Se impacto visual: ler `docs/design-system/design-system.md`.

**Depois de qualquer alteração relevante:**
1. Criar `docs/historico/NN-descricao-curta-AAAA-MM-DD.md` (próximo número disponível).
2. Atualizar `docs/arquitetura/arquitetura.md` se a arquitetura mudou.
3. Atualizar `docs/design-system/design-system.md` se tokens ou assets mudaram.

Instruções completas em [`docs/instrucoes/instrucoes.md`](docs/instrucoes/instrucoes.md).

---

## Marca / Design system

Paleta provisória de alto padrão em uso até recebimento dos assets reais do cliente. Ver `docs/design-system/design-system.md`.
