import React from 'react'
import './whatido.scss'
function WhatIDo() {
    const skill_container = React.useRef(null)
    React.useEffect(() => {
        Array.from(skill_container.current.querySelectorAll('.whatido_skill')).forEach(el => {
            let icon = el.querySelector('.icon--navarrow-next')
            let descrption = el.querySelector('.whatido_description')
            let header = el.querySelector('.skill_head')
            descrption.style.display = 'none'
            icon.addEventListener('click', () => {
                icon.classList.toggle('rotate')
                if (icon.classList.contains('rotate')) {
                    descrption.style.display = 'flex'
                    header.style.fontWeight = 'bolder'
                    setTimeout(() => {
                        descrption.classList.add('move_up')

                    }, 50);
                } else {
                    header.style.fontWeight = 'normal'
                    descrption.style.display = 'none'
                    descrption.classList.remove('move_up')
                }


            })


        });

    }, [])
    return (
        <div className='whatIdo_container'>
            <svg className="hidden">
                <symbol id="icon-arrow" viewBox="0 0 24 24">
                    <title>arrow</title>
                    <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 " />
                </symbol>

                <symbol id="icon-longarrow" viewBox="0 0 54 24">
                    <title>longarrow</title>
                    <path d="M.42 11.158L12.38.256c.333-.27.696-.322 1.09-.155.395.166.593.467.593.903v6.977h38.87c.29 0 .53.093.716.28.187.187.28.426.28.716v5.98c0 .29-.093.53-.28.716a.971.971 0 0 1-.716.28h-38.87v6.977c0 .416-.199.717-.592.903-.395.167-.759.104-1.09-.186L.42 12.62a1.018 1.018 0 0 1 0-1.462z" />
                </symbol>
                <symbol id="icon-navarrow" viewBox="0 0 408 408">
                    <title>navarrow</title>
                    <polygon fill="#ffff" fillRule="nonzero" points="204 0 168.3 35.7 311.1 178.5 0 178.5 0 229.5 311.1 229.5 168.3 372.3 204 408 408 204"></polygon>
                </symbol>
            </svg>
            <div ref={skill_container} className="whatido_content_wrapper">
                <div className="whatido_header">WHAT I DO?</div>
                <div className="whatido_skill skill_1">
                    <div className="icon_head">
                        <button className="nav nav--next">
                            <svg className="icon icon--navarrow-next">
                                <use xlinkHref="#icon-navarrow"></use>
                            </svg>
                        </button>
                        <div className="skill_head">FrontEnd Development</div>
                    </div>
                    <div className="whatido_description">
                        <p>
                            FrontEnd Developement magnifies my strongest skills in web development. Below are the detalied descrption of what i can do with most modern frontend tools. <br />

                        </p>

                        <p>

                            01. Javascript: “ With Javascript, i can build complex apps and animations
                            with or without external libraries, i can also develop
                            algorithms to solve complex tasks, acustomed to most
                            data structures such as, arrays, Linkedlist, and many
                            more. Am also comfortable with popular coding paradigms mainly, Objected Oriented and Functional Style programming” <br />
                        </p>
                        <p>

                            02. Css:  With
                            Css, I can create cool, modern and responsive websites and
                            applications implementing custom and advanced features like
                            custom variables, Sass which is another aspect of css,
                            enforcing browser integrations and so much more. . ” <br />
                        </p>
                        <p>


                            03. React:   React has now been more awesome to use as a framework,
                            especially with the ease of state management with hooks in functional
                            components. With these features, i can create
                            varieties of apps like social media apps, e-commerce
                            websites with great ui with or without styled components like
                            Material ui, chat Apps and many more. I am also acustomed to
                            its best practices like file and folder sturcture, clean and
                            Readable code, the use of context api and advanced State
                            Management with REDUX or REDUX TOOLKIT. ”

                        </p>

                    </div>
                </div>
                <div className="whatido_skill">
                    <div className="icon_head">
                        <button className="nav nav--next">
                            <svg className="icon icon--navarrow-next">
                                <use xlinkHref="#icon-navarrow"></use>
                            </svg>
                        </button>
                        <div className="skill_head">Backend Development</div>
                    </div>
                    <div className="whatido_description">
                        <p>

                            I can easily create servers and interact with
                            Databases like Mongodb and MySQL for client server CRUD
                            operations all with the help of runtimes like Node Js. I can also implement advanced features like Full
                            user authentication using tools like Jwt for usertokens and bcrypt for hashing user's
                            passwords, creating custom Middleware as a pipeline for strict authentication and authorisation, creating RESTFUL Api's, implementing sockets
                            for real-time bidirectional open Tcp connections between
                            client and server using the socket.io library (Both client and
                            server) allowing us to create chat apps, and so much more.
                        </p>
                    </div>
                </div>
                <div className="whatido_skill">
                    <div className="icon_head">
                        <button className="nav nav--next">
                            <svg className="icon icon--navarrow-next">
                                <use xlinkHref="#icon-navarrow"></use>
                            </svg>
                        </button>
                        <div className="skill_head">UI/UX Design</div>
                    </div>
                    <div className="whatido_description">
                        <p>

                            I am good at studying users, understanding their behavior, and architecting a journey that enables the user to achieve their desired tasks with minimal effort. This skill allows me to create an optimal experience for the user when they interact with a digital product, such as a website.
                        </p>
                    </div>
                </div>

                <div className="whatido_skill">
                    <div className="icon_head">
                        <button className="nav nav--next">
                            <svg className="icon icon--navarrow-next">
                                <use xlinkHref="#icon-navarrow"></use>
                            </svg>
                        </button>
                        <div className="skill_head">Web Design/Development</div>
                    </div>
                    <div className="whatido_description">
                        <p>

                            I can design the layout, visual appearance and the usability of a website.

                            i am equiped both creative graphic skills and technical skills. I can visualise how a site will look (the graphical design of the site) and how it will function (conversion of a design into a working website).
                            With my skills in modern frontend languages like HTML Css and Javascript, i can create compliant responsive layouts. Other strong skills include, the ability to work to tight deadlines, Strong creative skills and Up-to-date skills inline with technology and software developments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatIDo
