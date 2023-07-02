import { gql } from '@apollo/client'
import GqlClient from './apollo-client'

interface Media {
  id: string
  title: string
  category: string
}

export interface DataRespose{
  
}

export const GetAllMedia = async () => {
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

    console.log(data)
  } catch(error){
    console.log(error)
  }
}