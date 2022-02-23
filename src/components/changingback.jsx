import React from "react";
import Maincontent from "./mainsection";
const Dynamicbackground = () => {
  return (
    <React.Fragment>
      <div className="changingbackground">
        <div className="changing offscreen"></div>
        <Maincontent />
      </div>
    </React.Fragment>
  );
};

export default Dynamicbackground;
