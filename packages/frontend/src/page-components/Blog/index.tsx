
import { FC } from "react";
import { Layout } from "@components/Layout";
import { PageMain } from "@components/Page-Main";
import { PageSection } from "@components/Page-Section";
import cn from "classnames";

import styles from "./styles.module.css";

type props = {
  blogDescription: string;
  subDescription: string;
}
export const Blog:FC<props> = ({blogDescription, subDescription}) => {
  return <Layout>
    <PageMain className="Trk__relative">
      <PageSection className="Trk__flex Trk__direction--column Trk__pt--10">
            <p
              className={cn(styles["BlogPage__description"],"light-brown font__weight--xbold Trk__text--center Trk__pb--7")}
              data-testid="blgDescr-data"
            >
              {blogDescription.charAt(0).toUpperCase() + blogDescription.slice(1)}
            </p>
            <p className={cn(styles['BlogPage__subdescription'],"light-brown font__weight--small Trk__text--center")}>
              {subDescription}
            </p>
      </PageSection>
    </PageMain>
  </Layout>;
};
