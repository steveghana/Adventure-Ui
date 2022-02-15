import React from "react";
import { LinkedIn, GitHub, Instagram } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
  Service,
  Aboutuswrapper,
  RecentProjects,
  WhatIDo,
  About,
} from "../exports";

import chat from "../images/favpng_communication-icon-chat-icon.png";

import "./introimg.scss";
function IntroImg({}) {
  return (
    <>
      <section
        data-scroll-section=""
        className="home_third_section_text_wrapper"
      >
        <div data-splitting className="">
          Lets collaborate and find a solution that is tailored to suit your
          needs
        </div>
      </section>
      <section data-scroll-section="" className="letstalk_text_wrapper">
        <div
          data-scroll=""
          data-scroll-delay="0.18"
          data-scroll-speed="2"
          className="letstalk_header"
        >
          Lets Do The talk
        </div>
        <div
          data-scroll=""
          data-scroll-delay="0.13"
          data-scroll-speed="2"
          className="letstalk_text"
        >
          Its time to get to know each other. Lets talk or have a chat on how we
          can organise and help make your ideas a reality. I already mentioned
          that i am collaborative right.
        </div>
        <div
          style={{ backgroundImage: `url("${chat}")` }}
          className="chat_icon"
        >
          <img src={chat} alt="illustration" />
        </div>
      </section>
      <section data-scroll-section="" className="letstalk_btn">
        <Link to="/contactInfo">
          <li class="letstalk_btn_content__item">
            <button class="letstalk_btn_button button--telesto  hide_cursor">
              <span>
                <span>lets collaborate</span>
              </span>
            </button>
          </li>
        </Link>
      </section>

      <section
        data-scroll-section=""
        id="services"
        className="home_fourth_section"
      >
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-2"
          data-scroll-target="#services"
          className="fourth_section_header"
        >
          What I do best
        </div>
        <div className="home_ourwork_wrapper">
          <WhatIDo />
        </div>
      </section>
      <Service />
      <RecentProjects />
      <div data-scroll-section="" className="more-project_link">
        <Link style={{ textDecoration: "none" }} to="/allprojects">
          <li className="see-more_content__item">
            <div className="see-more_link see-more_link--iocaste">
              <span>click to see more projects</span>
              <svg
                className="see-more_link__graphic see-more_link__graphic--slide"
                width="300%"
                height="100%"
                viewBox="0 0 1200 60"
                preserveAspectRatio="none"
              >
                <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
              </svg>
            </div>
          </li>
        </Link>
      </div>
      <div data-scroll-section="" className="lorem">
        <About />
        <Link to="/contactInfo">
          <li class="about_btn_content__item">
            <button class="about_letstalk_btn_button about_button--telesto  hide_cursor">
              <span>
                <span>Get Resume</span>
              </span>
            </button>
          </li>
        </Link>
      </div>
      <Aboutuswrapper />
      <footer data-scroll-section="" className="footer_links">
        <div className="copyright">© 2021 Stephen Boateng Williams |😜</div>
        <div className="social_links">
          <div className="github">
            {" "}
            <a
              href="https://github.com/steveghana"
              rel="noreferrer"
              target="_blank"
            >
              <GitHub /> Github{" "}
            </a>{" "}
          </div>
          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/stephenwillaims"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedIn /> LinkedIn{" "}
            </a>{" "}
          </div>
          <div className="instagram">
            <a
              href="https://github.com/steveghana"
              rel="noreferrer"
              target="_blank"
            >
              <Instagram /> Instgram{" "}
            </a>{" "}
          </div>
        </div>
      </footer>
    </>
  );
}

export default IntroImg;
