import { ChangeEvent, useState } from "react"
import styled from "styled-components"
import { ReactComponent as SearchIcon } from "../../images/icon_lupa.svg"
import { biggerThanDesktop } from "../../utils/mediaQueries"
import Button from "../Button"
import StoreList from "../StoreList"
import nearestStores from "../../utils/nearestStores"
import getClientPosition from "../../api/getClientsPosition"

const Search = () => {
  const [inputAddress, setInputAdress] = useState<string>("");
  const [stores, setStores] = useState<any>()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputAdress(event.target.value)
  }

  const places = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    getClientPosition(inputAddress).then(res => {
      nearestStores(res).then((res: any) => {
        setStores(res)
      })
    })
  }

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
        <Button onClick={places}>Buscar</Button>
      </Form >
      {console.log("Stores: ", stores)}
      {stores && <StoreList stores={stores} />}
    </Container >
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