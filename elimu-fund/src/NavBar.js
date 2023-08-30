import React from "react";


const NavBar = () => {
    return (
        <div className ="nav-div">
            <nav className =" navBar">
                <ul className = "nav-element">
                    <li><a className=" nav-link" href="./">Search</a></li>
                    <li><a className=" nav-link" href="../home.js">Home</a></li>
                    <li><a className=" nav-link" href="../About">About Us</a></li>
                    <li><a className=" nav-link" href="../Fqas">FAQs</a></li>
                    <li><a className=" nav-link" href="../Login">Login</a></li>
                    <li>Language</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;