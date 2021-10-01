import Collapsible from 'react-collapsible';
import styled from 'styled-components';
import { ReactComponent as PlusIcon } from "../../../images/icon_plus.svg"
import { ReactComponent as MinusIcon } from "../../../images/icon_minus.svg"

type ItemAccordion = {
  list: Links[];
  title: string
}

type Links = {
  name: string;
  link: string;
}

interface Props {
  helpLinks: ItemAccordion;
  aboutLinks: ItemAccordion
}

const Accordion = ({ helpLinks, aboutLinks }: Props) => {
  const items = [helpLinks, aboutLinks]

  return (
    <Container>
      {items.map((item, index) => (
        <Collapsible key={`item${index}`} trigger={item.title}>
          <LinkList>
            <Icons>
              <PlusIcon className="closed-icon" />
              <MinusIcon className="open-icon" />
            </Icons>
            {item.list.map((link, index) => (
              <li key={`link${index}`}>
                <Link href={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </LinkList>
        </Collapsible>
      ))}
    </Container>
  )
}

const border = "1px solid var(--color-neutral-200)"

const Container = styled.div`
  .Collapsible {
    position: relative;
    .is-closed ~ .Collapsible__contentOuter {
      .open-icon {
        display: none
      }
      .closed-icon {
        display: block
      }
    }
    .is-open ~ .Collapsible__contentOuter {
      .open-icon {
        display: block
      }
      .closed-icon {
        display: none
      }
    }
  }
  
  .Collapsible__trigger {
    border-top: ${border};
    width: 100%;
    display: flex;
    color: var(--color-neutral-100);
    font-size: 16px;
    font-weight: 500;
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
  text-decoration: none;
`

const LinkList = styled.ul`
  list-style: none;
  padding: 0px 16px 16px 16px;
  li {
    margin-bottom: 8px;
  }
`

const Icons = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 16px;
  pointer-events: none;
`

export default Accordion
