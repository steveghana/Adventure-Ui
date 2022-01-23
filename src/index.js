import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import "./font/Gothic/Century Gothic.ttf";
import "./font/Kudryashev Headline Sans Web/Kudryashev Headline Sans Web.ttf";
ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
