import { styled } from "styled-components"
import { useState } from "react"
import { FaPlay } from "react-icons/fa6"
import { Media } from "@/types/media"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, .2);
  border-radius: 1rem;
  width: 20rem;
  height: 15rem;
  padding: 0;
  cursor: pointer;
`

const ImageContainer = styled.div<{isHovered: boolean}>`
  background-image: url('/thumbnail.png');
  position: relative;
  background-size: cover;
  background-position: center;
  height: 11rem;
  border-radius: 1rem 1rem 0 0;
  transition: all .3s;

  &::before {
    z-index: 998;
    content: "";
    border-radius: 1rem 1rem 0 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ isHovered }) =>
      isHovered ? "rgba(1, 4, 214, 0.4)" : "transparent"};
    transition: all 0.3s;
  }

  .play-icon {
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${({ isHovered }) => (isHovered ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 5rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: .9rem;
  font-weight: 600;
  color: var(--color-font-bold);
  padding: 1rem;
  
`

export function Card({id, title}: Media){
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return(
    <Container 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}  
    >
      <ImageContainer 
        isHovered={isHovered}  
      >
        <div className="play-icon">
          <FaPlay />
        </div>
      </ImageContainer>
      <Title>
        {title}
      </Title>
    </Container>
  )
}