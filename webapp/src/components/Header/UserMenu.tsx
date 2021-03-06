import styled from "styled-components"
import { ReactComponent as SnksLogo } from "../../images/logo_snkrs.svg"
import { ReactComponent as JordanLogo } from "../../images/logo_Jordan.svg"
import { smallerThanDesktop } from "../../utils/mediaQueries"

const UserMenu = () => {
  return (
    <Container>
      <Logo>
        <JordanLogo />
        <SnksLogo />
      </Logo>

      <List aria-label="Lista de itens no menu">
        {menuList.map((item, index) => {
          return (
            <MenuItem key={index} aria-label="Item do menu">
              <a href="https://nike.com.br">{item}</a>
            </MenuItem>
          )
        })}
      </List>
    </Container>
  )
}

export default UserMenu

const Container = styled.nav`
  display: flex;
  z-index: 1;
  position: sticky;
  top: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 56px;
  background-color: var(--color-neutral-200);
  ${smallerThanDesktop} {
    display: none;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  svg:first-child {
    margin-right: 16px;
  }
`

const List = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  `

const MenuItem = styled.li`
  position: relative;
  padding: 0 16px;
  &::after {
    content: "";
    height: 16px;
    width: 1px;
    background-color: var(--color-neutral-500);
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
  }
  a {
    color: var(--color-neutral-500);
    text-decoration: none;
    font-size: 12px;
    &:hover, &:focus {
      color: var(--color-neutral-700);
    }
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
`

//Mock
const menuList = [
  "Ajuda", "Acompanhe seu Pedido", "Junte-se a nós", "Entrar"
]