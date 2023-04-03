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
})
