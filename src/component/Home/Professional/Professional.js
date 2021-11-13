import React from 'react';
import './Professional.css'
import images from '../../../images/ge2.jpg'
const Professional = () => {
    return (
        <section className='Professional-section my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="pro-img-section">
                            <img src={images} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="professional-topic">
                            <div className="topic">
                                <h3>The Iranians have shot down drones</h3>
                                <p className='text-dark'>link to Top 100 Drone Companies
                                    Top 100 Drone Companies

                                    The drone industry has grown tremendously over the past 2 decades. While drone technology has existed for almost a century, commercial and consumer drones have only become popular in the last ten.</p>
                            </div>

                            <div className="user-part d-flex">
                                <div className="customer ">
                                    <h1>2000+</h1>
                                    <p>Happy Customer</p>
                                </div>

                                <div className="customer">
                                    <h1>100+</h1>
                                    <p>Total Service</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Professional;