import React, { useEffect } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import ContactForm from './ContactForm';

import "./style.css";

const ContactUs = () => {
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
      <div className='contact_Page-wrap'>
        <div className='contact_Mn-wrap'>
          <div className='port_Mn-sec'>
            <div className='port_mn-ttl'>
              <h2>Get in touch</h2>
            </div>
            <div className='port_mn-para'>
              <p>We are passionate about creating visually stunning and functional solutions that communicate effectively.</p>
            </div>
          </div>
        </div>
        <div className='ourOffice_Wrap'>
          <div className='ourOffice_S'>
            <div className='ourOffice_col1'>
              <div className='ourOffice_img'>
                <img src='assets/images/office.png'></img>
              </div>
            </div>
            <div className='ourOffice_col2'>
              <div className='office_con'>
                <h3>Our office</h3>
                <div className='office_address'>
                  <h4>India</h4>
                  <span>Esteem diamond, Moti Ngar,<br></br>
                    Dwarakapuri, Punjagutta,<br></br>
                    Hyderabad, Telangana, 500082<br></br>
                    +91 70757 47159</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='contact_Form-wrap'>
          <ContactForm></ContactForm>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default ContactUs