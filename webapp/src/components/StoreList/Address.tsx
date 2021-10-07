import { useState } from "react"
import styled from "styled-components"
import Map from "../Map"
import Modal from "../Map/Modal"
import Card from "./Card"

const Address = (props: any) => {
  const { stores } = props
  const [showMapModal, setShowMapModal] = useState<boolean>(false)

  return (
    <CustomList>
      <Modal showModal={showMapModal} setShowModal={setShowMapModal}>
        <Map stores={stores} />
      </Modal>
      {stores && stores.map((item: any, index: number) => (
        <Card setShowMapModal={setShowMapModal} key={index} infos={item} />
      ))}
    </CustomList>
  )
}

export default Address

const CustomList = styled.ul`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
`