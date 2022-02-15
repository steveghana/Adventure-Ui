import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { EffectCoverflow } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/modules/effect-coverflow/effect-coverflow.scss";
// import "../hook.scss";
function Swipe({ imgArray }) {
  React.useEffect(() => {
    // let swiper = new Swipe(".discover__container", {
    //   effect: "coverflow",
    //   grabCursor: true,
    //   centeredSlides: true,
    //   slidesPerView: "auto",
    //   loop: true,
    //   spaceBetween: 32,
    //   coverflowEffect: {
    //     rotate: 0,
    //   },
    // });
  }, []);
  return (
    <section class="discover section" id="discover">
      {/* <h2 class="section__title">
          Discover the most <br />
          attractive places
        </h2> */}
      <Swiper
        // slidesPerView="auto"
        centeredSlides={true}
        // spaceBetween={30}
        grabCursor={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
        }}
        modules={[EffectCoverflow]}
        class="discover__container"
      />

      {/* <div class="swiper-wrapper"> */}
      <SwiperSlide class="discover__card swiper-slide">
        {/* <img src={imgArray[0]} alt="" class="discover__img" /> */}
        {/* <div class="discover__data"> */}
        <h2 class="discover__title">Bali</h2>
        <span class="discover__description">24 tours available</span>
        {/* </div> */}
      </SwiperSlide>

      <SwiperSlide class="discover__card swiper-slide">
        {/* <img src={imgArray[1]} alt="" class="discover__img" /> */}
        {/* <div class="discover__data"> */}
        <h2 class="discover__title">Hawaii</h2>
        <span class="discover__description">15 tours available</span>
        {/* </div> */}
      </SwiperSlide>

      <SwiperSlide class="discover__card swiper-slide">
        {/* <img src={imgArray[2]} alt="" class="discover__img" /> */}
        {/* <div class="discover__data"> */}
        <h2 class="discover__title">Hvar</h2>
        <span class="discover__description">18 tours available</span>
        {/* </div> */}
      </SwiperSlide>

      <SwiperSlide class="discover__card swiper-slide">
        {/* <img src={imgArray[3]} alt="" class="discover__img" /> */}
        {/* <div class="discover__data"> */}
        <h2 class="discover__title">Whitehaven</h2>
        <span class="discover__description">32 tours available</span>
        {/* </div> */}
      </SwiperSlide>
      {/* </div> */}
      <Swiper />
    </section>
  );
}

export default Swipe;
