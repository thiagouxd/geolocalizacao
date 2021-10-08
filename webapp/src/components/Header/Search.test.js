import { render } from "@testing-library/react";
import Search from "./Search";

it("render correctly", () => {
  const { queryByTestId } = render(<Search />);
  expect(queryByTestId("search")).toBeTruthy();
});
