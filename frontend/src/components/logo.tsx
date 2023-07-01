import { styled } from "styled-components"

const LogoImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 13rem;
  height: auto;
`


export function Logo(){
  return(
    <LogoImg src="/logo.png"/>
  )
}