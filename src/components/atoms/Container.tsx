import { motion } from "framer-motion";
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from "react";
import { Box as _Box, Flex as _Flex, SxProp } from "theme-ui";

type ContainerProps<T = HTMLElement> = HTMLAttributes<T> & SxProp;

const _List = forwardRef((props: ContainerProps, ref: ForwardedRef<HTMLUListElement>) => <ul ref={ref} {...props} />);
_List.displayName = "List";

const _Nav = forwardRef((props: ContainerProps, ref: ForwardedRef<HTMLElement>) => <nav ref={ref} {...props} />);
_Nav.displayName = "Nav";

const _Section = forwardRef((props: ContainerProps, ref: ForwardedRef<HTMLElement>) => (
  <section ref={ref} {...props} />
));
_Section.displayName = "Section";

export const List = _List;
export const MotionList = motion(List);

export const Nav = _Nav;
export const MotionNav = motion(Nav);

export const Section = _Section;
export const MotionSection = motion(Section);

export const Box = _Box;
export const MotionBox = motion(Box);

export const Flex = _Flex;
export const MotionFlex = motion(Flex);
