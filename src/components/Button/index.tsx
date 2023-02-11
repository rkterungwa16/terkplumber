import { FC, HTMLAttributes, ReactNode, forwardRef, ForwardedRef } from "react";
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

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  type?: ButtonType;
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  colorClassNames?: { [color: string]: string };
  sizeClassNames?: { [size: string]: string };
  variantClassNames?: { [size: string]: string };
  disabledClassName?: string;
  href?: string;
  dataId?: string;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      type = ButtonType.BUTTON,
      size = ButtonSize.BASE,
      variant = ButtonVariant.STANDARD,
      href,
      children,
      color = ButtonColor.DEFAULT,
      colorClassNames = defaultColorClasses,
      sizeClassNames = defaultSizeClasses,
      variantClassNames = defaultVariantClasses,
      disabledClassName = defaultDisabledClass,
      disabled = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const colorClass = colorClassNames[color] ? [colorClassNames[color]] : [];
    const sizeClass = sizeClassNames[size] ? [sizeClassNames[size]] : [];
    const variantClass = variantClassNames[variant]
      ? [variantClassNames[variant]]
      : [];
    const disableClass = disabled ? [disabledClassName] : [];
    const classes = cx(styles.BaseButton, className, [
      ...colorClass,
      ...sizeClass,
      ...variantClass,
      ...disableClass,
    ]);

    console.log('variant class', variantClass);
    if (typeof href !== "undefined") {
      const anchorRef = ref as ForwardedRef<HTMLAnchorElement>;
      return (
        <CustomLink
          href={href}
          component={Link}
          // ref={anchorRef}
          className={classes}
          disabled={disabled}
          {...props}
        >
          {children}
        </CustomLink>
      );
    }
    const buttonRef = ref as ForwardedRef<HTMLButtonElement>;
    return (
      <button
        ref={buttonRef}
        type={type}
        className={classes}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
