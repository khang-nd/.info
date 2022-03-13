import About from "./about";
import Edu from "./edu";
import Skill from "./skill";
import Work from "./work";

export type Page = {
  path: string;
  title: string;
  component: () => JSX.Element;
};

const pages: Page[] = [
  { path: "/about", title: "About Me", component: About },
  { path: "/work", title: "My work", component: Work },
  { path: "/skill", title: "Skills", component: Skill },
  { path: "/edu", title: "Education", component: Edu },
];

export default pages;
