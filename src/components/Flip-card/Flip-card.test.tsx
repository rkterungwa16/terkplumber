import { FlipCard } from ".";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Skills } from "types";

const skill: Skills =
  { title:"react js", competences: "UI design & prototyping", icon: "/react_icon.png", iconAlt: "react skill", details:[{
    "title": "peaq website",
    "stack": "redux, jotai & tailwind"
  },
  {
    "title": "LLF",
    "stack": "react-transition-group & strapi"
  }] };


describe('Flipcard component', () => {
  it('recieves icon props ', () => {
    render(<FlipCard skill={skill}/>)
    const icon = screen.getByTestId('icon-data');
    expect(icon.getAttribute('src')).toBe('/_next/image?url=%2Freact_icon.png&w=384&q=75');
  })

  it('recieves competences props ', () => {
    render(<FlipCard skill={skill} />)
    const competences = screen.getByTestId("competences-data").textContent;
    expect(competences).toBe("UI design & prototyping");
  })

  it('recieves title props ', () => {
    render(<FlipCard skill={skill}/>)
    const title = screen.getByTestId('title-data').textContent;
    expect(title).toBe("react js");
  })

  it('recieves alt props ', () => {
    render(<FlipCard skill={skill} />)
    const alt = screen.getByRole('img');
    expect(alt.getAttribute('alt')).toBe('react skill');
  })

  it('recieves skill detail props ', () => {
    render(<FlipCard skill={skill} />)
    const skill_details = screen.getByTestId("details-data");
    expect(skill_details.children.length).toBe(2);
  })


})
