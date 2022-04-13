import { ElementType, ReactNode } from "react";
import { Heading, Text, ThemeUICSSObject } from "theme-ui";
import useMatchTheme from "../../hooks/useMatchTheme";
import { ThemeMode } from "../../themes";

type CommonProps = {
  children: ReactNode;
  style?: ThemeUICSSObject;
};

type HeadingProps = CommonProps & {
  as?: ElementType<any>;
};

export const H3 = ({ as = "h3", children, style }: HeadingProps) => {
  const innerStyle: ThemeUICSSObject = {
    color: !useMatchTheme(ThemeMode.Flat) ? "text" : "primary",
    fontVariant: "small-caps",
    fontWeight: "bold",
    fontSize: 20,
    mb: 3,
    ...style,
  };

  return (
    <Heading as={as} sx={innerStyle}>
      {children}
    </Heading>
  );
};

export const H2 = ({ children, style }: HeadingProps) => {
  return <Heading sx={{ fontSize: 32, ...style }}>{children}</Heading>;
};

export const SubTitle = ({ as = "p", children, style }: HeadingProps) => {
  return (
    <Text as={as} sx={{ color: "muted", mb: 5, ...style }}>
      {children}
    </Text>
  );
};

export const P = ({ children, style }: CommonProps) => {
  return <p sx={{ mb: 4, ...style }}>{children}</p>;
};
