import styled from 'styled-components';
import { biggerThanDesktop } from '../../../utils/mediaQueries';
import Accordion from './Accordion';
import Title from '../Title';
import LinkList from './LinkList';

const HelpAndAbout = () => {
  const items = [helpLinks, aboutLinks]

  return (
    <>
      <Divider />

      {items.map((item, index) => (
        <ItemContainer>
          <Title>{item.title}</Title>
          <LinkList list={item.list} />
        </ItemContainer>
      ))}

      <AccordionContainer>
        <Accordion items={items} />
      </AccordionContainer>
    </>
  );
};

const Divider = styled.hr`
  border: 0;
  border-bottom: 1px solid var(--color-neutral-600);
  margin: 24px 0;
  ${biggerThanDesktop} {
    display: none;
  }
`

const AccordionContainer = styled.div`
  ${biggerThanDesktop} {
    display: none;
  }
  `

const ItemContainer = styled.div`
  display: none;
  ${biggerThanDesktop} {
    display: flex;
    flex-direction: column;
    width: 224px;
    ul {
      padding-left: 0px;
      margin: 0;
    }
  }
`

export default HelpAndAbout;

// Mock de links
const helpLinks = {
  title: "Ajuda",
  list: [
    {
      name: "Dúvidas Gerais",
      link: "https://nike.com"
    },
    {
      name: "Encontre seu Tamanho",
      link: "https://nike.com"
    },
    {
      name: "Entregas",
      link: "https://nike.com"
    },
    {
      name: "Pedidos",
      link: "https://nike.com"
    },
    {
      name: "Trocas e Devoluções",
      link: "https://nike.com"
    },
    {
      name: "Editar consentimento",
      link: "https://nike.com"
    },
    {
      name: "Preferências de Cookie",
      link: "https://nike.com"
    },
    {
      name: "Pagamentos",
      link: "https://nike.com"
    },
    {
      name: "Produtos",
      link: "https://nike.com"
    },
    {
      name: "Corporativo",
      link: "https://nike.com"
    },
    {
      name: "Fale Conosco",
      link: "https://nike.com"
    },
  ]
}

// Mock de links
const aboutLinks = {
  title: "Sobre a nike",
  list: [
    {
      name: "Feito para Jogar",
      link: "https://nike.com"
    },
    {
      name: "Sustentabilidade",
      link: "https://nike.com"
    }
  ]
}