import { forwardRef, HtmlHTMLAttributes, ReactNode } from "react";
import cx from "classnames";

import styles from "./styles.module.css";

export interface NavProps extends HtmlHTMLAttributes<HTMLElement> {
  children: ReactNode;
}
export const Nav = forwardRef<HTMLElement, NavProps>(
  ({ children, ...others }, ref) => {
    return (
      <nav ref={ref} {...others}>
        {children}
      </nav>
    );
  }
);

Nav.displayName = "Nav";

export interface NavListProps extends HtmlHTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

export const NavList = forwardRef<HTMLUListElement, NavListProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <ul className={cx(styles.NavList, className)} {...others} ref={ref}>
        {children}
      </ul>
    );
  }
);

NavList.displayName = "NavList";

export interface NavListItemProps extends HtmlHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

export const NavListItem = forwardRef<HTMLLIElement, NavListItemProps>(
  ({ children, ...others }, ref) => {
    return (
      <li ref={ref} {...others}>
        {children}
      </li>
    );
  }
);

NavListItem.displayName = "NavListItem";
