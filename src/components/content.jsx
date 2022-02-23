import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import climbing from "../assets/images/pexels-lachlan-ross-7084334.jpg";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import safari from "../assets/images/pic-1.png";
import diving from "../assets/images/pexels-russ-jani-739657 (3).jpg";
import Alaska from "../assets/images/pexels-spencer-gurley-1448055 (2).jpg";
import Person from "../assets/images/man-1246508_1920.jpg";
const Content = () => {
  const content = useRef(null);
  useEffect(() => {
    gsap.set([".image-content1", ".image-content2", ".image-content3"], {
      y: "-10%",
      opacity: 0,
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to([".image-content1", ".image-content2", ".image-content3"], {
              y: "0%",
              opacity: 1,
              stagger: 0.4,
              duration: 2,
              ease: "power2.inOut",
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(content.current);
  }, []);
  return (
    <div ref={content} className="content-container">
      <div className="content">
        <h1 className="second-section-header">Find Yourself</h1>

        <div className="project-images">
          <div className="image-content1">
            <h2 className="climbing">Climb</h2>
            <img src={climbing} alt="climbing" />
            <p>
              {" "}
              Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
              Porro accusantium <br /> dicta incidunt cum.
            </p>
            <div className="climbing-link">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="image-content2">
            <h2 className="safari">Safari</h2>
            <img src={safari} alt="climbing" />
            <p>
              {" "}
              Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
              Porro accusantium <br /> dicta incidunt cum.
            </p>
            <div className="safari-link">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="image-content3">
            <h2 className="skydiving">Skydiving</h2>
            <img src={diving} alt="climbing" />
            <p>
              {" "}
              Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
              Porro accusantium <br /> dicta incidunt cum.
            </p>
            <div className="diving-link">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

        <h1 className="third-section-header">New Places</h1>

        <div className="places-box">
          <div className="destination-img">
            <img src={Alaska} alt="" className="img" />
            <div className="dot">
              <div className="spinner-grow text-light" role="status"></div>
            </div>
          </div>
          <div className="about-destination">
            <div className="date">Aug 22, 2020</div>
            <h2 className="destination-name">Alaska</h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              laudantium harum. Accusantium, nulla.
            </p>
            <div className="readmore">
              <a href="#">Read more</a>
            </div>
            <div className="destination-slidebtn">
              <div className="slidebtn-left">
                <ArrowBack />
              </div>
              <div className="slidebtn-right">
                <ArrowForward />
              </div>
            </div>
          </div>
        </div>
        <div className="fourthSection">
          <div className="fourthSection_header">Find Talents</div>
          <div className="fourthSection_wrapper">
            <div className="mobile"></div>
            <div className="aboutperson">
              <div className="image">
                <img src={Person} alt="person" />
              </div>
              <div className="person-name">Blake Crawford</div>
              <div className="job-description">Traveler</div>
              <h1 className="number">+731</h1>
              <p className="description-text">
                .Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat quisquam aliquid hic provident iste eaque iusto debitis
                quos, corrupti omnis. Libero.
              </p>
              <div className="followme-discover">
                <div className="follow">FOLLOW ME</div>
                <div className="discover">DISCOVER</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
