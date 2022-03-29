import { ThemeUICSSObject } from "theme-ui";
import { sizes } from "../../../themes";
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
