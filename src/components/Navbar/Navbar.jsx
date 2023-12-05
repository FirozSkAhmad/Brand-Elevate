import React from "react";
import "./Navbar.css"; // Assuming you create a separate CSS file for styling
import Branding from "../../assets/Branding.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        {/* Your logo goes here */}
        <img src={Branding} alt="Logo" />
      </div>
      <div className="menu-container">
        <div className="upper-menu">
          <div className="upper-menu-item">Menu 1</div>
          <div className="upper-menu-item">Menu 2</div>
          <div className="upper-menu-item">Menu 3</div>
        </div>
        <div className="lower-menu">
          <div className="lower-menu-item">Submenu 1</div>
          <div className="lower-menu-item">Submenu 2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
