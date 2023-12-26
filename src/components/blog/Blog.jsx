import React, { useEffect } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Cta from "../home/Cta";
import Lenis from '@studio-freight/lenis';
import "./style.css";
import CardsCon from './CardsCon';
const Blog = () => {
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
    window.scrollTo(0, 0);
    const cursor = document.querySelector('[data-cursor="1"]');
    cursor.classList.remove('cursor-hover--a');
  }, [])

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
      <div className='blog__Page-wrap'>
        <div className='blog_Mn-wrap'>
          <div className='port_Mn-sec'>
            <div className='port_mn-ttl'>
              <h2>Blog</h2>
            </div>
            <div className='port_mn-para'>
              <p>Latest articles and resources curated by our community</p>
            </div>
          </div>
        </div>
        <div className='blog_card-wrap'>

          <CardsCon></CardsCon>
          {/* <div className='blog-row'>
            <div className='blog_col'>
              <div className='blog_con'>
                <div className='blog_img'>
                  <img src="assets/images/blog1.png" alt="blog1" />
                </div>
                <div className='blog_content'>
                  <span className='bl-dt'>October 12, 2024</span>
                  <span className='bl-ttl'>How to create SVG-ready icon symbols in Sketch</span>
                </div>
              </div>
            </div>
            <div className='blog_col'>
              <div className='blog_con'>
                <div className='blog_img'>
                  <img src="assets/images/blog2.png" alt="blog1" />
                </div>
                <div className='blog_content'>
                  <span className='bl-dt'>October 12, 2024</span>
                  <span className='bl-ttl'>Cinema 4D Visual Explorations by David Milan</span>
                </div>
              </div>
            </div>
          </div>
          <div className='blog-row'>
            <div className='blog_col'>
              <div className='blog_con'>
                <div className='blog_img'>
                  <img src="assets/images/blog3.png" alt="blog1" />
                </div>
                <div className='blog_content'>
                  <span className='bl-dt'>October 12, 2024</span>
                  <span className='bl-ttl'>Mental models for designers</span>
                </div>
              </div>
            </div>
            <div className='blog_col'>
              <div className='blog_con'>
                <div className='blog_img'>
                  <img src="assets/images/blog4.png" alt="blog1" />
                </div>
                <div className='blog_content'>
                  <span className='bl-dt'>October 12, 2024</span>
                  <span className='bl-ttl'>How We Keep Brand Consistency in Our Visual Language — A Design System for Illustrations</span>
                </div>
              </div>
            </div>
          </div>
          <div className='blog-row'>
            <div className='blog_col'>
              <div className='blog_con'>
                <div className='blog_img'>
                  <img src="assets/images/blog5.png" alt="blog1" />
                </div>
                <div className='blog_content'>
                  <span className='bl-dt'>October 12, 2024</span>
                  <span className='bl-ttl'>Blueprint fidelity: between paper prototype and finished product</span>
                </div>
              </div>
            </div>
            <div className='blog_col'>
              <div className='blog_con'>
                <div className='blog_img'>
                  <img src="assets/images/blog6.png" alt="blog1" />
                </div>
                <div className='blog_content'>
                  <span className='bl-dt'>October 12, 2024</span>
                  <span className='bl-ttl'>Introducing: A brand new Dribbble</span>
                </div>
              </div>
            </div>
          </div>
          <div className='blog-row'>
            <div className='blog_col'>
              <div className='blog_con'>
                <div className='blog_img'>
                  <img src="assets/images/blog7.png" alt="blog1" />
                </div>
                <div className='blog_content'>
                  <span className='bl-dt'>October 12, 2024</span>
                  <span className='bl-ttl'>Design critiques at Figma</span>
                </div>
              </div>
            </div>
            <div className='blog_col'>
              <div className='blog_con'>
                <div className='blog_img'>
                  <img src="assets/images/blog8.png" alt="blog1" />
                </div>
                <div className='blog_content'>
                  <span className='bl-dt'>October 12, 2024</span>
                  <span className='bl-ttl'>20 psychological principles applied to product design</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className='blog_more-btn'>
          <button>Next page</button>
        </div>
        <div className='blog__Cta-wrap'>
          <Cta></Cta>
        </div>
      </div>
      <Footer></Footer>
    </>

  )
}

export default Blog