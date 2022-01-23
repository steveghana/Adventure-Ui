import React from 'react'
import Chatapp from './light.PNG'
import crypto from './pexels-pixabay-315788.jpg'
import ark from './pexels-mnz-1598505.jpg'
import { ArrowRightAlt } from '@material-ui/icons'
import './recent.scss'
function RecentProjects() {


    return (
        <div data-scroll-section="" className='recentp_container'>
            <div className="recentp_slide">


                <div className="recentp_wrapper">
                    <div className="recentp_box">

                        <div data-scroll='' data-scroll-call='p2' id='p2' className="recentp_img">
                            <div className="grid reverse">

                                <figure className="effect-apollo">
                                    <img src={Chatapp} alt="img22" />
                                    <figcaption>
                                        <h2>Let's <span>Chat</span></h2>
                                        <p>Inspired by whatsapp.</p>
                                        <a href="https://letschat115.netlify.app"
                                            rel="noreferrer"
                                            target="_blank">View more</a>
                                    </figcaption>
                                </figure>
                                <div className="recentp_content">

                                    <div className="recentp_text">
                                        <h2>Let's Chat.</h2>
                                        <p>
                                            A dynamic responsive chat application built with material ui, react, and nodejs. The project uses real-time, event-based communication between the browser and the server, with the help of the socket.io library. it also uses mongodb for data manaagement allowing some features like authentication, storing offline messages and so much more.
                                        </p>
                                    </div>
                                    <div className="recentp_description hide_cursor">
                                        <p>
                                            <a href="https://letschat115.netlify.app" rel='noreferrer' target='_blank'>
                                                visit project
                                            </a>
                                        </p>
                                        <ArrowRightAlt />

                                    </div>
                                </div>
                            </div>
                            <div className="name_recentp" style={{ textAlign: 'center' }}> 01. Let's Chat Web App</div>
                        </div>
                    </div>
                </div>
                <div className="recentp_wrapper">
                    <div className="recentp_box">

                        <div data-scroll='' data-scroll-call='p1' id='p1' className="recentp_img">
                            <div className="grid">
                                <figure className="effect-apollo">
                                    <img src={ark} alt="img22" />
                                    <figcaption>
                                        <h2>Ark <span>Shop</span></h2>
                                        <p>A great sneaker shopping experience</p>
                                        <a href="https://arkshop.netlify.app"
                                            rel="noreferrer"
                                            target="_blank"  >View more</a>
                                    </figcaption>
                                </figure>
                                <div className="recentp_content">

                                    <div className="recentp_text">
                                        <h2>Ark Shop.</h2>
                                        <p>
                                            A simple fully responsive e-commerce website with an amazing user interface built with react, nodejs and mongodb for data management,
                                            it also contains some extra features like full user authentication and payment method using paypal.

                                        </p>
                                    </div>
                                    <div className="recentp_description hide_cursor">
                                        <p>
                                            <a href="https://arkshop.netlify.app" rel='noreferrer' target='_blank'>
                                                visit project
                                            </a>
                                        </p>
                                        <ArrowRightAlt />
                                    </div>
                                </div>
                            </div>
                            <div className="name_recentp" style={{ textAlign: 'center' }}> 02. Ark Shop</div>
                        </div>
                    </div>
                </div>
                <div className="recentp_wrapper">
                    <div className="recentp_box">

                        <div data-scroll='' data-scroll-call='p3' id='p3' className="recentp_img">
                            <div className="grid">
                                <figure className="effect-apollo">
                                    <img src={crypto} alt="img22" />
                                    <figcaption>
                                        <h2>CryptoNet <span></span></h2>
                                        <p>Get latest Crypto news and more.</p>
                                        <a href="https://cryptotitbits.netlify.app" rel='noreferrer' target='_blank'>View more</a>
                                    </figcaption>
                                </figure>
                                <div className="recentp_content">

                                    <div className="recentp_text">
                                        <h2>CryptoNet</h2>
                                        <p>
                                            A responsive wep app built with react,
                                            which shows real time data regarding crytocurrencies, news and more,
                                            all with the help of RAPID API Url Enpoints                                            </p>
                                    </div>
                                    <div className="recentp_description hide_cursor">
                                        <p>
                                            <a href="https://cryptotitbits.netlify.app" rel='noreferrer' target='_blank'>
                                                visit project
                                            </a>
                                        </p>
                                        <ArrowRightAlt />
                                    </div>
                                </div>
                            </div>
                            <div className="name_recentp" style={{ textAlign: 'center' }}>03. CryptoNet</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default RecentProjects
