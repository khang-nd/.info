import { ElementType, ReactNode } from "react";
import { Text, ThemeUICSSObject } from "theme-ui";
import useMatchTheme from "../../hooks/useMatchTheme";
import { ThemeMode } from "../../themes";

type CommonProps = {
  children: ReactNode;
  style?: ThemeUICSSObject;
};

type SubTitleProps = CommonProps & {
  as?: ElementType<any>;
};

export const H3 = ({ children, style }: CommonProps) => {
  const innerStyle: ThemeUICSSObject = {
    color: useMatchTheme(ThemeMode.Soft) ? "text" : "primary",
    fontVariant: "small-caps",
    fontWeight: "bold",
    fontSize: 20,
    mb: 3,
    ...style,
  };

  return <h3 sx={innerStyle}>{children}</h3>;
};

export const H2 = ({ children, style }: CommonProps) => {
  return <h2 sx={{ fontSize: 32, ...style }}>{children}</h2>;
};

export const SubTitle = ({ as = "p", children, style }: SubTitleProps) => {
  return (
    <Text as={as} sx={{ color: "muted", mb: 5, ...style }}>
      {children}
    </Text>
  );
};

export const P = ({ children, style }: CommonProps) => {
  return <p sx={{ mb: 4, ...style }}>{children}</p>;
};
