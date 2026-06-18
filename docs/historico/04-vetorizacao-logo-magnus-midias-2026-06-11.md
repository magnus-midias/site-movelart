# 04 — Vetorização do logo mark da Magnus Mídias

**Data:** 2026-06-11
**Fase:** Design System (pré-Fase 3)

---

## O que foi feito

Vetorização do logo mark da Magnus Mídias a partir do PNG original (1080×1080px, fundo preto, M branco bold com 3 quadrados abaixo).

### Arquivos criados

| Arquivo | Uso |
|---|---|
| `docs/design-system/logos/logo-magnus-midias-mark.svg` | Versão transparente, `fill="currentColor"`, para uso em componentes React |
| `docs/design-system/logos/logo-magnus-midias-mark-black-bg.svg` | Versão com fundo preto (#000), fiel ao PNG original, para visualização |

---

## Anatomia do mark (coordenadas internas)

**ViewBox do mark:** `0 0 340 383`

### Letra M
- Dimensões: 340×270
- Forma: retângulo sólido com entalhe em V no topo
- Pernas: 70px de largura cada (x=0–70 e x=270–340)
- Vale do V: y=150 (55.6% da altura), x=170 (centro)

### Cantos arredondados
| Canto | Coordenada | Raio | Método |
|---|---|---|---|
| TL, TR, BR, BL (externos) | (0,0) (340,0) (340,270) (0,270) | r=22 | Quadratic Bézier |
| G — início V esquerdo | (70,0) | r=12 | Quadratic Bézier |
| E — início V direito | (270,0) | r=12 | Quadratic Bézier |
| F — vale do V | (170,150) | r=12 | Quadratic Bézier |

**Vetor G→F normalizado:** dx=100, dy=150, |v|=180.28 → unit=(0.555, 0.832)

### Linha separadora
- y=305 (35px abaixo do M), width=318, height=1.5, opacity=0.35

### Três quadrados
- Tamanho: 48×48px cada
- y=335 (65px abaixo do M)
- Centros em x=35 (sob perna esquerda), x=170 (sob vale), x=305 (sob perna direita)
- Margem lateral: 11px; gap entre quadrados: 87px

### Canvas 1080×1080 (versão com fundo)
- `transform="translate(370 348)"` para centralizar o mark (340×383) no canvas

---

## Path SVG da letra M

```svg
<path d="
  M 22,0
  L 58,0
  Q 70,0 76.66,9.98
  L 163.34,140.02
  Q 170,150 176.66,140.02
  L 263.34,9.98
  Q 270,0 282,0
  L 318,0
  Q 340,0 340,22
  L 340,248
  Q 340,270 318,270
  L 22,270
  Q 0,270 0,248
  L 0,22
  Q 0,0 22,0
  Z
"/>
```

---

## Notas

- Primeira tentativa (06-11) foi descartada pelo cliente — proporções e cantos internos incorretos.
- Esta segunda versão corrige: raio dos cantos externos maior, arredondamento dos cantos internos do V (G, E) e do vale (F), proporções das pernas e posição dos 3 quadrados.
- O logo real do cliente (Movelart) ainda não foi recebido — usar placeholder `components/Logo.tsx` até a Fase 0 ser concluída.
