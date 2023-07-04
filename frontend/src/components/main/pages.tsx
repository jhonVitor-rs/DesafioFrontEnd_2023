"use client"
import { ListActions, useFilter } from "@/Context/filterContext";
import { styled } from "styled-components";

interface PageProps{
  isSelected: boolean
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageButton = styled.div<PageProps>`
  display: flex;
  padding: .2rem;
  justify-content: center;
  width: 2rem;
  color: ${PageProps => PageProps.isSelected ? "var(--color-font-selected)" : "var(--color-font-bold)"};
  border-radius: .5rem;
  cursor: pointer;
  border: ${PageProps => PageProps.isSelected ? "1px solid var(--color-font-selected)" : ""};

  &:hover{
    color: var(--color-font-selected);
  }
`

interface props{
  totalItems: number | undefined
}

export function Pagination({totalItems}: props){
  const {state, dispatch} = useFilter()
  const total = totalItems || 1
  const pages = Math.ceil(total / 9)

  const handlePage = (page: number) => {
    if(state.page !== page)
      dispatch({
        type: ListActions.SetPage,
        payload: page
      })
  }

  return(
    <Container>
      <h3>Página: </h3>
      {Array.from({ length: pages }, (_, index) => (
        <PageButton 
          isSelected={state.page === index}
          onClick={() => handlePage(index)}
          key={index}
        >{index + 1}</PageButton>
      ))}
    </Container>
  )
}