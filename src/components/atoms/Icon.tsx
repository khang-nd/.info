import { motion } from "framer-motion";
import Image from "next/image";
import { ElementType, forwardRef, Ref } from "react";
import { Box, ThemeUICSSObject } from "theme-ui";
import useMatchTheme from "../../hooks/useMatchTheme";
import IconMap from "../../icons";
import { ThemeMode } from "../../themes";

export type IconName = keyof typeof IconMap;

type IconProps = {
  iconName: IconName;
  size?: number;
  tag?: ElementType<any>;
  style?: ThemeUICSSObject;
};

const IconWithRef = ({ iconName, size = 24, tag, style }: IconProps, ref: Ref<HTMLDivElement>) => {
  const icon = IconMap[iconName];

  const iconStyle: ThemeUICSSObject = {
    size,
    ...(useMatchTheme(ThemeMode.Soft) && {
      filter: "brightness(0.8) contrast(1.6)",
    }),
    ...style,
  };

  if (!icon) {
    console.error(iconName + " is not recognized");
    return null;
  }

  return (
    <Box as={tag} ref={ref} sx={iconStyle}>
      <Image src={icon} alt={iconName} layout="responsive" />
    </Box>
  );
};

const Icon = forwardRef(IconWithRef);

export const MotionIcon = motion(Icon);

export default Icon;
