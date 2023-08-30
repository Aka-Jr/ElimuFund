import React from 'react';

const Footer = () =>{
    return(
<footer class="footer">
      <div class="footer-component" id="contacts">
        <p><b>Contact us</b></p>
        <ul >
          <li>info@elimufund.co.tz</li>
          <li>+255700020029</li>
          <li>74 Ally sykes Road, Dar Es Salaam</li>
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