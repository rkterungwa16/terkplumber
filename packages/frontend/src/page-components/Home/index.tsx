import { FC } from "react";
import Image from "next/image";
import cx from "classnames";

import { Layout } from "@components/Layout";
import { PageMain } from "@components/Page-Main";
import { PageSection } from "@components/Page-Section";
import { Button } from "@components/Button";
import { SmIcons } from "@components/SM-Icons";
import { ButtonColor, ButtonVariant } from "@components/Button/constants";
import WorkCard from "@components/Work-card";
import PostCard from "@components/Post-card";

import styles from "./styles.module.css";
import { Posts, Works } from "types";
import { ClientRoutes } from "@routes/client";

type Props = {
  summary?: string;
  start?: string;
  name?: string;
  occupation?: string;
  secondSectionTitle?: string;
  thirdSectionTitle?: string;
  works?: Works[];
  posts?: Posts[];
  invite?: string;
  prompt?: string;
  invitation?: string;
};
export const Home: FC<Props> = ({
  summary,
  start,
  name,
  occupation,
  secondSectionTitle,
  works,
  thirdSectionTitle,
  posts,
  invite,
  prompt
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

            <div
              className={cx(styles["HomePage__second-section--title"], "grey Trk__capitalize font__weight--xbold Trk__pb--4")}
              data-testid="sec2title-data"
              >
                {secondSectionTitle}
            </div>

            <div className={styles["HomePage__second-section--works"]} data-testid="sec2works-data">
              {works?.map((work, idx) => (
                  <WorkCard key={idx} work={work} />
              ))}
            </div>

        </PageSection>

        {/* Third section starts */}
        <PageSection className="Trk__flex Trk__direction--column Trk__pt--10">
          <div className={cx(styles["HomePage__third-section--head"], "Trk__flex Trk__justify--between Trk__pb--4")}>
            <div
              className={cx(styles["HomePage__third-section--title"], "light-brown Trk__capitalize font__weight--xbold ")}
              data-testid="sec3title-data"
              >
                {thirdSectionTitle}
            </div>

            <div className={cx(styles["HomePage__third-section--vall"], "Trk__dnone--sm ")}>
              <Button
                color={ButtonColor.PRIMARY}
                variant={ButtonVariant.STANDARD}
                href={ClientRoutes.blog}
              >
                view all posts
              </Button>
            </div>
          </div>

          {/* display three latest cards */}
          <div className={cx(styles["HomePage__third-section--posts"], "")} data-testid="sec3posts-data">
                  {posts?.sort((a, b) => a.id - b.id).map(post=> (
                    <PostCard key={post.id} post={post} />
                  )).slice(-3)}
          </div>

          <div className={cx(styles["HomePage__third-section--vall"], "Trk__dnone Trk__dflex--sm Trk__mt--10 Trk__mb--10")}>
              <Button
                color={ButtonColor.PRIMARY}
                variant={ButtonVariant.STANDARD}
                href={ClientRoutes.blog}
              >
                view all posts
              </Button>
          </div>
        </PageSection>

        {/* Fourth section starts */}
        <PageSection className="Trk__flex Trk__direction--column Trk__pt--10 Trk__dnone--sm">
            <div className={cx(styles["HomePage__fourth-section--wrapper"], "Trk__flex Trk__direction--column Trk__align--center Trk__pb--4")}>

              <p className="grey Trk__capitalize" data-testid="sec4invite-data">{invite}</p>

              <span className="lemon-green Trk__capitalize font__weight--bold Trk__mt--2" data-testid="sec4prompt-data">{prompt}</span>

              <div className={cx(styles["HomePage__fourth-section--hireme"], "Trk__mt--6 Trk__mb--8")}>
                <Button
                    color={ButtonColor.PRIMARY}
                    variant={ButtonVariant.STANDARD}
                    href={ClientRoutes.contact}
                    >
                    Hire me
                </Button>
              </div>

            </div>
        </PageSection>
      </PageMain>
    </Layout>
  );
};
