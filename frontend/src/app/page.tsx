"use client"
import { MainHeader } from "@/components/main/mainHeader"
import { styled } from "styled-components"

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export default function Home() {
  return (
    <Main>
      <MainHeader/>
    </Main>
  )
}
