import { FC, useEffect, useState} from "react";
import Image from "next/image";
import { CustomLink } from "@components/Link";
import cx from "classnames";
import { Button } from "@components/Button";
import { Skills } from "types";
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from "@components/Button/constants";

import styles from "./styles.module.css";

type FlipCardProps = {
  skill: Skills;
}

export const FlipCard:FC<FlipCardProps> = ({skill}) => {
const { title, icon, competences, iconAlt, details}  = skill;
  const [ flipped, setFlip ] = useState(false);

  const handleClick = () => {
    setFlip(current => !current);
  }

  return(
    <div className={cx(styles.flip__card)}  >
      <div className={cx(styles.card__content, flipped === true ? styles.flip__it : "")} >
          <div className={styles.content__front}>
            <div className={styles.flipCard__inner}>
              <Image data-testid="icon-data" src={icon} alt={iconAlt} width={130} height={130}/>
              <span data-testid="title-data" className={styles.contentFront__title}>{title}</span>
              <div data-testid="competences-data" className={styles.contentFront__competences}>{competences}</div>
              <div className={styles.flipCard__detailsLink} onClick={handleClick}>
                <CustomLink
                      className={styles.contentFront__details}
                    >
                      details
                </CustomLink>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.5} stroke="#09a311" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </div>

          </div>
          <div className={styles.content__back}>
            <div className={styles.flipCard__inner}>
              <div className={styles.flipCard__skill__details}>
                <ul data-testid="details-data">
                  {
                    details?.map((detail, idx )=> (
                      <li key={idx}>
                        <span>{detail.title}</span>
                        <p>{detail.stack}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <Button
                  size={ButtonSize.XS}
                  color={ButtonColor.WHITE}
                  variant={ButtonVariant.OUTLINE}
                  onClick={handleClick}
                  className={styles.back__buttn}
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.9} stroke="#09a311" className={styles.backButton__icon}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                  </svg>
              </Button>
            </div>
          </div>
      </div>
    </div>
  );
};
