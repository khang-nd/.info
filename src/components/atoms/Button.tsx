import { motion } from "framer-motion";
import Link from "next/link";
import { DOMAttributes, ForwardedRef, forwardRef, LegacyRef, ReactNode, useImperativeHandle, useRef } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { useIsFocused } from "../../hooks/useIsFocused";

type ButtonProps = DOMAttributes<HTMLAnchorElement | HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  style?: ThemeUICSSObject;
  unsetStyle?: boolean;
};

type ButtonRef = ForwardedRef<HTMLAnchorElement | HTMLButtonElement>;

const Button = forwardRef((props: ButtonProps, ref: ButtonRef): JSX.Element => {
  const { children, href, style, unsetStyle, ...otherProps } = props;
  const innerRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  useImperativeHandle(ref, () => innerRef.current as HTMLAnchorElement | HTMLButtonElement);
  const isFocused = useIsFocused(innerRef);

  const defaultStyle: ThemeUICSSObject = {
    all: unsetStyle ? "unset" : null,
    cursor: "pointer",
    position: "relative",
    ...style,
  };

  const innerButtonStyle: ThemeUICSSObject = {
    border: "1px solid currentColor",
    borderRadius: 3,
    pointerEvents: "none",
    position: "absolute",
    top: "-2px",
    left: "-2px",
    bottom: "-2px",
    right: "-2px",
  };

  if (href) {
    return (
      <Link href={href}>
        <a href={href} sx={defaultStyle} ref={innerRef as LegacyRef<HTMLAnchorElement> | undefined}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button ref={innerRef as LegacyRef<HTMLButtonElement> | undefined} sx={defaultStyle} {...otherProps}>
      {isFocused && <span sx={innerButtonStyle} />}
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;

export const MotionButton = motion(Button);
