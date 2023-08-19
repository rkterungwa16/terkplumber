import { FC } from "react";
import { Works } from "types";
import cn from "classnames";
import Image from "next/image";

import styles from "./styles.module.css";
import { url } from "inspector";

type CardProps = {
  work: Works;
}

const Card:FC<CardProps> = ({work}) => {
  const { icon, title, stack, summary } = work;
  return(
    <div className={cn(styles["card__container"],
    "Trk__flex Trk__direction--column")}>
      <div className={styles["card__logo"]}
      style={{
        backgroundImage:`url(${icon})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "5rem",
          height: "5rem",
          borderRadius:"10%"
      }}>

      </div>
      {/* <Image
        src={icon}
        alt={title}
        width={50}
        height={50}
      /> */}

      <span
      className="black font__weight--xbold"
      data-testid="cardTitle-data">
        {title}
      </span>

      <span
      className="grey Trk__pt--2 Trk__pb--2"
      data-testid="cardStack-data">
        {stack.map((tool, idx) => (
          <span key={idx}>{tool}{idx < stack.length - 1 ? ", " : ""}</span>
        ))}
      </span>

      <p data-testid="cardSum-data">{summary}</p>
    </div>
  )
};

export default Card;
