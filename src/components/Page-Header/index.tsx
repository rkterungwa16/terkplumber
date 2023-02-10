import { Header, Nav, NavList, NavListItem } from "@components/Header";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

import styles from "./styles.module.css";

import { HeaderNavs } from "./constants";
import { CustomLink } from "@components/Link";
export const PageHeader = () => {
  return (
    <Header className={cx(styles.Page__header, "bg-milky-white")}>
      <Nav>
        <CustomLink component={Link} href="/">
          <Image width={117} height={42} src="/logo.png" alt="Logo" />
        </CustomLink>
      </Nav>
      <Nav>
        <NavList>
          {Object.values(HeaderNavs).map((nav, index) => {
            return <NavListItem key={index}>{nav}</NavListItem>;
          })}
        </NavList>
      </Nav>
    </Header>
  );
};
