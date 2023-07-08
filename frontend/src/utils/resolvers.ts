import { Video } from "@/types/data"
import media from "./db"
import { InputType } from "@/types/inputTypes"

export const resolvers = {
  Query: {
    allMedia: (
      _: any,
      {category, sortBy, sortOrder, page, perPage}: InputType
    ) => {
      let listMedia: Video[] = media.data

      if(category) {
        listMedia = listMedia.filter((media) => media.category === category)
      }
      
      if(sortBy && sortOrder){ 
        if(sortBy === 'created_at' && sortOrder === 'ASC'){
          listMedia.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
        }
        else if(sortBy === 'created_at' && sortOrder === 'DES'){
          listMedia.sort((a, b) => new Date(a.created_at).getTime() + new Date(b.created_at).getTime())
        }
        else if(sortBy === 'views' && sortOrder === 'ASC'){
          listMedia.sort((a, b) => a.views - b.views)
        }
        else if(sortBy === 'views' && sortOrder === 'DES'){
          listMedia.sort((a, b) => a.views + b.views)
        }
        else{
          listMedia
        }
      }

      const totalCount = listMedia.length
      const start = page * perPage
      const end = start + perPage

      const edges = listMedia.slice(start, end).map((media) => ({
        id: media.id,
        title: media.title,
        author: media.author,
        category: media.category,
        description: media.description,
        url: media.url,
        created_at: media.created_at,
        views: media.views
      }))
      
      return {
        totalCount,
        edges
      }
    },

    media: (
      _: any,
      {id}: {id: number}
    ) => {
      let listMedia: Video[] = media.data

      const findMedia = listMedia.find((media) => media.id === id)

      return findMedia
    }
  }
}