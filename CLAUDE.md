# CLAUDE.md

Diretrizes para o Claude Code trabalhar neste repositório.

## Projeto

CharMaker T20 — gerador de fichas de personagens do RPG Tormenta20. SPA React publicada no GitHub Pages (https://jefersonblc.github.io/CharMakerT20).

Código, dados e interface estão todos em **português (pt-BR)**. Mantenha esse padrão em nomes de variáveis, comentários, textos de UI e mensagens ao usuário.

## Comandos

```bash
npm run dev      # servidor de desenvolvimento (Vite)
npm run build    # build de produção
npm run lint     # ESLint (flat config)
npm run preview  # pré-visualiza o build
npm run deploy   # publica no GitHub Pages (predeploy roda o build antes)
```

Não há testes automatizados.

## Stack

- React 19 + Vite 7, JavaScript/JSX (sem TypeScript)
- Bootstrap 5 + Font Awesome (ícones) + CSS customizado (`App.css`, `index.css`, `Ficha.css`)
- `react-select` (e `react-select/creatable`) para selects pesquisáveis
- `react-window` para virtualizar listas grandes → `VirtualizedMenuList.jsx`
- `react-tooltip` para tooltips
- `html2pdf.js` para gerar PDFs; `jszip` + `file-saver` para ZIP
- ESLint 9 (flat config) com `react-hooks` e `react-refresh`

## Arquitetura

- `src/main.jsx`: `StrictMode > PersonagemProvider > App`
- `src/App.jsx`: navegação por abas, definida no array `tabs` (Personagem, Perícias, Ataques, Habilidades, Magias, Itens, Ameaças, Configurações). A aba "Ficha" (`Ficha.jsx` + `FichaContent.jsx`) existe mas está desativada/comentada.
- `src/context/PersonagemContext.jsx`: estado global. O hook `usePersonagem()` expõe `personagem`, `attributes`, `anyAttribute`, `pointbuy`, `rolagem`, `config` (todos com seus setters).
- `src/components/`: um componente por aba, mais `Modal.jsx`, `OptionOriginTooltip.jsx`, `VirtualizedMenuList.jsx`, `FichaContent.jsx` (ficha renderizada para o PDF) e `AmeacaContent.jsx` / `AllAmeacasContent.jsx` (ameaças para PDF individual/em lote).

### Estado

- `personagem` é um único objeto achatado com tudo do personagem: atributos (`for/des/con/int/sab/car`), vida, mana, defesa, `attacks[]`, `abilities[]` (habilidades e poderes juntos), `spells1`..`spells5[]` (magias por círculo), `inventario[]`, `pericias{}` (mapa `id → { ...skill, treined }`), notas etc.
- Atualizações **sempre imutáveis**: `setPersonagem(prev => ({ ...prev, campo: valor }))`.
- IDs de itens adicionados usam `crypto.randomUUID()`.
- Persistência local em `localStorage`, chave `"personagens"`: array de `{ nome, personagem, attributes, anyAttribute, pointbuy, rolagem }` (ver `Exportar.jsx`), além de backup/importação via arquivo JSON. Saves antigos podem não ter `rolagem` — o carregamento faz fallback para `{ resultados: [] }`.

### Distribuição de atributos

Modo escolhido na aba Configurações (`config.modoDistribuicao`): `'pontos'` (padrão — point buy com limite 5/10/15) ou `'rolagem'` (4d6 descartando o menor, 6 vezes). Rolar os dados e ver os resultados acontece na aba Configurações (`Exportar.jsx`); a distribuição dos dados nos atributos fica na aba Personagem.

- No modo `'rolagem'`, o campo "Mod" de cada atributo (aba Personagem) vira um select dos dados rolados (`rolagem.resultados`, cada um `{ id, dados, total, atributo }`). O modificador vem da conversão `total → mod` de `attributesTable.js` e é gravado em `attributes[attr].points` (mesmo campo do modo pontos). A derivação (dado distribuído → `points`) é um `useEffect` no `PersonagemContext`, para valer com qualquer aba aberta.
- Regra "soma ≥ 6" do livro: enquanto a soma dos seis modificadores for menor que 6, o botão **"Rerolar menor"** (`Exportar.jsx`) re-rola o menor resultado, um passo por clique; com o checkbox **"Rolagem automática ≥6"** (`config.rolagemAutomatica`), o botão "Rolar" repete isso automaticamente até a soma chegar a 6 ou mais.
- `attributesTable.js` é a fonte única da tabela de custos/faixas (`pointbuyTable`) e das funções `modificadorDaRolagem`/`formatarModificador`; os helpers de rolagem (`rolar4d6`, `indiceDoMenor`, `somaModificadores`, `rerolarMenorResultado`) ficam no topo de `Exportar.jsx`.

### Exportação (`Exportar.jsx`)

- **Roll20**: JSON no formato da extensão "Roll20: Grimório do Tormenta20" (`isJDA: true`, chaves específicas como `nameability`, `spellcd`, `@{des_mod}`). Esse formato é um contrato externo — não renomear nem remover chaves.
- **PDF**: `html2pdf` renderiza `FichaContent` fora da tela (div fixa em `-9999px`) e gera o arquivo.

### Ameaças (`Ameacas.jsx`)

Catálogo das ameaças dos livros base e de "Ameaças de Arton", com filtros (categoria, tipo, tamanho, ND), visualização em modal e exportação em PDF individual ou em lote (ZIP).

## Dados — `src/assets/data`

⚠️ **Os arquivos em `src/assets/data` são MUITO grandes** (classes, poderes, magias, ameaças, itens). **Não ler por completo.** Quando precisar de algo específico, use Grep com `head_limit` ou leia apenas um trecho pequeno com `limit`/`offset`.

- Formato misto: alguns exportam array no default, outros objeto com chave nomeada (ex.: `weapons.json` é `{ name, items }`). Os componentes normalizam com `data.chave || data` — manter esse padrão ao usar dados novos.
- `skills.js`: perícias (`{ nome, atributo, armorPenalty?, id }`), usadas pelo contexto (mapa inicial de `pericias`) e por `Ameacas.jsx`.
- `attributesTable.js`: tabela de custo de atributos e conversão de rolagem → modificador (arquivo pequeno).
- Magias separadas por círculo: `spells/spells1.js` .. `spells5.js`.
- Itens separados por tipo em `itens/` (`weapons.json`, `armor.json`, `accessories.json`, `misc.json`, ...). `magic.json` e `melhorias.json` ainda não são usados por nenhum componente.
- Atenção: a chave lida de origens é `originsData.orgins` (sem "i", fallback para o array).

## Convenções de código

- Componentes funcionais + hooks; `export default`; um componente por aba/responsabilidade.
- Nomeação em português para o domínio (`personagem`, `pericias`, `ameacas`, `pericia`).
- Estilização via classes Bootstrap + ícones Font Awesome; CSS customizado fica nos arquivos `.css`.
- Feedback simples ao usuário via `alert()` / `window.confirm()` — não há lib de toasts/modais além de `Modal.jsx`.
- ESLint: `no-unused-vars` ignora variáveis iniciadas com maiúscula ou `_`.

## Deploy (GitHub Pages)

- `vite.config.js` usa `base: '/CharMakerT20'` — necessário para o GitHub Pages; não remover.
- `gh-pages` publica a pasta `dist/` (via `npm run deploy`).

