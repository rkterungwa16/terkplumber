import { FC } from "react";
import { Posts } from "types";
import cn from "classnames";
import Image from "next/image";

import styles from "./styles.module.css";

type PostCardProps = {
  post: Posts;
}

const PostCard:FC<PostCardProps> = ({post}) => {
  const { author, avatar, category, date, image, text, title } = post;
  return(
    <div className={cn(styles["PostCard__container"],
    "Trk__flex Trk__direction--column")}>

     <div className={cn(styles["PostCard__image"],
    "")} style={{
      backgroundImage:`url(${image})`
    }}/>

     <div className={cn(styles["PostCard__middle"],
    "Trk__flex Trk__justify--between Trk__align--center")}>

      <div className={cn(styles["PostCard__middle--left"],
    "Trk__flex Trk__align--center")}>

        <div className={cn(styles["PostCard__middle--left-avatar"],
          "Trk__mr--1")} style={{
            backgroundImage:`url(${avatar})`
          }}/>

        <div className={cn(styles["PostCard__middle--left-info"],"Trk__flex Trk__direction--column")}>
          <span className="black Trk__capitalize font__weight--bold" data-testid="bAuthor-data">{author}</span>
          <span className="grey" data-testid="bDate-data">{date}</span>
        </div>

      </div>

      <span className="lemon-green font__weight--bold" data-testid="bCategory-data">{category}</span>

     </div>

     <div className={cn(styles["PostCard__foot"],
    "")}>
        <span className="black font__weight--bold Trk__mb--2" data-testid="bTitle-data">{title}</span>
        <p className="grey" data-testid="bText-data">{text}</p>
     </div>
    </div>
  )
};

export default PostCard;
