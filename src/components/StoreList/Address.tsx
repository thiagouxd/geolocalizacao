import styled from "styled-components"
import Card from "./Card"

type Infos = {
  street: string,
  bairro: string,
  number: number,
  city: string,
  State: string,
  Country: string,
  code: string,
}

interface Item {
  address: Infos[]
}

interface Props {
  infos: Item[]
}

const Address = ({ infos }: Props) => {
  return (
    <List>
      {infos.map((item, index) => (
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