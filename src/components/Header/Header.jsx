import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import MenuModal from "../Menu/MenuModal";
import MobileModal from "../Menu/MobileModal";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isMobModalOpen, setIsMobModalOpen] = useState(false);

  const openMobModal = () => {
    setIsMobModalOpen(true);
    // setModalContent(content);
    // document.body.style.overflow = 'hidden';
  };

  const closeMobModal = () => {
    setIsMobModalOpen(false);
    // if (!isModalOpen) {
    //     document.body.style.overflow = 'auto';
    // }
    // else if (isMobileMenuOpen && isModalOpen) {
    //     document.body.style.overflow = 'hidden';
    // }
    // else {
    //     document.body.style.overflow = 'auto';
    // }
    // setModalContent(null);
  };


  const openModal = () => {
    setIsModalOpen(true);
    // setModalContent(content);
    // document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // if (!isModalOpen) {
    //     document.body.style.overflow = 'auto';
    // }
    // else if (isMobileMenuOpen && isModalOpen) {
    //     document.body.style.overflow = 'hidden';
    // }
    // else {
    //     document.body.style.overflow = 'auto';
    // }
    // setModalContent(null);
  };
  return (
    <>
      <div className="header__Wrap">
        <div className="navbar">
          <div className="logo_Con">
            <Link to="/" className="logo">
              <img src="assets/images/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="top_Menu-con">
            <div className="upper-menu-item">
              <Link to="/portfolio">
                Projects
              </Link>
              <Link to="/about">
                About
              </Link>
              <Link to="/team">
                Team
              </Link>
              <a href="#contact">
                Contact
              </a>
            </div>
          </div>
          <div className="ham_Con">
            <Link className="hamburger" onClick={openModal}>
              <img src="assets/images/ham.png" alt="Menu" className="menu-image" />
            </Link>
          </div>
          <div className="btm_Menu-Con">
            <div className="blg_menu-item">
              <Link to="/blog"><span><img src="assets/images/pen.png"></img></span>Blog</Link>
            </div>
            <div className="gt_menu-item">
              <Link to="/contact"><span><img src="assets/images/calendar.png"></img></span>Get In Touch</Link>
            </div>
          </div>
        </div>
        <div className="mob_Navbar">
          <div className="mob_Logo-con">
            <div className="mob-logo">
              <img src="assets/images/mob_logo.png"></img>
            </div>
          </div>
          <div className="mob_ham-con">
            <div className="mob_ham" onClick={openMobModal}>
              <img src="assets/images/ham.png" alt="Menu" className="menu-image" />
            </div>
          </div>
        </div>
      </div>
      <MenuModal isOpen={isModalOpen} onClose={closeModal}></MenuModal>
      <MobileModal isOpen={isMobModalOpen} onClose={closeMobModal}></MobileModal>
    </>



  );
};

export default Header;
