import { Header, Nav, NavList, NavListItem } from "@components/Header";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import cx from "classnames";

import styles from "./styles.module.css";

import { HeaderNavs, ClientRoutes } from "@routes/client";
import { CustomLink } from "@components/Link";
import { Button } from "@components/Button";
import { ButtonColor, ButtonVariant } from "@components/Button/constants";

export const PageHeader = () => {
  const router = useRouter();
  const pathname = router?.pathname;
  return (
    <Header className={cx(styles.Page__header, "bg-milky-white")}>
      <Nav>
        <CustomLink component={Link} href={ClientRoutes.home}>
          <Image width={117} height={42} src="/logo.png" alt="Logo" />
        </CustomLink>
      </Nav>
      <Nav>
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
      <Nav>
        <Button
          href={ClientRoutes.contact}
          color={ButtonColor.PRIMARY}
          variant={ButtonVariant.STANDARD}
        >
          Let’s Talk
        </Button>
      </Nav>
    </Header>
  );
};
