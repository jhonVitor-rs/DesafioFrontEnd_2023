import { styled } from "styled-components"
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const TitleContacts = styled.h2`
  font: inherit;
  font-weight: 800;
  color: var(--color-font-bold);
  margin-bottom: 2rem;
`

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
`

const AnchorButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: var(color-background-secondary);
  color: var(--color-font-medium);
  border-radius: 50%;
  transition: all .3s;

  &:hover {
    background-color: var(--color-font-selected);
  }
`

const ContactsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
`

const Contact = styled.p`
  font: inherit;
  font-weight: 400;
  color: var(--color-font-light);
`

const ContactName = styled.span`
  color: var(--color-font-bold);
` 

export function Contacts(){
  return(
    <Container>
      <TitleContacts>Siga a Leadster</TitleContacts>
      <SocialMedia>
        <AnchorButton href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </AnchorButton>
        <AnchorButton href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </AnchorButton>
        <AnchorButton href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </AnchorButton>
      </SocialMedia>
      <ContactsList>
        <Contact><ContactName>E-mail:</ContactName> contato@leadster.com.br</Contact>
        <Contact><ContactName>Telefone:</ContactName> (42) 98828-9851</Contact>
      </ContactsList>
    </Container>
  )
}