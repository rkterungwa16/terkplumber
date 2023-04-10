import { Home } from ".";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

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
      render(<Home section_two_title={"About Me"} />)
      const title = screen.getByTestId('title-data').textContent;
      expect(title).toEqual("About Me");
    })

    it("verifies there is a valid src attribute value of '/photo.png'", () => {
      render(<Home />);
      const contactBttn = screen.getByRole("img", { name: "Terungwa Kombol"});
      expect(contactBttn.getAttribute('src')).toBe('/_next/image?url=%2Fphoto.png&w=828&q=75');
    });

    it('verifies my_details props exists ', () => {
      render(<Home my_details={['first test detail', 'second test detail']} />)
      const detail = screen.getAllByTestId('detail-data');
      expect(detail).toHaveLength(2);
    })
})
