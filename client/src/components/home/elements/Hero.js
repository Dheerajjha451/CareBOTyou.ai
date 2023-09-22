import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/hero-img.png";
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
              <button className="button">
                <Link className="btn-link"> Button 1</Link>
              </button>
              <button className="button btn-secondary">
                <Link className="btn-link"> Button 2</Link>
              </button>
            </div>
          </div>
          <div className="image-box">
            <img src={img1}  className="image"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
