import React from 'react';
import '../styles.css';
import { FaFacebook, FaFileAlt, FaInbox, FaInstagram, FaLocationArrow, FaPhone, FaShieldAlt, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () =>{
    return(
<footer className="footer">
      <div className="footer-component" id="contacts">
        <p><b>Contact us</b></p>
        <ul >
          <li> <span className="icons"><FaInbox /> </span> info@elimufund.co.tz</li>
          <li> <span className="icons"><FaPhone/>  </span> +255700020029</li>
          <li> <span className="icons"><FaLocationArrow /></span>74 Ally sykes Road, Dar Es Salaam</li>
        </ul>
      </div>
      <div className="footer-component" id="terms">
      <p><b>Legal</b></p>
        <ul>
          <li> <span className="icons"><FaFileAlt /> </span> Terms</li>
          <li> <span className="icons"><FaShieldAlt /> </span> Privacy notice</li>
        </ul>
      </div>
      <div className="footer-component" id="social-media">
        <p><b>Social Media</b></p>
        <ul>
          <li> <span className="icons"><FaYoutube /> </span> Youtube</li>
          <li> <span className="icons"><FaInstagram /> </span> Instagram</li>
          <li> <span className="icons"><FaFacebook /> </span> Facebook</li>
          <li> <span className="icons"><FaTwitter /> </span> Twitter</li>
        </ul>
      </div>
    </footer>
    );
}

export default Footer;