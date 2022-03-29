import { motion, Transition, Variants } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { GlobalContext } from "../../contexts/GlobalContext";
import useHomepage from "../../hooks/useHomepage";
import useInBreakpoint from "../../hooks/useInBreakpoint";
import useIsLandscape from "../../hooks/useIsLandscape";
import { Route } from "../../misc/routes";
import { sizes } from "../../themes";
import { MotionIcon } from "./Icon";

type NavLinkProps = {
  data: Route;
};

export default function NavLink({ data }: NavLinkProps) {
  const { enableAnimation } = useContext(GlobalContext);
  const isHomePage = useHomepage();
  const isLandscape = useIsLandscape();
  const isMobile = useInBreakpoint(0, isLandscape);
  const defaultSize = isMobile && isLandscape ? 120 : 160;
  const sidebarSize = defaultSize / 2;
  const transition = enableAnimation.val ? undefined : { duration: 0 };
  const isActive = useRouter().asPath === data.path;

  const linkVariants: Variants = {
    main: {
      width: defaultSize,
      height: defaultSize,
      opacity: 1,
      margin: sizes[isMobile && isLandscape ? 2 : 3],
      transition: enableAnimation.val ? { duration: 0.6, delay: 0.3 } : { duration: 0 },
    },
    sidebar: {
      width: sidebarSize,
      height: sidebarSize,
      opacity: 1,
      margin: sizes[2],
      transition: transition,
    },
  };

  const iconVariants: Variants = {
    main: {
      width: sidebarSize,
      height: sidebarSize,
      transition: { duration: enableAnimation.val ? 1 : 0 },
    },
    sidebar: {
      width: sidebarSize / 2,
      height: sidebarSize / 2,
      transition: transition,
    },
  };

  const labelVariants: Variants = {
    main: {
      height: "auto",
      opacity: 1,
      marginTop: sizes[3],
      transition: { duration: enableAnimation.val ? 1 : 0 },
    },
    sidebar: {
      height: 0,
      opacity: 0,
      margin: 0,
      transition: transition,
    },
  };

  const linkStyle: ThemeUICSSObject = {
    background: "primary",
    color: "textReverse",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    textDecoration: "none",
    size: defaultSize,
    position: "relative",
  };

  const indicatorStyle: ThemeUICSSObject = {
    size: sidebarSize / 9,
    bg: "secondary",
    borderRadius: "50%",
    position: "absolute",
    top: 2,
    right: 2,
  };

  const spring: Transition = { type: "spring", duration: enableAnimation.val ? 0.5 : 0 };

  return (
    <Link href={data.path} passHref={true}>
      <motion.a
        href={data.path}
        sx={linkStyle}
        variants={linkVariants}
        animate={isHomePage ? "main" : "sidebar"}
        initial={isHomePage || "sidebar"}
      >
        {isActive && <motion.span layoutId="indicator" sx={indicatorStyle} transition={spring} />}
        <MotionIcon
          variants={iconVariants}
          animate={isHomePage ? "main" : "sidebar"}
          initial="main"
          iconName={data.icon}
          tag="span"
        />
        <motion.span
          variants={labelVariants}
          animate={isHomePage ? "main" : "sidebar"}
          initial={isHomePage ? "main" : "sidebar"}
          sx={{ whiteSpace: "nowrap", overflow: "hidden", fontSize: isMobile && isLandscape ? 16 : 20 }}
        >
          {data.title}
        </motion.span>
      </motion.a>
    </Link>
  );
}
