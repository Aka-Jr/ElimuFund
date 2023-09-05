import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import '../styles.css';

const MobileNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mobile-navbar">
       <IconButton
        className={`mobile-navIcon ${isMenuOpen ? 'show' : ''}`}
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      {isMenuOpen && (
        <nav className="mobile-navBar">
          
          <ul className="nav-element">

          <li className="search-icon">Search</li>
                    <li><Link className=" nav-link" to="/">Home</Link></li>
                    <li><Link className=" nav-link" to="/about">About Us</Link></li>
                    <li><Link className=" nav-link" to="/faqs">FAQs</Link></li>
                    <li><Link className=" nav-link" to="/login">Login</Link></li>
                    <li className ="language-dropdown">Language
                        <ul className="language-dropdown-content">
                            <li>English</li>
                            <li>Swahili</li>
                        </ul>
                    
                    </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileNavbar;
