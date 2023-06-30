import { styled } from "styled-components"
import { FaRegCopyright } from "react-icons/fa"

const Container = styled.div`
  font-weight: 600;
  font-size: small;
  color: var(--color-font-light);
`

const Company = styled.span`
  color: var(--color-font-cyan);
`

export function Signature(){
  return(
    <Container>
      Copyright <FaRegCopyright/> 2015 - 2022 Todos os direitos reservados | <Company>Leadster</Company>
    </Container>
  )
}