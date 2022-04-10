import { Variants } from "framer-motion";
import Image from "next/image";
import { ForwardedRef, forwardRef, useContext } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { GlobalContext } from "../../contexts/GlobalContext";
import useTaskbarHeight from "../../hooks/useTaskbarHeight";
import { sizes } from "../../themes";
import Button from "../atoms/Button";
import { List, MotionBox } from "../atoms/Container";
import Toggle from "../atoms/Toggle";

type PanelConfigProps = {
  isVisible?: boolean;
};

const PanelConfig = ({ isVisible }: PanelConfigProps, ref: ForwardedRef<HTMLElement>) => {
  const { reduceAnim, hideTaskbar } = useContext(GlobalContext);

  const panelConfigStyle: ThemeUICSSObject = {
    p: 4,
    bg: "primary",
    color: "textReverse",
    position: "absolute",
    left: 2,
    bottom: useTaskbarHeight() + sizes[2],
  };

  const variants: Variants = {
    default: { x: "-105%", transitionEnd: { display: "none" } },
    active: { x: 0, display: "block" },
  };

  const ThemePreview = ({ image }: { image: string }) => (
    <li>
      <Button unsetStyle>
        <Image src={`/images/theme-${image}.webp`} alt={`Theme ${image}`} layout="fixed" width={140} height={84} />
      </Button>
    </li>
  );

  return (
    <MotionBox
      ref={ref}
      sx={panelConfigStyle}
      variants={variants}
      initial="default"
      animate={isVisible ? "active" : "default"}
    >
      <List sx={{ display: "grid", gridTemplateColumns: "auto auto", gap: 3, mb: 4 }}>
        <ThemePreview image="flat" />
        <ThemePreview image="neumorphism" />
        <ThemePreview image="classic" />
      </List>
      <Toggle
        id="toggle-reduceAnimation"
        label="Reduce animation"
        isChecked={reduceAnim.val}
        onChange={() => reduceAnim.set(!reduceAnim.val)}
        style={{ mb: 2 }}
      />
      <Toggle
        id="toggle-hideTaskbar"
        label="Hide taskbar"
        isChecked={hideTaskbar.val}
        onChange={() => hideTaskbar.set(!hideTaskbar.val)}
      />
    </MotionBox>
  );
};

export default forwardRef(PanelConfig);
