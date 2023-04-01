
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
}
export const Home:React.FC<Props> = ({summary, start, name, occupation}) => {

  return <Layout>
    <PageMain>
    <SmIcons />
      <PageSection className={cx(styles.first__section, "Trk__flex Trk__direction--column Trk__justify--center Trk__align--center")}>
        <div className= "font__weight--xbold Trk__LineHeight--6 Trk__text--center">
          <p>
            <span className="black text__body--xlarge" data-testid="start-data">{start}</span> &#160; <span className="light-brown text__body--xlarge" data-testid="name-data">{name}</span><br />
            <span className="grey text__body--xlarge" data-testid="oc-data">{occupation}</span>
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
    </PageMain>
  </Layout>;
};
