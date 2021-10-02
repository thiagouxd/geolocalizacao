import styled from "styled-components"
import Card from "./Card"

interface AddressTest {
  address: string[]
}

const Address = (Props: AddressTest) => {
  return (
    <List>
      {/* {Props.address.map((item, index) => (
        <Card key={index} infos={item} />
      ))} */}
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