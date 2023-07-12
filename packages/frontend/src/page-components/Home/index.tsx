import { FC } from "react";
import Image from "next/image";
import cx from "classnames";

import { Layout } from "@components/Layout";
import { PageMain } from "@components/Page-Main";
import { PageSection } from "@components/Page-Section";
import { Button } from "@components/Button";
import { SmIcons } from "@components/SM-Icons";
import { ButtonColor, ButtonVariant } from "@components/Button/constants";

import styles from "./styles.module.css";
import { Skills } from "types";

type Props = {
  summary?: string;
  start?: string;
  name?: string;
  occupation?: string;
  secondSectionTitle?: string;
  thirdSectionTitle?: string;
  myDetails?: string[];
  skills?: Skills[];
};
export const Home: FC<Props> = ({
  summary,
  start,
  name,
  occupation,
}) => {
  return (
    <Layout>
      <PageMain className="Trk__relative">
        <SmIcons />
        <PageSection className="Trk__flex Trk__direction--column Trk__pt--10">
          <div className={cx(styles.first__intro, "font__weight--xbold")}>
            <h2
              className="black Trk__capitalize font__weight--xbold"
              data-testid="start-data"
            >
              {start}
            </h2>{" "}
            <h1
              className="light-brown Trk__capitalize font__weight--xbold"
              data-testid="name-data"
            >
              {name}
            </h1>
            <br />
            <h3
              className="grey Trk__capitalize font__weight--xbold"
              data-testid="oc-data"
            >
              {occupation}
            </h3>
          </div>
          <div
            className={cx(
              styles.first__underline,
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
              "Trk__flex Trk__mt--4 Trk__mb--4 Trk__width--md grey font__weight--bold Trk__LineHeight--2"
            )}
          >
            <p data-testid="sum-data">{summary}</p>
          </div>

          <div className={styles.get__resume}>
            <Button
              color={ButtonColor.PRIMARY}
              variant={ButtonVariant.STANDARD}
            >
              Download Resume
            </Button>
          </div>
        </PageSection>
      </PageMain>
    </Layout>
  );
};
