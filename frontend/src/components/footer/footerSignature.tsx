"use client"
import { styled } from "styled-components"
import { Signature } from "./signature"
import { Address } from "./address"

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 5rem;
  flex-wrap: wrap;
`

export function FooterSignature(){
  return(
    <Container>
      <Signature/>
      <Address/>
    </Container>
  )
}