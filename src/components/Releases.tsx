import styled from "styled-components"
import { ReactComponent as SneakersLogo } from "../images/logo_nike_snkrs.svg"

const Releases = () => {
  return (
    <Container>
      <button>-</button>
      <InfoContainer>
        <SneakersLogo />
        <Text>
          Fique por dentro dos lançamentos <a href="https://nike.com">SNKRS</a>
        </Text>
      </InfoContainer>
      <button>+</button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 784px;
  margin: 0 auto;
  padding: 8px 16px;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`

const textColor = "var(--color-neutral-700)"

const Text = styled.p`
  color: ${textColor};
  text-align: center;
  margin: 0 16px;
  font-size: 14px;
  a {
    color: ${textColor}
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Releases