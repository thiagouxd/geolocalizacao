import Title from "./Title"
import { ReactComponent as Facebook } from "../../images/logo_redes_sociais_facebook.svg"
import { ReactComponent as Instagram } from "../../images/logo_redes_sociais_instagram.svg"
import { ReactComponent as Youtube } from "../../images/logo_redes_sociais_youtube.svg"
import styled from "styled-components"

const SocialMedias = () => {
  return (
    <div>
      <Title>
        Redes Sociais
      </Title>

      <SocialMediasList>
        <a aria-label="Abrir página do facebook" href="https://facebook.com/nike" target="_blank" rel="noreferrer">
          <Facebook aria-hidden="true" />
        </a>
        <a aria-label="Abrir página do instagram" href="https://instagram.com/nike" target="_blank" rel="noreferrer">
          <Instagram aria-hidden="true" />
        </a>
        <a aria-label="Abrir página do youtube" href="https://yotube.com/nike" target="_blank" rel="noreferrer">
          <Youtube aria-hidden="true" />
        </a>
      </SocialMediasList>
    </div>
  )
}

const SocialMediasList = styled.div`
  a {
    opacity: 0.7;
  }
`

export default SocialMedias