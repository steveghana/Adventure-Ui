export const mousemove = (e, hookcontainer, hookimg) => {
  let xAxisbox = (window.innerWidth / 2 - e.pageX) / 4;
  let yAxisbox = (window.innerHeight / 2 - e.pageY) / 10;
  let xAxisimg = (window.innerWidth / 2 - e.pageX) / 2;
  let yAxisimg = (window.innerHeight / 2 - e.pageY) / 12;
  hookcontainer.current.style.transform = `translateY(${yAxisbox}px) translateX(${xAxisbox}px)`;
  hookimg.current.style.transform = `translateY(${-yAxisimg}px) translateX(${-xAxisimg}px)`;
};
export const btnmove = (e, el) => {
  let xAxisbox = (window.innerWidth / 2 - e.pageX) / 4;
  let yAxisbox = (window.innerHeight / 2 - e.pageY) / 10;
  el.current.style.transform = `translateY(${yAxisbox}px) translateX(${xAxisbox}px)`;
};
export const mouseleave = (e, hookcontainer, hookimg) => {
  hookcontainer.current.style.transition = "all 0.5s ease-out";
  hookcontainer.current.style.transform = `tranalateY(0px) translateX(0px)`;
};
export const btnleave = (e, el) => {
  el.current.style.transition = "all 0.5s ease-out";
  el.current.style.transform = `tranalateY(0px) translateX(0px)`;
};
export const mouseenter = (e, hookcontainer) => {
  hookcontainer.current.style.transition = "all 0.5s ease-out";
};
export const btnenter = (e, el) => {
  el.current.style.transition = "all 0.5s ease-out";
};
export const scroll = (e, bubble, box) => {
  let scrollPosition = e.target.scrollTop;
  box.style.transform = `translateY(${scrollPosition * 0.2}px)`;
  bubble.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  bubble.style.pointerEvents = "none";
  bubble.style.opacity = `${2 - scrollPosition / 22}`;
};
export const clamp = (num, min, max) =>
  num <= min ? min : num >= max ? max : num;

export const hoverCardData = [
  {
    id: 1,
    header: "No website on the Internet",
    headerDesc:
      "If you live in 2021 and beyond with without a website for your business, you are truly missing out!",
    desc1: [
      "Magnify the benefits of how getting a website can help exponentially improve your business.",
      "Discuss about your goals and solutions to implement (Planning, target audience, timeline)",
      "Broading your customer base with an online presence (website)",
    ],
    submission: "Want an online presence for your business",
  },
  {
    id: 2,
    header: "It all begins with a simple idea",
    headerDesc: "Do you want to make your ideas a reality?",
    desc1: [
      "Discuss about your goals and solutions to implement (Planning, timeline)",
      "Assist in conducting a feasibilty and cost benefit analysis for your idea",
      "Measure, study and improve milestones in your jouney to make your ideas a reality",
    ],
    submission: "Want to turn your ideas into a viable product",
  },
  {
    id: 3,
    header: "Willing to scale your product",
    headerDesc:
      "If you want to broading your code base to handle multiple users",
    desc1: [
      "Discuss about your goals and solutions to implement (Planning, timeline)",
      "Broading your code base with new features and optimisation to handle multiple request hence, minimising bottlenecks as your traffic grows",
      "Providing constant monitoring",
    ],
    submission: "Are you ready to scale",
  },
  {
    id: 4,
    header: "Want to hire me",
    headerDesc: "Want a hardworking, loyal and dedicated employee?",
    desc1: [
      "Discuss about your goals and where i best fit to enhance the growth of your business",
      "Whack my brains to achieve satisfactory results day in day out",
    ],
    submission: "Do you need an employee",
  },
  {
    id: 5,
    header: "Want more free time",
    headerDesc:
      "Want to automate your day to day tasks to save you some time or you need someone to takeover?",
    desc1: [
      "Detect all of the repetitive tasks in your business",
      "Automate, automate, automate",
      "Provide constant monitoring",
      "With the saved time focus on ways to grow your business",
    ],
    submission: "Ready to put yourself first",
  },
  {
    id: 6,
    header: "Need help to start or complete a project",
    headerDesc:
      "If you want any services related to web development or design?",
    desc1: [
      "First figure out which job you want done",
      "'Discuss about your goals and solutions to implement (Planning, timeline)",
    ],
    submission: "Are you ready to start your project",
  },
];

// @media (max-width: 500px) {
//   .more-project_link {
//     margin: 0rem;
//     .see-more_link {
//       font-size: 1rem;
//       color: var(--color-text);
//     }
//   }
// }

// .more-project_link {
//   margin: 5rem 0rem;
//   .see-more_content {
//     list-style: none;
//   }

//   .see-more_content__item {
//     width: 100%;
//     height: 100%;
//     // margin: 4rem auto;
//     padding: 0;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     position: relative;
//   }

//   .see-more_content__item::before {
//     position: absolute;
//     top: 0;
//     left: 0;
//   }

//   .see-more_link {
//     cursor: pointer;
//     font-size: 2rem;
//     position: relative;
//     white-space: nowrap;
//     color: var(--color-text);
//   }

//   .see-more_link::before,
//   .see-more_link::after {
//     position: absolute;
//     width: 100%;
//     height: 1px;
//     background: currentColor;
//     top: 100%;
//     left: 0;
//     pointer-events: none;
//   }

//   .see-more_link::before {
//     content: "";
//     /* show by default */
//   }
//   .see-more_link--iocaste {
//     font-family: "Century Gothic";
//     overflow: hidden;
//     padding: 7px 0;
//   }

//   .see-more_link__graphic {
//     position: absolute;
//     top: 0;
//     left: 0;
//     pointer-events: none;
//     fill: none;
//     stroke: #ffffff;
//     stroke-width: 1px;
//   }

//   .see-more_link__graphic--slide {
//     top: -3px;
//     stroke-width: 2px;
//     transition: transform 0.7s;
//     transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
//   }

//   .see-more_link:hover .see-more_link__graphic--slide {
//     transform: translate3d(-66.6%, 0, 0);
//   }
// }
