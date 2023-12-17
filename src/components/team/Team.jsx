import React, { useEffect } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./style.css";

const Team = () => {
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

      </div>
      <Footer></Footer>
    </>
  )
}

export default Team