import $ from "jquery";
import anime from "animejs";
var distance_li = -1;
var distance_id = -1;
var id_default = 8;
var li_default = 15;
var current = -1;

export const navigate = () => {
  $(document).ready(function () {
    distance_li =
      $(".list-item").eq(1).offset().top - $(".list-item").eq(0).offset().top;
    distance_id =
      $(".id-list-item").eq(0).offset().top -
      $(".id-list-item").eq(1).offset().top;
  });
  $(".indicator-circle").addClass("ind-circ-off");
  $(".title").addClass("title-on");
  $(".indicator").addClass("on");
  moveTitle(20);
  moveCircFill(0);
  moveIndicator(calcTopList(current));
  moveIndicatorCirc(calcTopCirc(current));
  moveIdItems(calcTopId(current));

  $(".list-item").mouseenter(function () {
    // navigate()
    if (current == -1) {
      $(".list-item").addClass("change_color");
      $(".indicator-circle").addClass("ind-circ-off");
      $(".title").addClass("title-on");
      $(".indicator").addClass("on");
      moveTitle(20);
      moveCircFill(0);
    }
    if (current !== getIndex($(this).index())) {
      current = getIndex($(this).index());
      moveIndicator(calcTopList(current));
      moveIndicatorCirc(calcTopCirc(current));
      moveIdItems(calcTopId(current));
    }
  });

  function moveTitle(t) {
    anime({
      targets: "#title-1",
      top: t,
      duration: 200,
      easing: "easeInOutSine",
    });
  }

  function moveCircFill(t) {
    anime({
      targets: ".circ-fill",
      top: t,
      duration: 400,
      easing: "easeInOutSine",
    });
  }

  function moveIdItems(t, d = 800) {
    anime({
      targets: ".id-selector",
      top: t,
      duration: d,
      easing: "spring(0.5, 80, 12, 0)",
    });
  }

  function moveIndicatorCirc(t, d = 800) {
    anime({
      targets: ".indicator-circle",
      top: t,
      duration: d,
      easing: "spring(1, 80, 12, 0)",
      //cubicBezier(.5,0,.17,1.03)
    });
  }

  function moveIndicator(t, d = 800) {
    anime({
      targets: ".indicator",
      top: t,
      duration: d,
      easing: "spring(1, 80, 12, 0)",
      //cubicBezier(.5,0,.17,1.03)
    });
  }

  function calcTopCirc(i) {
    if (i == 0) {
      return 108;
    } else {
      return distance_li * i + 108;
    }
  }

  function calcTopList(i) {
    if (i == 0) {
      return li_default;
    } else {
      return distance_li * i + li_default;
    }
  }

  function calcTopId(i) {
    if (i == 0) {
      return id_default;
    } else {
      return distance_id * i + id_default;
    }
  }

  function getIndex(i) {
    return (i = (i + 1) / 2 - 1);
  }
};
// document.ready(function () {
//   distance_li =
//     document.getElementByClassName("list-item").eq(1).offset().top - document.getElementByClassName("list-item").eq(0).offset().top;
//   distance_id =
//     document.getElementByClassName("id-list-item").eq(0).offset().top -
//     document.getElementByClassName("id-list-item").eq(1).offset().top;
// });
// document.getElementByClassName("indicator-circle").classList.add("ind-circ-off");
// document.getElementByClassName("title").classList.add("title-on");
// document.getElementByClassName("indicator").classList.add("on");
