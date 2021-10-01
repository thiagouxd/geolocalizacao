import styled from "styled-components"
import { biggerThanDesktop } from "../../utils/mediaQueries"
import Address from "./Address"

const StoreList = () => {
  return (
    <Addresses>
      <Container>
        <Select>
          <option>Menor distancia</option>
          <option>Aberto 24h</option>
        </Select>

        <Address />
      </Container>

      <Map>map</Map>
    </Addresses>
  )
}

export default StoreList

const Container = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  border-radius: 8px;
  width: 100%;
  background-color: var(--color-neutral-200);
  max-height: 538px;
  box-sizing: border-box;
  overflow-y: auto;
  ${biggerThanDesktop} {
    width: 80%;
  }
`

const Select = styled.select`
  margin-bottom: 32px;
  border: 0;
  background-color: transparent;
  text-align: right;
  -moz-appearance:none;
  -webkit-appearance:none;
  appearance:none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M5.998 5.667a.664.664 0 01-.436-.164L.904 1.51a.665.665 0 01.43-1.177c.165 0 .317.06.433.16L6 4.123 10.23.498a.667.667 0 11.872 1.009l-4.667 4-.005.003a.664.664 0 01-.425.157h-.006z' /></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 14px;
  font-family: "Helvetica Neue";
  min-height: 32px;
  padding-right: 48px;
  font-size: 14px;
  color: var(--color-neutral-700);
  outline: 0;
  ${biggerThanDesktop} {
    width: 150px;
    text-align: left;
  }
`

const Addresses = styled.div`
  display: flex;
  margin-top: 32px;
  ${biggerThanDesktop} {
    max-width: 944px;
    margin: 32px auto 0 auto;
  }
`

const Map = styled.div`
  display: none;
  height: 538px;
  background-color: red;
  width: 100%;
  margin-left: 24px;
  ${biggerThanDesktop} {
    display: flex;
  }
`