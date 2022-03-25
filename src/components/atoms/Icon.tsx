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
  style?: ThemeUICSSObject;
};

const Icon = ({ iconName, size = 24, tag, style }: IconProps, ref: Ref<HTMLDivElement>) => {
  return (
    <Box as={tag} ref={ref} sx={{ size, ...style }}>
      <Image src={IconMap[iconName]} alt={iconName} layout="responsive" />
    </Box>
  );
};

const IconWithRef = forwardRef(Icon);

export const MotionIcon = motion(IconWithRef);

export default IconWithRef;
