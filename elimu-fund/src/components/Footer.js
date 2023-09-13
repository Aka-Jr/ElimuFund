import React from 'react';
import '../styles.css';
import { Link} from "react-router-dom";
import { FaFacebook, FaFileAlt, FaInbox, FaInstagram, FaLocationArrow, FaPhone, FaShieldAlt, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () =>{
    return(
<footer className="footer">
      <div className="footer-component" id="contacts">
        <p><b>Contact us</b></p>
        <ul >
          <li> <span className="icons"><FaInbox size={20} /> </span> info@elimufund.co.tz</li>
          <li> <span className="icons"><FaPhone size={20}/>  </span> +255700020029</li>
          <li> <span className="icons"><FaLocationArrow  size={20} /></span>74 Ally sykes Road, Dar Es Salaam</li>
        </ul>
      </div>
      <div className="footer-component" id="terms">
      <p><b>Legal</b></p>
        <ul>
          <li> <span className="icons"><FaFileAlt   size={20}/> </span> Terms</li>
          <li> <span className="icons"><FaShieldAlt   size={20}/> </span> Privacy notice</li>
        </ul>
      </div>
      <div className="footer-component" id="social-media">
      
        <p><b>Social Media</b></p>
        <span className="icons"><FaYoutube  size={25}/> </span> 
        <span className="icons"><FaInstagram  size={25}/> </span> 
        <span className="icons"><FaFacebook size={25} /> </span>
        <span className="icons"><FaTwitter  size={25}/> </span>
        {/* <ul>
          <li> <span className="icons"><FaYoutube  color="#43d02a" size={20}/> </span> </li>
          <li> <span className="icons"><FaInstagram  color="#43d02a" size={20}/> </span> </li>
          <li> <span className="icons"><FaFacebook color="#43d02a" size={20} /> </span> </li>
          <li> <span className="icons"><FaTwitter  color="#43d02a" size={20}/> </span> </li>
        </ul> */}
      </div>
    </footer>
    );
}

export default Footer;