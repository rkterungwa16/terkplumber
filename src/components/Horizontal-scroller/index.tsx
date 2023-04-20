import React, { FC, ReactElement, useRef, createRef, useEffect } from "react";
import { FlipCard } from "@components/Flip-card";
import cx from "classnames";
import { useIntersectionTracker } from "@components/useIntersectionTracker/useIntersectionTracker";
import styles from "./styles.module.css";

interface ChildProps {
  frontImage: string,
  backImage: string,
  altVal: string,
}

interface Props {
  props: ChildProps,
}

interface HSProps {
  children: Props[],
}
export const HorizontalScroller:FC<HSProps> = ({ children }) => {

  //add a ref to each item element
  const itemsRef = useRef(Array.from({length: children.length}, _ => createRef<HTMLLIElement>()));

  //add a ref to each signal element
  const signalsRef = useRef(Array.from({length: children.length}, _ => createRef<HTMLLIElement>()));

  const listRef = useRef<HTMLUListElement>(null);

const activateSignal = (intersectingIndex: Number) => {
  signalsRef.current.forEach((signal, i) => {
    signal.current?.classList.toggle(`${styles['active']}`, i === intersectingIndex)
  });
}

 const theInObHook = useIntersectionTracker(itemsRef, listRef.current!, 0.6, activateSignal)


useEffect(() => {
  theInObHook;
},[])

  return(
    <div className={styles.HS__viewport}>
      <ul  data-testid="list"  ref={listRef} className={styles.HS__list}>
        {
          children?.map(({props}, idx): ReactElement => (
            <li className={styles.HS__item} ref={itemsRef.current[idx]} key={idx}>
              <FlipCard frontImage={props.frontImage} backImage={props.backImage} altVal={props.altVal} />
            </li>
          ))
        }
      </ul>

      <ul className={styles.HS__signalList} aria-hidden>
        {
          Array.from({length: children.length}, (_, idx) => (
            <li key={idx} ref={signalsRef.current[idx]} className={cx(styles.HS__signal, "")}></li>
          ))
        }
      </ul>
    </div>
  );
}
