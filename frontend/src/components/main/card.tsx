import { styled } from "styled-components"
import { useState } from "react"
import { FaPlay } from "react-icons/fa6"

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

interface CardProps{
  id: string
  title: string
  isOpenModal: boolean
  modalEvent: (id: string) => void
}

export function Card({id, title, isOpenModal, modalEvent}: CardProps){
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if(!isOpenModal)
      setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleModal = () => {
    if(!isOpenModal)
      modalEvent(id)
    setIsHovered(false)
  }

  return(
    <Container 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}  
      onClick={handleModal}
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