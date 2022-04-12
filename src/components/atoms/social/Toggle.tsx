import { ForwardedRef, forwardRef } from "react";
import { ThemeUICSSObject } from "theme-ui";
import useMatchTheme from "../../../hooks/useMatchTheme";
import { ThemeMode } from "../../../themes";
import { MotionButton } from "../Button";
import ReactIcon from "../IconReact";

type ToggleLinksProps = {
  isActive: boolean;
  onClick: () => void;
};

const SocialToggle = ({ isActive, onClick }: ToggleLinksProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const style: ThemeUICSSObject = {
    bg: "primary",
    color: "textReverse",
    borderRadius: "50%",
    size: 56,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",

    ...(useMatchTheme(ThemeMode.Soft) && {
      boxShadow: (theme) => `inset 2px 2px 6px #fff, 2px 2px 4px ${theme.colors?.highlight}`,
    }),

    ...(useMatchTheme(ThemeMode.Classic) && {
      boxShadow: "inset 0 0 0 2px #000",
    }),

    ...(useMatchTheme(ThemeMode.Tron) && {
      boxShadow: (theme) => `inset 0 0 0 2px ${theme.colors?.shadow}`,
    }),
  };

  return (
    <MotionButton
      ref={ref}
      unsetStyle
      aria-label="Connect with me"
      onClick={onClick}
      sx={style}
      focusStyle={{ borderRadius: "50%" }}
      whileTap={{ scale: 0.85 }}
    >
      <ReactIcon iconName={isActive ? "CgClose" : "AiOutlineShareAlt"} size={24} />
    </MotionButton>
  );
};

export default forwardRef(SocialToggle);
