"use client"
import { MainAboutUs } from "@/components/main/mainAboutUs"
import { MainInvite } from "@/components/main/mainInvite"
import { MainList } from "@/components/main/mainList"
import { styled } from "styled-components"
import client from "@/hooks/apollo-client"
import { ApolloProvider } from "@apollo/client"

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <Main>
        <MainAboutUs/>
        <MainList/>
        <MainInvite/>
      </Main>
    </ApolloProvider>
  )
}
