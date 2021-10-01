import styled from "styled-components"
import { ReactComponent as SearchIcon } from "../images/icon_lupa.svg"

const Search = () => {
  return (
    <Container>
      <Title>Lojas</Title>
      <Form>
        <InputContainer>
          <SearchIcon />
          <Input type="search" placeholder="Busque por endereço ou CEP" />
        </InputContainer>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  background-color: var(--color-neutral-100);
  padding: 32px 16px;
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
  svg {
    position: absolute;
    left: 16px;
    height: 16px;
    top: 50%;
    transform: translate(0, -50%);
  }
`

const Input = styled.input`
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
`

export default Search