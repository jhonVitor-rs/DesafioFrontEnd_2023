import { styled } from "styled-components";
import { MainInscrition } from "./mainInscrition";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  background-color: var(--color-background-secondary);
`

const Corporative = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  max-width: 50%;
  padding: 1rem;
`

const Image = styled.img`
  height: auto;
  width: 100%;
  max-width: 550px;
`

export function MainInvite(){
  return(
    <Container>
      <Corporative>
        <Image src="/comparativo_img_CTA.png"/>
      </Corporative>
      <Corporative>
        <MainInscrition/>
      </Corporative>
    </Container>
  )
}