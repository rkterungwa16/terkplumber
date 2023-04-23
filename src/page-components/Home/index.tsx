
import { FC, ReactElement, useState } from "react";
import Image from "next/image";
import cx from "classnames";

import { Layout } from "@components/Layout";
import { PageMain } from "@components/Page-Main";
import { PageSection } from "@components/Page-Section";
import { Button } from "@components/Button";
import { SmIcons } from "@components/SM-Icons";
import { FlipCard } from "@components/Flip-card";

import { HorizontalScroller } from "@components/Horizontal-scroller";
import {
  ButtonColor,
  ButtonVariant,
} from "@components/Button/constants";

import styles from "./styles.module.css";
import { Skills } from "types";

type Props = {
  summary?: string;
  start?: string;
  name?: string;
  occupation?: string;
  section_two_title?: string;
  section_three_title?: string;
  my_details?: string[];
  skills: Skills[];
}
export const Home: FC<Props> = ({ summary, start, name, occupation, section_two_title, section_three_title, my_details, skills }) => {

  return <Layout>
    <PageMain className="Trk__flex Trk__direction--column ">
      <SmIcons />
      <PageSection className={cx(styles.home__first, "Trk__flex Trk__direction--column Trk__justify--center Trk__align--center")}>
        <div className={cx(styles.first__intro, "font__weight--xbold Trk__LineHeight--6 Trk__text--center")}>
          <p>
            <span className="black text__body--xlarge " data-testid="start-data">{start}</span> &#160; <span className="light-brown text__body--xlarge " data-testid="name-data">{name}</span><br />
            <span className="grey text__body--xlarge " data-testid="oc-data">{occupation}</span>
          </p>

        </div>
        <div className={cx(styles.first__underline, "Trk__flex Trk__justify--end Trk__justify-center--sm Trk__align-start--sm")}>
          <Image src="/Underline_07.png" alt="Underline" width={550} height={33} />
        </div>


        <div className={cx(styles.first__summary, "Trk__flex Trk__mt--4 Trk__mb--4 Trk__mr--4 Trk__ml--4 Trk__width--md black font__weight--small Trk__LineHeight--2 Trk__text--center")}>
          <p data-testid="sum-data">
            {summary}
          </p>
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

      <PageSection className={cx(styles.home__about, "Trk__flex Trk__direction--column Trk__justify--center Trk__align--center")}>

        <div className={cx(styles.about__me, "Trk__flex Trk__flex-row--lg Trk__flex-column--md Trk__align-center--md Trk__flex-column--sm Trk__align-center--sm")}>

          <Image src="/photo.png" alt="Terungwa Kombol" width={400} height={450} />

          <div className={cx(styles.about__details, "Trk__flex Trk__direction--column Trk__align-start--lg Trk__align-center--md Trk__align-center--sm ")}>

            <div className={cx(styles.detail__text, "Trk__flex Trk__direction--column Trk__align-start--lg Trk__align-center--md Trk__align-center--sm")}>

              <div className="Trk__flex Trk__align--center Trk__align-center--md">
                <Image src="/hyphen.png" width={39} height={8} alt="hypen" />
                <span data-testid="title-data">{section_two_title}</span>
              </div>

              {
                my_details?.map((detail, idx) => (
                  <p data-testid="detail-data" key={idx}>{detail}</p>
                ))
              }

            </div>

            <div className={cx(styles.hire__me)}>
              <Button
                color={ButtonColor.PRIMARY}
                variant={ButtonVariant.STANDARD}
              >
                Hire me
              </Button>

            </div>

          </div>

        </div>

      </PageSection>

      <PageSection className={cx(styles.home__skills, "Trk__flex Trk__direction--column Trk__justify--center Trk__align--center")}>
          <span className={cx(styles.skills__title)} data-testid="third-title-data">{section_three_title}</span>
          <div className={cx(styles.skills__list, "Trk__flex Trk__justify-between--lg Trk__align-center--lg Trk__flex-row--lg Trk__flex-column--md Trk__align-center--md Trk__dnone--sm")}>
            {
             skills.map((item, idx): ReactElement => (
              <FlipCard key={idx} skill={item} />
             ))
            }
          </div>
          <div className={cx(styles.skills_list,"Trk__flex Trk__align-center--sm Trk__justify-center--sm Trk__dnone--lg Trk__dnone--md")}>
            <HorizontalScroller>
              { skills }
            </HorizontalScroller>
          </div>
      </PageSection>
    </PageMain>
  </Layout>;
};
