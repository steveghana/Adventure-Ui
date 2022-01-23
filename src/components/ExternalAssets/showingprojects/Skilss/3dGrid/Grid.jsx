import React, { useEffect, useRef, useState } from "react";
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";
import Javascript from "../../../../../assets/javascript-39424.png";
import HTML from "../../../../../assets/23-237430_html5-logo-graphic-design-hd-png-download.png";
import Css from "../../../../../assets/Daco_434937.png";
import Reactjs from "../../../../../assets/pngaaa.com-2507897.png";
import Nodejs from "../../../../../assets/node-js-icon-15.jpg";
import "./utitly";
import { SlideInit } from "./utitly";
import "./sass/main.scss";
function Grid({ showSkill, parent }) {
  const container = useRef(null);
  const rightbtn = useRef(null);
  const leftbtn = useRef(null);
  const [slideStart, setslideStart] = useState(false);
  useEffect(() => {
    SlideInit(container, leftbtn, rightbtn);
    setTimeout(() => {
      showSkill && setslideStart(true);
    }, 2000);
  }, [showSkill, slideStart]);

  return (
    <section class="section-testimonials">
      <div class="slider">
        <div ref={container} class="slider__slides">
          <div id='last-clone' class="slider__slide slider__slide--2">
            <figure class="testimonial slider__slide-content">
              <blockquote class="testimonial__text">
                <p class="testimonial__quote">
                  "React has now been more awesome to use as a framework,
                  especially with the introductions of hooks in functional
                  components allowing the ease of managing state. With these features, i can create
                  varieties of apps like social media apps, e-commerce
                  websites with great ui with or without styled components like
                  Material ui, chat Apps and many more. I am also acustomed to
                  its best practices like file and folder sturcture, clean and
                  Readable code, the use of context api and advanced State
                  Management with REDUX or REDUX TOOLKIT. ”
                </p>
                <cite class="testimonial__cite">
                  <span class="testimonial__cite--name">React Js</span>
                </cite>
              </blockquote>
              <div class="testimonial__img">
                <img src={Reactjs} alt="img" />
              </div>
            </figure>
          </div>
          <div class="slider__slide slider__slide--1">
            <figure class="testimonial slider__slide-content">
              <blockquote class="testimonial__text">
                <p class="testimonial__quote">
                  “ With Javascript, i can build complex apps and animations
                  with or without external libraries, i can also develop
                  algorithms to solve complex tasks, acustomed to most
                  data structures such as, arrays and its high order functions, Linked Lists and many
                  more. Am also comfortable with most coding paradigms such as, Objected Oriented and Funcitonal Style programming. ”
                </p>
                <cite class="testimonial__cite">
                  <span class="testimonial__cite--name">Javascript</span>
                </cite>
              </blockquote>
              <div class="testimonial__img">
                <img src={Javascript} alt="img" />
              </div>
            </figure>
          </div>

          <div class="slider__slide slider__slide--2">
            <figure class="testimonial slider__slide-content">
              <blockquote class="testimonial__text">
                <p class="testimonial__quote">
                  “ With HTML i can create complex layouts for a user interface making it ready for styling with Css ”
                </p>
                <cite class="testimonial__cite">
                  <span class="testimonial__cite--name">HTML</span>
                </cite>
              </blockquote>
              <div class="testimonial__img">
                <img src={HTML} alt="img" />
              </div>
            </figure>
          </div>
          <div class="slider__slide slider__slide--2">
            <figure class="testimonial slider__slide-content">
              <blockquote class="testimonial__text">
                <p class="testimonial__quote">
                  “ Css get more fun as time goes by, allowing us to create
                  cool, intriguiging and complex designs and animations. With
                  Css, I can create cool, modern and responsive websites and
                  applications implementing custom and advanced features like
                  custom variables, Sass which is another aspect of css,
                  enforcing browser integrations and so much more. . ”
                </p>
                <cite class="testimonial__cite">
                  <span class="testimonial__cite--name">Css</span>
                </cite>
              </blockquote>
              <div class="testimonial__img">
                <img src={Css} alt="img" />
              </div>
            </figure>
          </div>
          <div class="slider__slide slider__slide--2">
            <figure class="testimonial slider__slide-content">
              <blockquote class="testimonial__text">
                <p class="testimonial__quote">
                  “With Node js i can easily create servers and interact with
                  Databases like Mongodb and MySQL for client server CRUD
                  operations. I can also implement advanced features like Full
                  user authentication using tools like Jwt for usertokens and bcrypt for hashing user's
                  passwords,creating custom Middleware, creating RESTFUL Api's, implementing sockets
                  for real-time bidirectional open Tcp connections between
                  client and server using the socket.io library (Both client and
                  server) allowing us to create chat apps and so much more. . ”
                </p>
                <cite class="testimonial__cite">
                  <span class="testimonial__cite--name">Node Js</span>
                </cite>
              </blockquote>
              <div class="testimonial__img">
                <img src={Nodejs} alt="img" />
              </div>
            </figure>
          </div>
          <div class="slider__slide slider__slide--2">
            <figure class="testimonial slider__slide-content">
              <blockquote class="testimonial__text">
                <p class="testimonial__quote">
                  "React has now been more awesome to use as a framework,
                  especially with the introductions of hooks in functional
                  components. With these features,i can create
                  varieties of apps like social media apps, e-commerce
                  websites with great ui with or without styled components like
                  Material ui, chat Apps and many more. I am also acustomed to
                  its best practices like file and folder sturcture, clean and
                  Readable code, the use of context api and advanced State
                  Management with REDUX or REDUX TOOLKIT. ”
                </p>
                <cite class="testimonial__cite">
                  <span class="testimonial__cite--name">React Js</span>
                </cite>
              </blockquote>
              <div class="testimonial__img">
                <img src={Reactjs} alt="img" />
              </div>
            </figure>
          </div>
          <div id='first-clone' class="slider__slide slider__slide--1">
            <figure class="testimonial slider__slide-content">
              <blockquote class="testimonial__text">
                <p class="testimonial__quote">
                  “ With Javascript, i can build complex apps and animations
                  with or without external libraries, i can also develop
                  algorithms to solve solve complex tasks, acustomed to most
                  data structures, arrays and its high order functions and many
                  more.Am more of a functional style programmer, but i can also
                  code in object oriented. ”
                </p>
                <cite class="testimonial__cite">
                  <span class="testimonial__cite--name">Javascript</span>
                </cite>
              </blockquote>
              <div class="testimonial__img">
                <img src={Javascript} alt="img" />
              </div>
            </figure>
          </div>
        </div>

        <div class="slider__buttons">
          <div ref={leftbtn} class="slider__button slider__button--prev">
            <ArrowBackIos fontSize="large" />
          </div>
          <div ref={rightbtn} class="slider__button slider__button--next">
            <ArrowForwardIos fontSize="large" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grid;
