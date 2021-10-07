import styled from "styled-components"

type Links = {
  name: string;
  link: string;
}

interface Props {
  list: Links[]
}

const LinkList = ({ list }: Props) => {
  return (
    <List>
      {list.map((item, index) => (
        <li key={`link${index}`}>
          <Link href={item.link}>
            {item.name}
          </Link>
        </li>
      ))}
    </List>
  )
}

const Link = styled.a`
  color: var(--color-neutral-100);
  font-size: 12px;
  text-decoration: none;
`

const List = styled.ul`
  list-style: none;
  padding: 0px 16px 16px 16px;
  li {
    margin-bottom: 8px;
  }
`

export default LinkList