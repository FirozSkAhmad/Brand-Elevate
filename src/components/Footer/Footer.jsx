import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

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
            <Link to="/portfolio">
              Projects
            </Link>
            <Link to="/about">
              About
            </Link>
            <Link to="/team">
              Team
            </Link>
            <Link to="/contact">
              Contact
            </Link>
          </div>
          <div className='ft_email'>
            <a href="mailto:Info@brandelevate.co.in">Info@brandelevate.co.in</a>
          </div>
        </div>
        <div className='ft_Btm-s'>
          <div className='ft_Blog'>
            <Link to="/blog"><span><img src="assets/images/pen.png"></img></span>Blog</Link>
          </div>
          <div className='ft_Social-item'>
            <a href="" target="_blank" rel="noopener">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="" target="_blank" rel="noopener">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="" target="_blank" rel="noopener">
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