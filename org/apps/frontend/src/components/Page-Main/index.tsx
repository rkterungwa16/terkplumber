import { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.css";

export type PageMainProps = {
  children: ReactNode;
  className?: string;
};

export const PageMain: FC<PageMainProps> = ({ children, className }) => {
  return <div className={cn(styles.Page__main, className)}>{children}</div>;
};
