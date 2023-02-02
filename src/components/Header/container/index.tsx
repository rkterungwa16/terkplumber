import { forwardRef, HTMLAttributes, ReactNode } from "react";
import cx from "classnames";

import { HeaderPosition, defaultPositionClasses } from "./constants";

export interface HeaderContainerProps extends HTMLAttributes<HTMLDivElement> {
  position?: HeaderPosition;
  positionClasses?: { [position: string]: string };
  children?: ReactNode;
}
export const HeaderContainer = forwardRef<HTMLDivElement, HeaderContainerProps>(
  (
    {
      position = HeaderPosition.FIXED,
      positionClasses = defaultPositionClasses,
      children,
      className,
      ...others
    },
    ref
  ) => {
    const positionClass = positionClasses[position]
      ? [defaultPositionClasses[position]]
      : [];

    return (
      <div className={cx(className, [...positionClass])} {...others} ref={ref}>
        {children}
      </div>
    );
  }
);

HeaderContainer.displayName = "HeaderContainer";
