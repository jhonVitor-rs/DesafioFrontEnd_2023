import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleContainer = styled.div`
  color: var(--color-font-bold);
  flex-wrap: wrap;
  padding: 1rem;
`

const Title = styled.div`
  font-size: 2.5rem;
`

const Separator = styled.hr`
  color: var(--color-font-medium);
  height: 1px;
  width: 100%;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  gap: 2rem;
  padding: 1rem;
`

const Button = styled.div`
  background-color: var(--color-font-selected);
  border: 2px solid var(--color-font-selected);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 10rem;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    background-color: white;
    color: var(--color-font-selected);
  }
`

const Avaliation = styled.img`
  width: 11rem;
  height: auto;
`

const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: var(--color-font-bold);
`

const Asset = styled.img``

export function MainInscrition(){
  return (
    <Container>
      <TitleContainer>
        <Title>Pront para triplicar sua <strong>Geração de Leads</strong></Title>Criação e ativação em <strong>4 minutos</strong>.
      </TitleContainer>
      <Separator/>
      <ButtonContainer>
        <Button>Ver deomonstração</Button>
        <Avaliation src="/selo_RD.png"/>
      </ButtonContainer>
      <Details>
        <Asset src="/no-card-dark.webp"/><p><strong>Não</strong> é necessario Cartão de Crédito </p>| 
        <Asset src="/rating.webp"/><p><strong> 4.9</strong>/5 média de satisfação</p>
      </Details>
    </Container>
  )
}