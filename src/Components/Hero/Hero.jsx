import React from 'react';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
import './Hero.css';

function Hero() {
  return (
    <div className="hero d-flex align-items-center" >
      <div className="hero-left">
        <h6 className="text-uppercase small-title">New Arrivals Only</h6>
        
        <div className="hero-heading">
          <span>New</span>
          <img src={hand_icon} alt="Hand icon" className="hand-icon ms-2" />
        </div>
        
        <h2 className="hero-subtitle">Collections</h2>
        <p className="hero-subtext">For Everyone</p>

        <div className="hero-latest-btn d-flex align-items-center">
          <span>Latest Collection</span>
          <img src={arrow_icon} alt="Arrow icon" className="ms-2" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="Hero image" className="hero-image" />
      </div>
    </div>
  );
}

export default Hero;
