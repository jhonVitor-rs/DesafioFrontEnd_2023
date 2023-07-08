import { createSchema, createYoga } from "graphql-yoga";
import { typeDefs } from "@/utils/typeDefs";
import { resolvers } from '@/utils/resolvers'

const schema = createSchema({
  typeDefs,
  resolvers
})

const {handleRequest} = createYoga({
  graphqlEndpoint: '/graphql',
  schema,
  fetchAPI: {
    Request: Request,
    Response: Response
  }
})

export {handleRequest as GET, handleRequest as POST}
