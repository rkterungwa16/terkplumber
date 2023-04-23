import React, { Children, FC, ReactElement } from "react";
import { render } from "@testing-library/react";
import Image from "next/image";

import { HorizontalScroller } from "@components/Horizontal-scroller";
import { Skills } from "types";

import MockIntersectionObserver from "../../__mock__/mockIntersectionObserver";


const skills = [
  { title:"react js", icon: "/react_icon.png", iconAlt: "react skill" },
  { title:"node", icon: "/node_icon.png", iconAlt: "node skill" },
  { title:"css", icon: "/css3_icon.png", iconAlt: "css3 skill" },
];

type TestProps = {
  children: Skills[]
}

const TestComp:FC<TestProps> = ({children}) => {
  return(
    <div>
      {
      children.map((child, idx) => (
        <Image key={idx} src={child.icon} width={20} height={20} alt={child.iconAlt} />
      ))
      }

    </div>
  )
}

//mock intersection observer
window.IntersectionObserver = MockIntersectionObserver;

describe('The horizontal scroll', () => {
it("recieved children props of length 3", () => {
  const { getByTestId } = render(
    <HorizontalScroller>
      {skills}
    </HorizontalScroller>
  );
  const list = getByTestId("list");
  expect(list.children.length).toBe(3);
});
})
