import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import Loader from "../../Loader/loader";
import { Elastic, Power1, Power4, Power3 } from "gsap/all";
import gsap from "gsap";
import imagesLoaded from "imagesloaded";
import charming from "charming";
import IMg1 from "./img/pexels-cottonbro-7232039-min.jpg";
import IMg2 from "./img/pexels-melvin-buezo-2529147.jpg";
import IMg3 from "./img/pexels-alesia-kozik-6770845-min.jpg";
import IMg4 from "./img/pexels-karolina-grabowska-5412432-min.jpg";
import IMg6 from "./img/pexels-karolina-grabowska-6214835-min.jpg";
import { Tweene } from "./Utility";
import "./allP.scss";
function Allprojects() {
  const isTablet = useMediaQuery("(max-width:900px)");
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1500);
    if (isLoading) return;
    Tweene(gsap, Elastic, Power4, Power3, imagesLoaded, charming);
  }, [isLoading]);
  if (isLoading) return <Loader />;
  return (
    <div className="loading">
      <svg className="hidden">
        <symbol id="icon-arrow" viewBox="0 0 24 24">
          <title>arrow</title>
          <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 " />
        </symbol>

        <symbol id="icon-longarrow" viewBox="0 0 54 24">
          <title>Back</title>
          <path d="M.42 11.158L12.38.256c.333-.27.696-.322 1.09-.155.395.166.593.467.593.903v6.977h38.87c.29 0 .53.093.716.28.187.187.28.426.28.716v5.98c0 .29-.093.53-.28.716a.971.971 0 0 1-.716.28h-38.87v6.977c0 .416-.199.717-.592.903-.395.167-.759.104-1.09-.186L.42 12.62a1.018 1.018 0 0 1 0-1.462z" />
        </symbol>
        <symbol id="icon-navarrow" viewBox="0 0 408 408">
          <title>navarrow</title>
          <polygon
            fill={!isTablet ? "#FCA53C" : "#ffffff"}
            fillRule="nonzero"
            points="204 0 168.3 35.7 311.1 178.5 0 178.5 0 229.5 311.1 229.5 168.3 372.3 204 408 408 204"
          ></polygon>
        </symbol>
      </svg>
      <main>
        <div className="slideshow">
          <div className="slideshow__deco"></div>

          <div className="slide">
            <div className="slide__img-wrap">
              <div
                className="slide__img"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${IMg2})`,
                }}
              ></div>
            </div>
            <div className="slide__side">Shop well</div>
            <div className="slide__title-wrap">
              <span className="slide__number">1</span>
              <h3 className="slide__title">Ark Shop</h3>
              <h4 className="slide__subtitle">
                A shop with intriguing user interface
              </h4>
            </div>
          </div>
          <div className="slide">
            <div className="slide__img-wrap">
              <div
                className="slide__img"
                style={{
                  backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${IMg3})`,
                }}
              ></div>
            </div>
            <div className="slide__side">The new world of crypto</div>
            <div className="slide__title-wrap">
              <span className="slide__number">2</span>
              <h3 className="slide__title">CryptoNet</h3>
              <h4 className="slide__subtitle">
                Crypotcurrency news at your fingertips
              </h4>
            </div>
          </div>
          <div className="slide">
            <div className="slide__img-wrap">
              <div
                className="slide__img"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${IMg1})`,
                }}
              ></div>
            </div>
            <div className="slide__side">Memories &amp; Thoughts</div>
            <div className="slide__title-wrap">
              <span className="slide__number">3</span>
              <h3 className="slide__title">Memories</h3>
              <h4 className="slide__subtitle">
                We all have some memories to recall right!
              </h4>
            </div>
          </div>
          <div className="slide">
            <div className="slide__img-wrap">
              <div
                className="slide__img"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${IMg4})`,
                }}
              ></div>
            </div>
            <div className="slide__side">Throw anything at me</div>
            <div className="slide__title-wrap">
              <span className="slide__number">4</span>
              <h3 className="slide__title">My basic calculator</h3>
              <h4 className="slide__subtitle">
                I was just trying to mimic microsoft's calculator functionality
              </h4>
            </div>
          </div>

          <div className="slide">
            <div className="slide__img-wrap">
              <div
                className="slide__img"
                style={{ backgroundImage: `url(${IMg6})` }}
              ></div>
            </div>
            <div className="slide__side">Chat &amp; Chat</div>
            <div className="slide__title-wrap">
              <span className="slide__number">5</span>
              <h3 className="slide__title">Let's Chat</h3>
              <h4 className="slide__subtitle">
                This was unplanned it really just happened
              </h4>
            </div>
          </div>
          <button className="nav nav--prev">
            <svg className="icon icon--navarrow-prev">
              <use xlinkHref="#icon-navarrow"></use>
            </svg>
          </button>
          <button className="nav nav--next">
            <svg className="icon icon--navarrow-next">
              <use xlinkHref="#icon-navarrow"></use>
            </svg>
          </button>
        </div>
        <div className="content">
          <div className="content__item">
            <span className="content__number">1</span>
            <h3 className="content__title">Ark Shop</h3>
            <h4 className="content__subtitle">
              A simple shop with an amazing user interface{" "}
            </h4>
            <div className="content__text">
              A simple fully responsive e-commerce website with an amazing user
              interface built with react, nodejs and mongodb for data
              management. It performs the basic prerequisites of an e-shop where
              users can select items, push items to cart, customise items and so
              much more. it also has payment options such as paypal.
              <br />
              <div className="showingp_link">
                <a
                  href="https://arkshop.netlify.app"
                  rel="noreferrer"
                  target="_blank"
                >
                  Click to visit project
                </a>
              </div>
            </div>
          </div>
          <div className="content__item">
            <span className="content__number">2</span>
            <h3 className="content__title">CryptoNet</h3>
            <h4 className="content__subtitle">
              {" "}
              Crypotcurrency news at your fingertips
            </h4>
            <div className="content__text">
              A responsive wep app built with react, which shows real time data
              regarding crytocurrencies, news and more, all with the help of
              rapid api url enpoints. It performs the basic CRUD operations
              where after the component is mounted, an axios request is made to
              a url Endpoint on Rapid Api returning real time data regarding
              crypotcurrencies like, news, prices, exchange and so much more.
              Its then displayed on the ui to be viewed by users.
              <br />
              <div className="showingp_link">
                <a
                  href="https://cryptotitbits.netlify.app"
                  rel="noreferrer"
                  target="_blank"
                >
                  Click to visit project
                </a>
              </div>
            </div>
          </div>
          <div className="content__item">
            <span className="content__number">3</span>
            <h3 className="content__title">Memories</h3>
            <h4 className="content__subtitle">
              We all have some memories to recall right!
            </h4>
            <div className="content__text">
              A reminder is a social app which serves as platform for people to
              share memories of their past. It s a simple web app built with
              react, material ui, node js for server side and mongdb to store
              user information. It performs the basic server and client-side
              CRUD operations where after a user has been authenticated based on
              their unique tokens, gets the chance to create a memory, makes a
              post request to the server to store the memory, and show's on the
              home feed to all users. Any user can like not more than once other
              user's post, but update and deletion can be done only by the
              author of that memory.
              <br />
              <div className="showingp_link">
                <a
                  href="https://reminder112.netlify.app"
                  rel="noreferrer"
                  target="_blank"
                >
                  Click to visit project
                </a>
              </div>
            </div>
          </div>
          <div className="content__item">
            <span className="content__number">4</span>
            <h3 className="content__title">Calculator</h3>
            <h4 className="content__subtitle">
              I was just trying to mimic microsoft's calculator functionality
            </h4>
            <div className="content__text">
              This looks a little bit more complex. Complex in the sense that if
              you really pay attention to how microsofts calculator works, it
              has a lot of moving parts, like how operators and numbers are
              managed, handling unexpected use of operators etc, and most
              importantly bug free. The interesting thing i like about it is how
              it shows the inserts and the actual evaluated result. And of
              course, i decided to show off a bit with some outside the box ui
              design just to make it feel less boring!.
              <br />
              <div className="showingp_link">
                <a
                  href="https://calculator112.netlify.app"
                  rel="noreferrer"
                  target="_blank"
                >
                  Click to visit project
                </a>
              </div>
            </div>
          </div>

          <div className="content__item">
            <span className="content__number">5</span>
            <h3 className="content__title">Let's Chat</h3>
            <h4 className="content__subtitle">
              This was unplanned it really just happened
            </h4>
            <div className="content__text">
              A dynamic responsive chat application built with material ui,
              react, and nodejs. The project uses real-time, event-based
              communication between the browser and the server, with the help of
              the socket.io library. it also uses mongodb for data manaagement
              allowing some features like authentication, storing offline
              messages and so much more.
              <br />
              <div className="showingp_link">
                <a
                  href="https://letschat115.netlify.app"
                  rel="noreferrer"
                  target="_blank"
                >
                  Click to visit project
                </a>
              </div>
            </div>
          </div>
          <button className="content__close">
            <svg className="icon icon--longarrow">
              <use xlinkHref="#icon-longarrow"></use>
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Allprojects;
