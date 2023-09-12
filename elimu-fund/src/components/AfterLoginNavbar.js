import React from 'react';
import {Link} from 'react-router-dom';
import MobileNavbar from './MobileNavbar';
import '../App.css';




const AfterLoginNavbar = () => {
    return (
        <div className = "top">
        <div className ="nav-div">
        <div className ="logo">
            <span className="dual-color">ELIMUFUND</span>
        </div>
            <MobileNavbar/>
            <nav className =" navBar">
                <ul className = "nav-element">
                    <li className="search-icon">Search</li>
                    <li><span></span><Link className=" nav-link" to="/">Home</Link></li>
                    <li><Link className=" nav-link" to="/about">About Us</Link></li>
                    <li><Link className=" nav-link" to="/faqs">FAQs</Link></li>
                </ul>
            </nav>
            
        </div>
           
     </div>
    )
}

export default AfterLoginNavbar;