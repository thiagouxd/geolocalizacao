import styled from "styled-components"
import Card from "./Card"

type List = {
  street: string,
  bairro: string,
  number: string,
  city: string,
  State: string,
  Country: string,
  code: string,
}

interface Adressess {
  addresses: List[]
}

const Address = ({ addresses }: Adressess) => {
  return (
    <List>
      {addresses.map((item, index) => (
        <Card key={index} infos={item} />
      ))}
    </List>
  )
}

export default Address

const List = styled.ul`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
`