import React from "react";
import "./Hero.css";
import Image from "../../assets/Temp-Hero_img.svg";
import Krate from "../../assets/sponsers/KRATE.svg";
import Kalo from "../../assets/sponsers/kalo.svg";
import Massui from "../../assets/sponsers/Massui.svg";
import Kinua from "../../assets/sponsers/Kinua.svg";
import Altall from "../../assets/sponsers/altall.svg";
import Tano from "../../assets/sponsers/tano.svg";

const Hero = () => {
  return (
    <div className="Hero-container">
      <h1 className="title-hero">Welcome To Brand Elevate</h1>
      <div className="image-container-hero">
        <img src={Image} alt="" />
      </div>
      <div className="detail-sponsors">
        <div className="detail-text">
          <h4>
            We are passionate about creating visually stunning and functional
            solutions that communicate effectively. I have a keen eye for detail
            and a deep understanding of design principles, which I use to
            deliver projects that exceed my clients' expectations.
          </h4>
        </div>
        <div class="sponsor-container">
          <div class="sponsor">
            <img src={Krate} alt="Sponsor 1" />
          </div>
          <div class="sponsor">
            <img src={Kalo} alt="Sponsor 2" />
          </div>
          <div class="sponsor">
            <img src={Massui} alt="Sponsor 3" />
          </div>
          <div class="sponsor">
            <img src={Kinua} alt="Sponsor 4" />
          </div>
          <div class="sponsor">
            <img src={Altall} alt="Sponsor 5" />
          </div>
          <div class="sponsor">
            <img src={Tano} alt="Sponsor 6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
