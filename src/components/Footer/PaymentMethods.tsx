import styled from "styled-components"
import Title from "./Title"
import { ReactComponent as Amex } from "../../images/pgto_Amex.svg"
import { ReactComponent as Boleto } from "../../images/pgto_Boleto.svg"
import { ReactComponent as Discover } from "../../images/pgto_Discover.svg"
import { ReactComponent as Elo } from "../../images/pgto_Elo.svg"
import { ReactComponent as Hipercard } from "../../images/pgto_Hipercard.svg"
import { ReactComponent as Mastercard } from "../../images/pgto_Mastercard.svg"
import { ReactComponent as Visa } from "../../images/pgto_Visa.svg"

const PaymentMethods = () => {
  return (
    <div>
      <Title>
        Formas de pagamento
      </Title>

      <Methods>
        <Amex />
        <Boleto />
        <Discover />
        <Elo />
        <Hipercard />
        <Mastercard />
        <Visa />
      </Methods>
    </div>
  )
}

const Methods = styled.div`
  max-width: 240px;
  display: flex;
  flex-wrap: wrap;
`

export default PaymentMethods