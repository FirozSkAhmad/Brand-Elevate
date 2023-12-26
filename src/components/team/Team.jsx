import React, { useEffect } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Cta from "../home/Cta";
import Lenis from '@studio-freight/lenis';

import "./style.css";

const Team = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
    const cursor = document.querySelector('[data-cursor="1"]');
    cursor.classList.remove('cursor-hover--a');
  }, [])

  // useEffect(() => {
  //   const initializeCursor = () => {
  //     const links = document.querySelectorAll('a');
  //     const cursor = document.querySelector('[data-cursor="1"]');

  //     links.forEach(link => {
  //       link.addEventListener('mouseenter', () => {
  //         cursor.classList.add('cursor-hover--a');
  //       });

  //       link.addEventListener('mouseleave', () => {
  //         cursor.classList.remove('cursor-hover--a');
  //       });
  //     });
  //   };

  //   initializeCursor();

  //   // Clean up event listeners when the component unmounts
  //   return () => {
  //     const links = document.querySelectorAll('a');

  //     links.forEach(link => {
  //       link.removeEventListener('mouseenter', () => { });
  //       link.removeEventListener('mouseleave', () => { });
  //     });
  //   };
  // }, []);

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
      <div className='team_page-wrap'>
        <div className='team_Mn-wrap'>
          <div className='port_Mn-sec'>
            <div className='port_mn-ttl'>
              <h2>Our Team</h2>
            </div>
            <div className='port_mn-para'>
              <p>We are passionate about creating visually stunning and functional solutions that communicate effectively.</p>
            </div>
          </div>
        </div>
        <div className='team__Wrap'>
          <div className='our_tm-clm'>
            <div className='our_tm-crd'>
              <div className='our_tm-img'>
                <img src="assets/images/Image1.png" alt="Ashrith Rao" />
              </div>
              <div className='our_tm-txt'>
                <h4>Ashrith Rao</h4>
                <h5>Founder, CEO</h5>
              </div>
            </div>
            <div className='our_tm-crd'>
              <div className='our_tm-img'>
                <img src="assets/images/Image2.png" alt="Sai Datta Reddy" />
              </div>
              <div className='our_tm-txt'>
                <h4>Sai Datta Reddy</h4>
                <h5>Founder, CMO</h5>
              </div>
            </div>
            <div className='our_tm-crd'>
              <div className='our_tm-img'>
                <img src="assets/images/Image3.png" alt="M Sri Harsha Vamsi" />
              </div>
              <div className='our_tm-txt'>
                <h4>M Sri Harsha Vamsi</h4>
                <h5>Director of photography and design</h5>
              </div>
            </div>
          </div>
        </div>
        <div className='team_Cta-wrap'>
          <Cta></Cta>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Team