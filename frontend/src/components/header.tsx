"use client"
import { styled } from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3rem;
`;

const LogoImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export function Header(){
  return(
    <HeaderStyle>
      <LogoImg src="/logo.png"/>
    </HeaderStyle>
  )
};
