"use client"
import { styled } from "styled-components"

const Container = styled.div`
  font-weight: 600;
  font-size: small;
  color: var(--color-font-light);
`

export function Address(){
  return(
    <Container>
      Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso
    </Container>
  )
}