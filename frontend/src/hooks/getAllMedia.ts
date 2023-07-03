import { gql } from '@apollo/client'
import GqlClient from './apollo-client'

interface Media {
  id: string
  title: string
  category: string
}

export interface DataResponse{
  allProducts: Media[]
}

export async function GetAllMedia():Promise<DataResponse | undefined> {
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
    return undefined
  }
}
