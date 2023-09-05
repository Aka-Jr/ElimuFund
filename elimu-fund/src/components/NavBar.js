import React from 'react';
import {Link} from 'react-router-dom';
import MobileNavbar from './MobileNavbar';



const NavBar = () => {
    return (
        <div className = "top">
        <div className ="nav-div">
        <div class ="logo">
            <span class="dual-color">ELIMUFUND</span>
        </div>
            <MobileNavbar/>
            <nav className =" navBar">
                <ul className = "nav-element">
                    <li className="search-icon">Search</li>
                    <li><span></span><Link className=" nav-link" to="/">Home</Link></li>
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
            
        </div>
        <div className="student-motto">
        <div className = "nav-student">
            <img class="student-img-top" src="./student.png" alt="" />
            </div>

            <div className="motto">
               <p> A hand to save <br></br>a Tanzanian <br></br>student's education</p>
               <button className="start-elimufund-button">START ElimuFund</button>
            </div>
            </div>
           
     </div>
    )
}

export default NavBar;