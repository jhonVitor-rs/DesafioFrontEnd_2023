'use client'
import { styled } from "styled-components";
import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { FilterType, ListOrder, useFilter } from "@/Context/filterContext";
import { DataResponse, GetAllMedia } from "@/hooks/getAllMedia";
import { AllMedia } from "@/types/media";
import { Card } from "./card";
import { ApplyFilter, ApplyOrder } from "@/hooks/applyFilterOrder";
import client from "@/hooks/apollo-client";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  gap: 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const AllMediaQuery = ({filter, order}: {filter: FilterType, order: ListOrder}) => {
  if(filter === FilterType.All && order === ListOrder.Default){
    return gql`
      query{
        allProducts{
          id
          title
          category
        }
      }`
  } else {
    const getFilter = ApplyFilter(filter)
    const getOrder = ApplyOrder(order)
    return gql`
      query{
        allProducts(${getFilter},${getOrder}){
          id
          title
          category
        }
      }`
  }
}

export function MediaList(){
  const {state} = useFilter()
  const query = AllMediaQuery({ filter: state.filterType, order: state.listOrder });
  const queryKey = ["AllMedia", { filter: state.filterType, order: state.listOrder }];
  const { data, loading, error } = useQuery<AllMedia>(query, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    notifyOnNetworkStatusChange: true,
  });

  if(loading){
    return(
      <Container>

      </Container>
    )
  }

  if(error){
    return(
      <Container>
        
      </Container>
    )
  }
  
  return(
    <Container>
      {data?.allProducts && data?.allProducts.map((media) => (
        <Card key={media.id} id={media.id} title={media.title} category={""} />
      ))}
    </Container>
  )
}
