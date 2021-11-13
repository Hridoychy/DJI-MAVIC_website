import React from 'react';
import './TestomonialSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const TestomonialSection = ({ testimonial }) => {
    console.log(testimonial);
    return (
        <div className='col-lg-4 my-3'>
            <div className="card-container">
                <div className="user-img">
                    <div className="reviewer-img">
                        <img src={testimonial.imageURL} alt="" />
                    </div>
                    <div className="professional">
                        <h5>{testimonial.name}</h5>
                        <span>{testimonial.Cname}</span>
                    </div>

                </div>

                <div className="card-post">
                    <p>{testimonial.description}</p>
                </div>
                <div className="card-five-star">
                <Rating
                    initialRating={testimonial.rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>

                </div>
            </div>
        </div>
    );
};

export default TestomonialSection;