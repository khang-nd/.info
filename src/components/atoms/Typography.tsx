import { ReactNode } from "react";
import { ThemeUICSSObject } from "theme-ui";

type HeadingProps = {
  children: ReactNode;
  style?: ThemeUICSSObject;
};

export const H3 = ({ children }: HeadingProps) => {
  const style: ThemeUICSSObject = {
    color: "primary",
    fontVariant: "small-caps",
    fontWeight: "bold",
    fontSize: 3,
    mb: 3,
  };

  return <h3 sx={style}>{children}</h3>;
};
