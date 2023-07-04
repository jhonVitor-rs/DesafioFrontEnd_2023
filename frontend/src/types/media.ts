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