import React, { FC } from "react";
import { render } from "@testing-library/react";
import Image from "next/image";

import { HorizontalScroller } from "@components/Horizontal-scroller";
import { Skills } from "types";

import MockIntersectionObserver from "../../__mock__/mockIntersectionObserver";


const skills: Skills[] = [
  { title:"react js", competences: "UI design & prototyping", icon: "/react_icon.png", iconAlt: "react skill", details:[{
    "title": "peaq website",
    "stack": "redux, jotai & tailwind"
  },
  {
    "title": "LLF",
    "stack": "react-transition-group & strapi"
  }] },
  { title:"node", competences: "UI design & prototyping", icon: "/node_icon.png", iconAlt: "node skill", details:[{
    "title": "peaq website",
    "stack": "redux, jotai & tailwind"
  },
  {
    "title": "LLF",
    "stack": "react-transition-group & strapi"
  }] },
  { title:"css", competences: "UI design & prototyping", icon: "/css3_icon.png", iconAlt: "css3 skill", details:[{
    "title": "peaq website",
    "stack": "redux, jotai & tailwind"
  },
  {
    "title": "LLF",
    "stack": "react-transition-group & strapi"
  }] },
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

  it("create signal list elements of length 3", () => {
    const { getByTestId } = render(
      <HorizontalScroller>
        {skills}
      </HorizontalScroller>
    );
    const signal = getByTestId("signal");
    expect(signal.children.length).toBe(3);
  });
})
