import React, { useState } from "react";
import "./Header.css";
import Branding from "../../assets/Branding.svg";
import Menu from "../../assets/Union.svg";
// import Hamburger from "hamburger-react";
const Header = () => {
  return (

    <div className="header__Wrap">
      <div className="navbar">
        <div className="logo_Con">
          <div className="logo">
            <img src={Branding} alt="Logo" />
          </div>
        </div>
        <div className="top_Menu-con">
          <div className="upper-menu-item">
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
        </div>
        <div className="ham_Con">
          <div className="hamburger">
            <img src={Menu} alt="Menu" className="menu-image" />
          </div>
        </div>
        <div className="btm_Menu-Con">
          <div className="blg_menu-item">
            <a href="#"><span><img src="assets/images/pen.png"></img></span>Blog</a>
          </div>
          <div className="gt_menu-item">
            <a href="#"><span><img src="assets/images/calendar.png"></img></span>Get In Touch</a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Header;
