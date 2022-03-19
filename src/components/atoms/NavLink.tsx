import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ThemeUICSSObject } from "theme-ui";
import useHomepage from "../../hooks/useHomepage";
import { sizes } from "../../themes";

type NavLinkProps = {
  href: string;
  text: string;
  icon?: string;
};

export default function NavLink({ href, icon, text }: NavLinkProps) {
  const isHomePage = useHomepage();
  const defaultSize = 160;

  const variants: Variants = {
    main: {
      width: defaultSize,
      height: defaultSize,
      transition: { delay: 0.3, duration: 0.6 },
      opacity: 1,
      margin: sizes[3],
    },
    sidebar: {
      width: 80,
      height: 80,
      opacity: 1,
      margin: sizes[2],
    },
  };

  const linkStyle: ThemeUICSSObject = {
    background: "primary",
    color: "white",
    display: "flex",
    flexDirection: "column",
    opacity: 0,
    overflow: "hidden",
    textDecoration: "none",
    textAlign: "center",
    size: defaultSize,
  };

  return (
    <Link href={href} passHref={true}>
      <motion.a
        href={href}
        sx={linkStyle}
        variants={variants}
        animate={isHomePage ? "main" : "sidebar"}
        initial={isHomePage || "sidebar"}
      >
        <span>{icon}</span>
        <span>{text}</span>
      </motion.a>
    </Link>
  );
}
