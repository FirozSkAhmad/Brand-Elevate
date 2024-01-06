import React, { useEffect } from "react";
import "./portfolioSingle.css";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import Cta from "../components/home/Cta";

import Lenis from "@studio-freight/lenis";
import { Link, useLocation } from "react-router-dom";

const PortfolioSingle = () => {
  const location = useLocation();
  const data = location.state.data;

  useEffect(() => {
    // console.log("cursor removed")
    const cursor = document.querySelector('[data-cursor="1"]');
    cursor.classList.remove("cursor-hover--a");
    // cursor.classList.add('cursor-hover--a');
  }, []);

  // useEffect(() => {

  //     console.log("changes")
  //     const initializeCursor = () => {
  //         const links = document.querySelectorAll('a');
  //         const cursor = document.querySelector('[data-cursor="1"]');

  //         links.forEach(link => {
  //             link.addEventListener('mouseenter', () => {
  //                 cursor.classList.add('cursor-hover--a');
  //             });

  //             link.addEventListener('mouseleave', () => {
  //                 cursor.classList.remove('cursor-hover--a');
  //             });
  //         });
  //     };

  //     initializeCursor();

  //     // Clean up event listeners when the component unmounts
  //     return () => {
  //         const links = document.querySelectorAll('a');

  //         links.forEach(link => {
  //             link.removeEventListener('mouseenter', () => { });
  //             link.removeEventListener('mouseleave', () => { });
  //         });
  //     };
  // }, []);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      // console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Header></Header>
      <div className="port_Single-wrap">
        <div className="port_Mn-back">
          <Link to="/portfolio">
            <span className="back_logo">
              <img src="assets/images/back.png"></img>
            </span>
            All case studies
          </Link>
        </div>
        <div className="port_sn-mn">
          <div className="sn_mn-ttl">
            <div className="sn_hd">
              <h2>Galaxia Node</h2>
            </div>
            <div className="sn_para">
              <p>
                Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida
                adipiscing augue sit.{" "}
              </p>
            </div>
            <div className="sn_prop">
              <div className="sn_p-row">
                <div className="sn_p-cl">
                  <div className="sn_p-icn">
                    <img src="assets/images/user.png"></img>
                  </div>
                  <div className="sn_tag">Brand Elevate</div>
                </div>
                <div className="sn_p-cl">
                  <div className="sn_p-icn">
                    <img src="assets/images/link.png"></img>
                  </div>
                  <div className="sn_tag">live Preview</div>
                </div>
              </div>
              <div className="sn_p-row">
                <div className="sn_p-cl">
                  <div className="sn_p-icn">
                    <img src="assets/images/layout-grid.png"></img>
                  </div>
                  <div className="sn_tag">Branding, UI.UX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="port_sn-con">
          <div className="port_sn-img">
            <img src={data?.img} alt="" />
          </div>
          <div className="port_sn-text">
            <h4>{data?.heading}.</h4>
            <p>{data?.bodyText}</p>
          </div>
        </div>
        <div className="port_sn-Cta">
          <Cta></Cta>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default PortfolioSingle;
