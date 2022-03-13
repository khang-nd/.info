import { ReactNode } from "react";
import { ThemeUICSSObject } from "theme-ui";

type WindowProps = {
  title: string;
  children?: ReactNode;
};

export default function Window({ title, children }: WindowProps) {
  const containerStyle: ThemeUICSSObject = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 900,
  };

  const titleStyle: ThemeUICSSObject = {
    bg: "primary",
    color: "white",
    p: 3,
  };

  const bodyStyle: ThemeUICSSObject = {
    bg: "white",
    p: 3,
  };

  return (
    <div sx={containerStyle}>
      <h1 sx={titleStyle}>{title}</h1>
      <div sx={bodyStyle}>{children}</div>
    </div>
  );
}
