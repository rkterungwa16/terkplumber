import { forwardRef, ForwardedRef } from "react";
import cx from "classnames";

import { ButtonProps, Button } from "..";
import {
  ButtonType,
  ButtonSize,
  ButtonVariant,
  ButtonColor,
} from "../constants";
import {
  defaultColorClasses,
  defaultSizeClasses,
  defaultVariantClasses,
  defaultDisabledClass,
} from "./icon.constants";

export const IconButton = forwardRef<typeof Button, ButtonProps>(
  (
    {
      type = ButtonType.BUTTON,
      size = ButtonSize.SM,
      variant = ButtonVariant.ICON,
      href,
      children,
      color = ButtonColor.DEFAULT,
      colorClassNames = defaultColorClasses,
      sizeClassNames = defaultSizeClasses,
      variantClassNames = defaultVariantClasses,
      disabledClassName = defaultDisabledClass,
      ...props
    },
    ref
  ) => {
    const buttonRef = ref as ForwardedRef<
      HTMLButtonElement | HTMLAnchorElement
    >;
    return (
      <Button
        ref={buttonRef}
        type={type}
        size={size}
        color={color}
        colorClassNames={colorClassNames}
        sizeClassNames={sizeClassNames}
        disabledClassName={disabledClassName}
        variant={variant}
        variantClassNames={variantClassNames}
        href={href}
        {...props}
      >
        {children}
      </Button>
    );
  }
);
IconButton.displayName = "IconButton";
