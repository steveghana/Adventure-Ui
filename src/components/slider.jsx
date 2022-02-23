import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import {
  Twitter,
  Instagram,
  LinkedIn,
  ArrowRightAlt,
} from "@material-ui/icons";
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import { EffectCoverflow } from "swiper";
import "../css/_slider.scss";
import "swiper/modules/effect-coverflow/effect-coverflow.scss";
import image1 from "../assets/images/pexels-andy-vu-3217911 (2).jpg";
import image2 from "../assets/images/pexels-russ-jani-739657 (3).jpg";
import image3 from "../assets/images/pexels-jess-vide-4321093.jpg";
SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [rightindex, setrightindex] = useState(0);
  const renderRightClickIndex = (item) =>
    item === 1 ? 0 : item === 2 ? 1 : item === 3 || item === 0 ? 2 : 0;

  useEffect(() => {
    text(0);
  }, []);
  const clickEvent = () => {
    text(renderRightClickIndex(rightindex));
  };
  return (
    <div className="slide-container">
      <div className="social-icons">
        <div className="instagram">
          <Instagram />
        </div>
        <div className="twitter">
          <Twitter />
        </div>
        <div className="linkedin">
          <LinkedIn />
        </div>
      </div>
      <div className="text">
        <div className="textheader">
          <span className="head"></span>
          <span className="lighter"></span>
          <div className="apollo"></div>
        </div>
        <p className="subtext">
          We believe adventure has no bounds, no definition - Its a frame of
          mind, a spirit, a choice.
        </p>
      </div>
      <Swiper
        effect="coverflow"
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={0}
        grabCursor={false}
        loop={true}
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination
        onInit={(swiper) => console.log("Swiper initialized!", swiper)}
        onSlideChange={({ activeIndex }) => {
          setrightindex(activeIndex);
        }}
        coverflowEffect={{
          rotate: 0,
        }}
        modules={[EffectCoverflow]}
        className="container swiper mySwiper"
      >
        <div className="numcontainer">
          <div className="number"></div>
          <div className="numApollo"></div>
        </div>
        <div className="slide swiper-wrapper">
          <SwiperSlide className="slidecontent swiper-slide slider box1">
            <div className="img">
              <img src={image1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slidecontent swiper-slide slider box2">
            <div className="img">
              <img src={image2} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="slidecontent swiper-slide slider box3">
            <div className="img">
              <img src={image3} alt="" />
            </div>
          </SwiperSlide>
        </div>
        <div className="slide-btns">
          <div onClick={clickEvent} className="btn1 swiper-button-prev">
            <ArrowRightAlt
              fontSize="large"
              style={{ transform: "rotate(180deg)translateX(-11px)" }}
            />

            <div className="btnapollo"></div>
            <div className="btn1hover"></div>
          </div>
          <div onClick={clickEvent} className="btn2 swiper-button-next">
            <ArrowRightAlt
              style={{ transform: "translateX(11px)" }}
              fontSize="large"
            />
            <div className="btn2hover"></div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};
const adventure = [
  {
    head: "Discover",
    light: "your adventure",
    id: "01",
    color: "#C9B4A3",
    blur: "#E9E1CC",
  },
  {
    head: "The",
    light: "Skydiving rush",
    id: "02",
    color: "#FDD365",
    blur: " #F7E7C2",
  },
  {
    head: "Surf",
    light: `your perfect wave`,
    id: "03",
    color: "#83D0E2",
    blur: "#2BB8E3",
  },
];

function btnClasses() {
  let number = document.querySelector(".number");
  let textcontainer = document.querySelector(".textheader");
  let apollo = document.querySelector(".apollo");
  let numApollo = document.querySelector(".numApollo");
  let changing = document.querySelector(".changing");
  changing.style.transition = "none";
  changing.style.transform = "translateX(-100%)";
  changing.classList.add("offscreen");
  textcontainer.classList.add("blurout");
  textcontainer.classList.remove("visible");
  number.classList.add("blurout");
  number.classList.remove("visible");
  apollo.classList.remove("move");
  numApollo.classList.remove("move");
}

function reverseClasses() {
  let number = document.querySelector(".number");
  let textcontainer = document.querySelector(".textheader");
  let apollo = document.querySelector(".apollo");
  let numApollo = document.querySelector(".numApollo");
  textcontainer.classList.add("visible");
  textcontainer.classList.remove("blurout");
  number.classList.add("visible");
  number.classList.remove("blurout");
  numApollo.classList.add("move");

  apollo.classList.add("move");
}

function text(num) {
  let changing = document.querySelector(".changing");
  changing.classList.remove("offscreen");
  btnClasses();
  let btn1hover = document.querySelector(".btn1hover");
  let btn2hover = document.querySelector(".btn2hover");
  let leftblur = document.querySelector(".leftblur");
  let rightblur = document.querySelector(".rightblur");
  let headerBold = document.querySelector(".head");
  let headerLight = document.querySelector(".lighter");
  let Dynamicbackground = document.querySelector(".changingbackground");
  let number = document.querySelector(".number");

  changing.style.backgroundColor = adventure[num].color;
  leftblur.style.backgroundColor = adventure[num].blur;
  rightblur.style.backgroundColor = adventure[num].blur;
  btn1hover.style.backgroundColor = adventure[num].color;
  btn2hover.style.backgroundColor = adventure[num].color;
  setTimeout(() => {
    changing.style.transition = "transform 200ms ease";
    changing.style.transform = "translateX(0%)";
  }, 100);
  setTimeout(() => {
    headerBold.textContent = adventure[num].head;
    number.textContent = adventure[num].id;
    headerLight.textContent = adventure[num].light;
    reverseClasses();
  }, 400);
  setTimeout(() => {
    Dynamicbackground.style.backgroundColor = adventure[num].color;
  }, 800);
}

export default Slider;
