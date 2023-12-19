import React, { useEffect } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./style.css";

const Terms = () => {
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
      <div className='terms__Wrap'>
        <div className='terms__Sec'>
          <div className='terms__Ttl'>
            <h2>Terms & Conditions</h2>
            <div className='terms_dt-s'>
              <span className='version'>V.1.3</span>
              <span className='term_dt'>May 24, 2024</span>
            </div>
          </div>
          <div className='terms_top-para'>
            <p>Nayzak, everyone in my team works towards the samegoal.
              This enabled our teams to ship new ideas and feel more capable.
              Podcasting operational — change management inside of workflows.
              Completely synergize.
              <br></br><br></br>
              But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will
              give you a complete account of the system, and expound the
              actual teachings of the great explorer of the truth,
              the master-builder of human happiness. No one rejects,
              dislikes, or avoids pleasure itself
              <br></br><br></br>
              On the other hand, we denounce with righteous indignation
              and dislike men who are so beguiled and demoralized by the
              charms of pleasure of the moment, so blinded by desire, that
              they cannot foresee the pain and trouble that are bound to ensue;
              and equal blame belongs to those who fail in their duty through weakness
              of will, which is the same as saying through.
            </p>
          </div>
          <div className='comp__Term'>
            <div className='definition'>
              <h3>1. Definitions</h3>
              <p>Nayzak, everyone in my team works towards the samegoal.
                This enabled our teams to ship new ideas and feel more capable.
                Podcasting operational — change management inside of workflows.
                Completely synergize.
                <br></br><br></br>
                But I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a complete
                account of the system, and expound the actual teachings of the great
                explorer of the truth, the master-builder of human happiness. No one
                rejects, dislikes, or avoids pleasure itself
                <br></br><br></br>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms
                of pleasure of the moment, so blinded by desire, that they
                cannot foresee the pain and trouble that are bound to ensue;
                and equal blame belongs to those who fail in their duty through
                weakness of will, which is the same as saying through.
              </p>
            </div>
            <div className='usage'>
              <h3>2. Usage & Rights</h3>
              <p>1.1 “Nayzak Design” everyone in my team works towards the samegoal.
                This enabled our teams to ship new ideas and feel more capable.
                Podcasting operational — change management inside of workflows.
                Completely synergize.
                <br></br><br></br>
                1.2 “Denouncing pleasure” and praising pain was born and I will
                give you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure itself
                <br></br><br></br>
                1.3 “Righteous indignation” and dislike men who are so beguiled
                and demoralized by the charms of pleasure of the moment,
                so blinded by desire, that they cannot foresee the pain and
                trouble that are bound to ensue; and equal blame belongs to
                those who fail in their duty through weakness of will,
                which is the same as saying through.
              </p>
            </div>
            <div className='ownership'>
              <h3>2. Ownership</h3>
              <p>
                a) “Nayzak Design” everyone in my team works towards the samegoal.
                This enabled our teams to ship new ideas and feel more capable.
                Podcasting operational — change management inside of workflows.
                Completely synergize.
                <br></br><br></br>
                b) “Denouncing pleasure” and praising pain was born and I will
                give you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure itself
                <br></br><br></br>
                c) “Righteous indignation” and dislike men who are so beguiled
                and demoralized by the charms of pleasure of the moment,
                so blinded by desire, that they cannot foresee the pain
                and trouble that are bound to ensue; and equal blame belongs
                to those who fail in their duty through weakness of will,
                which is the same as saying through.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Terms