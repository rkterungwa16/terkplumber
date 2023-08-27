import { FC } from "react";
import { Works, Posts } from "types";
import cn from "classnames";
import Image from "next/image";

import styles from "./styles.module.css";

type WorkCardProps = {
  work: Works;
}

const WorkCard:FC<WorkCardProps> = ({work}) => {
  const { icon, title, stack, summary } = work;
  return(
    <div className={cn(styles["WorkCard__container"],
    "Trk__flex Trk__direction--column")}>

      <div className={styles["WorkCard__logo"]}
      style={{
        backgroundImage:`url(${icon})`
      }} />

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

      <p
        data-testid="cardSum-data">
        {summary}
      </p>
    </div>
  )
};

export default WorkCard;
