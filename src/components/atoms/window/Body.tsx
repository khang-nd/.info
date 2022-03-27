import { ReactNode } from "react";
import { ThemeUICSSObject } from "theme-ui";

type WindowBodyProps = {
  children: ReactNode;
  style?: ThemeUICSSObject;
};

export default function WindowBody({ children, style }: WindowBodyProps) {
  const bodyStyle: ThemeUICSSObject = {
    bg: "white",
    p: 4,
    flex: 1,
    overflow: "auto",
    ...style,
  };

  return <div sx={bodyStyle}>{children}</div>;
}
