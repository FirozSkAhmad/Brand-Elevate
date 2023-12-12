import React, { useEffect } from 'react';
import gsap from 'gsap';
import "./Hero.css";
import TextReveal from '../TextReveal';

const text="We are passionate about creating visually stunning and functional solutions that communicate effectively. I have a keen eye for detail and a deep understanding of design principles, which I use to deliver projects that exceed my clients' expectations."
const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".line span", 1.8, {
      y: 0,
      ease: "power4.out",
      delay: 1,
      skewY: 0,
      stagger: {
        amount: 0.3
      }
    })
  }, []);
  return (
    <div className="Hero-container">
      <div className="title-hero">
        <div className="line">
          <span>Welcome To</span>
        </div>
        <div className="line">
          <span>Brand Elevate</span>
        </div>
      </div>
      <div className="image-container-hero">
        {/* <img src="assets/images/hero-img.png" alt="" /> */}
        <video loop playsInline autoPlay muted className='d_vd'>
          <source src="assets/videos/web_site.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="detail-sponsors">
        <div className="detail-text">
          <TextReveal text={text}></TextReveal>
          <p>
            
          </p>
        </div>
        <div className="sponsor-container">
          <div className='spn_row'>
            <div className='span_clm'>
              <div className="sponsor1">
                <img src="assets/images/fuelgenie.png" alt="fuelgenie" />
              </div>
            </div>
            <div className='span_clm'>
              <div className="sponsor2">
                <img src="assets/images/Kinua.png" alt="Kinua" />
              </div>
            </div>
          </div>
          <div className='spn_row'>
            <div className='span_clm'>
              <div className="sponsor3">
                <img src="assets/images/massui.png" alt="massui" />
              </div>
            </div>
            <div className='span_clm'>
              <div className="sponsor4">
                <img src="assets/images/varunraj.png" alt="varunraj" />
              </div>
            </div>
          </div>
          <div className='spn_row'>
            <div className='span_clm'>
              <div className="sponsor5">
                <img src="assets/images/altall.png" alt="altall" />
              </div>
            </div>
            <div className='span_clm'>
              <div className="sponsor6">
                <img src="assets/images/jy.png" alt="jy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
