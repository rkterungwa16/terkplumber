import { FC, ReactElement, useState, useRef, RefObject, useEffect, createRef } from "react";
import { FlipCard } from "@components/Flip-card";
import cx from "classnames";


import styles from "./styles.module.css";
import React from "react";

interface scrollObject {
  frontImage: string,
  backImage: string,
  altVal: string,
}

interface HSProps {
  scrollItems: scrollObject[],
}
export const HorizontalScroller:FC<HSProps> = ({scrollItems}) => {
  const [active, setActive] = useState(false);
  //add a ref to each item element
  const itemsRef = useRef(Array.from({length: scrollItems.length}, a => createRef<HTMLLIElement>()));

  //add a ref to each signal element
  const signalsRef = useRef(Array.from({length: scrollItems.length}, a => createRef<HTMLLIElement>()));

  const listRef = useRef<HTMLUListElement>(null);

useEffect(() => {
//intersection observer
  const onIntersectionObserved = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
        console.log(entry.target)
        const intersectingIndex = itemsRef.current.findIndex(element => element.current?.outerHTML === entry.target.outerHTML)
        activateSignal(intersectingIndex);
      }

    })
  }

  const observer = new IntersectionObserver(onIntersectionObserved, {
    root: listRef.current,
    threshold: 0.6
  });

  const activateSignal = (intersectingIndex: Number) => {
    console.log('signal received index', intersectingIndex)
    signalsRef.current.forEach((signal, i) => {
      signal.current?.classList.toggle(`${styles['active']}`, i === intersectingIndex)
    });
  }

  itemsRef.current.forEach(item => {
    observer.observe(item.current!)
  });

},[])


  return(
    <div className={styles.HS__viewport}>
      <ul ref={listRef} className={styles.HS__list}>
        {
          scrollItems.map(({frontImage, backImage, altVal}, idx): ReactElement => (
            <li className={styles.HS__item} ref={itemsRef.current[idx]} key={idx}>
              <FlipCard frontImage={frontImage} backImage={backImage} altVal={altVal} />
            </li>
          ))
        }
      </ul>

      <ul className={styles.HS__signalList} aria-hidden>
        {
          Array.from({length: scrollItems.length}, (x, idx) => (
            <li key={idx} ref={signalsRef.current[idx]} className={cx(styles.HS__signal, "")}></li>
          ))
        }
      </ul>
    </div>
  );
}
