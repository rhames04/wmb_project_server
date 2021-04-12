# Projeto WMB - Server
Server para demonstração de RestAPI integrada com banco de dados.

## Intro

Este é um servidor desenvolvido para o projeto WMB que tem como objetivo ser um exemplo para uma aplicação web completa com front-end, back-end e banco de dados.

### Tecnologias usadas para este servidor

[NodeJS](https://nodejs.org/en/)

### Principais dependências

[Express](https://github.com/expressjs/express) - Framework para criar nosso servidor e definir nossas rotas.

[Sequelize](https://sequelize.org) - Ferramenta ORM para gerenciamento do nosso banco de dados

[Sequelize-cli](https://github.com/sequelize/cli) - CLI para sequelize.

[Multer](https://github.com/expressjs/multer) - Middleware para upload de arquivos.


## Preparando ambiente

Antes de tudo, é necessária a criação de um banco de dados relacional com o nome "wmb_db".

> No meu ambiente usei um conteiner docker para configurar meu servidor MySQL. Caso deseje usar outro servidor, mude as configurações no arquivo .config do sequelize.

Com o bando de dados criado e com sequelize e sequelize-cli devidamente instalados, pelo terminal, entre na pasta do projeto e digite os seguintes comandos.

:point_right: __npx sequelize-cli db:migrate__ (para criar as tabelas no banco de dados).

:point_right: __npx sequelize-cli db:seed:all__ (para popular as tabelas necessárias).

## Conclusão

Após configuração realizada com sucesso o servidor funcionará devidamente quando inicializado. 

> A fim de testes das rotas de nossa API, sugiro o uso do [Postman](https://www.postman.com) ou equivalente. 
