import styles from "./styles.module.css";

export enum ButtonType {
  BUTTON = "button",
  SUBMIT = "submit",
}

export enum ButtonVariant {
  STANDARD = "standard",
  ROUNDED = "rounded",
  OUTLINE = "outline",
  ICON = "icon"
}

export enum ButtonColor {
  DEFAULT = "default",
  SECONDARY = "secondary",
  PRIMARY = "primary",
  WHITE = "white",
}

export enum ButtonSize {
  XS = "xs",
  SM = "sm",
  BASE = "base",
  L = "l",
  XL = "xl",
}

export const defaultColorClasses = {
  [ButtonColor.DEFAULT]: styles["BaseButton--default"],
  [ButtonColor.PRIMARY]: styles["BaseButton--primary"],
  [ButtonColor.SECONDARY]: styles["BaseButton--secondary"]
}

export const defaultDisabledClass = styles["BaseButton--disabled"];
export const defaultVariantClasses = {
  [ButtonVariant.STANDARD]: styles["BaseButton--standard"],
  [ButtonVariant.OUTLINE]: styles["BaseButton--outline"],
  [ButtonVariant.ROUNDED]: styles["BaseButton--rounded"],
  [ButtonVariant.ICON]: styles["BaseButton--icon"]
}

export const defaultSizeClasses = {
  [ButtonSize.XS]: styles["BaseButtonSize--xs"],
  [ButtonSize.SM]: styles["BaseButtonSize--sm"],
  [ButtonSize.BASE]: styles["BaseButtonSize--base"],
  [ButtonSize.L]: styles["BaseButtonSize--l"],
  [ButtonSize.XL]: styles["BaseButtonSize--xl"],
}
