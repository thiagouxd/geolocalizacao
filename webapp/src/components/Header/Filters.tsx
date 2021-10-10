import styled from "styled-components"

const Filters = () => {
  return (
    <nav>
      <List aria-labelledby="filter-items">
        <FilterList />
      </List>
    </nav>
  )
}

const FilterList = () => (
  <>
    {items.map((item, index) => (
      <Item key={index}>
        <a href="https://nike.com">{item}</a>
      </Item >
    ))}
  </>
)

const List = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0;
`

const Item = styled.li`
  font-size: 16px;
  font-weight: var(--font-weight-semibold);
  height: 100%;
  a {
    height: 100%;
    color: var(--color-primary);
    text-decoration: none;
    padding: 24px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    &:hover, &:focus {
      color: var(--color-neutral-600)
    }
  }
`

export default Filters

// Mock
const items = [
  "Lançamento",
  "Masculino",
  "Feminino",
  "Infantil",
  "Ofertas",
  "SNKRS"
]
