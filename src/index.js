import React from "react";
import { render } from "react-snapshot";
import App from "./App";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
