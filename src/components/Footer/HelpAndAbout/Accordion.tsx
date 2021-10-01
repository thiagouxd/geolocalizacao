import Collapsible from 'react-collapsible';
import styled from 'styled-components';

interface List {
  name: string;
  link: string;
}

interface Props {
  helpLinks: List[]
  aboutLinks: List[]
}

const Accordion = ({ helpLinks, aboutLinks }: Props) => {
  return (
    <Container>
      <Collapsible trigger="Ajuda">
        <LinkList>
          {helpLinks.length && helpLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </LinkList>
      </Collapsible>

      <Collapsible trigger="Sobre a nike">
        <LinkList>
          {aboutLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </LinkList>
      </Collapsible>
    </Container>
  )
}

const border = "1px solid var(--color-neutral-200)"

const Container = styled.div`
  .Collapsible__trigger {
    border-top: ${border};
    width: 100%;
    display: flex;
    color: var(--color-neutral-100);
    font-size: 16px;
    font-weight: bold;
    line-height: 150%;
    text-transform: uppercase;
    padding: 16px 0;
    cursor: pointer;
  }
  border-bottom: ${border};
  margin-bottom: 24px;
`

const Link = styled.a`
  color: var(--color-neutral-100);
  font-size: 12px;
  `

const LinkList = styled.ul`
  list-style: none;
  padding: 8px 16px 16px 16px;
  li {
    margin-bottom: 8px;
  }
`

export default Accordion
