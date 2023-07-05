import { gql, useQuery } from "@apollo/client"
import { FC } from "react"
import Modal from "react-modal"
import { styled } from "styled-components"
import { MdCloudDownload, MdClose } from "react-icons/md"
import { MediaDetails } from "@/types/media"

Modal.setAppElement(':root')

interface ModalProps{
  userId: string
  isOpen: boolean
  onClose: () => void
}

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "45%",
    height: "85%",
    overflow: "auto",
    outline: "none",
    border: "none",
    borderRadius: "1rem",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.15)",
    padding: "0",
    background: "white",
  },
}

const SeparatorTop = styled.hr`
  background-color: var(--color-font-selected);
  height: .3rem;
  width: 100%;
`

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-font-bold);
  position: relative;
`
const color = {
  color: "var(--color-font-selected)",
};

const Close = styled.div`
  position: absolute;
  top: .2rem;
  right: .5rem;
  color: var(--color-font-medium);
  cursor: pointer;

  &:hover{
    color: var(--color-font-selected);
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: .8rem;
  color: var(--color-font-bold);
`

const Separator = styled.hr`
  color: var(--color-font-medium);
  height: 1px;
  width: 100%;
`

const DownloadsOptions = styled.div`
  display: flex;
  gap: 1rem;
`

const Option = styled.div<{color: string}>`
  display: flex;
  gap: .2rem;
  align-items: center;
  border-radius: .2rem;
  color: ${({color}) => color + "ff"};
  background-color: ${({color}) => color + "66"};
  font-weight: 600;
  border: 1px solid ${({ color }) => color};
  cursor: pointer;

  span{
    background-color: ${({color}) => color + "99"};
    padding: .2rem;
  }
`

const DownloadsContainer = styled.div`
  z-index: 999;
  background-color: white;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media(max-width: 780px){
    display: none;
  }
`

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const QueryMedia = (userId: string) => {
  return gql`
    query{
    Product(id: ${userId}){
      title
      url
      description
    }
  }`
}

export const PortalMedia: FC<ModalProps> = ({ userId , isOpen, onClose }) => {
  const query = QueryMedia(userId)
  const { data, loading } = useQuery<MediaDetails>(query, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    notifyOnNetworkStatusChange: true,
  })

  if (loading) {
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
    >
      <LoadingOverlay>
          <LoadingSpinner />
        </LoadingOverlay>
    </Modal>
  }

  return (
    <>
      <Modal 
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
      >
        <SeparatorTop/>
        <TitleContainer>
          <Close onClick={onClose}>
            <MdClose/>
          </Close>
          <p>
            <span style={color}>Webinar: </span>{data?.Product.title}
          </p>
        </TitleContainer>
        <div>
          <iframe
            width="100%"
            height="auto"
            src={data?.Product.url}
            allowFullScreen
          ></iframe>
        </div>
        <Container>
          <h3>Descrição</h3>
          <p>{data?.Product.description}</p>
        </Container>
        <Container>
          <h3>Downloads</h3>
          <Separator/>
          <DownloadsOptions>
            <Option color="#03af81">
              <span><MdCloudDownload/></span>Spreadsheet.xls
            </Option>
            <Option color="#03af81">
              <span><MdCloudDownload/></span>Document.doc
            </Option>
            <Option color="#b4a158">
              <span><MdCloudDownload/></span>Presentation.ppt
            </Option>
          </DownloadsOptions>
        </Container>
      </Modal>
      <DownloadsContainer>
        <Option color="#03af81">
          <span><MdCloudDownload/></span>Spreadsheet.xls
        </Option>
        <Option color="#03af81">
          <span><MdCloudDownload/></span>Document.doc
        </Option>
        <Option color="#b4a158">
          <span><MdCloudDownload/></span>Presentation.ppt
        </Option>
        <Option color="#89939b">
          <span><MdCloudDownload/></span>Folder.zip
        </Option>
      </DownloadsContainer>
    </>
  )
}
