import { motion } from "framer-motion";
import Link from "next/link";
import { ForwardedRef, forwardRef, LegacyRef, MouseEventHandler, ReactNode } from "react";
import { ThemeUICSSObject } from "theme-ui";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  style?: ThemeUICSSObject;
  unsetStyle?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

type ButtonRef = ForwardedRef<HTMLAnchorElement | HTMLButtonElement>;

const Button = forwardRef((props: ButtonProps, ref: ButtonRef): JSX.Element => {
  const { children, href, style, unsetStyle, onClick } = props;

  const defaultStyle: ThemeUICSSObject = {
    all: unsetStyle ? "unset" : null,
    cursor: "pointer",
    ...style,
  };

  if (href) {
    return (
      <Link href={href}>
        <a href={href} sx={defaultStyle} ref={ref as LegacyRef<HTMLAnchorElement> | undefined}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button ref={ref as LegacyRef<HTMLButtonElement> | undefined} sx={defaultStyle} onClick={onClick}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;

export const MotionButton = motion(Button);
