import { Variants } from "framer-motion";
import { useContext } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { GlobalContext } from "../../contexts/GlobalContext";
import useHomepage from "../../hooks/useHomepage";
import routes from "../../misc/routes";
import { MotionNav } from "../atoms/Container";
import NavLink from "../atoms/NavLink";

export default function Navigation() {
  const { enableAnimation } = useContext(GlobalContext);
  const isHomePage = useHomepage();
  const maxWidth = isHomePage ? 400 : 150;

  const motionVariants: Variants = {
    main: {
      maxWidth,
      left: `calc(50% - ${maxWidth / 2}px)`,
      transition: { duration: enableAnimation.val ? 0.8 : 0 },
    },
    sidebarInit: {
      maxWidth,
      left: `-${maxWidth}px`,
    },
    sidebar: {
      maxWidth,
      left: 0,
      transition: { duration: enableAnimation.val ? 0.8 : 0, type: "spring" },
    },
  };

  const containerStyle: ThemeUICSSObject = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    position: "absolute",
  };

  return (
    <MotionNav
      sx={containerStyle}
      variants={motionVariants}
      animate={isHomePage ? "main" : "sidebar"}
      initial={isHomePage ? "main" : "sidebarInit"}
    >
      {routes.map((route) => (
        <NavLink key={route.path} data={route} />
      ))}
    </MotionNav>
  );
}
