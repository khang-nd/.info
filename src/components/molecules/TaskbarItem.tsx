import { darken } from "@theme-ui/color";
import { useContext } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { slideIn } from "../../animations/slide";
import { GlobalContext } from "../../contexts/GlobalContext";
import useInBreakpoint from "../../hooks/useInBreakpoint";
import useMatchTheme from "../../hooks/useMatchTheme";
import { Route } from "../../misc/routes";
import { ThemeMode } from "../../themes";
import { Box, MotionBox } from "../atoms/Container";
import Icon from "../atoms/Icon";

type TaskbarItemProps = {
  data: Route;
};

export default function TaskbarItem({ data }: TaskbarItemProps): JSX.Element {
  const { reduceMotion } = useContext(GlobalContext);
  const isMobile = useInBreakpoint(0);
  const { icon, title } = data;

  const BoxContainer = reduceMotion.val ? Box : MotionBox;

  const containerStyle: ThemeUICSSObject = {
    height: "100%",
    overflow: "hidden",
    ml: 3,

    ...(useMatchTheme(ThemeMode.Soft) && { height: "85%" }),
    ...(useMatchTheme(ThemeMode.Classic) && { height: "80%" }),
    ...(useMatchTheme(ThemeMode.Tron) && { height: "75%" }),
  };

  const itemStyle: ThemeUICSSObject = {
    px: 5,
    bg: darken("primary", 0.08),
    cursor: "default",
    borderBottom: "2px solid",
    borderBottomColor: "secondary",
    display: "flex",
    alignItems: "center",
    minWidth: [null, null, 180],
    height: "100%",

    ...(useMatchTheme(ThemeMode.Soft) && {
      bg: "transparent",
      borderRadius: 10,
      boxShadow: (theme) => `inset 2px 2px 2px ${theme.colors?.shadow}, inset -2px -2px 1px #fff`,
    }),

    ...(useMatchTheme(ThemeMode.Classic) && {
      borderRadius: 8,
      boxShadow: "inset 0 0 0 2px #000",
      fontWeight: 600,
    }),

    ...(useMatchTheme(ThemeMode.Tron) && {
      bg: "green",
      boxShadow: (theme) => `inset 0 0 0 1.5px ${theme.colors?.shadow}`,
    }),
  };

  return (
    <div sx={containerStyle}>
      <BoxContainer sx={itemStyle} custom="right" {...slideIn}>
        <Icon iconName={icon} size={32} />
        {!isMobile && <span sx={{ ml: 3 }}>{title}</span>}
      </BoxContainer>
    </div>
  );
}
