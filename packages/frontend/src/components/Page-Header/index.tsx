import { useState } from "react";
import { Header, Nav, NavList, NavListItem } from "@components/Header";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";

import styles from "./styles.module.css";

import { HeaderNavs, ClientRoutes } from "@routes/client";
import { CustomLink } from "@components/Link";
import { Button } from "@components/Button";
import { ButtonColor, ButtonVariant } from "@components/Button/constants";
import { IconButton } from "@components/Button/icon";

export const PageHeader = () => {
  const pathname = usePathname();
  const [menuIsActive, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menuIsActive);
  };
  return (
    <div className={cx(styles["Page__header--wrapper"])}>
      <Header className={cx(styles.Page__header, "bg-milky-white ")}>
        <Nav
          className="Trk__dnone--md Trk__absolute--sm Trk__left--3"
          onClick={handleClick}
        >
          <IconButton>
            <Image
              width={28}
              height={28}
              src="/hamburger-menu.svg"
              alt="Menu"
            />
          </IconButton>
        </Nav>
        <Nav className="Trk__dflex--sm Trk__justify-center--sm Trk__width-max--sm ">
          <CustomLink component={Link} href={ClientRoutes.home}>
            <Image width={117} height={42} src="/logo.png" alt="Logo" />
          </CustomLink>
        </Nav>
        <Nav className="Trk__dnone--sm ">
          <NavList>
            {Object.values(HeaderNavs).map((nav, index) => {
              const isActive = ClientRoutes[nav] === pathname;
              return (
                <NavListItem className="Trk__pl--4 Trk__pr--4" key={index}>
                  <CustomLink
                    className={cx(styles["Page__nav"], {
                      [styles["Page__nav--active"]]: isActive,
                      [styles["Page__nav--inactive"]]: !isActive,
                    })}
                    component={Link}
                    href={ClientRoutes[nav]}
                  >
                    {nav}
                  </CustomLink>
                </NavListItem>
              );
            })}
          </NavList>
        </Nav>
        <Nav className="Trk__dnone--sm ">
          <Button
            data-testid="thebtn"
            href={ClientRoutes.contact}
            color={ButtonColor.PRIMARY}
            variant={ButtonVariant.STANDARD}
          >
            Let’s Talk
          </Button>
        </Nav>
        <Nav className="Trk__dnone--md Trk__absolute--sm Trk__right--3">
          <IconButton href={ClientRoutes.contact}>
            <Image
              width={28}
              height={28}
              src="/chat-bubble.svg"
              alt="ChatBubble"
            />
          </IconButton>
        </Nav>
      </Header>
    </div>
  );
};
