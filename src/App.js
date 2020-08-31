import "./App.scss";
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Taskbar from "./components/Taskbar";
import Links from "./components/Links";
import TabLink from "./components/TabLink";
import { Social } from "./assets";
import pages from "./pages";

const mouseOver = ({ target }) => (target.src = Social[target.alt][1]);
const mouseOut = ({ target }) => (target.src = Social[target.alt][0]);
const SocialLinks = {
  Github: "https://github.com/khang-nd",
  Linkedin: "https://www.linkedin.com/in/khangnd",
  Fandom: "https://dev.fandom.com/wiki/User:KhangND",
};

function App() {
  const [theme, setTheme] = React.useState("Flat");
  return (
    <HashRouter hashType="noslash">
      <div id="desktop" className={theme}>
        <Links theme={theme} />
        <div className="social-media">
          {Object.keys(SocialLinks).map((key) => (
            <TabLink key={key} className="social-link" href={SocialLinks[key]}>
              <img
                src={Social[key][0]}
                alt={key}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              />
            </TabLink>
          ))}
        </div>
        <Switch>
          {Object.keys(pages).map((path) => (
            <Route
              key={path}
              path={"/" + path}
              component={pages[path].component}
            />
          ))}
        </Switch>
      </div>
      <Taskbar theme={theme} setTheme={(theme) => setTheme(theme)} />
    </HashRouter>
  );
}

export default App;
