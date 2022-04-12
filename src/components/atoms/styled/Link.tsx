import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { MotionButton } from "../Button";

type StyledLinkProps = {
  children: ReactNode;
  href: string;
};

export default function StyledLink({ href, children }: StyledLinkProps) {
  const underlineVariants: Variants = {
    hovered: {
      top: 0,
      height: "calc(100% + 2px)",
      transition: { type: "tween" },
    },
  };

  const underlineStyle: ThemeUICSSObject = {
    bg: "secondary",
    position: "absolute",
    left: 0,
    top: "100%",
    width: "100%",
    height: "2px",
    zIndex: 0,
  };

  const shadowStyle: ThemeUICSSObject = {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  };

  return (
    <MotionButton
      unsetStyle
      unsetFocus
      inline
      href={href}
      sx={{ fontWeight: 500, color: "var(--theme-ui-colors-text)" }}
      whileHover="hovered"
      whileFocus="hovered"
    >
      {children}
      <span sx={shadowStyle}>{children}</span>
      <motion.span sx={underlineStyle} variants={underlineVariants} />
    </MotionButton>
  );
}
