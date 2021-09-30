import styled from "styled-components"
import { ReactComponent as NikeLogo } from "../../images/logo_nike.svg"
import { ReactComponent as BagIcon } from "../../images/icon_sacola.svg"
import { ReactComponent as MenuHamburgerIcon } from "../../images/icon_hamburger.svg"

const Header = () => {
  return (
    <Container>
      <Logo />

      <SecondaryContainer>
        <HeaderButton>
          <BagIcon />
        </HeaderButton>

        <HeaderButton>
          <MenuHamburgerIcon />
        </HeaderButton>

      </SecondaryContainer>
    </Container>
  )
}

const Container = styled.header`
  display:flex;
  height: 66px;
  padding: 0 16px;
  background-color: var(--color-neutral-100);
`

const SecondaryContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const Logo = styled(NikeLogo)`
  margin: auto;
  width: 64px;
`

const HeaderButton = styled.button`
  background-color: transparent;
  border: 0;
  outline: 0;
  margin-left: 24px;
  padding: 0;
  cursor: pointer;
`

export default Header