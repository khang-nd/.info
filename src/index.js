import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";

const root = document.getElementById("root");
root.hasChildNodes()
  ? hydrate(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      root
    )
  : render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      root
    );
