import { motion } from "framer-motion";
import Image from "next/image";
import { forwardRef, Ref } from "react";
import IconMap from "../../icons";
import { sizes } from "../../themes";

export type IconName = keyof typeof IconMap;

type IconProps = {
  iconName: IconName;
  size?: number;
};

const IconWithRef = ({ iconName, size = 24 }: IconProps, ref: Ref<HTMLDivElement>) => {
  const _size = size >= sizes.length ? size : sizes[size];
  return (
    <div ref={ref} sx={{ width: _size, height: _size }}>
      <Image src={IconMap[iconName]} alt={iconName} layout="responsive" />
    </div>
  );
};

const Icon = forwardRef(IconWithRef);

export const MotionIcon = motion(Icon);

export default Icon;
