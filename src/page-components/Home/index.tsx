
import Image from "next/image";
import cx from "classnames";

import { Layout } from "@components/Layout";
import { PageMain } from "@components/Page-Main";
import { PageSection } from "@components/Page-Section";
import { Button } from "@components/Button";
import { SmIcons } from "@components/SM-Icons";
import {
  ButtonColor,
  ButtonVariant,
} from "@components/Button/constants";



import styles from "./styles.module.css";

type Props = {
  summary?: string;
  start?: string;
  name?: string;
  occupation?: string;
  section_two_title?: string;
  my_details?: string[];
}
export const Home:React.FC<Props> = ({summary, start, name, occupation, section_two_title, my_details}) => {

  return <Layout>
    <PageMain className="Trk__flex Trk__direction--column">
    <SmIcons />
      <PageSection className={cx(styles.first__section, "Trk__flex Trk__direction--column Trk__justify--center Trk__align--center")}>
        <div className={cx(styles.intro,"font__weight--xbold Trk__LineHeight--6 Trk__text--center")}>
          <p>
            <span className="black text__body--xlarge text__body-mlarge--sm" data-testid="start-data">{start}</span> &#160; <span className="light-brown text__body--xlarge text__body-mlarge--sm" data-testid="name-data">{name}</span><br />
            <span className="grey text__body--xlarge text__body-mlarge--sm" data-testid="oc-data">{occupation}</span>
          </p>

        </div>
        <div className={cx(styles.underline, "Trk__flex Trk__justify--end Trk__justify-center--sm Trk__align-start--sm")}>
          <Image src="/Underline_07.png" alt="Underline" width={550} height={33} />
        </div>


        <div className={cx(styles.summary, "Trk__flex Trk__mt--4 Trk__mb--4 Trk__mr--4 Trk__ml--4 Trk__width--md black font__weight--small Trk__LineHeight--2 Trk__text--center")}>
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

      <PageSection className={cx(styles.about__section,"Trk__flex Trk__direction--column Trk__justify--around Trk__align--center")}>
        <div className={cx(styles.about__me, "Trk__flex Trk__flex-column--sm Trk__align-center--sm")}>
          <Image src="/photo.png" alt="Terungwa Kombol" width={400} height={450} />
          <div className={cx(styles.__details, "Trk__flex Trk__direction--column Trk__align-center--sm")}>
            <div className={cx(styles.detail__text, "Trk__flex Trk__direction--column Trk__align-center--sm")}>
              <div className="Trk__flex Trk__align--center">
                <Image src="/hyphen.png" width={39} height={8} alt="hypen"/>
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
    </PageMain>
  </Layout>;
};
