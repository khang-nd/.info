import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Taskbar from "./components/Taskbar";
import Links from "./components/Links";
import About from "./pages/About";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import { Social } from "./assets";

const mouseOver = ({ target }) => (target.src = Social[target.alt][1]);
const mouseOut = ({ target }) => (target.src = Social[target.alt][0]);

function App() {
  const [theme, setTheme] = useState("Flat");
  return (
    <BrowserRouter>
      <div id="desktop" className={theme}>
        <Links theme={theme} />
        <div className="social-media">
          <a href="https://dev.fandom.com/wiki/User:KhangND">
            <img
              src={Social.Fandom[0]}
              alt="Fandom"
              onMouseOver={mouseOver}
              onMouseOut={mouseOut}
            />
          </a>
          <a href="https://github.com/khang-nd">
            <img
              src={Social.Github[0]}
              alt="Github"
              onMouseOver={mouseOver}
              onMouseOut={mouseOut}
            />
          </a>
        </div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/skills" component={Skills} />
          <Route path="/edu" component={Education} />
        </Switch>
      </div>
      <Taskbar theme={theme} setTheme={(theme) => setTheme(theme)} />
    </BrowserRouter>
  );
}

export default App;
