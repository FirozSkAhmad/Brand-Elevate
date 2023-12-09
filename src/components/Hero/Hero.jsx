import React, { useEffect } from 'react';
import gsap from 'gsap';
import "./Hero.css";


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
        <div class="line">
          <span>Welcome To</span>
        </div>
        <div class="line">
          <span>Brand Elevate</span>
        </div>
      </div>
      <div className="image-container-hero">
        <img src="assets/images/hero-img.png" alt="" />
      </div>
      <div className="detail-sponsors">
        <div className="detail-text">
          <p>
            We are passionate about creating visually stunning and functional
            solutions that communicate effectively. I have a keen eye for detail
            and a deep understanding of design principles, which I use to
            deliver projects that exceed my clients' expectations.
          </p>
        </div>
        <div class="sponsor-container">
          <div className='spn_row'>
            <div className='span_clm'>
              <div class="sponsor1">
                <img src="assets/images/fuelgenie.png" alt="fuelgenie" />
              </div>
            </div>
            <div className='span_clm'>
              <div class="sponsor2">
                <img src="assets/images/Kinua.png" alt="Kinua" />
              </div>
            </div>
          </div>
          <div className='spn_row'>
            <div className='span_clm'>
              <div class="sponsor3">
                <img src="assets/images/massui.png" alt="massui" />
              </div>
            </div>
            <div className='span_clm'>
              <div class="sponsor4">
                <img src="assets/images/varunraj.png" alt="varunraj" />
              </div>
            </div>
          </div>
          <div className='spn_row'>
            <div className='span_clm'>
              <div class="sponsor5">
                <img src="assets/images/altall.png" alt="altall" />
              </div>
            </div>
            <div className='span_clm'>
              <div class="sponsor6">
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
