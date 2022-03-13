import Image from "next/image";
import IconMap from "../../icons";
import { sizes } from "../../themes";

export type IconName = keyof typeof IconMap;

type IconProps = {
  iconName: IconName;
  size?: number;
};

export default function Icon({ iconName, size = 24 }: IconProps) {
  const _size = size >= sizes.length ? size : sizes[size];
  return <Image src={IconMap[iconName]} alt={iconName} width={_size} height={_size} />;
}
