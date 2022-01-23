export const Morphing = (charming, anime, imagesLoaded) => {
  const DOM = {};
  DOM.intro = document.querySelector(".content--intro");
  DOM.enter = document.querySelector(".enter");
  DOM.pr = document.querySelector(".home_btn");
  charming(DOM.enter);
  charming(DOM.pr);
  DOM.enterLetters = Array.from(DOM.enter.querySelectorAll("span"));
  DOM.prLetters = Array.from(DOM.pr.querySelectorAll("span"));
  const init = () => {
    imagesLoaded(document.body, { background: true }, () =>
      document.body.classList.remove("loading")
    );
    DOM.enter.addEventListener("mouseenter", enterHoverInFn);
    DOM.enter.addEventListener("mouseleave", enterHoverOutFn);
    // DOM.pr.addEventListener("touchenter", navigate);
    DOM.pr.addEventListener("mouseenter", enterHoverInFn);
    DOM.pr.addEventListener("mouseleave", enterHoverOutFn);
  };
  let isActive;
  let enterTimeout;

  const enterHoverInFn = () =>
    (enterTimeout = setTimeout(() => {
      isActive = true;
      anime.remove(DOM.enterLetters);
      anime.remove(DOM.prLetters);
      anime({
        targets: [DOM.enterLetters, DOM.prLetters],
        delay: (t, i) => i * 15,
        translateY: [
          { value: 10, duration: 150, easing: "easeInQuad" },
          { value: [-10, 0], duration: 150, easing: "easeOutQuad" },
        ],
        opacity: [
          { value: 0, duration: 150, easing: "linear" },
          { value: 1, duration: 150, easing: "linear" },
        ],
        color: {
          value: "#FCA53C",
          duration: 1,
          delay: (t, i, l) => i * 15 + 150,
        },
      });
    }, 50));

  const enterHoverOutFn = () => {
    clearTimeout(enterTimeout);
    if (!isActive) return;
    isActive = false;

    anime.remove(DOM.enterLetters);
    anime.remove(DOM.prLetters);
    anime({
      targets: [DOM.enterLetters, DOM.prLetters],
      delay: (t, i, l) => (l - i - 1) * 15,
      translateY: [
        { value: 10, duration: 150, easing: "easeInQuad" },
        { value: [-10, 0], duration: 150, easing: "easeOutQuad" },
      ],
      opacity: [
        { value: 0, duration: 750, easing: "linear" },
        { value: 1, duration: 750, easing: "linear" },
      ],
      color: {
        value: "#ffffff",
        duration: 1,
        delay: (t, i, l) => (l - i - 1) * 15 + 150,
      },
    });
  };

  init();
};
