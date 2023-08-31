import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div class = "top">
        <div className ="nav-div">
        <div class ="logo">
            <span class="dual-color">ELIMUFUND</span>
        </div>
            <nav className =" navBar">
                <ul className = "nav-element">
                    <li className=" nav-link">Search</li>
                    <li><Link className=" nav-link" to="/">Home</Link></li>
                    <li><Link className=" nav-link" to="/about">About Us</Link></li>
                    <li><Link className=" nav-link" to="/faqs">FAQs</Link></li>
                    <li><Link className=" nav-link" to="/login">Login</Link></li>
                    <li class ="language">Language</li>
                </ul>
            </nav>
            
        </div>
        <div class = "nav-student">
            <img class="card-img" src="./student.png" alt="" />
            </div>
     </div>
    )
}

export default NavBar;