'use client'
import { styled } from "styled-components";
import { DataResponse, GetAllMedia } from "@/hooks/getAllMedia";
import React, { useEffect, useState } from "react";
import { useFilter } from "@/Context/filterContext";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export function MediaList(){
  const {state} = useFilter()
  const [mediaData, setMediaData] = useState<DataResponse | undefined>();

  useEffect(() => {
    console.log("useEffect chamado");
    const fetchData = async () => {
      try {
        console.log("Chamando GetAllMedia");
        const data = await GetAllMedia();
        console.log("Dados recebidos:", data);
        setMediaData(data);
      } catch (error) {
        console.log("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [state.filterType]);

  return(
    <Container>
      {mediaData?.allProducts && mediaData?.allProducts.map((media) => (
        <h3 key={media.id}>{media.title}</h3>
      ))}
    </Container>
  )
}
