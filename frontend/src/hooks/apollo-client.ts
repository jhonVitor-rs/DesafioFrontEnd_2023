import { InMemoryCache, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
  uri: `https://desafio-front-end-2023.vercel.app/graphql`,
  cache: new InMemoryCache
})

export default client