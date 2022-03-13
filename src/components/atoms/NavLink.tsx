import Link from "next/link";
import { ThemeUICSSObject } from "theme-ui";

type NavLinkProps = {
  href: string;
  text: string;
  icon?: string;
};

export default function NavLink({ href, icon, text }: NavLinkProps) {
  const style: ThemeUICSSObject = {
    size: 150,
    m: [3],
    background: "primary",
    color: "white",
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
    textAlign: "center",
  };

  return (
    <Link href={href}>
      <a href={href} sx={style}>
        <span>{icon}</span>
        <span>{text}</span>
      </a>
    </Link>
  );
}
