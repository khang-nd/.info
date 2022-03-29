import { ReactNode } from "react";
import { ThemeUICSSObject } from "theme-ui";

type WindowBodyProps = {
  children: ReactNode;
};

export default function WindowBody({ children }: WindowBodyProps) {
  const bodyStyle: ThemeUICSSObject = {
    bg: "white",
    p: 4,
    flex: 1,
    overflow: "auto",
  };

  return <div sx={bodyStyle}>{children}</div>;
}
