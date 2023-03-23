import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

import { Layout } from "@components/Layout";
import { PageMain } from "@components/Page-Main";
import { PageSection } from "@components/Page-Section";
import { CustomLink } from "@components/Link";
import { Button } from "@components/Button";
import {
  ButtonColor,
  ButtonVariant,
} from "@components/Button/constants";

import underline from "../../assets/Underline_07.png";
import github from "../../assets/github_icon.svg";
import twitter from "../../assets/twitter_icon.svg";
import linkedIn from "../../assets/linkedin_icon.svg";
import youtube from "../../assets/youtube_icon.svg";

import styles from "./styles.module.css";

export const Home = () => {
  return <Layout>
    <PageMain>
      <div className={cx(styles.sm__handles, "Trk__fixed")}>
        <ul className="Trk__flex Trk__direction--column">
          <li>
            <CustomLink component={Link} href="">
              <Image height={27} width={27} src={github} alt="github" />
            </CustomLink>
          </li>
          <li>
            <CustomLink component={Link} href="">
              <Image height={27} width={27} src={twitter} alt="twitter" />
            </CustomLink>
          </li>
          <li>
            <CustomLink component={Link} href="">
              <Image height={27} width={27} src={linkedIn} alt="linkedIn" />
            </CustomLink>
          </li>
          <li>
            <CustomLink component={Link} href="">
              <Image height={27} width={27} src={youtube} alt="youtube" />
            </CustomLink>
          </li>
        </ul>
      </div>
      <PageSection className="Trk__flex Trk__direction--column Trk__justify--center Trk__align--center">
        <div className= "font__weight--xbold Trk__LineHeight--6 Trk__text--center">
          <p className="Trk__mt--1 Trk__mb--1">
            <span className="black text__body--xlarge">My name is</span> &#160; <span className="light-brown text__body--xlarge">Terungwa Kombol,</span><br />
            <span className="grey text__body--xlarge">I&#39;m a Software Developer.</span>
          </p>
        </div>

        <div className={cx(styles.underline, "Trk__dnone--sm")}>
          <Image src={underline} alt="Underline" />
        </div>

        <div className="Trk__flex Trk__mt--3 Trk__mr--4 Trk__ml--4 Trk__width--md Trk__mb--3 black font__weight--small Trk__LineHeight--2 Trk__text--center">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
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
