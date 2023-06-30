"use client"
import { styled } from "styled-components";
import { FooterLogo } from "./footer/footerLogo";
import { FooterMenu } from "./footer/footerMenu";
import { FooterSignature } from "./footer/footerSignature";

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 3rem auto;
`

export function Footer(){
  return(
    <FooterStyle>
      <FooterLogo/>
      <FooterMenu/>
      <FooterSignature/>
    </FooterStyle>
  )
}