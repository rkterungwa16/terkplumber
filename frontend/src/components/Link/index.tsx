import {
  HTMLAttributes,
  FC,
  ElementType,
  ReactNode,
  forwardRef,
} from "react";

interface CustomAnchorProps {
  active?: boolean;
  disabled?: boolean;
  href?: string;
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
      ...others
    },
    ref
  ) => {
    if (Component) {
      return (
        <Component
          {...others}
          {...(active && { "aria-current": "page" })}
          {...(disabled && { "aria-disabled": true, tabIndex: -1 })}
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
        ref={ref}
      >
        {children}
      </a>
    );
  }
);

CustomLink.displayName = "CustomLink";
