import styled from "styled-components"
import Card from "./Card"

const Address = () => {
  return (
    <List>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
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