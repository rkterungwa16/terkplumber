import { SmIcons } from ".";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';


describe('Social media icons', () => {
  it('verifies github link exists ', () => {
    render(<SmIcons />)

    const github = screen.getByRole('link', {
      name: 'github',
    })

    expect(github.getAttribute('href')).toBe('www.github.com');
  })
})
/*
test("github link functionality", () => {
  render(<SmIcons />);
  const contactBttn = screen.getByRole("link", { name: "contact"});
  expect(contactBttn.getAttribute('href')).toBe('/contact');
});

test("twitter link functionality", () => {
  render(<SmIcons />);
  const contactBttn = screen.getByRole("link", { name: "blog"});
  expect(contactBttn.getAttribute('href')).toBe('/blog');
});

test("linkedIn link functionality", () => {
  render(<SmIcons />);
  const contactBttn = screen.getByRole("link", { name: "works"});
  expect(contactBttn.getAttribute('href')).toBe('/works');
});

test("youtube link functionality", () => {
  render(<SmIcons />);
  const contactBttn = screen.getByRole("link", { name: "works"});
  expect(contactBttn.getAttribute('href')).toBe('/works');
});
*/
