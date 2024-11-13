import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import insta_icon from '../Assets/instagram_icon.png'
import pin_icon from '../Assets/pintester_icon.png'
import whats_icon from '../Assets/whatsapp_icon.png';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <img src={footer_logo} alt="Logo For the footer" />
          <p>NextWear</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
              <img src={insta_icon} alt="instagram icon" />
            </div>

            <div className="footer-icons-container">
              <img src={pin_icon} alt="pininterest icon" />
            </div>

            <div className="footer-icons-container">
              <img src={whats_icon} alt="whatsapp icon" />
            </div>
        </div>
        <div className="footer-copyright">
              <hr></hr>
              <p>Copyright @ 2024 - All rights reserved</p>
        </div>
        </div>
    </>
  )
}

export default Footer