import { useState } from "react"
import styled from "styled-components"
import Card from "./Card"

const Address = (props: any) => {
  const { addresses, setShowMapModal } = props

  return (
    <CustomList>
      {addresses && addresses.map((item: any, index: number) => (
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