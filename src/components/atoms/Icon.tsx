import { motion } from "framer-motion";
import Image from "next/image";
import { ElementType, forwardRef, Ref } from "react";
import { Box, ThemeUICSSObject } from "theme-ui";
import IconMap from "../../icons";

export type IconName = keyof typeof IconMap;

type IconProps = {
  iconName: IconName;
  size?: number;
  tag?: ElementType<any>;
  sx?: ThemeUICSSObject;
};

const IconWithRef = ({ iconName, size = 24, tag, sx }: IconProps, ref: Ref<HTMLDivElement>) => {
  return (
    <Box as={tag} ref={ref} sx={{ size, ...sx }}>
      <Image src={IconMap[iconName]} alt={iconName} layout="responsive" />
    </Box>
  );
};

const Icon = forwardRef(IconWithRef);

export const MotionIcon = motion(Icon);

export default Icon;
