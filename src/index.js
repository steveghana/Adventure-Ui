import React from "react";
import ReactDom from "react-dom";
import Fullapp from "./components/FullApp";
import "./css/_main.scss";
ReactDom.render(
  <React.StrictMode>
    <Fullapp />
  </React.StrictMode>,
  document.getElementById("root")
);
