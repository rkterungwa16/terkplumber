import React, { FC, ReactElement } from "react";
import { render } from "@testing-library/react";
import Image from "next/image";

import { HorizontalScroller } from "@components/Horizontal-scroller";

import MockIntersectionObserver from "../../__mock__/mockIntersectionObserver";


const skills_data = [
  {frontImage: "/react_skill.png", backImage: "/skill_card_back.png", altVal: "React skill"},
  {frontImage: "/nodejs_skill.png", backImage: "/skill_card_back.png", altVal: "Nodejs skill"},
  {frontImage: "/css3_skill.png", backImage: "/skill_card_back.png", altVal: "CSS3 skill"},
];

type TestProps = {
  frontImage: string,
  backImage: string,
  altVal: string,
}

const TestComp:FC<TestProps> = ({frontImage, backImage, altVal}) => {
  return(
    <div>
      <Image src={frontImage} width={20} height={20} alt={altVal} />
      <Image src={backImage} width={20} height={20} alt={altVal} />
    </div>
  )
}

//mock intersection observer
window.IntersectionObserver = MockIntersectionObserver;

describe('The horizontal scroll', () => {
it("recieved children props of length 3", () => {
  const { getByTestId } = render(
    <HorizontalScroller>
                {
                  skills_data.map((item, idx): ReactElement => (
                    <TestComp key={idx} frontImage={item.frontImage} backImage={item.backImage} altVal={item.altVal} />
                  ))
                }
    </HorizontalScroller>
  );
  const list = getByTestId("list");
  expect(list.children.length).toBe(3);
});
})
