import { ButtonColor, ButtonSize, ButtonVariant } from "../constants";
import styles from "./styles.module.css";

export const defaultColorClasses = {
  [ButtonColor.DEFAULT]: styles["IconButton--default"],
}

export const defaultDisabledClass = styles["Button--disabled"];
export const defaultVariantClasses = {
  [ButtonVariant.ICON]: styles["Button--icon"]
}

export const defaultSizeClasses = {
  [ButtonSize.XS]: styles["IconButtonSize--xs"],
  [ButtonSize.SM]: styles["IconButtonSize--sm"],
  [ButtonSize.BASE]: styles["IconButtonSize--base"],
  [ButtonSize.L]: styles["IconButtonSize--l"],
  [ButtonSize.XL]: styles["IconButtonSize--xl"],
}
