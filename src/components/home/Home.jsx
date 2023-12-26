import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Hero from './Hero';
import Services from './Services';
import RecentWork from './RecentWork';
import OurTeam from './OurTeam';
import Cta from './Cta';
import Footer from '../Footer/Footer';

// import CursorEffect from '../CursorEffect';
// import Cursor from 'custom-cursor';
// new Cursor({
//   count: 2,
//   targets: ['a'],
// })

const Home = () => {
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

  return (
    <>
      {/* <CursorEffect></CursorEffect> */}
      <Header></Header>
      <Hero></Hero>
      <Services></Services>
      <RecentWork></RecentWork>
      <OurTeam></OurTeam>
      <Cta></Cta>
      <Footer></Footer>
      {/* <div data-cursor="1"></div> */}
    </>
  )
}

export default Home;