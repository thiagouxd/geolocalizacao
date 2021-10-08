import { useCallback, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../images/icon_close.svg"

type Props = {
  showModal: boolean,
  setShowModal: any,
  children: any
}

const Modal = ({ showModal, setShowModal, children }: Props) => {
  const handleCloseModal = () => {
    setShowModal(false);
  }

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setShowModal(false)
    }
  }, [setShowModal]);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return (<>
    <Overlay className={`${showModal && "show"}`}>
      <Content>
        <Header>
          <CloseButton onClick={handleCloseModal}>
            <CloseIcon />
          </CloseButton>
        </Header>
        {children}
      </Content>
    </Overlay>
  </>);
}

export default Modal

const Overlay = styled.div`
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.25);
  z-index:999;
  justify-content: center;
  align-items: center;
  &.show {
    display: flex;
  }
`

const Content = styled.div`
  display: block;
  position: relative;
  max-width: 800px;
  width:calc(100vw - 32px);
  height: 100%;
  max-height: calc(100vh - 32px);
  background-color: var(--color-neutral-100);
  overflow-y: auto;
  margin: 0;
  padding-top: 48px;
  border-radius: 8px;
  box-shadow: 0px 12px 10px rgba(0, 0, 0, 0.3);
`

const CloseButton = styled.button`
  background-color: transparent;
  border: 0;
  padding: 8px;
  margin-right: 16px;
  cursor: pointer;
  &:focus,&:hover {
    opacity: 0.8;
  }
`

const Header = styled.div`
  display: flex;
  height: 48px;
  position: absolute;
  top: 0;
  z-index: 1;
  justify-content: flex-end;
  width: 100%;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
`