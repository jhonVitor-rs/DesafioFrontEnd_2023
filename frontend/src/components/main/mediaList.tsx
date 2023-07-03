'use client'
import { styled } from "styled-components";
import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useFilter } from "@/Context/filterContext";
import { DataResponse, GetAllMedia } from "@/hooks/getAllMedia";
import { AllMedia } from "@/types/media";
import { Card } from "./card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  gap: 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const AllMediaQuery = gql`
  query{
    allProducts{
      id
      title
      category
    }
  }`

export function MediaList(){
  const {state} = useFilter()
  const {data, loading, error} = useQuery<AllMedia>(AllMediaQuery)

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
