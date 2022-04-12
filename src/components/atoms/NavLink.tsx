import { motion, Transition, Variants } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeUICSSObject } from "theme-ui";
import useHomepage from "../../hooks/useHomepage";
import useInBreakpoint from "../../hooks/useInBreakpoint";
import useIsLandscape from "../../hooks/useIsLandscape";
import useMatchTheme from "../../hooks/useMatchTheme";
import useReduceMotion from "../../hooks/useReduceMotion";
import { Route } from "../../misc/routes";
import { sizes, ThemeMode } from "../../themes";
import { MotionIcon } from "./Icon";

type NavLinkProps = {
  data: Route;
};

export default function NavLink({ data }: NavLinkProps) {
  const isHomePage = useHomepage();
  const isLandscape = useIsLandscape();
  const isMobile = useInBreakpoint(0, isLandscape);
  const defaultSize = isMobile && isLandscape ? 120 : 160;
  const sidebarSize = defaultSize / 2;
  const isActive = useRouter().asPath === data.path;

  const linkVariants: Variants = {
    main: {
      width: defaultSize,
      height: defaultSize,
      opacity: 1,
      margin: sizes[isMobile && isLandscape ? 2 : 3],
      transition: useReduceMotion({ duration: 0.6, delay: 0.3 }),
    },
    sidebar: {
      width: sidebarSize,
      height: sidebarSize,
      opacity: 1,
      margin: sizes[2],
      transition: useReduceMotion(),
    },
  };

  const iconVariants: Variants = {
    main: {
      width: sidebarSize,
      height: sidebarSize,
      transition: useReduceMotion({ duration: 1 }),
    },
    sidebar: {
      width: sidebarSize / 2,
      height: sidebarSize / 2,
      transition: useReduceMotion(),
    },
  };

  const labelVariants: Variants = {
    main: {
      height: "auto",
      opacity: 1,
      marginTop: sizes[3],
      transition: useReduceMotion({ duration: 1 }),
    },
    sidebar: {
      height: 0,
      opacity: 0,
      margin: 0,
      transition: useReduceMotion(),
    },
  };

  const linkStyle: ThemeUICSSObject = {
    bg: "primary",
    color: "textReverse",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    textDecoration: "none",
    size: defaultSize,
    position: "relative",

    ...(useMatchTheme(ThemeMode.Soft) && {
      fontSize: isHomePage ? "2px" : "1px",
      borderRadius: "10%",
      boxShadow: (theme) => `inset 3em 3em 3em rgba(255, 255, 255, 0.5), 1em 1em 4em 3em ${theme.colors?.shadow}`,
    }),

    ...(useMatchTheme(ThemeMode.Classic) && {
      fontSize: isHomePage ? "2px" : "1px",
      borderRadius: "8%",
      boxShadow: "inset 0 0 0 2em #000, 3em 3em 0 #000",
    }),

    ...(useMatchTheme(ThemeMode.Tron) && {
      bg: "highlight",
      boxShadow: (theme) => `inset 0 0 0 2px ${theme.colors?.shadow}`,
    }),
  };

  const indicatorStyle: ThemeUICSSObject = {
    size: sidebarSize / 9,
    bg: "highlight",
    borderRadius: "50%",
    position: "absolute",
    top: 2,
    right: 2,

    ...(useMatchTheme(ThemeMode.Classic) && {
      boxShadow: "0 0 0 2px #000",
    }),

    ...(useMatchTheme(ThemeMode.Tron) && {
      bg: "red",
      boxShadow: (theme) => `0 0 0 1.5px ${theme.colors?.shadow}`,
    }),
  };

  const spring: Transition = { type: "spring", duration: 0.5 };

  return (
    <Link href={data.path} passHref={true}>
      <motion.a
        href={data.path}
        sx={linkStyle}
        variants={linkVariants}
        animate={isHomePage ? "main" : "sidebar"}
        initial={isHomePage || "sidebar"}
        whileHover={isHomePage ? { scale: 0.95 } : undefined}
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
