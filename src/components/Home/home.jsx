import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Text from "../ExternalAssets/Text/Text";
import {useMediaQuery} from '@material-ui/core'
import charming from "charming";
import { Menu } from '@material-ui/icons'
import { Fadeout, mousemove, mouseleave, mouseenter } from "./utitlity";
import { Morphing } from "../MorphAnimation";
import Nav from "./Nav/Nav";
import anime from "animejs";
import TextAnim from '../ExternalAssets/TextAnim/TextAnim'
import imagesLoaded from "imagesloaded";
import "./home.scss";
import "./DemoText/demo.scss";
import Demotext from "./DemoText/Demotext";
function Home() {
  const sub = useRef(null);
  const box = useRef(null);
  const nav = useRef(null)
  const text = useRef(null);
  const littlebubble = useRef(null);
  const isTablet = useMediaQuery('(max-width:800px)')

  const [fadeout, setfadeout] = useState(false);
  const container = useRef(null);
  const bubble = useRef(null);
  const [scrollInstance, setscrollInstance] = useState('')
  const head = useRef(null);
  useEffect(() => {
let abort = new AbortController()
    Morphing(charming, anime, imagesLoaded);
    Fadeout(fadeout, bubble, container, littlebubble, littlebubble);
    return ()=>{
      abort.abort()
    }
  }, [fadeout]);

  const openNav = () => {

    nav.current.classList.toggle('open')
  }
  return (
    <div


      className="project_content content--intro"
    >

      <div class=".btn__item hide_cursor">
        <button ref={littlebubble} onClick={openNav} class="skoll-button button--skoll"><span><span><Menu /></span></span></button>
      </div>

      <div data-scroll-container class="projects_content__inner">

        <svg class="cursor" width="140" height="140" viewBox="0 0 140 140">
          <defs>
            <filter id="filter-1" x="-50%" y="-50%" width="200%" height="200%"
              filterUnits="objectBoundingBox">
              <feTurbulence type="fractalNoise" baseFrequency="0" numOctaves="10" result="warp" />
              <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="60" in="SourceGraphic" in2="warp" />
            </filter>
          </defs>
          <circle class="cursor__inner" cx="70" cy="70" r="60" />
        </svg>
        <div ref={nav} className="home_navigation">
          <Nav nav={nav} />

        </div>
        <section data-scroll-section="" ref={container}
          onMouseLeave={() => mouseleave(box, bubble, head, littlebubble)}
          onMouseEnter={(e) =>
            mouseenter(box, fadeout, bubble, head, e, littlebubble)
          }
          onMouseMove={(e) => mousemove(e, box, bubble, littlebubble)}
          className="scroll-content">

          <Text />
          <div ref={box} class="box">
            <div class="masked_content">
              <div class="wrapper">
                <div class="hero hero--primary">
                  <div class="container">
                    <h1 class="hero__heading" data-splitting>
                      <TextAnim />

                    </h1>

                  </div>
                </div>
              </div>
            </div>

            <div class="role">
              <div class="block"></div>
              <p ref={sub}>FullStack Developer</p>
            </div>
            <div ref={head} className="button">
              <li class="projects_content__item hide_cursor">
                <Link to='/contactInfo'>
                  <button class="button button--calypso">
                    <span>contact</span>
                  </button>
                </Link>
              </li>
              <li class="projects_content__item hide_cursor">
                <button class="button button--calypso">
                  <span>
                    <a style={{ color: 'white' }} target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/114arxIEN-bEdgN2IQKkG_bF9LD55cYF_/view?usp=sharing">
                      Get Resume

                    </a>
                  </span>
                </button>
              </li>
            </div>
          </div>
          <div className='enter_wrapper hide_cursor' ref={bubble}>
          {
            isTablet ? (
              <Link to='/categories' >
              <div className='entermobile' ref={text} >explore</div>
            </Link>
            ):(

            <Link to='/categories'>
              <div className='enter' onClick={() => setfadeout(true)}>

                <div ref={text}>

                  explore
                </div>
                <span className='circle'></span>
              </div>
            </Link>
            )
          }
          </div>

        </section>
        <Demotext scrollInstance={scrollInstance} />
      </div>
    </div>
  );
}

export default Home;
