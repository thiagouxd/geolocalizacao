import styled from "styled-components"
import { ReactComponent as SearchIcon } from "../../images/icon_lupa.svg"
import { smallerThanDesktop } from "../../utils/mediaQueries"

const Search = () => {
  return (
    <InputContainer>
      <SearchIcon />
      <Input data-testid="search" type="search" placeholder="Buscar" />
    </InputContainer>
  )
}

const InputContainer = styled.div`
  display: flex;
  border-radius: 50px;
  width: 176px;
  height: 40px;
  max-width: 464px;
  overflow: hidden;
  position: relative;
  margin: auto 0;
  background-color: var(--color-neutral-200);
  ${smallerThanDesktop} {
    display: none;
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
  height: 100%;
  border: 0;
  height: 40px;
  padding: 16px 16px 16px 40px;
  font-size: 16px;
  color: var(--color-neutral-500);
  outline: 0;
  background-color: transparent;
  &::-webkit-search-cancel-button {
    display: none;
  }
`

export default Search