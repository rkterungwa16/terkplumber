import { PageHeader } from ".";
import { render, screen } from "@testing-library/react";

test("logo presence when page header is rendered", ()=> {
  render(<PageHeader />);
  const logo = screen.getByAltText("Logo");
  expect(logo).toMatch("Logo");
})
