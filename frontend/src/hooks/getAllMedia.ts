import { gql } from '@apollo/client'
import GqlClient from './apollo-client'

interface Media {
  id: string
  title: string
  category: string
}

export interface DataResponse{
  allMedia: Media[]
}

export const GetAllMedia = async ():Promise<DataResponse | []> => {
  try{
    const {data} = await GqlClient.query({
      query: gql`
        query{
          allProducts{
            id
            title
            category
          }
        }
      `
    })

    return data
  } catch(error){
    console.log(error)
    return []
  }
}
