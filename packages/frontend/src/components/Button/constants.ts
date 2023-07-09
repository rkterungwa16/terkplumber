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
  [ButtonColor.DEFAULT]: styles["Button--default"],
  [ButtonColor.PRIMARY]: styles["Button--primary"],
  [ButtonColor.SECONDARY]: styles["Button--secondary"]
}

export const defaultDisabledClass = styles["Button--disabled"];
export const defaultVariantClasses = {
  [ButtonVariant.STANDARD]: styles["Button--standard"],
  [ButtonVariant.OUTLINE]: styles["Button--outline"],
  [ButtonVariant.ROUNDED]: styles["Button--rounded"],
  [ButtonVariant.ICON]: styles["Button--icon"]
}

export const defaultSizeClasses = {
  [ButtonSize.XS]: styles["ButtonSize--xs"],
  [ButtonSize.SM]: styles["ButtonSize--sm"],
  [ButtonSize.BASE]: styles["ButtonSize--base"],
  [ButtonSize.L]: styles["ButtonSize--l"],
  [ButtonSize.XL]: styles["ButtonSize--xl"],
}
