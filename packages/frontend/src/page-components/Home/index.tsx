import { FC } from "react";
import Image from "next/image";
import cx from "classnames";

import { Layout } from "@components/Layout";
import { PageMain } from "@components/Page-Main";
import { PageSection } from "@components/Page-Section";
import { Button } from "@components/Button";
import { SmIcons } from "@components/SM-Icons";
import { ButtonColor, ButtonVariant } from "@components/Button/constants";
import Card from "@components/Card";

import styles from "./styles.module.css";
import { Skills, Works } from "types";

type Props = {
  summary?: string;
  start?: string;
  name?: string;
  occupation?: string;
  secondSectionTitle?: string;
  thirdSectionTitle?: string;
  works?: Works[];
  skills?: Skills[];
};
export const Home: FC<Props> = ({
  summary,
  start,
  name,
  occupation,
  secondSectionTitle,
  works,
}) => {
  return (
    <Layout>
      <PageMain className="Trk__relative">
        <SmIcons />
        <PageSection className="Trk__flex Trk__direction--column Trk__pt--10">
          <div className={cx(styles['HomePage__first-intro'], "font__weight--xbold")}>
            <span
              className="black Trk__capitalize font__weight--xbold"
              data-testid="start-data"
            >
              {start}
            </span>
            <br />
            <span
              className="light-brown Trk__capitalize font__weight--xbold"
              data-testid="name-data"
            >
              {name}
            </span>
            <br />
            <span
              className="grey Trk__capitalize font__weight--xbold"
              data-testid="oc-data"
            >
              {occupation}
            </span>
          </div>
          <div
            className={cx(
              styles['HomePage__line-brush'],
              "Trk__flex Trk__align-start--sm"
            )}
          >
            <Image
              src="/Underline_07.png"
              alt="Underline"
              width={550}
              height={33}
            />
          </div>

          <div
            className={cx(
              styles['HomePage__about-me'],
              "Trk__flex Trk__mt--2 Trk__mb--4 Trk__width--md grey font__weight--small Trk__LineHeight--2"
            )}
          >
            <p
              data-testid="summary-data"
              className="black font__weight--medium">
              {summary}
            </p>
          </div>

          <div className={styles['HomePage__get-resume']}>
            <Button
              color={ButtonColor.PRIMARY}
              variant={ButtonVariant.STANDARD}
            >
              Download Resume
            </Button>
          </div>
        </PageSection>

        {/* Second section starts */}
        <PageSection className="Trk__flex Trk__direction--column Trk__pt--10">

            <span
              className={cx(styles["HomePage__second-section--title"], "grey Trk__capitalize font__weight--xbold Trk__pb--2")}
              data-testid="sec2title-data"
              >
                {secondSectionTitle}
            </span>
              <div className={styles["HomePage__second-section--works"]} data-testid="sec2works-data">
                {works?.map((work, idx) => (
                    <Card key={idx} work={work} />
                ))}
              </div>

        </PageSection>
      </PageMain>
    </Layout>
  );
};
