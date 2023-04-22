import { FC, useEffect, useState} from "react";
import Image from "next/image";
import { CustomLink } from "@components/Link";
import cx from "classnames";

import { Button } from "@components/Button";
import {
  ButtonColor,
  ButtonVariant,
} from "@components/Button/constants";

import styles from "./styles.module.css";

type SkillDetailItem = {
  title: string,
  stack: string,
}
type FlipCardProps = {
  skillTitle: string,
  skillCompetences: string,
  frontImage: string,
  altVal: string,
  skillDetails: SkillDetailItem[],
}

export const FlipCard:FC<FlipCardProps> = ({skillTitle, skillCompetences, frontImage, altVal, skillDetails}) => {

  const [ flipped, setFlip ] = useState(false);

  const handleClick = () => {
    setFlip(current => !current);
  }
console.log(skillTitle)
  return(
    <div className={cx(styles.flip__card)}  >
      <div className={cx(styles.card__content, flipped === true ? styles.flip__it : "")} >
          <div className={styles.content__front}>
            <div className={styles.flipCard__inner}>
              <Image data-testid="front" src={frontImage} alt={altVal} width={120} height={120}/>
              <span className={styles.contentFront__title}>{skillTitle}</span>
              <div className={styles.contentFront__competences}>{skillCompetences}</div>
              <CustomLink
                    className={styles.contentFront__details}
                    onClick={handleClick}
                  >
                    Details
              </CustomLink>
            </div>

          </div>
          <div className={styles.content__back}>
            <div className={styles.flipCard__inner}>
              <div className={styles.flipCard__skill__details}>
                <ul>
                  {
                    skillDetails.map((detail, idx )=> (
                      <li key={idx}>
                        <h5>{detail.title}</h5>
                        <p>{detail.stack}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <Button
                 color={ButtonColor.WHITE}
                  variant={ButtonVariant.STANDARD}
                  >
                  back
              </Button>
            </div>
          </div>
      </div>
    </div>
  );
};
