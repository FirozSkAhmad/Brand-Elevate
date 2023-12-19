import React, { useEffect } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./style.css";
import TestimonialSlider from './TestimonialSlider';
import OurTeam from "../home/OurTeam";
import Cta from "../home/Cta";

import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';

import CountUp from 'react-countup';

const AboutUs = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".about_line span", 1.8, {
      y: 0,
      ease: "power4.out",
      delay: 1,
      skewY: 0,
      stagger: {
        amount: 0.3
      }
    })
  }, []);

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

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
      // console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])
  return (
    <>
      <Header></Header>
      <div className='about__Wrap'>
        <div className='about__Hero'>
          <div className='abt_hr-ttl'>
            <div className='about_line'>
              <span>Humble beginnings.</span>
            </div>
            <div className='about_line'>
              <span>An inspiring story.</span>
            </div>
          </div>
          <div className='abt_hr-img'>
            <img src="assets/images/abt-img.png" alt="about" />
          </div>
        </div>
        <div className='achievement__S'>
          <div className='acc_Img-con'>
            <div className='acc_Img'>
              <img src='assets/images/achieve.png' alt='achieve'></img>
            </div>
          </div>
          <div className='acc_content-con'>
            <div className='acc_Ttl'>
              <h3>Years of achievements </h3>
              <p>Lorem ipsum dolor sit amet consectetur. Nisl in pre nisl mauris
                quis euismod congue. Augue elit id morbi semper sed in.</p>
            </div>
            <div className='acc_cnt-con'>
              <div className='acc_cnt-row'>
                <div className='acc_cnt-col'>
                  <div className='acc_content'>
                    <div className='acc_counter'>
                      <span>
                        <CountUp end={15} enableScrollSpy scrollSpyOnce />
                        k+
                      </span>
                    </div>
                    <div className='acc_head'>
                      <h4>Unique sections</h4>
                    </div>
                    <div className='acc_para'>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    </div>
                  </div>
                </div>
                <div className='acc_cnt-col'>
                  <div className='acc_content'>
                    <div className='acc_counter'>
                      <span>
                        <CountUp end={250} enableScrollSpy scrollSpyOnce />
                        +
                      </span>
                    </div>
                    <div className='acc_head'>
                      <h4>Components</h4>
                    </div>
                    <div className='acc_para'>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='acc_cnt-row'>
                <div className='acc_cnt-col'>
                  <div className='acc_content'>
                    <div className='acc_counter'>
                      <span>
                        <CountUp end={86} enableScrollSpy scrollSpyOnce />
                        +
                      </span>
                    </div>
                    <div className='acc_head'>
                      <h4>Clonable sections</h4>
                    </div>
                    <div className='acc_para'>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    </div>
                  </div>
                </div>
                <div className='acc_cnt-col'>
                  <div className='acc_content'>
                    <div className='acc_counter'>
                      <span>
                        <CountUp end={120} enableScrollSpy scrollSpyOnce />
                        +
                      </span>
                    </div>
                    <div className='acc_head'>
                      <h4>Clonable sections</h4>
                    </div>
                    <div className='acc_para'>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='about__Slider-testimonial'>
          <TestimonialSlider></TestimonialSlider>
        </div>
        <div className='about_Team-wrap'>
          <OurTeam></OurTeam>
        </div>
        <div className='about_Cta-wrap'>
          <Cta></Cta>
        </div>
      </div>
      <Footer></Footer>
    </>

  )
}

export default AboutUs