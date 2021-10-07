import styled from "styled-components";
import HelpAndAbout from "./HelpAndAbout";
import CopyrightText from "./CopyrightText";
import PaymentMethods from "./PaymentMethods";
import SocialMedias from "./SocialMedias";
import UtilLinks from "./UtilLinks";
import { biggerThanDesktop } from "../../utils/mediaQueries";

const Footer = () => {
  return (
    <Container>
      <InfosContainer>
        <UtilLinks />
        <HelpAndAbout />
        <SecondaryContainer>
          <SocialMedias />
          <PaymentMethods />
        </SecondaryContainer>
      </InfosContainer>

      <Divider />

      <CopyrightText />
    </Container>
  )
}

export default Footer;

const Container = styled.footer`
  background-color: var(--color-neutral-700);
  padding: 16px;
  ${biggerThanDesktop} {
    padding: 16px 40px;
  }
`

const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${biggerThanDesktop} {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1024px;
    margin: 0 auto;
  }
`

const SecondaryContainer = styled.div`
  ${biggerThanDesktop} {
      width: 224px;
  }
`

const Divider = styled.hr`
  border-color: var(--color-neutral-600);
  margin: 24px 0;
`