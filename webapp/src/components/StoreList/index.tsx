import styled from "styled-components"
import { biggerThanDesktop } from "../../utils/mediaQueries"
import Address from "./Address"
import Map from "../Map"

const StoreList = (props: any) => {
  const { stores } = props

  return (
    <Addresses>
      <Container>
        <Select>
          <option>Menor distância</option>
          <option>Aberto 24h</option>
        </Select>

        <Address stores={stores} />
      </Container>

      <MapContainer>
        <Map stores={stores} />
      </MapContainer>
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
  box-sizing: border-box;
  overflow-y: auto;
  width: 100%;
  ${biggerThanDesktop} {
    margin-right: 0;
    width: 80%;
  }
  `

const MapContainer = styled.div`
  display: none;
  width: 100%;
  margin-left: 24px;
  ${biggerThanDesktop} {
    display: flex;
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
  font-family: var(--font-family-default);
  min-height: 32px;
  padding-right: 48px;
  font-size: 14px;
  color: var(--color-neutral-700);
  outline: 0;
  ${biggerThanDesktop} {
    width: 160px;
    text-align: left;
  }
`

const Addresses = styled.div`
  display: flex;
  margin-top: 32px;
  height: 538px;
  justify-content: center;
  ${biggerThanDesktop} {
    max-width: 944px;
    margin: 32px auto 0 auto;
  }
`