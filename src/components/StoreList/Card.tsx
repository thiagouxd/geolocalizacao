import styled from "styled-components"
import { biggerThanDesktop } from "../../utils/mediaQueries"
import { ReactComponent as PinIcon } from "../../images/icon_pin_link.svg"

type List = {
  street: string,
  bairro: string,
  number: string,
  city: string,
  state:string,
  country: string,
  code: string,
}

interface Props {
  infos: List
}

const Card = ({ infos }: Props) => {
  return (
    <CustomCard>
      <Header>
        <PrimaryContainer>
          <Title>{infos.street}</Title>
          <Distance>1.0 km</Distance>
        </PrimaryContainer>
        <OpenMapButton>
          <PinIcon /> <span>Ver no mapa</span>
        </OpenMapButton>
      </Header>

      <Infos>
        <AddressInfo>
          Avenida Paulista, 1227 - Bela Vista <br />
          São Paulo - SP, 01311-200
        </AddressInfo>
        <Text>
          Atendimento:
          <br />
          Segunda a Sábado 10h às 22h | Domingo 11h às 20h
        </Text>
        <Status>Disponível em 4 dias úteis</Status>
      </Infos>
    </CustomCard>
  )
}

const Title = styled.h3`
  font-size: 24px;
  margin: 0;
  font-weight: var(--font-weight-semibold);
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
  flex-wrap: wrap;
`

export default Card