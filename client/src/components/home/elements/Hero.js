import React from "react";

import img1 from "../../images/hero-img.png";
import Button from "../../shared/Uicomponents/Button";
import "./Hero.css";
function Hero() {
  return (
    <div className="section-hero">
      <div className="sectionhero">
        <div className="hero">
          <div className="text-box">
            <h1 className="primary-heading">Unlocking Student Well Being</h1>
            <p className="hero-text">Navigating the Path to Mental Health</p>
            <div className="button-box">
              <Button className="button" to="#">
                Button 1
              </Button>
              <Button className="button btn-secondary" to="#">
                Button 1
              </Button>
            </div>
          </div>
          <div className="image-box">
            <img src={img1} className="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
