export interface Media {
  id: string
  title: string
  category: string
}

export interface AllMedia{
  allProducts: Media[]
  _allProductsMeta: {
    count: number
  }
}

export interface MediaDetails{
  Product: {
    title: string
    url: string
    description: string
  }
}