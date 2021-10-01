import styled from "styled-components";
import { biggerThanDesktop } from "../../utils/mediaQueries";

const getYear = () => {
  const date = new Date();
  return date.getFullYear();
}

const linksList = [
  "Brasil", "Política de Privacidade", "Termos de Uso"
]

const CopyrightText = () => {

  return (
    <Container>
      <Links>
        {linksList.map((link, index) => (
          <li key={index}>
            <a href="https://nike.com">{link}</a>
          </li>
        ))}
      </Links>

      <Text>
        © {getYear()} Nike. Todos os direitos reservados. Fisia Comércio de Produtos Esportivos
        Ltda - CNPJ: 59.546.515/0016-10 Rua José Semião Rodrigues Agostinho, 1370 - Galpão
        Unidade 17 - Nível 0, 1 e 2 - CEP 06833-300 - Embu das Artes/SP.
      </Text>
    </Container>
  )
}


const Text = styled.p`
  color: var(--color-neutral-300);
  text-align: center;
  line-height: 18px;
  font-size: 12px;
  margin-top: 24px;
`

const Links = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin: 0 auto;
  margin-bottom: 16px;
  max-width: 336px;
  a {
    color: var(--color-neutral-300)
  }
`

const Container = styled.div`
  ${biggerThanDesktop} {
    max-width: 1024px;
    margin: 0 auto;
  }
`



export default CopyrightText