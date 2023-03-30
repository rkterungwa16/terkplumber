import { SmIcons } from ".";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';


describe('Social media icons', () => {
  it('verifies github link exists ', () => {
    render(<SmIcons />)

    const github = screen.getByRole('link', {
      name: 'github',
    })

    expect(github.getAttribute('href')).toBe('https://www.github.com/rkterungwa16');
  })

  it('verifies twitter link exists ', () => {
    render(<SmIcons />)

    const twitter = screen.getByRole('link', {
      name: 'twitter',
    })

    expect(twitter.getAttribute('href')).toBe('https://www.twitter.com/terkplumber');
  })

  it('verifies linkedin link exists ', () => {
    render(<SmIcons />)

    const linkedIn = screen.getByRole('link', {
      name: 'linkedIn',
    })

    expect(linkedIn.getAttribute('href')).toBe('https://www.linkedin.com/in/terungwa-kombol-1034574a');
  })

  it('verifies youtube link exists ', () => {
    render(<SmIcons />)

    const youTube = screen.getByRole('link', {
      name: 'youtube',
    })

    expect(youTube.getAttribute('href')).toBe('https://www.youtube.com');
  })
})
