import React, { useEffect, useState, useRef, useContext } from "react";
import "./index.scss";
import Loader from '../../Loader/loader'
import Contact from "../../Contact Info/Contact";
import { Animationcontext } from "../../AnimationContext";
import Allprojects from "../Allprojects/Allprojects";
import Skills from "./Skilss/Skills";
function Projects() {
  const { setshowHomeIcon } = useContext(Animationcontext)
  const [isLoading, setisLoading] = useState(true);
  const [showSkill, setshowSkill] = useState(false)
  const skillparentContainer = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1500);
    if (isLoading) return;
    var $cont = document.querySelector(".cont");
    var $elsArr = [].slice.call(document.querySelectorAll(".el"));
    var $closeBtnsArr = [].slice.call(
      document.querySelectorAll(".el__close-btn")
    );

    setTimeout(function () {
      $cont.classList.remove("s--inactive");
    }, 200);

    $elsArr.forEach(function ($el, i) {

      $el.addEventListener("click", function () {
        setshowHomeIcon(false)
        if ($el.classList.contains('el_skill')) {
          setshowSkill(true)

        }
        if (this.classList.contains("s--active")) return;
        $cont.classList.add("s--el-active");
        this.classList.add("s--active");

      });
    });

    $closeBtnsArr.forEach(function ($btn) {
      setshowSkill(false)
      $btn.addEventListener("click", function (e) {
        setshowHomeIcon(true)
        e.stopPropagation();
        $cont.classList.remove("s--el-active");
        document.querySelector(".el.s--active").classList.remove("s--active");
      });
    });
  }, [isLoading]);


  if (isLoading) return <Loader />;
  return (
    <div className="cont s--inactive">
      <div className="cont__inner">
        <div className="el">

          <div className="el__overflow">
            <div className="el__inner">
              <div className="el__bg"></div>
              <div className="el__preview-cont">
                <h2 className="el__heading">Projects</h2>
              </div>
              <div className="el__content">
                <div className="el__text">
                  <Allprojects />
                </div>
                <div className="el__close-btn"></div>
              </div>
            </div>
          </div>
          <div className="el__index">
            <div className="el__index-back"></div>
            <div className="el__index-front">
              <div className="el__index-overlay" data-index="Projects">
                Projects
              </div>
            </div>
          </div>
        </div>
        <div ref={skillparentContainer} className="el el_skill">
          <div className="giphy_image">
          </div>
          <div className="el__overflow">
            <div className="el__inner">
              <div className="el__bg"></div>
              <div className="el__preview-cont">
                <h2 className="el__heading">Skills</h2>
              </div>
              <div className="el__content">
                <div className="el__text">
                  {
                    showSkill ? <Skills showSkill={showSkill} parent={skillparentContainer} /> : null
                  }
                </div>
                <div className="el__close-btn"></div>
              </div>
            </div>
          </div>
          <div className="el__index">
            <div className="el__index-back">Skills</div>
            <div className="el__index-front">
              <div className="el__index-overlay" data-index="Skills">
                Skills
              </div>
            </div>
          </div>
        </div>
        <div className="el">
          <div className="giphy_image">
          </div>

          <div className="el__overflow">
            <div className="el__inner">
              <div className="el__bg"></div>
              <div className="el__preview-cont">
                <h2 className="el__heading">Contact Info</h2>
              </div>
              <div className="el__content">
                <div className="el__text"><Contact /></div>
                <div className="el__close-btn"></div>
              </div>
            </div>
          </div>
          <div className="el__index">
            <div className="el__index-back">Contact Info</div>
            <div className="el__index-front">
              <div className="el__index-overlay" data-index="Contact Info">
                Contact Info
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
