


export const Fadeout =(fadeout, bubble, container, littlebubble)=>{
    if (fadeout) {
        bubble.current.style.transition = "all 3s ease";
        littlebubble.current.style.transition = "all 3s ease";
        bubble.current.style.opacity = "0";
        container.current.style.pointerEvents = "none";
        bubble.current.style.width = "100px";
        bubble.current.style.height = "100px";
        bubble.current.style.transform = "translate(-1600px, 1000px)";
        littlebubble.current.style.transform = "translate(160px, -100px)";
      }
}

 export const mousemove = (e, box, bubble,littlebubble ) => {
    let xAxisbox = (window.innerWidth / 2 - e.pageX) / 60;
    let yAxisbox = (window.innerHeight / 2 - e.pageY) / 60;
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) /10;
  bubble.current.style.transform = `translateY(${-yAxis}px) translateX(${-xAxis}px)`;
  [...box.current.querySelectorAll('.projects_content__item')].forEach(el=>{
    el.style.transform = `rotateY(${-xAxisbox}deg) rotateX(${yAxisbox}deg) translateY(${-yAxis}px) translateX(${-xAxis}px)`;
  })
};
export const mouseleave = (box, bubble, head) => {
  box.current.style.transition = "all 0.5s ease-out";
  head.current.style.transition = "all 1s ease-in";
  bubble.current.style.transform = `translateY(0px) translateX(0px)`;
  bubble.current.style.transition = "all 0.5s ease-out";
  head.current.style.transform = "translateZ(20px)";
   [...box.current.querySelectorAll('.projects_content__item')].forEach(el=>{
    el.style.transform = `rotateY(0deg) rotateX(0deg)`;
    el.style.transition = "all 0.5s ease-in";
    })
  };
  export const mouseenter = (box, fadeout, bubble, head,e) => {
    head.current.style.transform = "translateZ(50px)";
    bubble.current.style.transition = "all 0.5s ease-out";
    bubble.current.style.transform = `translateY(0px) translateX(0px)`;
    head.current.style.pointerEvents = "all";
     [...box.current.querySelectorAll('.projects_content__item')].forEach(el=>{
      el.style.transform = `rotateY(0deg) rotateX(0deg)`;
      el.style.transition = "all 0.5s ease-out";
    
    })
    if (fadeout) {
      e.target.style.pointerEvents = "none";
    }
  };





  
 

