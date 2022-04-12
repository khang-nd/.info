import { ThemeUICSSObject } from "theme-ui";
import useMatchTheme from "../../../hooks/useMatchTheme";
import { sizes, ThemeMode } from "../../../themes";
import { MotionButton } from "../Button";
import ReactIcon from "../IconReact";

export type SocialLinkType = {
  text: string;
  icon: string;
  href: string;
};

type SocialLinkProps = {
  link: SocialLinkType;
  size: number;
};

export default function SocialLink({ link, size }: SocialLinkProps) {
  const buttonStyle: ThemeUICSSObject = {
    size,
    bg: "primary",
    color: "textReverse",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",

    ...(useMatchTheme(ThemeMode.Soft) && {
      color: "text",
      boxShadow: (theme) => `inset 2px 2px 4px #fff, 2px 2px 4px ${theme.colors?.shadow}`,
    }),

    ...(useMatchTheme(ThemeMode.Classic) && {
      boxShadow: "inset 0 0 0 2px #000",
      color: "text",
    }),

    ...(useMatchTheme(ThemeMode.Tron) && {
      boxShadow: (theme) => `inset 0 0 0 2px ${theme.colors?.shadow}`,
    }),
  };

  return (
    <MotionButton
      unsetStyle
      sx={buttonStyle}
      focusStyle={{ borderRadius: "50%" }}
      href={link.href}
      aria-label={link.text}
      whileHover={{ scale: 1.1 }}
    >
      <ReactIcon iconName={link.icon} size={size - sizes[5]} />
    </MotionButton>
  );
}
