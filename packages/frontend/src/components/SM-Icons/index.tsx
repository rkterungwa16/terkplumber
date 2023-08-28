import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

import { CustomLink } from "@components/Link";

import styles from "./styles.module.css";

export const SmIcons: FC = () => {
  return (
    <div className={cx(styles["Socials__wrapper--desktop"], "Trk__absolute ")}>
      <div
        className={cx(
          styles["Socials__wrapper--mobile"],
          "Trk__fixed"
        )}
      >
        <ul
          className={cx(
            styles.Socials__ul,
            "Trk__flex"
          )}
        >
          <li>
            <CustomLink
              component={Link}
              href="https://www.github.com/rkterungwa16"
            >
              <Image
                height={30}
                width={30}
                src="github_icon.svg"
                alt="github"
              />
            </CustomLink>
          </li>
          <li>
            <CustomLink
              component={Link}
              href="https://www.twitter.com/terkplumber"
            >
              <Image
                height={30}
                width={30}
                src="twitter_icon.svg"
                alt="twitter"
              />
            </CustomLink>
          </li>
          <li>
            <CustomLink
              component={Link}
              href="https://www.linkedin.com/in/terungwa-kombol-1034574a"
            >
              <Image
                height={30}
                width={30}
                src="linkedin_icon.svg"
                alt="linkedIn"
              />
            </CustomLink>
          </li>
          <li>
            <CustomLink component={Link} href="https://www.youtube.com">
              <Image
                height={30}
                width={30}
                src="youtube_icon.svg"
                alt="youtube"
              />
            </CustomLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
