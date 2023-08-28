import Card from ".";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Works } from "types";
const work: Works =
    {
      "icon": "/media-disco.png",
      "title": "Media Disco",
      "stack": ["React"," Next.js", "Node.js"],
      "summary": "Lorem ipsum dolor..."
    }



describe('Card component', () => {

  it('adds correct src attribute ', () => {
    render(<Card work={work}/>)
    const icon = screen.getByTestId('icon-data');
    expect(icon.getAttribute('src')).toBe('/media-disco.png');
  });

  it('adds correct alt attribute ', () => {
    render(<Card work={work}/>)
    const icon = screen.getByTestId('icon-data');
    expect(icon.getAttribute('alt')).toBe('Media Disco');
  });

  it('recieves title props ', () => {
    render(<Card work={work}/>)
    const title = screen.getByTestId('cardTitle-data').textContent;
    expect(title).toBe("Media Disco");
  });

  it('verifies stack has array of length 3  ', () => {
    render(<Card work={work} />)
    const stackArr = screen.getByTestId('cardStack-data');
    expect(stackArr.children.length).toBe(3);
  });

  it('recieves summary props ', () => {
    render(<Card work={work}/>)
    const summary = screen.getByTestId('cardSum-data').textContent;
    expect(summary).toBe("Lorem ipsum dolor...");
  });

})
