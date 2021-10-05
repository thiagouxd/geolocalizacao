import { ChangeEvent, useEffect, useState } from "react"
import styled from "styled-components"
import { ReactComponent as SearchIcon } from "../../images/icon_lupa.svg"
import { biggerThanDesktop } from "../../utils/mediaQueries"
import Button from "../Button"
import StoreList from "../StoreList"
import getPlaces from "../../api/getPlaces"
import addresses from "./stores.json"

const Search = () => {
  const [inputAddress, setInputAdress] = useState<string>();
  const [positionLatClient, setPositionLatClient] = useState<string>()
  const [positionLngClient, setPositionLngClient] = useState<string>()


  let positions;
  let addressesInfo;

  async function getClientPosition(event: { preventDefault: () => void }) {
    event.preventDefault()
    fetch(`http://localhost:8080/input?value=${inputAddress}`)
      .then(res => res.json())
      .then(data => {
        const location = data.candidates[0].geometry.location;
        setPositionLatClient(location.lat)
        setPositionLngClient(location.lng)
      })
  }


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputAdress(event.target.value)
  }

  // const places = () => {
  //   // getPlaces()
  //   positions = addresses.map((item) => { return { ...item.position } })
  //   addressesInfo = addresses.map((item) => {
  //     return (
  //       {
  //         street: item.street,
  //         district: item.district,
  //         number: item.number,
  //         city: item.city,
  //         state: item.state,
  //         country: item.country,
  //         code: item.code,
  //       })
  //   })
  // }

  return (
    <Container>
      <Title>Lojas</Title>
      <Form>
        <InputContainer>
          <SearchIcon />
          <Input type="search"
            placeholder="Busque por endereço ou CEP"
            onChange={(event) => handleChange(event)} />
        </InputContainer>
        <Button onClick={getClientPosition}>Buscar</Button>
      </Form>
      <span>{positionLatClient}</span>
      <span>{positionLngClient}</span>

      {/* <StoreList addresses={addressesInfo} positions={positions} /> */}
    </Container>
  )
}

const Container = styled.div`
  background-color: var(--color-neutral-100);
  padding: 32px 16px;
  ${biggerThanDesktop} {
    padding: 32px 40px;
  }
`

const Title = styled.h2`
  font-weight: var(--font-weight-semibold);
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  width: 100%;
  margin-top: 0;
`

const InputContainer = styled.div`
  display: flex;
  border: 1px solid var(--color-neutral-300);
  border-radius: 50px;
  width: 100%;
  max-width: 464px;
  overflow: hidden;
  position: relative;
  &:focus-within {
    border-color: var(--color-neutral-600);
  }
  svg {
    position: absolute;
    left: 16px;
    height: 16px;
    top: 50%;
    transform: translate(0, -50%);
  }
`

const Input = styled.input`
  font-family: var(--font-family-default);
  width: 100%;
  border: 0;
  height: 48px;
  padding: 16px 16px 16px 40px;
  font-size: 16px;
  color: var(--color-neutral-500);
  outline: 0;
  &::-webkit-search-cancel-button {
    display: none;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  button {
    display: none;
  }
  ${biggerThanDesktop} {
    flex-direction: row;
    justify-content: center;
    button {
      display: flex;
      margin-left: 24px;
    }
  }
`

export default Search