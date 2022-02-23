import React, { useEffect } from "react";
const Nav = () => {
  useEffect(() => {}, []);
  return (
    <nav className="navigation">
      <div className="appname-container">
        <span className="in">In</span>
        <span className="go">Go</span>
      </div>
      <ul className="selection">
        <li className="jobs">Jobs</li>
        <li className="talent">Talent</li>
        <li className="about">About</li>
        <li className="company">Company</li>
      </ul>

      <div className="stylish-hamburger">
        <div className="hamburger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
