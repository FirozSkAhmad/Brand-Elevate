import React, { useEffect } from "react";
import "./menuModal.css";

import { Link } from "react-router-dom";




const MenuModal = ({ isOpen, onClose }) => {
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
            <div className={`modal ${isOpen ? "open" : ""}`}>
                <div className="modal-content">

                    <div className="menu_Md-wrap">
                        <div className="mn_Cnt-bx">
                            <div className="mn_Main-cnt">
                                <div className="mn_Col1">
                                    <div className="mn_Ttl-icn">

                                        {/* <Link href="/" onClick={onClose}><Image src="/assets/images/menu-logo.svg" alt='project-d' width={400} height={56}></Image></Link> */}
                                        <Link to="/" className="menu_Modal-logo" onClick={onClose}>
                                            <img src="assets/images/menu-logo.png" alt="logo"></img>
                                        </Link>
                                        <div className="mn_Icn-bx">
                                            <a href="#" target="_blank" rel="noopener">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                            <a href="#" target="_blank" rel="noopener">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                            <a href="#" target="_blank" rel="noopener">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                            <a href="#" target="_blank" rel="noopener">
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mn_Cnt-us">
                                        <Link to="/contact">Contact BE <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                                <div className="mn_Col2">
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about">
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/portfolio">
                                                Work
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blog">
                                                Blog
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <Link className="mn_Cl-icn" onClick={onClose}>
                                <i className="fa-solid fa-xmark"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`overlay ${isOpen ? "active" : ""}`} onClick={onClose}></div>
        </>
    );
};

export default MenuModal;
