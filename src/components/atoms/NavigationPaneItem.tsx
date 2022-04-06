import { motion } from "framer-motion";
import { useContext } from "react";
import { Flex } from "theme-ui";
import { fade } from "../../animations/fade";
import { GlobalContext } from "../../contexts/GlobalContext";
import useInBreakpoint from "../../hooks/useInBreakpoint";
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
  const { enableAnimation } = useContext(GlobalContext);

  const Icon = ({ icon }: { icon: string }) => <ReactIcon iconName={icon} size={isMobile ? 24 : 32} />;

  const IconGroup = ({ icon }: { icon: string[] }) =>
    isActive ? (
      <motion.span key="active" {...fade} transition={!enableAnimation.val ? { duration: 0 } : {}}>
        <Icon icon={icon[1]} />
      </motion.span>
    ) : (
      <motion.span key="default">
        <Icon icon={icon[0]} />
      </motion.span>
    );

  return (
    <li>
      <Button unsetStyle sx={{ py: 1, px: 1, pr: 4 }} onClick={onClick}>
        <Flex as="span" sx={{ alignItems: "center", zIndex: 1 }}>
          {typeof icon === "string" ? <Icon icon={icon} /> : <IconGroup icon={icon} />}
          <span sx={{ flex: 1, ml: [2, null, 3], fontSize: [14, null, "initial"] }}>{text}</span>
        </Flex>
        {isActive && (
          <motion.span
            layoutId="navigation-indicator"
            {...fade}
            transition={!enableAnimation.val ? { duration: 0 } : {}}
            sx={{
              bg: "background",
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: 0,
            }}
          />
        )}
      </Button>
    </li>
  );
}
