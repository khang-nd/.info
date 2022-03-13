import { ThemeUICSSObject } from "theme-ui";
import routes from "../../../pages/pageRoutes";
import NavLink from "../atoms/NavLink";

export default function Navigation() {
  const style: ThemeUICSSObject = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: 400,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <nav sx={style}>
      {routes.map(({ path, title }) => (
        <NavLink key={path} href={path} text={title} />
      ))}
    </nav>
  );
}
