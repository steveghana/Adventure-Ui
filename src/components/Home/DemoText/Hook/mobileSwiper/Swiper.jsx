import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { EffectCoverflow } from "swiper";
import "swiper/swiper.scss";
import "swiper/modules/effect-coverflow/effect-coverflow.scss";
function Swipe({ imgArray, showMobileinfoCard }) {
  return (
    <section class="discover section" id="discover">
      <div className="swipe">Swipe</div>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
        }}
        modules={[EffectCoverflow]}
        class="discover__container container swiper-container"
      >
        <div class="swiper-wrapper">
          <SwiperSlide class="discover__card swiper-slide">
            <img
              onClick={showMobileinfoCard}
              src={imgArray[0]}
              alt=""
              class="discover__img img1"
            />
            <div class="discover__data">
              <h2 class="discover__title">Dont have a website</h2>
              <span class="discover__description">lets Collaborate</span>
            </div>
          </SwiperSlide>

          <SwiperSlide class="discover__card swiper-slide">
            <img
              onClick={showMobileinfoCard}
              src={imgArray[1]}
              alt=""
              class="discover__img img2"
            />

            <div class="discover__data">
              <h2 class="discover__title"> I have only an idea</h2>
              <span class="discover__description">lets Collaborate</span>
            </div>
          </SwiperSlide>

          <SwiperSlide class="discover__card swiper-slide">
            <img
              onClick={showMobileinfoCard}
              src={imgArray[2]}
              alt=""
              class="discover__img img3"
            />

            <div class="discover__data">
              <h2 class="discover__title"> I want to scale</h2>
              <span class="discover__description">lets Collaborate</span>
            </div>
          </SwiperSlide>

          <SwiperSlide class="discover__card swiper-slide">
            <img
              onClick={showMobileinfoCard}
              src={imgArray[3]}
              alt=""
              class="discover__img img4"
            />

            <div class="discover__data">
              <h2 class="discover__title">I need a commited worker</h2>
              <span class="discover__description">lets Collaborate</span>
            </div>
          </SwiperSlide>
          <SwiperSlide class="discover__card swiper-slide">
            <img
              onClick={showMobileinfoCard}
              src={imgArray[4]}
              alt=""
              class="discover__img img5"
            />

            <div class="discover__data">
              <h2 class="discover__title"> I need more free time</h2>
              <span class="discover__description">lets Collaborate</span>
            </div>
          </SwiperSlide>
          <SwiperSlide class="discover__card swiper-slide">
            <img
              onClick={showMobileinfoCard}
              src={imgArray[5]}
              alt=""
              class="discover__img img6"
            />

            <div class="discover__data">
              <h2 class="discover__title">I want a service</h2>
              <span class="discover__description">lets Collaborate</span>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  );
}

export default Swipe;
// effect="coverflow"
// slidesPerView="auto"
// centeredSlides={true}
// spaceBetween={30}
// grabCursor={true}
// loop={true}
// coverflowEffect={{
//   rotate: 0,
// }}
// modules={[EffectCoverflow]}
