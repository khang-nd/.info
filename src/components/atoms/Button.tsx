import { motion } from "framer-motion";
import Link from "next/link";
import {
  AriaAttributes,
  DOMAttributes,
  ForwardedRef,
  forwardRef,
  LegacyRef,
  ReactNode,
  useImperativeHandle,
  useRef,
} from "react";
import { ThemeUICSSObject } from "theme-ui";
import { useIsFocused } from "../../hooks/useIsFocused";
import { focus, zIndex } from "../../themes/common";

export type ButtonProps = DOMAttributes<HTMLAnchorElement | HTMLButtonElement> &
  AriaAttributes & {
    children: ReactNode;
    href?: string;
    sx?: ThemeUICSSObject;
    /** Unset all default button style. */
    unsetStyle?: boolean;
    /** Disable default focus style. */
    unsetFocus?: boolean;
    focusStyle?: ThemeUICSSObject;
    inline?: boolean;
  };

type ButtonRef = ForwardedRef<HTMLAnchorElement | HTMLButtonElement>;

const Button = forwardRef((props: ButtonProps, ref: ButtonRef): JSX.Element => {
  const { children, href, sx, unsetStyle, unsetFocus, focusStyle, inline, ...otherProps } = props;
  const innerRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  useImperativeHandle(ref, () => innerRef.current as HTMLAnchorElement | HTMLButtonElement);
  const isFocused = useIsFocused(innerRef);

  const defaultStyle: ThemeUICSSObject = {
    all: unsetStyle ? "unset" : null,
    cursor: "pointer",
    display: inline ? "inline-block" : "flex",
    width: inline ? null : "100%",
    boxSizing: "border-box",
    position: "relative",
    ...sx,
  };

  const innerButtonStyle: ThemeUICSSObject = {
    ...focus,
    borderRadius: 3,
    ...focusStyle,
  };

  const focusBox = !unsetFocus && isFocused && <span sx={innerButtonStyle} />;

  if (href) {
    const isExternal = !href.startsWith("/");

    return (
      <Link href={href}>
        <a
          href={href}
          target={isExternal ? "_blank" : "_self"}
          rel="noreferrer"
          sx={defaultStyle}
          ref={innerRef as LegacyRef<HTMLAnchorElement> | undefined}
          {...otherProps}
        >
          {focusBox}
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button ref={innerRef as LegacyRef<HTMLButtonElement> | undefined} sx={defaultStyle} {...otherProps}>
      {focusBox}
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;

export const MotionButton = motion(Button);
