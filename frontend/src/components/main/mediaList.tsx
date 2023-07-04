'use client'
import { styled } from "styled-components";
import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { FilterType, ListOrder, useFilter } from "@/Context/filterContext";
import { AllMedia } from "@/types/media";
import { Card } from "./card";
import { ApplyFilter, ApplyOrder } from "@/hooks/applyFilterOrder";
import { Pagination } from "./pages";
import { PortalMedia } from "./portalMedia";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .cards {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;
    gap: 2rem;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`


const Separator = styled.hr`
  color: var(--color-font-medium);
  height: 1px;
  width: 100%;
`

const AllMediaQuery = ({filter, order, page}: {filter: FilterType, order: ListOrder, page: number}) => {
  const perPage = 9
  const sortOrder = ApplyOrder(order)

  if(filter === FilterType.All){
    return gql`
      query {
        allProducts(page: ${page}, perPage: ${perPage}, ${sortOrder}){
          id
          title
          category
        }_allProductsMeta{
          count
        }
      }`
  }else{
    const sortFilter = ApplyFilter(filter)
    return gql`
      query {
        allProducts(page: ${page}, perPage: ${perPage}, ${sortFilter}, ${sortOrder}){
          id
          title
          category
        }_allProductsMeta(${sortFilter}){
          count
        }
      }`
  }
}

export function MediaList(){
  const {state} = useFilter()
  const query = AllMediaQuery({ filter: state.filterType, order: state.listOrder, page: state.page});
  const { data, loading, error } = useQuery<AllMedia>(query, {
    variables: {
      page: state.page,
      perPage: 9,
      sortOrder: ApplyOrder(state.listOrder),
      sortFilter: ApplyFilter(state.filterType)
    },
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    notifyOnNetworkStatusChange: true,
  });

  const [isOpenModal, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState<string>('')
  const handleOpenModal = (id: string) => {
    setModalData(id)
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  if(loading){
    return(
      <Container>

      </Container>
    )
  }
  
  console.log(data?._allProductsMeta.count)
  return(
    <Container>
      {isOpenModal &&
        <PortalMedia
          userId={modalData}
          isOpen={isOpenModal}
          onClose={handleCloseModal}
        />
      }
      <div className="cards">
        {data?.allProducts && data?.allProducts.map((media) => (
          <Card 
            key={media.id} 
            id={media.id} 
            title={media.title}
            isOpenModal={isOpenModal}
            modalEvent={handleOpenModal} 
          />
        ))}
      </div>
      <Separator/>
      <Pagination totalItems={data?._allProductsMeta.count}/>
    </Container>
  )
}
