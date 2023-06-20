import { FC, ReactNode } from "react";
import cn from "classnames";

import styles from "./styles.module.css";

export type PageSectionProps = {
  children: ReactNode;
  className?: string;
};

export const PageSection: FC<PageSectionProps> = ({ children, className }) => {
  return <div className={cn(styles.Page__section, className)}>{children}</div>;
};
