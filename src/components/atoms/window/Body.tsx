import { ReactNode } from "react";
import { ThemeUICSSObject } from "theme-ui";

type WindowBodyProps = {
  children: ReactNode;
};

export default function WindowBody({ children }: WindowBodyProps) {
  const bodyStyle: ThemeUICSSObject = {
    bg: "white",
    p: 3,
    flex: 1,
  };

  return <div sx={bodyStyle}>{children}</div>;
}
