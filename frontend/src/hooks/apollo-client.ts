import { InMemoryCache, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GQL_URL,
  cache: new InMemoryCache
})

export default client