import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

import { CustomLink } from "@components/Link";

import github from "../../assets/github_icon.svg";
import twitter from "../../assets/twitter_icon.svg";
import linkedIn from "../../assets/linkedin_icon.svg";
import youtube from "../../assets/youtube_icon.svg";

import styles from "./styles.module.css";

export const SmIcons:FC = () => {
  return(
      <div className={cx(styles.sm__handles, "Trk__fixed")}>
        <ul className="Trk__flex Trk__direction--column">
          <li>
            <CustomLink component={Link} href="https://www.github.com/rkterungwa16">
              <Image height={27} width={27} src={github} alt="github" />
            </CustomLink>
          </li>
          <li>
            <CustomLink component={Link} href="https://www.twitter.com/terkplumber">
              <Image height={27} width={27} src={twitter} alt="twitter" />
            </CustomLink>
          </li>
          <li>
            <CustomLink component={Link} href="https://www.linkedIn.com">
              <Image height={27} width={27} src={linkedIn} alt="linkedIn" />
            </CustomLink>
          </li>
          <li>
            <CustomLink component={Link} href="https://www.youtube.com">
              <Image height={27} width={27} src={youtube} alt="youtube" />
            </CustomLink>
          </li>
        </ul>
      </div>
  );
};
