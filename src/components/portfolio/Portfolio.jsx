import React, { useEffect } from 'react';
import "./portfolio.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// import Cursor from 'custom-cursor';

// new Cursor({
//   count: 2,
//   targets: ['a'],

// })

const Portfolio = () => {
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
      <div className='portfolio__Wrap'>
        <div className='port_Mn-sec'>
          <div className='port_mn-ttl'>
            <h2>Case Studies</h2>
          </div>
          <div className='port_mn-para'>
            <p>Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida adipiscing augue sit.</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>

  )
}

export default Portfolio