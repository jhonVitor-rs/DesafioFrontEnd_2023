export interface Media {
  id: string
  title: string
  category: string
}

export interface AllMedia{
  allMedia:{
    edges: Media[]
    totalCount: number
  }
}

export interface MediaDetails{
  media: {
    title: string
    url: string
    description: string
  }
}