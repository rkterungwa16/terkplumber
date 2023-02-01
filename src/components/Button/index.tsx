import { FC, HTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import cx from "classnames";

import { CustomLink } from "../Link";
import styles from "./styles.module.css";

import {
  ButtonColor,
  ButtonSize,
  ButtonType,
  defaultColorClasses,
  defaultSizeClasses,
  defaultDisabledClass,
  ButtonVariant,
  defaultVariantClasses,
} from "./constants";

export interface BaseButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  type?: ButtonType;
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  colorClassNames: { [color: string]: string };
  sizeClassNames: { [size: string]: string };
  variantClassNames: { [size: string]: string };
  disablClassName: string;
  href?: string;
  dataId?: string;
  disabled?: boolean;
  children?: ReactNode;
}

export const BaseButton: FC<BaseButtonProps> = ({
  type = ButtonType.BUTTON,
  size = ButtonSize.BASE,
  variant = ButtonVariant.STANDARD,
  href,
  children,
  color = ButtonColor.DEFAULT,
  colorClassNames = defaultColorClasses,
  sizeClassNames = defaultSizeClasses,
  variantClassNames = defaultVariantClasses,
  disablClassName = defaultDisabledClass,
  disabled = false,
  className = "",
  ...props
}) => {
  const colorClass = colorClassNames[color] ? [colorClassNames[color]] : [];
  const sizeClass = sizeClassNames[size] ? [sizeClassNames[size]] : [];
  const variantClass = variantClassNames[variant] ? [sizeClassNames[size]] : [];
  const disableClass = disablClassName ? [disablClassName] : [];
  const classes = cx(styles.BaseButton, className, [
    ...colorClass,
    ...sizeClass,
    ...variantClass,
    ...disableClass,
  ]);
  if (typeof href !== "undefined") {
    <CustomLink
      component={
        <Link href={href}>
          <a className={classes} {...props}>
            {children}
          </a>
        </Link>
      }
    />;
    return (
      <Link href={href}>
        <a className={classes} {...props}>
          {children}
        </a>
      </Link>
    );
  }
  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
