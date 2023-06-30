"use client"
import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleMenu = styled.h2`
  font: inherit;
  font-weight: 800;
  color: var(--color-font-bold);
  margin-bottom: 2rem;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Item = styled.li`

`

const TitleItem = styled.a`
  font: inherit;
  font-weight: 600;
  color: var(--color-font-light);
  text-decoration: none;
  transition: all .2s;

  &:hover {
    color: var(--color-font-selected)
  }
`

interface iLinks{
  label: string
  url: string
}

interface LinkProps{
  title: string
  links: iLinks[]
}

function LinkList({ title, links }: LinkProps) {
  return (
    <Container>
      <TitleMenu>{title}</TitleMenu>
      <List>
        {links.map((link, index) => (
          <Item key={index}>
            <TitleItem href={link.url}>{link.label}</TitleItem>
          </Item>
        ))}
      </List>
    </Container>
  );
}

export default LinkList;
