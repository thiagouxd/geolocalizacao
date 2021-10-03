import styled from "styled-components"
import Card from "./Card"

type List = {
  street: string,
  bairro: string,
  number: string,
  city: string,
  state:string,
  country: string,
  code: string,
}

interface Adressess {
  addresses: List[]
}

const Address = ({ addresses }: Adressess) => {
  return (
    <CustomList>
      {addresses.map((item, index) => (
        <Card key={index} infos={item} />
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