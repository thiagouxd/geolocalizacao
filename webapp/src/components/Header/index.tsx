import styled from "styled-components"
import { ReactComponent as NikeLogo } from "../../images/logo_nike.svg"
import { ReactComponent as BagIcon } from "../../images/icon_sacola.svg"
import { ReactComponent as MenuHamburgerIcon } from "../../images/icon_hamburger.svg"
import { biggerThanDesktop } from "../../utils/mediaQueries"
import Filters from "./Filters"
import Search from "./Search"

const Header = () => {
  return (
    <Container>
      <Logo aria-label="Logotipo da Nike" />

      <PrimaryContainer>
        <Filters />
      </PrimaryContainer>

      <SecondaryContainer>
        <Search />
        <HeaderButton aria-label="Ir para Sacola de compras">
          <BagIcon aria-hidden="true" />
        </HeaderButton>

        <HeaderButton aria-label="Abrir menu de opções" className="hamburger-button">
          <MenuHamburgerIcon title="Menu hamburger icon" aria-hidden="true" />
        </HeaderButton>

      </SecondaryContainer>
    </Container >
  )
}

const Container = styled.header`
  display: flex;
  height: 66px;
  padding: 0 16px;
  background-color: var(--color-neutral-100);
  position: sticky;
  z-index: 1;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  ${biggerThanDesktop} {
    top: 56px;
    padding: 0 40px;
    justify-content: space-between;
  }
`

const PrimaryContainer = styled.nav`
  display: none;
  ${biggerThanDesktop} {
    display: flex;
  }
`

const SecondaryContainer = styled.div`
  display: flex;
  ${biggerThanDesktop} {
    .hamburger-button {
      display: none;
    }
  }
`

const Logo = styled(NikeLogo)`
  margin: auto 0;
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