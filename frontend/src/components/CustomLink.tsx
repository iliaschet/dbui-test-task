import { forwardRef } from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

export const CustomLink = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, style, ...other } = props;
  return (
    <RouterLink
      ref={ref}
      to={href}
      style={{
        textDecoration: "none",
        color: "inherit",
        ...style,
      }}
      {...other}
    />
  );
});
