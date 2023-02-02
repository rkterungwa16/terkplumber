import {
  HTMLAttributes,
  FC,
  cloneElement,
  ReactElement,
  ReactNode,
  forwardRef,
} from "react";

import cx from "classnames";

interface CustomAnchorProps {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  anchorDisabledClassName?: string;
  anchorActiveClassName?: string;
}

interface ComponentProps extends CustomAnchorProps {
  [key: string]: boolean | string | undefined;
}

interface CustomLinkProps
  extends HTMLAttributes<HTMLAnchorElement>,
    CustomAnchorProps {
  component?: ReactElement;
  componentProps?: ComponentProps;
  children?: ReactNode;
}
export const CustomLink: FC<CustomLinkProps> = forwardRef<
  HTMLAnchorElement,
  CustomLinkProps
>(
  (
    {
      component,
      componentProps,
      active,
      href,
      disabled,
      children,
      anchorActiveClassName,
      anchorDisabledClassName,
      className,
      ...others
    },
    ref
  ) => {
    if (component) {
      return cloneElement(component, {
        ...(active && { "aria-current": "page" }),
        ...(disabled && { "aria-disabled": true, tabIndex: -1 }),
        ...(componentProps && componentProps),
      });
    }

    const activeClass = active ? [anchorActiveClassName] : [];
    const disableClass = disabled
      ? [anchorDisabledClassName]
      : [];
    const classes = cx(className, [...activeClass, ...disableClass]);
    return (
      <a
        {...others}
        {...(active && { "aria-current": "page" })}
        {...(disabled && { "aria-disabled": true, tabIndex: -1 })}
        className={classes}
        ref={ref}
      >
        {children}
      </a>
    );
  }
);

CustomLink.displayName = "CustomLink";
