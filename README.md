# Tech Challenge (v1.0.0)

## Endpoints API:
* Cadastro/identificação do cliente, onde é possível cadastra-se usando nome e email ou utilizando CPF.
* Cadastro, edição e exclusão de produtos.
* Listagem de produtos por categoria.
* Realizar o pedido (montagem do combo).
* Atualizar o status do pedido.
* Definir método de pagamento (finaliza pedido).

## Instalação

1. Clone este repositório.
2. Navegue até o diretório do projeto.
3. Execute o comando `npm install` para instalar as dependências.

## Docker e Base de dados

1. No diretório do projeto, execute o comando `docker compose build`.
2. Execute o comando `docker compose up`.
3. Em seguida, execute o comando `npm run typeorm migration:generate ./src/adapter/driven/db/migrations/CreateTables -- -d ./src/adapter/driven/db/data-source.ts` para gerar as migrations do banco de dados.
4. Execute o comando `npm run typeorm migration:run -- -d ./src/adapter/driven/db/data-source.ts` para executar a migration.

## Documentação

Documentação via Swagger disponível na rota `/doc`.
