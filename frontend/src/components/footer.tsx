"use client"
import { styled } from "styled-components";
import { FaRegCopyright } from "react-icons/fa"
import { FooterMenu } from "./footer/footerMenu";
import { Logo } from "./logo";

export function Footer(){
  return(
    <FooterStyle>
      <LogoContainer>
        <Logo/>
        <div>Transformando vidas em clientes.</div>
      </LogoContainer>
      <FooterMenu/>
      <SignatureContainer>
        <Signature>
          Copyright <FaRegCopyright/> 2015 - 2022 Todos os direitos reservados | <Company>Leadster</Company>
        </Signature>
        <Address>
          Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso
        </Address>
      </SignatureContainer>
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 3rem auto;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  padding: 2rem;

  div{
    font: inherit;
    font-weight: 400;
    color: var(--color-font-medium);
  }
`

const SignatureContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 5rem;
  flex-wrap: wrap;
  padding-bottom: 1rem;
`

const Signature = styled.div`
  font-weight: 600;
  font-size: small;
  color: var(--color-font-light);
`

const Company = styled.span`
  color: var(--color-font-cyan);
`

const Address = styled.div`
  font-weight: 600;
  font-size: small;
  color: var(--color-font-light);
`