"use client"
import { styled } from "styled-components"
import { Logo } from "../logo"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  padding: 2rem;
`

const Text = styled.div`
  font: inherit;
  font-weight: 400;
  color: var(--color-font-medium);
`

export function FooterLogo(){
  return(
    <Container>
      <Logo />
      <Text>
        Transformando vidas em clientes.
      </Text>
    </Container>
  )
}