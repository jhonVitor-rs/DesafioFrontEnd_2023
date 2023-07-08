# DesafioFrontEnd_2023
Resolução do desafio para vaga de desenvolvedor frontend na Leadster
# Desafio Leadster - Lista de Vídeos

Este projeto foi desenvolvido como resolução do desafio para a vaga de Desenvolvedor Frontend na Leadster. O objetivo do projeto é criar uma lista de vídeos, utilizando tecnologias como GraphQL, Next.js e Styled Components.

## Funcionalidades

- Exibição de uma lista de vídeos.
- Filtragem dos vídeos por tipo.
- Ordenação dos vídeos por data ou número de visualizações.
- Abertura de um modal com a descrição do vídeo ao clicar em um card.
- Fechamento do modal ao clicar fora dele, no ícone de fechar (X) ou pressionando a tecla Esc.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/): Framework React para renderização do lado do servidor.
- [Styled Components](https://styled-components.com/): Biblioteca para estilização dos componentes.
- [Apollo Client](https://www.apollographql.com/docs/react/): Biblioteca para comunicação com a API GraphQL.
- [JSON-GraphQL-Server](https://github.com/marmelab/json-graphql-server): Servidor GraphQL para fornecer os dados fictícios dos vídeos.
- [Faker.js](https://github.com/marak/Faker.js/): Biblioteca para geração de dados fictícios, como descrição, data de criação e número de visualizações dos vídeos.

## Executando o Projeto

O projeto foi reconfigurado para rodar com um servidor interno com graphql-yoga a pasta backend ja nao e necessaria mais;
Para executar o projeto localmente, siga as instruções abaixo:
Clone o repositorio do github;

1. Abra um segundo terminal (sem fechar o primeiro) e navegue até a pasta do frontend, e instale as depedências:
   cd /frontend
   npm install
2. Inicie o servidor de desenvolvimento Next.js com o comando:
   npm run dev
3. Acesse a aplicação no navegador através do endereço: `http://localhost:3000`

Observação: Certifique-se de ter o Node.js e o NPM instalados em seu ambiente de desenvolvimento.
Voce pode observar o projeto rodando através da url: https://desafio-front-end-2023.vercel.app/

## Notas

- Os dados dos vídeos, assim como as URLs, são fictícios e gerados aleatoriamente utilizando a biblioteca Faker.js.
- Inicialmente, a intenção era utilizar um servidor GraphQL integrado ao Next.js, como o `graphql-yoga` ou `apollo-server-micro`. No entanto, houve problemas com o App Router do Next.js e com a obtenção dos dados no frontend, devido à falta de um banco de dados. Para simplificar, optou-se por uma solução mais simples, utilizando um servidor externo e um arquivo JSON com os dados dos vídeos.
- O projeto foi baseado em um projeto da Rocketseat, que utiliza dados fictícios para fornecer um frontend com GraphQL.
