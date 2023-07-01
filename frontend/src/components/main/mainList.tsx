import { styled } from "styled-components";
import { FilterListType } from "./filyterType";
import { OrderList } from "./orderList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 3rem;
`

const FilterBar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
`

export function MainList(){
  return(
    <Container>
      <FilterBar>
        <FilterListType/>
        <OrderList/>
      </FilterBar>
    </Container>
  )
}