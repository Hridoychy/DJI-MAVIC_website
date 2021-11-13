import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <section className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-first-part mt-5">
                            <div className=" item mt-5">

                                <div className="home-town">

                                    <p> <span className=''><FontAwesomeIcon icon={faLocationArrow} /></span>  Nanshan, Shenzhen, China </p>
                                    <p className='need-customize'></p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="footer-container ">
                            <div className="list-part">
                                <ul>
                                    <li>
                                        <Link>About</Link>
                                    </li>
                                    <li>
                                        <Link>Project</Link>
                                    </li>
                                    <li>
                                        <Link>Contact us</Link>
                                    </li>
                                    
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                       
                    </div>
                    <div className="col-lg-3">
                        
                    </div>


                </div>
                <div class="text-center text-white mt-3">
                    Copyright ©️ 2021 All rights reserved BY DJI 
            </div>
            </div>


        </section>
    );
};

export default Footer;