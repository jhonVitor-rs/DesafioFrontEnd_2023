export const typeDefs = /*Graphql*/`
  type Media{
    id: Int
    title: String
    author: String
    category: String
    description: String
    url: String
    created_at: String
    views: Int
  }
  
  type PageInfo {
    hasNextPage: Boolean
    hasPreviousPage: Boolean
    startCursor: String
    endCursor: String
  }
  
  type MediaEdge {
    node: Media
    cursor: String
  }

  type MediaConnection {
    totalCount: Int
    edges: [Media]
  }

  type Query{
    allMedia(category: String, sortBy: String, sortOrder: String, page: Int, perPage: Int): MediaConnection
    media(id: Int): Media
  }
`