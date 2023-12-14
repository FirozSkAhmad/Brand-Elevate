import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import MenuModal from "../Menu/MenuModal";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
              <Link to="/about" href="">
                About
              </Link>
              <Link to="/team" href="">
                Team
              </Link>
              <Link to="/contact" href="">
                Contact
              </Link>
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
              <a href="#"><span><img src="assets/images/calendar.png"></img></span>Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
      <MenuModal isOpen={isModalOpen} onClose={closeModal}></MenuModal>
    </>



  );
};

export default Header;
