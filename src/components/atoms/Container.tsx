import { motion } from "framer-motion";
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from "react";
import { Box as _Box, Flex as _Flex, SxProp } from "theme-ui";

type ListProps = HTMLAttributes<HTMLUListElement> &
  SxProp & {
    children?: ReactNode;
  };

type ListRef = ForwardedRef<HTMLUListElement>;

const _List = forwardRef(({ children, ...props }: ListProps, ref: ListRef) => (
  <ul ref={ref} {...props}>
    {children}
  </ul>
));
_List.displayName = "List";

export const List = _List;
export const MotionList = motion(List);

export const Box = _Box;
export const MotionBox = motion(Box);

export const Flex = _Flex;
export const MotionFlex = motion(Flex);
