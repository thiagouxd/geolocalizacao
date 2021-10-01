import styled from "styled-components"
import { ReactComponent as SneakersLogo } from "../images/logo_nike_snkrs.svg"
import { ReactComponent as ChevronLeft } from "../images/icon_seta_esquerda.svg"
import { ReactComponent as ChevronRight } from "../images/icon_seta_direita.svg"

const Releases = () => {
  return (
    <Container>
      <Button>
        <ChevronLeft />
      </Button>
      <InfoContainer>
        <SneakersLogo />
        <Text>
          Fique por dentro dos lançamentos <a href="https://nike.com">SNKRS</a>
        </Text>
      </InfoContainer>
      <Button>
        <ChevronRight />
      </Button>
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

const Button = styled.button`
  border: 0;
  width: 24px;
  height: 24px;
  background-color: var(--color-neutral-100);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

export default Releases