import React, { useEffect } from 'react';
import "./portfolio.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Cta from "../home/Cta";

import Lenis from '@studio-freight/lenis';

import { Link } from "react-router-dom";

// import Cursor from 'custom-cursor';

// new Cursor({
//   count: 2,
//   targets: ['a'],

// })

const Portfolio = () => {

  useEffect(() => {

    window.scrollTo(0, 0);

    // console.log("cursor removed")
    const cursor = document.querySelector('[data-cursor="1"]');
    cursor.classList.remove('cursor-hover--a');
    // cursor.classList.add('cursor-hover--a');
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
      <div className='portfolio__Wrap'>
        <div className='port_Mn-wrap'>
          <div className='port_Mn-sec'>
            <div className='port_mn-ttl'>
              <h2>Case Studies</h2>
            </div>
            <div className='port_mn-para'>
              <p>Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida adipiscing augue sit.</p>
            </div>
          </div>
        </div>
        <div className='port_Work-wrap'>
          <div className='port-work-s'>
            <div className='port-wrk-img'>
              <img src="assets/images/Portfolio_Card-1.png" alt="" />
            </div>
            <div className='port-work-cta'>
              <Link to="/PortfolioSingle" preventScrollReset={false}>
                <span className='port-work-n'>Varun Raj</span>
                <span className='port_see'>
                  View case study
                  <span className='port-arr'><img src="assets/images/p-arrow.png" alt="" /></span>
                </span>
              </Link>
            </div>
          </div>
          <div className='port-work-s'>
            <div className='port-wrk-img'>
              <img src="assets/images/Portfolio_Card-3.png" alt="" />
            </div>
            <div className='port-work-cta'>
              <Link to="/PortfolioSingle" preventScrollReset={true}>
                <span className='port-work-n'>Swayamvar</span>
                <span className='port_see'>
                  View case study
                  <span className='port-arr'><img src="assets/images/p-arrow.png" alt="" /></span>
                </span>
              </Link>
            </div>
          </div>
          <div className='port-work-s'>
            <div className='port-wrk-img'>
              <img src="assets/images/Portfolio_Card-2.png" alt="" />
            </div>
            <div className='port-work-cta'>
              <Link to="/PortfolioSingle">
                <span className='port-work-n'>JY VS</span>
                <span className='port_see'>
                  View case study
                  <span className='port-arr'><img src="assets/images/p-arrow.png" alt="" /></span>
                </span>
              </Link>
            </div>
          </div>
          <div className='port-work-s'>
            <div className='port-wrk-img'>
              <img src="assets/images/Portfolio_Card.png" alt="" />
            </div>
            <div className='port-work-cta'>
              <Link to="/PortfolioSingle">
                <span className='port-work-n'>Fuel Genie</span>
                <span className='port_see'>
                  View case study
                  <span className='port-arr'><img src="assets/images/p-arrow.png" alt="" /></span>
                </span>
              </Link>
            </div>
          </div>
          <div className='port_all-btn'>
            <div className='rec_Btn'>
              <a><span>View all work</span><span className='arrow-up-right'><img src="assets/images/arrow-up-right.png" alt="arrow-up-right" /></span></a>
            </div>
          </div>
        </div>
        <div className='port_Cta'>
          <Cta></Cta>
        </div>
      </div>
      <Footer></Footer>
    </>

  )
}

export default Portfolio