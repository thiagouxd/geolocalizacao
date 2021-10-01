import styled from "styled-components"

const UtilLinks = () => {
  return (
    <LinkList>
      <li>
        <a href="https://nike.com">Encontre Uma Loja Nike</a>
      </li>
      <li>
        <a href="https://nike.com">Cadastre-se para receber novidades</a>
      </li>
      <li>
        <a href="https://nike.com">Mapa do site</a>
      </li>
    </LinkList>
  )
}

const LinkList = styled.ul`
  padding: 0;
  list-style: none;
  margin-top: 16px;
  margin-bottom: 0;
  li {
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  a {
    color: var(--color-neutral-100);
    font-size: 16px;
    font-weight: bold;
    line-height: 150%;
    text-transform: uppercase;
    text-decoration: none;
  }
`

export default UtilLinks