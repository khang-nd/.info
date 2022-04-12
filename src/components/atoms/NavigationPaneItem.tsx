import { motion } from "framer-motion";
import { Flex, ThemeUICSSObject } from "theme-ui";
import { fade } from "../../animations/fade";
import useInBreakpoint from "../../hooks/useInBreakpoint";
import useMatchTheme from "../../hooks/useMatchTheme";
import { ThemeMode } from "../../themes";
import Button from "./Button";
import ReactIcon from "./IconReact";

type NavigationPaneItemProps = {
  text: string;
  /** Search for icon name at https://react-icons.github.io/react-icons. */
  icon: string | string[];
  isActive?: boolean;
  onClick?: () => void;
};

export default function NavigationPaneItem({ icon, text, isActive, onClick }: NavigationPaneItemProps) {
  const isMobile = useInBreakpoint(0);

  const Icon = ({ icon }: { icon: string }) => <ReactIcon iconName={icon} size={isMobile ? 24 : 32} />;

  const IconGroup = ({ icon }: { icon: string[] }) =>
    isActive ? (
      <motion.span key="active" {...fade}>
        <Icon icon={icon[1]} />
      </motion.span>
    ) : (
      <motion.span key="default">
        <Icon icon={icon[0]} />
      </motion.span>
    );

  const hoverStyle: ThemeUICSSObject = {
    bg: "background",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 0,

    ...(useMatchTheme(ThemeMode.Soft) && {
      borderRadius: "0 20px 20px 0",
      boxShadow: (theme) => `inset -1px 1px 0 1px #fff, 1px 1px 3px ${theme.colors?.shadow}`,
    }),

    ...(useMatchTheme(ThemeMode.Classic) && {
      bg: "primary",
      borderRadius: 6,
      boxShadow: "inset 0 0 0 2px #000",
    }),

    ...(useMatchTheme(ThemeMode.Tron) && {
      bg: "green",
      boxShadow: (theme) => `0 0 0 1.5px ${theme.colors?.shadow}`,
    }),
  };

  return (
    <li>
      <Button unsetStyle sx={{ py: 1, px: 1, pr: 4 }} onClick={onClick}>
        <Flex as="span" sx={{ alignItems: "center", zIndex: 1 }}>
          {typeof icon === "string" ? <Icon icon={icon} /> : <IconGroup icon={icon} />}
          <span sx={{ flex: 1, ml: [2, null, 3], fontSize: [14, null, "initial"] }}>{text}</span>
        </Flex>
        {isActive && <motion.span layoutId="navigation-indicator" {...fade} sx={hoverStyle} />}
      </Button>
    </li>
  );
}
