import React from "react";
import Dynamicbackground from "./changingback";

function Blurbackground() {
  return (
    <React.Fragment>
      <div className="blur">
        <div className="leftblur"></div>
        <div className="middle">
          <Dynamicbackground />
        </div>
        <div className="rightblur"></div>
      </div>
    </React.Fragment>
  );
}

export default Blurbackground;
