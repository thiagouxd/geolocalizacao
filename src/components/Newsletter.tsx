import styled from "styled-components"
import { ReactComponent as LogoNike } from "../images/logo_nike.svg"
import Button from "./Button"

const Newsletter = () => {
  return (
    <Container>
      <LogoNike />
      <Title>Receba as novidades da nike</Title>
      <Paragraph>Cadastre-se e seja um dos primeiros a saber de todas as novidades e ofertas.</Paragraph>
      <Button>Cadastre-se</Button>
    </Container>
  )
}

const Container = styled.div`
  padding: 64px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-neutral-200);
`

const Title = styled.h2`
  font-size: 18px;
  color: var(--color-neutral-700);
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 0;
  `

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 0;
  line-height: 24px;
`

export default Newsletter