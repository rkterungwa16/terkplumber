import { FC, ReactNode } from "react";

import styles from "./styles.module.css";

export type PageMainProps = {
  children: ReactNode;
};

export const PageMain: FC<PageMainProps> = ({ children }) => {
  return <div className={styles.Page_main}>{children}</div>;
};
