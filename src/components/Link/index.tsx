import {
  HTMLAttributes,
  FC,
  cloneElement,
  ReactElement,
  ReactNode,
} from "react";

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
export const CustomLink: FC<CustomLinkProps> = ({
  component,
  componentProps,
  active,
  href,
  disabled,
  children,
  anchorActiveClassName,
  anchorDisabledClassName,
  ...others
}) => {
  if (component) {
    return cloneElement(component, {
      ...(active && { "aria-current": "page" }),
      ...(disabled && { "aria-disabled": true, tabIndex: -1 }),
      ...(componentProps && componentProps),
    });
  }
  return (
    <a
      {...others}
      {...(active && { "aria-current": "page" })}
      {...(disabled && { "aria-disabled": true, tabIndex: -1 })}
    >
      {children}
    </a>
  );
};
