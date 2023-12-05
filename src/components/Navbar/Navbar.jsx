import React from "react";
import "./Navbar.css"; // Assuming you create a separate CSS file for styling
import Branding from "../../assets/Branding.svg";
import Menu from "../../assets/Union.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        {/* Your logo goes here */}
        <img src={Branding} alt="Logo" />
      </div>
      <div className="menu-container">
        <div className="upper-menu">
          <div className="upper-menu-item">
            <a href="">
              <span>Projects</span>
            </a>
            <a href="">
              <span>About</span>
            </a>
            <a href="">
              <span>Team</span>
            </a>
            <a href="">
              <span>Contact</span>
            </a>
          </div>
          <div className="upper-menu-item">
            <img src={Menu} alt="Menu" className="menu-image" />
          </div>
        </div>
        <div className="lower-menu">
          <div className="lower-menu-item">Blog</div>
          <div className="lower-menu-item">Get In Touch</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
