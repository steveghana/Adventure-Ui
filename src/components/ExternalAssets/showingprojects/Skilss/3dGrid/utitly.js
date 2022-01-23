export function SlideInit(container, leftbtn, rightbtn) {
  const slider = container.current;
  const slides = document.querySelectorAll(".slider__slide");
  const prevBtn = leftbtn.current;
  const nextBtn = rightbtn.current;
  const numSlides = slides.length;

  let slideWidth = slides[0].offsetWidth;
  let slideMarginRight = parseInt(getComputedStyle(slides[0]).marginRight);
  let moveX = slideWidth + slideMarginRight;

  slider.style.transform = `translateX(${-moveX}px)`;
  let counter = 1;

  nextBtn.addEventListener("click", () => {
    counter++;
    slider.style.transition = "transform 0.5s ease-in-out, opacity 0.2s";
    slider.style.transform = `translateX(${-(moveX * counter)}px)`;
    if (counter >= slides.length) counter = numSlides;
  });

  prevBtn.addEventListener("click", () => {
    counter--;
    slider.style.transition = "transform 0.5s ease-in-out, opacity 0.2s";
    slider.style.transform = `translateX(${-(moveX * counter)}px)`;
    if (counter < 0) counter = 0;
  });

  slider.addEventListener("transitionend", () => {
    if (slides[counter].id === "first-clone") {
      slider.style.transition = "none";
      counter = 1;
      slider.style.transform = `translateX(${-(moveX * counter)}px)`;
    }

    if (slides[counter].id === "last-clone") {
      slider.style.transition = "none";
      counter = slides.length - 2;
      slider.style.transform = `translateX(${-(moveX * counter)}px)`;
    }
  });
  window.addEventListener("resize", () => {
    slideWidth = slides[0].offsetWidth;
    slideMarginRight = parseInt(getComputedStyle(slides[0]).marginRight);
    moveX = slideWidth + slideMarginRight;
    slider.style.transition = "none";
    slider.style.transform = `translateX(${-(moveX * counter)}px)`;
  });
  return { slideWidth, slides, slideMarginRight, moveX, slider, counter };
}
