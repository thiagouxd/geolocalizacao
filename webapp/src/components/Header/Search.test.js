import { render, screen } from "@testing-library/react"
import Search from "./Search"

test("O input de busca de ter search como type", () => {
  render(<Search />)
  const input = screen.getByPlaceholderText("Buscar")
  expect(input).toHaveProperty("type", "search")
});