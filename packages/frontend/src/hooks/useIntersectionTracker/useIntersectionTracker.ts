import { MutableRefObject, RefObject, useEffect } from "react";

export const useIntersectionTracker = (
  targetRef: MutableRefObject<RefObject<HTMLLIElement>[]>,
  root: HTMLUListElement,
  threshold : number,
  callback: (idx: number) => void,
  ): void => {

  useEffect(()=>{
    //intersection observer
    const onIntersectionObserved = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
         const intersectingIndex = targetRef.current.findIndex(target => target.current?.outerHTML === entry.target.outerHTML);
         callback(intersectingIndex);
        }
      });
    };

    const observer = new IntersectionObserver(onIntersectionObserved, {
      root: root,
      threshold: threshold,
    });

    targetRef.current.forEach(item => {
      observer.observe(item.current!);
    });

    return () => observer.disconnect();

  },[])
}
