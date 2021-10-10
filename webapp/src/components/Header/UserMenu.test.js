import { render, screen, within } from "@testing-library/react"
import UserMenu from "./UserMenu"

describe("Navegação no menu do usuário", () => {
  test("Deve conter 4 opções para o usuário", () => {
    render(<UserMenu />)

    const list = screen.getByRole("list")
    const { getAllByRole } = within(list)
    const items = getAllByRole("listitem")
    expect(items.length).toBe(4)
  });

  test("Deve conter um elemento de navegação", () => {
    render(<UserMenu />)

    const navigation = screen.getByRole("navigation")
    expect(navigation).toBeInTheDocument()
  })
})