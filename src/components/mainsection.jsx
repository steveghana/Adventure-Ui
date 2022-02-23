import React from "react";
import Firstsection from "./firstsecstion";
import Content from "./content";
const Maincontent = () => {
  return (
    <React.Fragment>
      <div className="mainsection">
        <Firstsection />
        <Content />
      </div>
    </React.Fragment>
  );
};

export default Maincontent;
