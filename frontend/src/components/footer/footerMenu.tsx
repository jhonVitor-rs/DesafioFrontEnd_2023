import { styled } from "styled-components"
import LinkList from "./ItensMenu"
import { Contacts } from "./contacts"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 3rem;
  gap: 5rem;
`

export function FooterMenu(){
  const mainLinks = [
    {label: 'Home', url: '/'},
    {label: 'Ferramenta', url: '/'},
    {label: 'Preços', url: '/'},
    {label: 'Contato', url: '/'}
  ]

  const cases = [
    {label: 'Geração de Leads B2B', url: '/'},
    {label: 'Geração de Leads em Software', url: '/'},
    {label: 'Geração de Leads em Imobiliária', url: '/'},
    {label: 'Cases de Sucesso', url: '/'}
  ]

  const materials = [
    {label: 'Blog', url: '/'},
    {label: 'Parceria com Agências', url: '/'},
    {label: 'Guia Definitivo do Marketing', url: '/'},
    {label: 'Materiais Grauitos', url: '/'}
  ]

  return(
    <Container>
      <LinkList 
        title="Links Principais"
        links={mainLinks}
      />
      <LinkList
        title="Cases"
        links={cases}
      />
      <LinkList
        title="Materiais"
        links={materials}
      />
      <Contacts/>
    </Container>
  )
}