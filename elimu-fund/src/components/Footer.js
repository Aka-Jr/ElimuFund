import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
// import MailIcon from '@mui/icons-material/Mail';
// import PhoneIcon from '@mui/icons-material/Phone';
import '../styles.css';
import { FaFacebook, FaInbox, FaInstagram, FaLocationArrow, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';

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
      <p><b>Privacy and Terms</b></p>
        <ul>
          <li> <span className="icons"><SearchIcon /> </span> Terms</li>
          <li> <span className="icons"><SearchIcon /> </span> Privacy notice</li>
          <li> <span className="icons"><FaFacebook /> </span> Legal</li>
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