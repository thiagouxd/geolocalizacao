import { render, screen, within } from "@testing-library/react";
import Filters from "./Filters";

describe("Lista de Filtros do Header", () => {
  test("Deve conter 6 itens para efetuar a filtragem", () => {
    render(<Filters />)

    const list = screen.getByRole("list")
    const { getAllByRole } = within(list)
    const items = getAllByRole("listitem")
    expect(items.length).toBe(6)
  })
})