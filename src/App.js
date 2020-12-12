import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Taskbar from "./components/Taskbar";
import Links from "./components/Links";
import TabLink from "./components/TabLink";
import { Social } from "./assets";
import routes from "./routes";
import * as storage from "local-storage";

const SocialLinks = {
  Fandom: "https://dev.fandom.com/wiki/User:KhangND",
  Github: "https://github.com/khang-nd",
  Linkedin: "https://www.linkedin.com/in/khangnd",
  Dev: "https://dev.to/khangnd",
  Twitter: "https://twitter.com/_khangnd",
};
const storeKey = {
  theme: "theme",
  welcome: "welcome",
};

function App() {
  const storedTheme = storage.get(storeKey.theme) || "Flat";
  const shouldWelcome = storage.get(storeKey.welcome) !== false ? true : false;

  const [theme, setTheme] = React.useState(storedTheme);
  const [welcome, showWelcome] = React.useState(shouldWelcome);
  setTimeout(() => {
    storage.set(storeKey.welcome, false);
    showWelcome(false);
  }, 3000);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div id="welcome" className={welcome ? "" : "hidden"}>
        <big>WELCOME</big>
      </div>
      <div id="desktop" className={theme}>
        <Links theme={theme} />
        <div className="social-media">
          {Object.keys(SocialLinks).map((key) => (
            <TabLink key={key} className="social-link" href={SocialLinks[key]}>
              <img src={Social[key]} alt={key} />
            </TabLink>
          ))}
        </div>
        <Switch>
          {Object.keys(routes).map((path) => (
            <Route
              key={path}
              path={`/${path}/`}
              component={routes[path].component}
            />
          ))}
        </Switch>
      </div>
      <Taskbar
        theme={theme}
        setTheme={(theme) => {
          storage.set(storeKey.theme, theme);
          setTheme(theme);
        }}
      />
    </BrowserRouter>
  );
}

export default App;
