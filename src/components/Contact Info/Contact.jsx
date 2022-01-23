import React, { useState } from 'react'
import { Call, LocationOnOutlined, MailOutline } from '@material-ui/icons'
import axios from 'axios'
import Loader from '../Loader/loader'
import Spinner from '../ExternalAssets/spinner/Spinner'
import './contact.scss'
function Contact() {
    const baseURl = 'https://portfolioapi12.herokuapp.com'
    const [err, seterr] = useState('')
    const initialState = {
        name: '',
        email: '',
        service: '',
        project: ''
    }
    const [inputInfo, setinputInfo] = useState(initialState)
    const [isLoading, setisLoading] = useState(true)
    const [isFetching, setisFetching] = useState(false)
    React.useEffect(() => {
        setTimeout(() => {
            setisLoading(false);
        }, 1500);
        if (isLoading) return;

    }, [isLoading])
    const handleSubmit = async () => {
        const emailValidity = new RegExp(/^[\w*.-_+]+@[\w-]+(\.\w{2,4})+$/);
        if (inputInfo.email === "" || !emailValidity.test(inputInfo.email)) {
            seterr("Enter valid email for example johnsnow@winterfell.com");
        } else if (inputInfo.project === '') {
            seterr("How may i be of service to you!");

        } else {
            setisFetching(true)
            const { data } = await axios.post(baseURl, inputInfo)
            let longdurationData;
            if (!data) {
                setInterval(async () => {
                    const { data } = await axios.post(baseURl, inputInfo)
                    longdurationData = data
                }, 30000);
            }
            if (data || longdurationData)
                setisFetching(false)
            if (data.message) {
                setinputInfo(initialState)
            }
            const { message, err } = data
            seterr(message || err)

        }
    }
    const handleChange = (e) => {
        setinputInfo({ ...inputInfo, [e.target.name]: e.target.value })

    }
    if (isLoading) return <Loader />
    return (
        <div className='contact_wrapper'>
            <div className="contact_header_wrapper">
                <div className="contact_header_text">

                    <div className="contact_first_header">
                        Let's Collaborate
                    </div>
                    <div className="contact_description">
                        Do you want to work together or talk about an idea? Let's get in touch then.
                        Just fill out the form!
                    </div>
                </div>

            </div>
            <div className="contact_input_container">
                <div className="contact_inputs">
                    <div className="contact_input">
                        <div className="input_description">
                            01. FIRST AND LAST NAME
                        </div>
                        <input name='name' value={inputInfo.name} onChange={handleChange} type="text" placeholder='John Snow ...' />

                    </div>
                    <div className="contact_input">
                        <div className="input_description">
                            02.YOUR E-MAIL
                        </div>
                        <input name='email' value={inputInfo.email} onChange={handleChange} type="text" placeholder='JohnSnow@gmail.com' />
                    </div>
                    <div className="contact_input">
                        <div className="input_description">
                            03. YOU NEED HELP FOR
                        </div>
                        <input name='service' value={inputInfo.service} onChange={handleChange} type="text" placeholder='Web development, Build a ...' />
                    </div>
                    <div className="contact_input">

                        <div className="input_description">
                            04.Describe your project Shortly
                        </div>
                        <div className="pendulum_textarea">


                            <textarea value={inputInfo.project} onChange={handleChange} name="project" id="project_description" cols="10" rows="5" placeholder='I have this amazing project ...'></textarea>
                            <div class="pendulums">
                                <div class="pendulum">
                                    <div class="bar"></div>
                                    <div class="motion">
                                        <div class="string"></div>
                                        <div class="weight"></div>
                                    </div>
                                </div>
                                <div class="pendulum shadow">
                                    <div class="bar"></div>
                                    <div class="motion">
                                        <div class="string"></div>
                                        <div class="weight"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        isFetching ? <div className='spinner_container'>
                            <Spinner bg={'white'} />
                        </div>
                            : <div className="contact_error-message">{err}</div>
                    }
                    <li className="contact_content__item">

                        <div onClick={handleSubmit} className="contact__link contact__link--iocaste">
                            <span>Send Message</span>
                            <svg className="contact__link__graphic contact__link__graphic--slide" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                                <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
                            </svg>
                        </div>
                    </li>
                </div>

                <div className="contact_right">
                    <div className="contact_input">
                        <div className="input_description">
                            Rather drop a line
                        </div>
                        <div className="right_head">
                            <Call fontSize='large' />
                            <span>
                                233554735344
                            </span>
                        </div>
                    </div>
                    <div className="contact_input">
                        <div className="input_description">
                            Want to hire me
                        </div>
                        <div className="right_head">
                            <MailOutline fontSize='large' />
                            <span>
                                boatengstephen707@gmail.com
                            </span>
                        </div>
                    </div>
                    <div className="contact_input">
                        <div className="input_description">
                            I'm currently in
                        </div>
                        <div className="right_head">
                            <LocationOnOutlined fontSize='large' />
                            <span>
                                Ghana / Eastern Region
                            </span>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Contact
