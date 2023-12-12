import React from 'react';
import "./Ourteam.css";

const OurTeam = () => {
    return (
        <div className='ourTeam_Wrap'>
            <div className='sec__Ttl'>
                <div className='icon_Ttl'><img src='assets/images/icon-ttl.png'></img></div>
                <div className='text_Ttl'><h3>Our Team</h3></div>
            </div>
            <div className='our_tm-wrap'>
                <div className='our_tm-clm'>
                    <div className='our_tm-crd'>
                        <div className='our_tm-img'>
                            <img src="assets/images/ar.png" alt="Ashrith Rao" />
                        </div>
                        <div className='our_tm-txt'>
                            <h4>Ashrith Rao</h4>
                            <h5>CEO, Managing Director</h5>
                        </div>
                    </div>
                    <div className='our_tm-crd'>
                        <div className='our_tm-img'>
                            <img src="assets/images/sr.png" alt="Sai Datta Reddy" />
                        </div>
                        <div className='our_tm-txt'>
                            <h4>Sai Datta Reddy</h4>
                            <h5>Director, CMO</h5>
                        </div>
                    </div>
                    <div className='our_tm-crd'>
                        <div className='our_tm-img'>
                            <img src="assets/images/hv.png" alt="M Sri Harsha Vamsi" />
                        </div>
                        <div className='our_tm-txt'>
                            <h4>M Sri Harsha Vamsi</h4>
                            <h5>Director of photography and design</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam