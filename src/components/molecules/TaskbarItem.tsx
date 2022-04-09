import { darken } from "@theme-ui/color";
import { ThemeUICSSObject } from "theme-ui";
import { slideIn } from "../../animations/slide";
import useInBreakpoint from "../../hooks/useInBreakpoint";
import { Route } from "../../misc/routes";
import { MotionBox } from "../atoms/Container";
import Icon from "../atoms/Icon";

type TaskbarItemProps = {
  data: Route;
};

export default function TaskbarItem({ data }: TaskbarItemProps): JSX.Element {
  const isMobile = useInBreakpoint(0);
  const { icon, title } = data;

  const containerStyle: ThemeUICSSObject = {
    height: "100%",
    overflow: "hidden",
  };

  const itemStyle: ThemeUICSSObject = {
    px: 5,
    mr: 3,
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
      <MotionBox sx={itemStyle} custom="right" {...slideIn}>
        <Icon iconName={icon} size={32} />
        {!isMobile && <span sx={{ ml: 3 }}>{title}</span>}
      </MotionBox>
    </div>
  );
}
