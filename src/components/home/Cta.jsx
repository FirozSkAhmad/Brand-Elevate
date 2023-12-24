import React from 'react';
import "./cta.css";
import { Link } from 'react-router-dom';

const Cta = () => {
    return (
        <div className='cta__Wrap' id='contact'>
            <div className='cta__S'>
                <div className='cta__content'>
                    <div className='cta__Ttl'>
                        <h2>Have an idea?<br></br>Let’s talk.</h2>
                        <p>Visually attractive design from concept to final result. We create solutions that are bold and forward-looking.</p>
                    </div>
                    <div className='cta_Btn'>
                        <Link to="/contact">
                            <span>
                                <img src='assets/images/b-calender.png' alt='calender'></img>
                            </span>
                            Free Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta