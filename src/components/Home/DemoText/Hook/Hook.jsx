import React from "react";
import "./hook.scss";
import img1 from "../images/pexels-mikael-blomkvist-6476798.jpg";
import img2 from "../images/pexels-shvets-production-7203724.jpg";
import img3 from "../images/pexels-sora-shimazaki-5669619.jpg";
import img4 from "../images/pexels-fauxels-3183188.jpg";
import img5 from "../images/pexels-karolina-grabowska-5632331.jpg";
import img6 from "../images/pexels-cottonbro-5483070.jpg";
import Swipe from "./mobileSwiper/Swiper";
function Hook({ hookcontainer, isTablet, showinfoCard }) {
  const imgArray = [img1, img2, img3, img4, img5, img6];
  if (isTablet) return <Swipe imgArray={imgArray} />;
  else
    return (
      <div ref={hookcontainer} className="home_questionhook_wrapper">
        <div className="hook_row">
          <div
            style={{ backgroundImage: isTablet ? `url("${img1}")` : null }}
            onClick={showinfoCard}
            className="question_hook hook1"
          >
            Dont have a website
          </div>
          <div
            style={{ backgroundImage: isTablet ? `url("${img2}")` : null }}
            onClick={showinfoCard}
            className="question_hook hook2"
          >
            {" "}
            I have only an idea
          </div>
        </div>
        <div className="hook_row">
          <div
            style={{ backgroundImage: isTablet ? `url("${img3}")` : null }}
            onClick={showinfoCard}
            className="question_hook hook3"
          >
            I want to scale
          </div>
          <div
            style={{ backgroundImage: isTablet ? `url("${img4}")` : null }}
            onClick={showinfoCard}
            className="question_hook hook4"
          >
            I need a commited worker
          </div>
        </div>
        <div className="hook_row">
          <div
            style={{ backgroundImage: isTablet ? `url("${img5}")` : null }}
            onClick={showinfoCard}
            className="question_hook hook5"
          >
            I need more free time
          </div>
          <div
            style={{ backgroundImage: isTablet ? `url("${img6}")` : null }}
            onClick={showinfoCard}
            className="question_hook hook6"
          >
            I want a service
          </div>
        </div>
      </div>
    );
}

export default Hook;
