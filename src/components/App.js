import React, { useState } from "react";
import Projects from "./ExternalAssets/showingprojects/projects";
import { useHistory } from "react-router";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home/home";
import { HomeOutlined } from "@material-ui/icons";
import "./global.scss";
import Loader from "./Loader/loader";
import About from "./Aboutme/About";
import { Animationcontext } from "./AnimationContext";
import { customCursor } from "./cursor/index2";
import Allprojects from "./ExternalAssets/Allprojects/Allprojects";
import Contact from "./Contact Info/Contact";
import "./demo.scss";
function App() {
  const hook_cursor = React.useRef(null);
  const [showHomeIcon, setshowHomeIcon] = useState(true);
  const [isLoading, setisLoading] = useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1500);
    if (isLoading) return;
    const eyeCursor = document.querySelector(".textcircle");
    const el = document.querySelector(".home_questionhook_wrapper");
    eyeCursor.style.opacity = "0";
    el?.addEventListener("mouseenter", () => {
      eyeCursor.style.opacity = "1";
    });
    el?.addEventListener("mouseleave", () => {
      eyeCursor.style.opacity = "0";
    });
    customCursor();
  }, [isLoading]);

  if (isLoading) return <Loader />;

  return (
    <Animationcontext.Provider value={{ setshowHomeIcon, hook_cursor }}>
      <div className="app">
        <svg className="cursor" width="140" height="140" viewBox="0 0 140 140">
          <svg className="textcircle" viewBox="0 0 500 500">
            <title>Projects & client work 2020</title>
            <defs>
              <path
                id="textcircle"
                d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
              />
            </defs>
            <text>
              <textPath
                xlinkHref="#textcircle"
                aria-label="Projects & client work 2020"
                textLength="900"
              >
                Click to view more
              </textPath>
            </text>
          </svg>

          <defs>
            <filter
              id="filter-1"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              filterUnits="objectBoundingBox"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0"
                numOctaves="10"
                result="warp"
              />
              <feDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                scale="60"
                in="SourceGraphic"
                in2="warp"
              />
            </filter>
          </defs>
          <circle class="cursor__inner" cx="70" cy="70" r="60" />
        </svg>
        {showHomeIcon ? (
          <div className=".btn__item hide_cursor">
            <button className="skoll-button button--skoll">
              <span>
                <a href="/">
                  <HomeOutlined />
                </a>
              </span>
            </button>
          </div>
        ) : null}
        <div className="demo-1 loading">
          <main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
            <div className="project_content content--fixed">
              <div className="content__inner">
                <Switch>
                  <Route path="/categories">
                    <Projects />
                  </Route>
                  <Route path="/allprojects">
                    <Allprojects />
                  </Route>

                  <Route path="/contactInfo">
                    <Contact />
                  </Route>
                </Switch>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Animationcontext.Provider>
  );
}

export default App;
