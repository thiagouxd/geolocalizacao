import styled from "styled-components"
import { biggerThanDesktop } from "../../utils/mediaQueries"
import { ReactComponent as PinIcon } from "../../images/icon_pin_link.svg"

type List = {
  street: string,
  district: string,
  number: string,
  city: string,
  state: string,
  country: string,
  postalCode: string,
  distance: string,
  openingHours: string,
  availability: string,
  lat: string
  lng: string
}

interface Props {
  infos: List,
  setShowMapModal: any,
  setCenterMap: any
}


const Card = ({ infos, setShowMapModal, setCenterMap }: Props) => {
  const handleShowMap = () => {
    setShowMapModal(true);
    setCenterMap({ lat: infos?.lat, lng: infos?.lng })
  }

  return (
    <CustomCard>
      <Header>
        <PrimaryContainer>
          <Title>{infos.street}</Title>
          <Distance>{infos.distance}</Distance>
        </PrimaryContainer>
        <OpenMapButton onClick={handleShowMap}>
          <PinIcon /> <span>Ver no mapa</span>
        </OpenMapButton>
      </Header>

      <Infos>
        <AddressInfo>
          {infos.street}, {infos.number} - {infos.district} <br />
          {infos.city} - {infos.state}, {infos.postalCode}
        </AddressInfo>
        <Text>
          Atendimento:
          <br />
          {infos.openingHours}
        </Text>
        <Status>{infos.availability}</Status>
      </Infos>
    </CustomCard>
  )
}

const Title = styled.h3`
  font-size: 24px;
  margin: 0;
  font-weight: var(--font-weight-semibold);
  white-space: pre-wrap;
`

const Infos = styled.div`
  padding: 24px;
  border-radius: 8px;
  background-color: var(--color-neutral-100);
`

const Text = styled.p`
  font-size: 12px;
  line-height: 18px;
  margin: 8px 0;
  font-style: normal;
  color: var(--color-neutral-500);
  font-weight: var(--font-weight-regular);
`

const AddressInfo = styled.h3`
  font-size: 14px;
  line-height: 18px;
  margin: 0;
  margin-bottom: 8px;
  font-style: normal;
  color: var(--color-neutral-500);
  font-weight: var(--font-weight-regular);
`

const Status = styled.label`
  color: var(--color-success);
  font-size: 12px;
  font-weight: var(--font-weight-bold);
`

const CustomCard = styled.li`
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0;
  }
`

const Header = styled.header`
`

const Distance = styled.p`
  font-size: 16px;
  font-weight: var(--font-weight-semibold);
  margin: 0;
  margin-bottom: 4px;
  white-space: nowrap;
  margin-left: 16px;
`

const OpenMapButton = styled.button`
  font-size: 16px;
  border: none;
  background-color: transparent;
  margin-bottom: 16px;
  cursor: pointer;
  font-weight: var(--font-weight-regular);
  ${biggerThanDesktop} {
    display: none;
  }
  span {
    text-decoration: underline;
  }
`

const PrimaryContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: no-wap;
`

export default Card