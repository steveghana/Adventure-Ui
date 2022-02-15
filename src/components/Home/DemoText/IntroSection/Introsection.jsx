import React from "react";
import "./introsection.scss";
function Introsection() {
  return (
    <section data-scroll-section="" className="home_intro_section">
      <p>
        I'm a developer who loves to work with{" "}
        <span className="important hide_cursor">startups</span> and{" "}
        <span className="important hide_cursor">fast-growing</span> businesses
        to create{" "}
        <span className="highlight hide_cursor">
          {" "}
          growth-driven <span></span>
        </span>{" "}
        products & projects.
      </p>
    </section>
  );
}

export default Introsection;
