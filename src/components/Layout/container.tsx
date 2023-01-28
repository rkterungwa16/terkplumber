import { FC, ReactNode } from "react";
import styles from "./styles.module.css";

export type LayoutContainerProps = {
  children: ReactNode;
};
export const LayoutContainer: FC<LayoutContainerProps> = ({ children }) => {
  return <div className={styles.Layout__container}>{children}</div>;
};
