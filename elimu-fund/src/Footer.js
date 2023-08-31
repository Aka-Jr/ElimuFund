import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () =>{
    return(
<footer class="footer">
      <div class="footer-component" id="contacts">
        <p><b>Contact us</b></p>
        <ul >
          <li> <SearchIcon /> info@elimufund.co.tz</li>
          <li> <PhoneIcon /> +255700020029</li>
          <li> <MailIcon/>74 Ally sykes Road, Dar Es Salaam</li>
        </ul>
      </div>
      <div class="footer-component" id="terms">
        
        <ul>
          <li>Terms</li>
          <li>Privacy notice</li>
          <li>Legal</li>
        </ul>
      </div>
      <div class="footer-component" id="social-media">
        <p><b>Social Media</b></p>
        <ul>
          <li>Youtube</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>X</li>
        </ul>
      </div>
    </footer>
    );
}

export default Footer;