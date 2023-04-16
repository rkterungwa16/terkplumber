import { FC, useState} from "react";
import Image from "next/image";
import cx from "classnames";

import styles from "./styles.module.css";

type FlipCardProps = {
  frontImage: string,
  backImage: string,
  altVal: string,
}

export const FlipCard:FC<FlipCardProps> = ({frontImage, backImage, altVal}) => {

  const [ flipped, setFlip ] = useState(false);

  const handleClick = () => {
    setFlip(!flipped);
  }

  return(
    <div className={cx(styles.flip__card)} onClick={handleClick}>
      <div className={cx(styles.card__content, flipped === true ? styles.flip__it : "")} >
          <div className={styles.content__front}>
            <Image src={frontImage} alt={altVal} width={344} height={288}/>
          </div>
          <div className={styles.content__back}>
            <Image src={backImage} alt={altVal} width={344} height={288}/>
          </div>

      </div>
    </div>
  );
};
