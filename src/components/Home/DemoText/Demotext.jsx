import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import IMG from "../../../assets/arkblack.jpg";
import { Hook, Card } from "./exports";
import {
  mouseenter,
  mouseleave,
  mousemove,
  btnenter,
  btnleave,
  btnmove,
  locoScrollTrigger,
} from "./demouitiilty";
import LocomotiveScroll from "locomotive-scroll";
import img1 from "./images/Optimized-pexels-mikael-blomkvist-6476798.jpg";
import img2 from "./images/Optimized-pexels-shvets-production-7203724.jpg";
import img3 from "./images/Optimized-pexels-sora-shimazaki-5669619.jpg";
import img4 from "./images/Optimized-pexels-fauxels-3183188.jpg";
import img5 from "./images/pexels-karolina-grabowska-5632331.jpg";
import img6 from "./images/Optimized-pexels-cottonbro-5483070 (1).jpg";
import { hoverCardData, hoverImgs } from "./demouitiilty";
import IntroImg from "./Introimg/IntroImg";
import Introsection from "./IntroSection/Introsection";
import "./demo.scss";
function Demotext() {
  const hookcontainer = useRef(null);
  const hookimg = useRef(null);
  const btn = useRef(null);
  const imag = useRef(null);
  const [imageIndex, setimageIndex] = useState(0);
  const [cardImg, setcardImg] = useState({
    hoverContainer: "",
    cardcontainer: "",
    img: "",
    cardDescription: "",
  });
  const isTablet = useMediaQuery("(max-width:830px)");
  useEffect(() => {
    const lscroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      tablet: { smooth: true },
      smartphone: { smooth: true },
      getDirection: true,
    });

    lscroll.update();

    locoScrollTrigger(imag, isTablet, lscroll);
    !isTablet && hoverImgs(setimageIndex, hookcontainer, hookimg);
  }, []);
  const showMobileinfoCard = (e) => {
    let card = document.querySelector(".question_card_container");
    card.style.display = "flex";
    let hoverContainer = document.querySelector(".discover");
    const index = e.target.classList[1].split("img")[1];
    let description = hoverCardData[index - 1];
    setcardImg({
      ...cardImg,
      hoverContainer,
      cardDescription: description,
    });
    hoverContainer.style.pointerEvents = "none";
  };

  const showinfoCard = (e) => {
    let card = document.querySelector(".question_card_container");
    card.style.display = "flex";
    let hoverContainer = document.querySelector(".home_second_section");
    let hoverimg = !isTablet
      ? hookimg.current.querySelector(`.img${imageIndex + 1}`)
      : null;
    let description = hoverCardData[imageIndex];
    setcardImg({
      ...cardImg,
      img: hoverimg?.src,
      hoverContainer,
      cardDescription: description,
    });
    hoverContainer.style.pointerEvents = "none";
  };
  return (
    <div className="home">
      <Introsection />
      <section
        onMouseEnter={(e) => btnenter(e, btn)}
        onMouseOut={(e) => btnleave(e, btn)}
        onMouseMove={(e) => btnmove(e, btn)}
        data-scroll-section=""
        className="home_first_section"
      >
        <div>
          <img
            ref={imag}
            className="homeImg"
            data-scroll=""
            data-scroll-call="img1"
            src={IMG}
            alt="img"
          />
        </div>
        <div data-scroll="" data-scroll-call="lg" className="home_content_box">
          <div data-splitting className="role_text">
            Web Development
          </div>
          <h1
            data-scroll=""
            data-scroll-delay="0.14"
            className="home_demo_project_showcase"
          >
            Ark
          </h1>
          <h1 data-splitting className="home_demo_project_showcase_sub">
            <span>A Great</span>
            <span>Sneaker</span> shopping experience
          </h1>
          <div
            ref={btn}
            data-scroll=""
            data-scroll-delay="0.1"
            className="home_btn_wrapper hide_cursor"
          >
            {isTablet ? (
              <div className="btn_mobile-tablet">
                <a
                  href="https://arkshop.netlify.app"
                  rel="noreferrer"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  see project
                </a>
              </div>
            ) : (
              <div className="home_btn">
                <a
                  href="https://arkshop.netlify.app"
                  rel="noreferrer"
                  target="_blank"
                >
                  see project
                </a>
                <span className="circle"></span>
              </div>
            )}
          </div>
        </div>
      </section>
      <div data-scroll-section="" className="hook_container">
        <Card cardImg={cardImg} setcardImg={setcardImg} />

        <section
          onMouseEnter={(e) =>
            !isTablet ? mouseenter(e, hookcontainer, hookimg) : null
          }
          onMouseLeave={(e) =>
            !isTablet ? mouseleave(e, hookcontainer, hookimg) : null
          }
          onMouseMove={(e) =>
            !isTablet ? mousemove(e, hookcontainer, hookimg) : null
          }
          className="home_second_section"
        >
          <section className="home_question_hook">
            Can you justify your business with any of these questions? Click on
            them to explore more
          </section>
          {!isTablet ? (
            <div
              ref={hookimg}
              style={{ display: isTablet ? "none" : "flex" }}
              className="hook_img"
            >
              <img src={img1} className="img_hook img1" alt="hookimg" />
              <img src={img2} className="img_hook img2" alt="hookimg" />
              <img src={img3} className="img_hook img3" alt="hookimg" />
              <img src={img4} className="img_hook img4" alt="hookimg" />
              <img src={img5} className="img_hook img5" alt="hookimg" />
              <img src={img6} className="img_hook img6" alt="hookimg" />
            </div>
          ) : null}
          <div className="question_hook_container">
            <Hook
              hookcontainer={hookcontainer}
              isTablet={isTablet}
              showinfoCard={showinfoCard}
              showMobileinfoCard={showMobileinfoCard}
            />
          </div>
        </section>
      </div>

      <IntroImg />
    </div>
  );
}
export default Demotext;
