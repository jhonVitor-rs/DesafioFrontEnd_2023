"use client"
import { ReactNode, createContext, useContext, useReducer } from "react"

export enum FilterType {
  All,
  Agency,
  Chatbot,
  DigitalMarketing,
  LeadGeneration,
  PaidMedia
}
export enum ListOrder {
  Default,
  DateAsc,
  DateDesc,
  MostView,
  LessView
}
export enum ListActions {
  SetFilterType,
  SetListOrder,
  SetPage
}

type State = {
  filterType: FilterType
  listOrder: ListOrder
  page: number
}
type Action = {
  type: ListActions
  payload: any
}
type ContextType = {
  state: State
  dispatch: (action: Action) => void
}
type ListProviderProps = {
  children: ReactNode
}

const initialState: State = {
  filterType: FilterType.All,
  listOrder: ListOrder.Default,
  page: 1
}

const ListContext = createContext<ContextType | undefined>(undefined)

const listReducer = (state: State, action: Action) => {
  switch(action.type){
    case ListActions.SetFilterType:
      return {...state, filterType: action.payload}
    case ListActions.SetListOrder:
      return{...state, listOrder: action.payload}
    case ListActions.SetPage:
      return {...state, page: action.payload}
  }
}

export const ListProvider = ({children}: ListProviderProps) => {
  const [state, dispatch] = useReducer(listReducer, initialState)
  const value = {state, dispatch}
  return (
    <ListContext.Provider value={value}>
      {children}
    </ListContext.Provider>
  )
}

export const useFilter = () => {
  const context = useContext(ListContext)
  if(context === undefined){
    throw new Error('useFilter precisa ser usado dentro do ListProvider');
  }
  return context;
}
