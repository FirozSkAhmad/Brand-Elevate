import React, { useEffect } from 'react';
import "./portfolioSingle.css";

import Header from './Header/Header';
import Footer from './Footer/Footer';

import Cta from "../components/home/Cta";

const PortfolioSingle = () => {
    useEffect(() => {
        const initializeCursor = () => {
            const links = document.querySelectorAll('a');
            const cursor = document.querySelector('[data-cursor="1"]');

            links.forEach(link => {
                link.addEventListener('mouseenter', () => {
                    cursor.classList.add('cursor-hover--a');
                });

                link.addEventListener('mouseleave', () => {
                    cursor.classList.remove('cursor-hover--a');
                });
            });
        };

        initializeCursor();

        // Clean up event listeners when the component unmounts
        return () => {
            const links = document.querySelectorAll('a');

            links.forEach(link => {
                link.removeEventListener('mouseenter', () => { });
                link.removeEventListener('mouseleave', () => { });
            });
        };
    }, []);
    return (
        <>
            <Header></Header>
            <div className='port_Single-wrap'>
                <div className='port_Mn-back'>
                    <button>
                        <span className='back_logo'><img src='assets/images/back.png'></img></span>
                        All case studies
                    </button>
                </div>
                <div className='port_sn-mn'>
                    <div className='sn_mn-ttl'>
                        <div className='sn_hd'>
                            <h2>Galaxia Node</h2>
                        </div>
                        <div className='sn_para'>
                            <p>Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida adipiscing augue sit. </p>
                        </div>
                        <div className='sn_prop'>
                            <div className='sn_p-row'>
                                <div className='sn_p-cl'>
                                    <div className='sn_p-icn'>
                                        <img src='assets/images/user.png'></img>
                                    </div>
                                    <div className='sn_tag'>Brand Elevate</div>
                                </div>
                                <div className='sn_p-cl'>
                                    <div className='sn_p-icn'>
                                        <img src='assets/images/link.png'></img>
                                    </div>
                                    <div className='sn_tag'>live Preview</div>
                                </div>
                            </div>
                            <div className='sn_p-row'>
                                <div className='sn_p-cl'>
                                    <div className='sn_p-icn'>
                                        <img src='assets/images/layout-grid.png'></img>
                                    </div>
                                    <div className='sn_tag'>Branding, UI.UX</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='port_sn-con'>
                    <div className='port_sn-img'>
                        <img src="assets/images/sn1.png" alt="" />
                    </div>
                    <div className='port_sn-text'>
                        <h4>I’m an expert in creating unique and immersive micro
                            environments that give your space a special touch.</h4>
                        <p>Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet
                            gravida adipiscing augue sit justo elit. Mauris bibendum
                            mattis et diam tellus. Auctor mauris felis lobortis tempus,
                            magna nisl, proin amet. Et diam amet aliquet nisi egestas
                            aenean nunc. Vitae, arcu euismod turpis in tempus tincidunt
                            mattis tellus nisl. Commodo lorem lacinia pulvinar lectus
                            porttitor nisl. Amet quis consectetur malesuada lacus.</p>
                    </div>
                    <div className='port_sn-img'>
                        <img src="assets/images/sn2.png" alt="" />
                    </div>
                    <div className='port_sn-extra'>
                        <p>Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida
                            adipiscing augue sit justo elit. Mauris bibendum mattis et
                            diam tellus. Auctor mauris felis lobortis tempus, magna nisl,
                            proin amet. Et diam amet aliquet nisi egestas aenean nunc.
                            Vitae, arcu euismod turpis in tempus tincidunt mattis tellus nisl.</p>
                    </div>
                    <div className='port_sn-img'>
                        <img src="assets/images/sn3.png" alt="" />
                    </div>
                </div>
                <div className='port_sn-Cta'>
                    <Cta></Cta>
                </div>
            </div>
            <Footer></Footer>
        </>

    )
}

export default PortfolioSingle