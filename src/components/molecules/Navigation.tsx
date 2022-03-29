import { Variants } from "framer-motion";
import { useContext } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { GlobalContext } from "../../contexts/GlobalContext";
import useHomepage from "../../hooks/useHomepage";
import useInBreakpoint from "../../hooks/useInBreakpoint";
import routes from "../../misc/routes";
import { translate } from "../../misc/utils";
import { MotionNav } from "../atoms/Container";
import NavLink from "../atoms/NavLink";

export default function Navigation() {
  const { enableAnimation } = useContext(GlobalContext);
  const isHomePage = useHomepage();
  const isMobile = useInBreakpoint(0);

  const motionVariants: Variants = {
    main: {
      ...translate("-50%"),
      top: "50%",
      left: "50%",
      display: isMobile && !isHomePage ? "none" : "grid",
      transition: { duration: enableAnimation.val ? 0.8 : 0 },
    },
    sidebarInit: {
      ...translate(0),
      top: 0,
      left: "-10%",
    },
    sidebar: {
      ...translate(0),
      top: 0,
      left: 0,
      display: "block",
      transition: { duration: enableAnimation.val ? 0.8 : 0, type: "spring" },
    },
  };

  const containerStyle: ThemeUICSSObject = {
    display: "grid",
    gridTemplateColumns: "auto auto",
    position: "absolute",
  };

  return (
    <MotionNav
      sx={containerStyle}
      variants={motionVariants}
      animate={isHomePage || isMobile ? "main" : "sidebar"}
      initial={isHomePage ? "main" : "sidebarInit"}
    >
      {routes.map((route) => (
        <NavLink key={route.path} data={route} />
      ))}
    </MotionNav>
  );
}
