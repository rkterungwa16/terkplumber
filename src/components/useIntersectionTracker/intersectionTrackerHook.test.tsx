import React, { createRef, useEffect, useRef } from "react";
import { render } from "@testing-library/react";

import { useIntersectionTracker } from "./useIntersectionTracker";
import { getObserverOf, intersect } from "../../intersectioObserver-test-helper/intersectionObserver-test-helper";


const Observed = () => {
 //add a ref to each item element
 const itemsRef = useRef(Array.from({length: 2}, _ => createRef<HTMLLIElement>()));

 //add a ref to each signal element
 const signalsRef = useRef(Array.from({length: 2}, _ => createRef<HTMLLIElement>()));

 const listRef = useRef<HTMLUListElement>(null);

 const activateSignal = (intersectingIndex: Number) => {
  signalsRef.current.forEach((signal, i) => {
    signal.current?.classList.toggle('active', i === intersectingIndex)
  });
}

  const theInObHook = useIntersectionTracker(itemsRef, listRef.current!, 0.6, activateSignal)
  useEffect(() => {
    theInObHook;
  },[])
  return (
    <div data-testid="wrapper" >
      <ul ref={listRef} data-testid="list">
       {
        Array.from({length: 2}, (_, idx) => (
          <li key={idx} ref={itemsRef.current[idx]} className=""></li>
        ))
       }
      </ul>
      <ul data-testid="signals">
        {
          Array.from({length: 2}, (_, idx) => (
            <li key={idx} ref={signalsRef.current[idx]} className=""></li>
          ))
        }
      </ul>
    </div>
  );
};

it("creates an observer", () => {
 // const callback = jest.fn();
  const { getByTestId } = render(<Observed  />);
  const list = getByTestId("list");
  console.log('the list',list)
  const instance = getObserverOf(list);

  expect(instance.observe).toHaveBeenCalledWith(list);
});

it("does not call the callback without intersection", () => {
  const callback = jest.fn();
  const { getByTestId } = render(<Observed />);

  const wrapper = getByTestId("wrapper");
  intersect(wrapper, false);

  expect(callback).not.toHaveBeenCalled();
});

it("calls the callback on intersection", () => {
  const callback = jest.fn();
  const { getByTestId } = render(<Observed />);

  const wrapper = getByTestId("wrapper");
  intersect(wrapper, true);

  expect(callback).toHaveBeenCalledTimes(1);
});

it("calls the callback only once", () => {
  const callback = jest.fn();
  const { getByTestId } = render(<Observed  />);

  const wrapper = getByTestId("wrapper");
  intersect(wrapper, true);
  intersect(wrapper, false);
  intersect(wrapper, true);

  expect(callback).toHaveBeenCalledTimes(1);
});

it("unmounts the hook", () => {
  const callback = jest.fn();

  const { getByTestId, unmount } = render(<Observed  />);
  const wrapper = getByTestId("wrapper");
  unmount();
  expect(getObserverOf(wrapper).disconnect).toHaveBeenCalledTimes(1);
});
