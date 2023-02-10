import { FC, ReactNode } from "react";

import { PageHeader } from "@components/Page-Header";
import styles from "./styles.module.css";

export type LayoutContainerProps = {
  children: ReactNode;
};
export const LayoutContainer: FC<LayoutContainerProps> = ({ children }) => {
  return (
    <>
      <PageHeader />
      <div className={styles.Layout__container}>{children}</div>
    </>
  );
};
