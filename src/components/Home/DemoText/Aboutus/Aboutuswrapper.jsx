import React from "react";
import { Link } from "react-router-dom";
import "./aboutus.scss";
function Aboutuswrapper() {
  return (
    <section data-scroll-section="" className="home_about_us_wrapper">
      <div className="about_content_wrapper">
        <div className="aboutus_text">
          You got a cool project in mind? Let's collaborate and create a{" "}
          <span> powerful </span> app or website for you.
        </div>
        <div className="sub_text">
          <div className="availability">
            <ul>
              <li>
                <span>Available</span> for freelance or <span>Full-time</span>{" "}
                job.
              </li>
            </ul>
          </div>
          <div className="getintouch">
            <span>Get in touch!</span>{" "}
            <span className="getintouch_content__item">
              <Link style={{ textDecor: "none" }} to="/contactInfo">
                <div className="getintouch_link getintouch_link--iocaste">
                  <span>Drop me an E-mail</span>
                  <svg
                    className="getintouch_link__graphic getintouch_link__graphic--slide"
                    width="300%"
                    height="100%"
                    viewBox="0 0 1200 60"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
                  </svg>
                </div>
              </Link>
            </span>{" "}
            or
            <span className="getintouch_content__item">
              <Link style={{ textDecor: "none" }} to="/contactInfo">
                <div className="getintouch_link getintouch_link--iocaste">
                  <span>Schedule a call</span>
                  <svg
                    className="getintouch_link__graphic getintouch_link__graphic--slide"
                    width="300%"
                    height="100%"
                    viewBox="0 0 1200 60"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
                  </svg>
                </div>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <svg className="hidden">
        <symbol id="icon-arrow" viewBox="0 0 24 24">
          <title>arrow</title>
          <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 " />
        </symbol>

        <symbol id="icon-longarrow" viewBox="0 0 54 24">
          <title>longarrow</title>
          <path d="M.42 11.158L12.38.256c.333-.27.696-.322 1.09-.155.395.166.593.467.593.903v6.977h38.87c.29 0 .53.093.716.28.187.187.28.426.28.716v5.98c0 .29-.093.53-.28.716a.971.971 0 0 1-.716.28h-38.87v6.977c0 .416-.199.717-.592.903-.395.167-.759.104-1.09-.186L.42 12.62a1.018 1.018 0 0 1 0-1.462z" />
        </symbol>
        <symbol id="icon-callarrow" viewBox="0 0 408 408">
          <title>navarrow</title>
          <polygon
            fill="#000000"
            fillRule="nonzero"
            points="204 0 168.3 35.7 311.1 178.5 0 178.5 0 229.5 311.1 229.5 168.3 372.3 204 408 408 204"
          ></polygon>
        </symbol>
      </svg>
      <div className="large_btn">
        <div className="large_btn_btn__item hide_cursor">
          <button className="large_btn_skoll-button large_btn_button--skoll skoll1">
            <Link style={{ color: "black" }} to="/contactInfo">
              <div className="btn_wrapper">
                <div className="nav nav--next">
                  <svg className="icon icon--navarrow-next">
                    <use xlinkHref="#icon-callarrow"></use>
                  </svg>
                </div>
                <div className="btn_text">Drop an E-mail</div>
              </div>
            </Link>
          </button>
        </div>
        <div className="large_btn_btn__item hide_cursor">
          <button className="large_btn_skoll-button large_btn_button--skoll skoll2">
            <Link style={{ color: "black" }} to="/contactInfo">
              <div className="btn_wrapper">
                <button className="nav nav--next">
                  <svg className="icon icon--navarrow-next">
                    <use xlinkHref="#icon-callarrow"></use>
                  </svg>
                </button>
                <div className="btn_text">
                  Contact <br /> me
                </div>
              </div>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Aboutuswrapper;
