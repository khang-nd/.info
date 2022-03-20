import { Variants } from "framer-motion";
import { ThemeUICSSObject } from "theme-ui";
import routes from "../../../pages/_routes";
import useHomepage from "../../hooks/useHomepage";
import { MotionNav } from "../atoms/Container";
import NavLink from "../atoms/NavLink";

export default function Navigation() {
  const isHomePage = useHomepage();
  const maxWidth = isHomePage ? 400 : 150;

  const motionVariants: Variants = {
    main: {
      maxWidth,
      left: `calc(50% - ${maxWidth / 2}px)`,
      transition: { duration: 0.8 },
    },
    sidebarInit: {
      maxWidth,
      left: `-${maxWidth}px`,
    },
    sidebar: {
      maxWidth,
      left: 0,
      transition: { duration: 0.8, type: "spring" },
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
