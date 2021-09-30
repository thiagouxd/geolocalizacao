import styled from "styled-components";
import Accordion from "./Accordion";
import CopyrightText from "./CopyrightText";
import PaymentMethods from "./PaymentMethods";
import SocialMedias from "./SocialMedias";

const Footer = () => {
  return (
    <Container>
      <Divider />
      <Accordion />
      <SocialMedias />
      <PaymentMethods />
      <Divider />
      <CopyrightText />
    </Container>
  )
}

export default Footer;

const Container = styled.footer`
  background-color: var(--color-neutral-700);
  padding: 16px;
`

const Divider = styled.hr`
  border-color: var(--color-neutral-600);
  margin: 24px 0;
`