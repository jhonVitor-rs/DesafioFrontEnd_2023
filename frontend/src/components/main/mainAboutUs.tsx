"use client"
import { styled } from "styled-components";

const Container = styled.div`
  background-color: var(--color-background-secondary);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 5rem;
`

const HeaderTitle = styled.div`
  text-transform: uppercase;
  color: var(--color-font-selected);
  border: 2px solid var(--color-font-selected);
  padding: .8rem 1.5rem;
  font-weight: 800;
  border-radius: 1.5rem 1.5rem 1.5rem 0.4rem;
`

const Motto = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const FirstMotto = styled.h3`
  color: var(--color-font-bold);
  font-weight: 400;
  font-size: 3.5rem;

`

const SecondMotto = styled.h2`
  color: var(--color-font-selected);
  font-weight: 600;
  font-size: 7rem;
  position: relative;
`

const Asset = styled.img`
  position: absolute;
  top: 1.3rem;
  right: -1.2rem;
  width: 4rem;
  height: auto;
`

const Separator = styled.hr`
  color: var(--color-font-medium);
  height: 1px;
  width: 60rem;
`

const Text = styled.h4`
  font-weight: 600;
  font-size: 1.3rem;
  color: var(--color-font-bold);
`

export function MainAboutUs(){
  return(
    <Container>
      <HeaderTitle>webinars exclusivos</HeaderTitle>
      <Motto>
        <FirstMotto>Menos Conversinha,</FirstMotto>
        <SecondMotto>Mais conversão <Asset src="/asset-header.png"/> </SecondMotto>
      </Motto>
      <Separator/>
      <Text>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</Text>
    </Container>
  )
}