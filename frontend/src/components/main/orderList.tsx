import { useState } from "react";
import { styled } from "styled-components";
import { BiCaretDown } from "react-icons/bi"
import { ListOrder, useFilter, ListActions } from "@/Context/filterContext";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  position: relative;

  p {
    color: var(--color-font-bold);
    font-weight: 600;
    font-family: inherit;
  }
`

const BoxSelect = styled.div`
  border: 2px solid var(--color-font-bold);
  width: 15rem;
  height: 2.3rem;
  border-radius: .5rem;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  span{
    padding: 0 .5rem;
    font-weight: 600;
    color: var(--color-font-medium)
  }

  p{
    position: absolute;
    right: .5rem;
  }
`

const ListOptions = styled.ul`
  list-style: none;
  position: absolute;
  width: 14rem;
  right: .5rem;
  top: 2.3rem;
  padding: 1rem;
  line-height: 2.5rem;
  border-radius: 0 0 1rem 1rem;
  background-color: var(--color-background-secondary);
  transition: all .3s;
  z-index: 1000;

  li {
    cursor: pointer;
    color: var(--color-font-light);
    &:hover{
      color: var(--color-font-selected);
    }
  }
`

export function OrderList(){
  const [isOpen, setIsOpen] = useState(false)
  const [order, setOrder] = useState('')
  const {dispatch} = useFilter()

  const options = [
    {title: 'Mais recentes', order: ListOrder.DateDesc},
    {title: 'Mais antigos', order: ListOrder.DateAsc},
    {title: 'Mais visualizados', order: ListOrder.MostView},
    {title: 'Menos visualizados', order: ListOrder.LessView}
  ]

  const handleOrder = ({title, order}: {title: string, order:ListOrder}) => {
    setOrder(title)
    setIsOpen(false)
    dispatch({
      type: ListActions.SetListOrder,
      payload: order
    })
  }

  return (
    <Container>
      <p>Ordernar por: </p>
      <BoxSelect onClick={() => setIsOpen(!isOpen)}>
        <span>
          {order}
        </span>
        <p>
          <BiCaretDown size={'2rem'}/>
        </p>
      </BoxSelect>
      {isOpen && 
        <ListOptions>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOrder({title: option.title, order: option.order})}>{option.title}</li>
          ))}
        </ListOptions>
      }
    </Container>
  )
}