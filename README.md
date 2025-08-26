# CharMaker T20

CharMaker T20 é uma aplicação web para facilitar a criação de fichas de personagens do sistema Tormenta20 RPG. O projeto foi desenvolvido com foco em praticidade, organização e usabilidade.

## Funcionalidades
- Criação e edição de fichas de personagens Tormenta20
- Seleção de raças, classes, origens, perícias, poderes, habilidades e magias
- Exportação da ficha de personagem
- Visualização de ameaças para referências e exportação
- Arquivos de exportação em formato compativel a extensão https://roll20tormenta20.pyanderson.dev/

## Como usar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse o endereço exibido no terminal (geralmente http://localhost:5173) para visualizar o site.

## Estrutura do Projeto
- `src/components`: Componentes React reutilizáveis para cada funcionalidade da ficha
- `src/context`: Contexto global para gerenciamento de estado do personagem
- `src/assets/data`: Dados do sistema Tormenta20 (raças, classes, magias, ameaças etc)

## Contribuição
Contribuições são bem-vindas! Sinta-se livre para abrir issues ou pull requests com sugestões, correções ou novas funcionalidades.

## Licença
Este projeto é distribuído sob a licença MIT.

## Demonstração
Acesse a versão online: [CharMaker T20](https://jefersonblc.github.io/CharMakerT20)

