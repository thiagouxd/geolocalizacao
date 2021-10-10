import { render, screen } from "@testing-library/react"
import Header from './index.tsx'

describe("Renderização de elementos no Header", () => {
  test("Deve conter o logo da nike", () => {
    render(<Header />)
    const logotipoElement = screen.getByLabelText("Logotipo da Nike")
    expect(logotipoElement).toBeInTheDocument()
  });

  test("Deve conter o botão de menu hamburguer", () => {
    render(<Header />)
    const button = screen.getByLabelText("Abrir menu de opções")
    expect(button).toBeInTheDocument()
  });

  test("Deve conter um botão para ir à página de sacola", () => {
    render(<Header />)
    const button = screen.getByLabelText("Ir para Sacola de compras")
    expect(button).toBeInTheDocument()
  });

  test("Deve aparecer uma busca aberta", () => {
    render(<Header />)
    const form = screen.getByLabelText("Buscar por algo")
    expect(form).toBeInTheDocument()
  });
})