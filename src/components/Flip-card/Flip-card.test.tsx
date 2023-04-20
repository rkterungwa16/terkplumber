import { FlipCard } from ".";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';


describe('Flipcard component', () => {
  it('recieves front image ', () => {
    render(<FlipCard frontImage={"/react_skill.png"} backImage="/skill_card_back.png" altVal="React skill" />)
    const front = screen.getByTestId('front');
    expect(front.getAttribute('src')).toBe('/_next/image?url=%2Freact_skill.png&w=750&q=75');
  })

  it('recieves back image ', () => {
    render(<FlipCard frontImage={"/react_skill.png"} backImage="/skill_card_back.png" altVal="React skill" />)
    const back = screen.getByTestId('back');
    expect(back.getAttribute('src')).toBe('/_next/image?url=%2Fskill_card_back.png&w=750&q=75');
  })

  it('recieves alt value ', () => {
    render(<FlipCard frontImage={"/react_skill.png"} backImage="/skill_card_back.png" altVal="React skill" />)
    const els = screen.getAllByRole('img');
    expect(els[0].getAttribute('alt')).toBe('React skill');
  })


})
