import { motion, Transition, Variants } from "framer-motion";
import Link from "next/link";
import { ThemeUICSSObject } from "theme-ui";
import { Route } from "../../../pages/_routes";
import useHomepage from "../../hooks/useHomepage";
import { sizes } from "../../themes";
import { MotionIcon } from "./Icon";

type NavLinkProps = {
  data: Route;
};

export default function NavLink({ data }: NavLinkProps) {
  const isHomePage = useHomepage();
  const defaultSize = 160;
  const sidebarSize = defaultSize / 2;
  const transition: Transition = { duration: 0.6 };

  const linkVariants: Variants = {
    main: {
      width: defaultSize,
      height: defaultSize,
      transition: { duration: 0.6, delay: 0.3 },
      opacity: 1,
      margin: sizes[3],
    },
    sidebar: {
      width: sidebarSize,
      height: sidebarSize,
      opacity: 1,
      margin: sizes[2],
    },
  };

  const iconVariants: Variants = {
    main: {
      width: sidebarSize,
      height: sidebarSize,
      transition: { duration: 1 },
    },
    sidebar: {
      width: sidebarSize / 2,
      height: sidebarSize / 2,
    },
  };

  const labelVariants: Variants = {
    main: {
      height: "auto",
      opacity: 1,
      marginTop: sizes[3],
      transition: { duration: 1 },
    },
    sidebar: {
      height: 0,
      opacity: 0,
      margin: 0,
    },
  };

  const linkStyle: ThemeUICSSObject = {
    background: "primary",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    overflow: "hidden",
    textDecoration: "none",
    size: defaultSize,
  };

  return (
    <Link href={data.path} passHref={true}>
      <motion.a
        href={data.path}
        sx={linkStyle}
        variants={linkVariants}
        animate={isHomePage ? "main" : "sidebar"}
        initial={isHomePage || "sidebar"}
      >
        <MotionIcon
          variants={iconVariants}
          animate={isHomePage ? "main" : "sidebar"}
          initial="main"
          iconName={data.icon}
        />
        <motion.span
          variants={labelVariants}
          animate={isHomePage ? "main" : "sidebar"}
          initial={isHomePage ? "main" : "sidebar"}
          sx={{ whiteSpace: "nowrap", fontSize: 20 }}
        >
          {data.title}
        </motion.span>
      </motion.a>
    </Link>
  );
}
