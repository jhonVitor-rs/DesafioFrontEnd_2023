"use client"
import { MainAboutUs } from "@/components/main/mainAboutUs"
import { MainInvite } from "@/components/main/mainInvite"
import { styled } from "styled-components"

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export default function Home() {
  return (
    <Main>
      <MainAboutUs/>
      <MainInvite/>
    </Main>
  )
}
