import { useRouter } from "next/router";
import { ReactNode } from "react";
import { ThemeUICSSObject } from "theme-ui";

type WindowTitleProps = {
  children?: ReactNode;
};

export default function WindowTitle({ children }: WindowTitleProps) {
  const router = useRouter();

  const titleStyle: ThemeUICSSObject = {
    bg: "primary",
    color: "textReverse",
    p: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const closeBtnStyle: ThemeUICSSObject = {
    bg: "red",
    border: 0,
    color: "textReverse",
    size: 5,
    cursor: "pointer",
  };

  return (
    <h1 sx={titleStyle}>
      <span>{children}</span>
      <button aria-label="Close" onClick={() => router.push("/")} sx={closeBtnStyle} />
    </h1>
  );
}
