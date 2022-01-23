import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from '@material-ui/core'
import { Link } from 'react-router-dom'
import IMG from '../../../assets/arkblack.PNG'
import { LinkedIn, GitHub, Instagram } from '@material-ui/icons'
import { Hook, Service, Aboutuswrapper, Card, RecentProjects, WhatIDo, About } from './exports'
import { mouseenter, mouseleave, mousemove, btnenter, btnleave, btnmove } from './demouitiilty'
import LocomotiveScroll from 'locomotive-scroll'
import chat from './images/favpng_communication-icon-chat-icon.png'
import img1 from './images/pexels-mikael-blomkvist-6476798.jpg'
import img2 from './images/pexels-shvets-production-7203724.jpg'
import img3 from './images/pexels-sora-shimazaki-5669619.jpg'
import img4 from './images/pexels-fauxels-3183188.jpg'
import img5 from './images/pexels-karolina-grabowska-5632331.jpg'
import img6 from './images/pexels-cottonbro-5483070.jpg'
import './demo.scss'
import { hoverCardData } from './demouitiilty'
function Demotext() {
  const hookcontainer = useRef(null)
  const hookimg = useRef(null)
  const btn = useRef(null)
  const imag = useRef(null)
  const [imageIndex, setimageIndex] = useState(0)
  const [cardImg, setcardImg] = useState({
    hoverContainer: '',
    cardcontainer: '',
    img: '',
    cardDescription: ''
  })
  const isTablet = useMediaQuery('(max-width:800px)')
  useEffect(() => {
    const parentContainer = document.querySelector('.home')
    const lscroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      tablet: { smooth: true },
      smartphone: { smooth: true },
      getDirection: true

    });

    lscroll.update();

    let trigger;
    let imgtrigger;
    imag.current.style.transform = 'rotate(45deg)'
    lscroll.on('call', (fun, dir, obj) => {
      [...parentContainer.querySelectorAll('.recentp_img')].forEach(el => {
        const img = el.querySelector('.effect-apollo')
        if (fun === el.getAttribute('data-scroll-call')) {
          imgtrigger = img
        }
        if (fun === imag.current.getAttribute('data-scroll-call')) {
          trigger = imag.current
        }
      })



    });
    lscroll.on('scroll', (obj) => {
      let target = 45 - obj.scroll.y / 45
      if (trigger) {
        if (target <= 0) {
          trigger.style.transform = `rotate(${0}deg)`
        } else {
          trigger.style.transform = `rotate(${45 - obj.scroll.y / 45}deg)`
        }
        if (imgtrigger) {
          imgtrigger.style.height = `100%`
        }
      }
    })




    Array.from(hookcontainer.current.querySelectorAll('.question_hook')).forEach((img, i) => {
      const hoverimg = hookimg.current.querySelector(`.img${i + 1}`)
      hoverimg.style.opacity = '0'
      img.addEventListener('mouseenter', () => {
        hoverimg.style.opacity = '1'
        setimageIndex(i)
      })
      img.addEventListener('mousemove', () => {
        hoverimg.style.opacity = '1'
      })
      img.addEventListener('mouseleave', () => {
        hoverimg.style.opacity = '0'
      })
    })


  }, [])

  const showinfoCard = (e) => {
    let card = document.querySelector('.question_card_container')
    card.style.display = 'flex'
    let hoverContainer = document.querySelector('.home_second_section')
    let hoverimg = hookimg.current.querySelector(`.img${imageIndex + 1}`)
    let description = hoverCardData[imageIndex]
    setcardImg({ ...cardImg, img: hoverimg.src, hoverContainer, cardDescription: description })
    hoverContainer.style.pointerEvents = 'none'
  }
  return (
    <div className="home">
      <section data-scroll-section="" className="home_intro_section">
        <p>
          I'm a developer who loves to work with <span className='important hide_cursor' >startups</span> and <span className='important hide_cursor'>fast-growing</span>  businesses to create <span className='highlight hide_cursor'>  growth-driven <span></span></span> products & projects.
        </p>
      </section>
      <section onMouseEnter={(e) => btnenter(e, btn)} onMouseOut={(e) => btnleave(e, btn)} onMouseMove={(e) => btnmove(e, btn)} data-scroll-section="" className="home_first_section">
        <div >
          <img ref={imag} className='homeImg' data-scroll='' data-scroll-call='img1' src={IMG} alt="img" />
        </div>
        <div data-scroll="" data-scroll-call='lg' className="home_content_box">
          <div data-splitting className="role_text">Web Development</div>
          <h1 data-scroll="" data-scroll-delay="0.14" className="home_demo_project_showcase">Ark</h1>
          <h1 data-splitting className="home_demo_project_showcase_sub"><span>A Great</span><span style={{ color: '#fca53c' }}>Sneaker</span>  shopping experience</h1>
          <div ref={btn} data-scroll="" data-scroll-delay="0.1" className="home_btn_wrapper hide_cursor">
            {
              isTablet ?(
<div className='btn_mobile-tablet'>
  <a
                href="https://arkshop.netlify.app"
                rel="noreferrer"
                target="_blank"
                style={{color:'white'}}
              >
                see project
              </a></div>
              ):(

            <div className='home_btn' >
              <a
                href="https://arkshop.netlify.app"
                rel="noreferrer"
                target="_blank"
              >
                see project
              </a>
              <span className='circle'></span>
            </div>
              )
            }
          </div>
        </div>
      </section>
      <div data-scroll-section="" className='hook_container'>
        <Card cardImg={cardImg} setcardImg={setcardImg} />

        <section onMouseEnter={(e) => mouseenter(e, hookcontainer, hookimg)} onMouseLeave={(e) => mouseleave(e, hookcontainer, hookimg)} onMouseMove={(e) => {
          mousemove(e, hookcontainer, hookimg)

        }} className="home_second_section">
          <section className="home_question_hook">Can you justify your business with any of these questions? Click on them to explore more</section>
          <div ref={hookimg} style={{ display: isTablet ? 'none' : 'flex' }} className="hook_img">
            <img src={img1} className="img_hook img1" alt='hookimg' />
            <img src={img2} className="img_hook img2" alt='hookimg' />
            <img src={img3} className="img_hook img3" alt='hookimg' />
            <img src={img4} className="img_hook img4" alt='hookimg' />
            <img src={img5} className="img_hook img5" alt='hookimg' />
            <img src={img6} className="img_hook img6" alt='hookimg' />
          </div>
          <div className="question_hook_container">
            <Hook hookcontainer={hookcontainer} isTablet={isTablet} showinfoCard={showinfoCard} />
          </div>
        </section>
      </div>


      <section data-scroll-section="" className="home_third_section_text_wrapper">
        <div data-splitting className="">
          Lets collaborate and find a solution that is tailored to suit your needs
        </div>
      </section>
      <section data-scroll-section="" className="letstalk_text_wrapper">
        <div data-scroll="" data-scroll-delay="0.18" data-scroll-speed="2" className="letstalk_header">Lets Do The talk</div>
        <div data-scroll="" data-scroll-delay="0.13" data-scroll-speed="2" className="letstalk_text">
          Its time to get to know each other. Lets talk or have a chat on how we can organise and help make your ideas a reality. I already mentioned that i am collaborative right.
        </div>
        <div style={{ backgroundImage: `url("${chat}")` }} className="chat_icon">
          <img src={chat} alt="illustration" />
        </div>
      </section>
      <section data-scroll-section="" className="letstalk_btn">
        <Link to='/contactInfo'>
          <li class="letstalk_btn_content__item">
            <button class="letstalk_btn_button button--telesto  hide_cursor"><span><span>lets collaborate</span></span></button>
          </li>
        </Link>
      </section>
      <section data-scroll-section="" id="services" className="home_fourth_section">
        <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2" data-scroll-target="#services" className="fourth_section_header">
          What I do best
        </div>
        <div className="home_ourwork_wrapper">
          <WhatIDo />
        </div>
      </section>
      <Service />
      <RecentProjects />
      <div data-scroll-section='' className='more-project_link' >

        <Link style={{ textDecoration: 'none' }} to='/allprojects'>
          <li className="see-more_content__item">

            <div className="see-more_link see-more_link--iocaste">
              <span>click to see more projects</span>
              <svg className="see-more_link__graphic see-more_link__graphic--slide" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
              </svg>
            </div>
          </li>
        </Link>
      </div>
      <div data-scroll-section="" className="lorem">
        <About />
        <Link to='/contactInfo'>
          <li class="about_btn_content__item">
            <button class="about_letstalk_btn_button about_button--telesto  hide_cursor"><span><span>Get Resume</span></span></button>
          </li>
        </Link>
      </div>
      <Aboutuswrapper />
      <footer data-scroll-section="" className="footer_links">
        <div className="copyright">© 2021 Stephen Boateng Williams |😜</div>
        <div className="social_links">
          <div className="github"> <a href="https://github.com/steveghana" rel='noreferrer' target='_blank' ><GitHub /> Github </a> </div>
          <div className="linkedin"><a href="https://www.linkedin.com/in/stephenwillaims" rel='noreferrer' target='_blank' ><LinkedIn /> LinkedIn </a> </div>
          <div className="instagram"><a href="https://github.com/steveghana" rel='noreferrer' target='_blank' ><Instagram /> Instgram </a> </div>
        </div>
      </footer>
    </div>
  )
}
export default Demotext
