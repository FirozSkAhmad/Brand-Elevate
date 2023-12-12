import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer__Wrap'>
      <div className='footer_Sec'>
        <div className='footer_Logo-s'>
          <div className='ft_logo'>
            <img src='assets/images/ft-logo.png' alt='logo'></img>
          </div>
        </div>
        <div className='ft_Top-s'>
          <div className='ft_menu-item'>
            <a href="">
              Projects
            </a>
            <a href="">
              About
            </a>
            <a href="">
              Team
            </a>
            <a href="">
              Contact
            </a>
          </div>
          <div className='ft_email'>
            <a href="mailto:Info@brandelevate.co.in">Info@brandelevate.co.in</a>
          </div>
        </div>
        <div className='ft_Btm-s'>
          <div className='ft_Blog'>
            <a href="#"><span><img src="assets/images/pen.png"></img></span>Blog</a>
          </div>
          <div className='ft_Social-item'>
            <a href="">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
          <div className='ft_Copyright'>
            <span>© 2023 Brand Elevate</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer