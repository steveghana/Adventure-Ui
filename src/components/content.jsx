import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import climbing from "../assets/images/pexels-lachlan-ross-7084334-min.jpg";
import { MoreVert, ArrowRightAlt } from "@material-ui/icons";
import safari from "../assets/images/pic-1.png";
import frame from "../assets/images/—Pngtree—mobile frame mockup design vector_5934163.Png";
import diving from "../assets/images/pexels-russ-jani-739657 (2)-min.jpg";
import Alaska from "../assets/images/pexels-spencer-gurley-1448055 (2).jpg";
import Person from "../assets/images/man-1246508_1920.jpg";
import car from "../assets/images/dc98a102f13fb67480e51be73247e546.jpg";
import Sam from "../assets/images/user-2.png";
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
              duration: 1,
              ease: "power2.inOut",
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(content.current);
  }, []);
  const MobileImage = ({ img, name, status, likes }) => (
    <div className="chat_container">
      <div className="mobile_img">
        <img src={img} alt="" />
      </div>
      <div className="name-and-description">
        <div className="name">{name}</div>
        <div className="status">{status}</div>
      </div>
      <div className="emoticon">
        <div className="horiz">
          <MoreVert style={{ color: "gray" }} />
        </div>
        <div className="emoji-and-number">
          <div className="chat_num">{likes}</div>
          <div className="emoji">❤</div>
        </div>
      </div>
    </div>
  );
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
                <ArrowRightAlt style={{ transform: "rotate(180deg)" }} />
              </div>
              <div className="slidebtn-right">
                <ArrowRightAlt />
              </div>
            </div>
          </div>
        </div>
        <div className="fourthSection">
          <div className="fourthSection_header">Find Talents</div>
          <div className="fourthSection_wrapper">
            <div className="mobile">
              <div className="plus_icons">+</div>
              <img className="car" src={car} alt="" />
              <img src={frame} alt="" />
              <div className="image_description">
                <div className="subscribers">Subscribers</div>
                <MobileImage
                  img={Person}
                  name={"Blake Clawford"}
                  status={"Travelar"}
                  likes={17}
                />
                <MobileImage
                  img={Sam}
                  name={"Sam Guttierez"}
                  status={"Travelar"}
                  likes={27}
                />
              </div>
            </div>
            <div className="aboutperson">
              <div className="image">
                <img src={Person} alt="person" />
              </div>
              <div className="person-name">Blake Crawford</div>
              <div className="job-description">Traveler</div>
              <h1 className="number">+731</h1>
              <ul>
                <li className="description-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Placeat quisquam aliquid hic provident iste eaque iusto
                  debitis quos, corrupti omnis. Libero.
                </li>
              </ul>
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
