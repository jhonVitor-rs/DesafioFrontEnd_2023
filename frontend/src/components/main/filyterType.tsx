import { useFilter } from "@/Context/filterContext";
import styled from "styled-components";
import { FilterType, ListActions } from "@/Context/filterContext";

interface FilterItemProps {
  selected: boolean
}

const FilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  list-style: none;
`

const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-weight: 600;
  font-size: .8rem;
  line-height: 2rem;
  text-align: center;
  padding: 0 1.2rem;
  border-radius: 10rem;
  cursor: pointer;
  border: 1px solid ${props => props.selected ? 'var(--color-font-selected)' : 'var(--color-font-bold)'};
  color: ${props => props.selected ? 'white' : 'var(--color-font-bold)'};
  background-color: ${props => props.selected ? 'var(--color-font-selected)' : ''};

  &:hover {
    border: 1px solid ${props => props.selected ? 'var(--color-font-cyan)' : 'var(--color-font-selected)'};
    color: ${props => props.selected ? 'var(--color-font-cyan)' : 'var(--color-font-selected)'};
  }
`

export function FilterListType() {
  const {state, dispatch} = useFilter()

  const handleFilter = (value: FilterType) => {
    const payload = state.filterType === value ? FilterType.All : value
    dispatch({
      type: ListActions.SetPage,
      payload: 0
    })
    dispatch({
      type: ListActions.SetFilterType,
      payload: payload
    })
  }

  return(
    <FilterList>
      <FilterItem 
        selected={state.filterType === FilterType.Agency}
        onClick={() => handleFilter(FilterType.Agency)}
      >Agências</FilterItem>
      <FilterItem 
        selected={state.filterType === FilterType.Chatbot}
        onClick={() => handleFilter(FilterType.Chatbot)}
      >Chatbot</FilterItem>
      <FilterItem 
        selected={state.filterType === FilterType.DigitalMarketing}
        onClick={() => handleFilter(FilterType.DigitalMarketing)}
      >Marketing Digital</FilterItem>
      <FilterItem 
        selected={state.filterType === FilterType.LeadGeneration}
        onClick={() => handleFilter(FilterType.LeadGeneration)}
      >Geração de Leads</FilterItem>
      <FilterItem 
        selected={state.filterType === FilterType.PaidMedia}
        onClick={() => handleFilter(FilterType.PaidMedia)}
      >Midia Paga</FilterItem>
    </FilterList>
  )
}