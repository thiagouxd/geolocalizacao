
// import styled from 'styled-components';
import styled from 'styled-components';
import Accordion from './Accordion';

const HelpAndAbout = () => {
  return (
    <>
      <Divider />
      <Accordion aboutLinks={aboutLinks} helpLinks={helpLinks} />
    </>
  );
};

const Divider = styled.hr`
  border-color: var(--color-neutral-600);
  margin: 24px 0;
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