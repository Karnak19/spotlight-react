import React, { StrictMode } from "react";
import { render } from "react-dom";
import Router from "./Router";

import "../dist/style.css";

render(
  <StrictMode>
    <Router />
  </StrictMode>,
  document.querySelector("#root")
);
