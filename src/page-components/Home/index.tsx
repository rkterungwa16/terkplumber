import Link from "next/link";
import Image from "next/image";

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
      <div className={styles.sm__handles}>
        <ul>
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
      <PageSection className={styles.intro}>

        <div className={styles.brief__intro}>
          <p>
            <span>My name is</span> &#160; <span>Terungwa Kombol,</span><br />
            <span>I&#39;m a Software Developer.</span>
          </p>
        </div>

        <div className={styles.underline}>
          <Image src={underline} alt="Underline" />
        </div>

        <div className={styles.summary}>
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

      <PageSection className="about-me">

      </PageSection>


    </PageMain>
  </Layout>;
};
