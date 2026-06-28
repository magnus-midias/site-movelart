# Instrucoes de trabalho no projeto

Este documento descreve as regras de trabalho válidas para todo o repositório. Ele e consultado a cada alteracao relevante e deve permanecer sincronizado com o `CLAUDE.md` da raiz.

Este projeto segue o padrão de estrutura de documentação do Cristian, descrito em `docs/prompt-inicial/prompt-inicial.md`.

---

## 1. Estrutura obrigatória de `docs/`

```
docs/
  constitution.md      # princípios e restrições invioláveis — ler PRIMEIRO
  prd-e-arquitetura/   # tecnica: visao do produto, banco de dados, permissoes, instrucoes e planos
  specs/               # especificações por feature (SDD) — 001-nome-da-feature/
  historico/           # registro sequencial de toda alteracao relevante
  design-system/       # identidade visual e tokens
    MASTER.md          # arquivo principal de tokens e identidade
    pages/             # overrides por página (criar só se necessário)
    logos/
    icones/
    favicon/
  prompt-inicial/      # copia do prompt padrao do Cristian (referencia)
```

### Finalidade de cada pasta

- **`constitution.md`** — princípios governantes do projeto: invioláveis, stack aprovada, padrões de qualidade, o que é proibido. Ler antes de qualquer tarefa, mesmo antes do PRD. Muda raramente.
- **`prd-e-arquitetura/`** — centraliza tudo que define e descreve o produto e sua arquitetura técnica, mais as regras de trabalho e planos de ação. Arquivos principais: `product-requirements-document.md`, `banco-de-dados.md`, `instrucoes.md` (este arquivo), `plano-de-acao.md`. Outros possíveis: `permissoes.md`, `integracoes.md`, qualquer documento técnico relevante.
- **`specs/`** — especificações detalhadas por feature seguindo o fluxo SDD. Uma subpasta por feature (`001-nome-da-feature/`) com `spec.md`, `plan.md` e `tasks.md`.
- **`historico/`** — um arquivo `.md` por alteracao relevante (ver seção 2).
- **`design-system/`** — identidade visual. Arquivo principal: `MASTER.md` (tipografia, paleta, radius, componentes, animacoes, assets). Pasta `pages/` para overrides por página. Subpastas de assets mantidas.
- **`prompt-inicial/`** — copia do prompt padrão do Cristian. Pode ignorar ao trabalhar; existe só pra facilitar quando for iniciar outro projeto.

### Convencao de nomenclatura

- Nenhum arquivo ou pasta pode ter acentos ou caracteres especiais. ASCII puro e kebab-case.
- Conteúdo dentro dos arquivos pode ser em pt-BR com acentos normalmente. A restricao e só pra **nomes** de arquivos e pastas.

---

## 2. Regra inegociavel de histórico

Toda alteracao relevante deve ser registrada em `docs/historico/` como um arquivo `.md` novo, no formato:

```
NN-descricao-curta-AAAA-MM-DD.md
```

- `NN` = número sequencial com 2 digitos, próximo disponivel.
- `descricao-curta` = resumo em kebab-case, sem acentos.
- `AAAA-MM-DD` = data da alteracao.

### "Relevante" inclui

- Criação, remocao ou renomeacao de arquivos/pastas.
- Alteracao de dependencias.
- Mudança de estrutura de rotas, componentes ou lógica de negocio.
- Alteracao de schema do banco ou RLS.
- Mudança de estilo/design global.
- Alteracoes de configuração (build, lint, tipagem, etc.).
- Decisões de arquitetura (mesmo sem código alterado).
- Refatoracoes estruturais.

Ajustes triviais de estilo, typos e correcoes obvias não precisam de registro. Em duvida, registre.

### Antes de uma alteracao relevante

1. Ler `docs/constitution.md`.
2. Ler `docs/prd-e-arquitetura/instrucoes.md` (este arquivo).
3. Ler todo o histórico em `docs/historico/` em ordem numerica crescente.
4. Ler `docs/prd-e-arquitetura/product-requirements-document.md` e os demais arquivos relevantes ao escopo.
5. Se a alteracao tem impacto visual, ler também `docs/design-system/MASTER.md`.
6. Só então planejar e executar.

### Depois de uma alteracao relevante

1. Criar o arquivo novo em `docs/historico/` no formato acima.
2. Se a alteracao impactou arquitetura ou PRD, atualizar `docs/prd-e-arquitetura/`.
3. Se mudou regras ou fluxo de trabalho, atualizar este arquivo.
4. Se tocou em tokens visuais, componentes, animacoes ou assets de marca, atualizar `docs/design-system/MASTER.md`.

### Formato de cada arquivo de histórico

```markdown
# <Titulo da alteracao>

- **Data:** AAAA-MM-DD
- **Autor:** <Cristian | Claude>
- **Escopo:** <arquitetura | conteudo | UI | config | infra | outro>

## Contexto / Motivacao
Por que essa alteracao foi feita.

## O que mudou
Lista objetiva dos arquivos/areas afetadas.

## Impacto
O que pode quebrar, o que precisa ser revisado, proximos passos.
```

---

## 3. Planos de ação por fases

Iniciativas grandes são quebradas em fases numeradas e registradas em `docs/prd-e-arquitetura/plano-de-acao.md`.

### Diretrizes

- Cada fase tem objetivo, checklist e **criterio de conclusao claro**.
- Uma fase só comeca quando a anterior esta 100% concluida — sem voltar.
- Quando convier, intercalar **fases de testes de funcionalidade** entre fases de construção. Não deixar testes só pro fim.
- A **ultima fase antes do deploy** é sempre: testes completos (smoke, E2E, spider, Lighthouse, axe-core, cross-browser, segurança) + logs + monitoramento.
- Ao final de cada fase: marcar como concluida no plano **e** criar o registro correspondente em `docs/historico/`.
- Listar explicitamente o que esta **fora de escopo** (pos-MVP) pra evitar loop em partes já concluidas.

---

## 4. Ordem de leitura antes de começar qualquer tarefa

1. `docs/constitution.md` — princípios invioláveis (ler antes de tudo).
2. `CLAUDE.md` na raiz — contexto do projeto.
3. `docs/prd-e-arquitetura/instrucoes.md` (este arquivo).
4. `docs/prd-e-arquitetura/plano-de-acao.md` relevante, se existir.
5. `docs/historico/` em ordem numerica crescente.
6. `docs/prd-e-arquitetura/` conforme o escopo (PRD, banco, permissoes).
7. `docs/design-system/MASTER.md` se a tarefa tiver impacto visual.
