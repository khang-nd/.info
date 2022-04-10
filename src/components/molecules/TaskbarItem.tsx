import { darken } from "@theme-ui/color";
import { useContext } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { slideIn } from "../../animations/slide";
import { GlobalContext } from "../../contexts/GlobalContext";
import useInBreakpoint from "../../hooks/useInBreakpoint";
import { Route } from "../../misc/routes";
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
