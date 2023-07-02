import { InMemoryCache, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIQC_GQL_URL,
  cache: new InMemoryCache
})

export default client