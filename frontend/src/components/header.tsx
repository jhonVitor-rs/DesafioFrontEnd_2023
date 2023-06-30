"use client"
import { styled } from "styled-components";
import { Logo } from "./logo";

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
`;

export function Header(){
  return(
    <HeaderStyle>
      <Logo/>
    </HeaderStyle>
  )
};
