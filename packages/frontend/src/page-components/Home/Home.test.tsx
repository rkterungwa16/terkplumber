import { Home } from ".";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Works } from "types";

const works: Works[] = [
  {
    "icon": "/media-disco.png",
    "title": "Media Disco",
    "stack": ["React", "Next.js", "Node.js"],
    "summary": "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet..."
  },
  {
    "icon": "/ifit.png",
    "title": "iFit",
    "stack": ["React", "Next.js", "Node.js"],
    "summary": "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet..."
  },
  {
    "icon": "/livesnlivelihood.png",
    "title": "Lives and Livelihood",
    "stack": ["React", "Next.js", "Node.js"],
    "summary": "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet..."
  }
];

describe('Home', () => {
    it('verifies summary props exists ', () => {
      render(<Home summary={"the summary!"} />)
      const theSummary = screen.getByTestId('sum-data').textContent;
      expect(theSummary).toEqual('the summary!');
    })

    it('verifies start props exists ', () => {
      render(<Home start={"My name is"} />)
      const theStart = screen.getByTestId('start-data').textContent;
      expect(theStart).toEqual('My name is');
    })

    it('verifies name props exists ', () => {
      render(<Home name={"Richard Kombol"} />)
      const theName = screen.getByTestId('name-data').textContent;
      expect(theName).toEqual('Richard Kombol');
    })

    it('verifies occupation props exists ', () => {
      render(<Home occupation={"I'm a software developer"} />)
      const theOccupation = screen.getByTestId('oc-data').textContent;
      expect(theOccupation).toEqual("I'm a software developer");
    })

    it('verifies section two title props exists ', () => {
      render(<Home secondSectionTitle={"Second section title"} />)
      const title = screen.getByTestId('sec2title-data').textContent;
      expect(title).toEqual("Second section title");
    });

    it('verifies works has array of length 3  ', () => {
      render(<Home works={works} />)
      const workArr = screen.getByTestId('sec2title-data');
      expect(workArr.children.length).toBe(3);
    });

    // it("verifies there is a valid src attribute value of '/photo.png'", () => {
    //   render(<Home />);
    //   const contactBttn = screen.getByRole("img", { name: "Terungwa Kombol"});
    //   expect(contactBttn.getAttribute('src')).toBe('/_next/image?url=%2Fphoto.png&w=828&q=75');
    // });
})
