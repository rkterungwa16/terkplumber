import {
  HTMLAttributes,
  FC,
  cloneElement,
  ReactElement,
  ElementType,
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
  [key: string]: any;
}

interface CustomLinkProps
  extends HTMLAttributes<HTMLAnchorElement>,
    CustomAnchorProps {
  component?: ElementType;
  componentProps?: ComponentProps;
  children?: ReactNode;
}
export const CustomLink: FC<CustomLinkProps> = forwardRef<
  HTMLAnchorElement,
  CustomLinkProps
>(
  (
    {
      component: Component,
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
    const activeClass = active ? [anchorActiveClassName] : [];
    const disableClass = disabled ? [anchorDisabledClassName] : [];
    const classes = cx(className, [...activeClass, ...disableClass]);

    if (Component) {
      console.log("classes -->>", classes);
      return (
        <Component
          {...others}
          {...(active && { "aria-current": "page" })}
          {...(disabled && { "aria-disabled": true, tabIndex: -1 })}
          {...(classes && { className: classes })}
          href={href}
          ref={ref}
        >
          {children}
        </Component>
      );
    }

    return (
      <a
        {...others}
        {...(active && { "aria-current": "page" })}
        {...(disabled && { "aria-disabled": true, tabIndex: -1 })}
        {...(classes && { className: classes })}
        ref={ref}
      >
        {children}
      </a>
    );
  }
);

CustomLink.displayName = "CustomLink";
