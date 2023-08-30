const NavBar = () => {
    return (
        <div class = "top">
        <div className ="nav-div">
        <div class ="logo">
            <span class="dual-color">ELIMUFUND</span>
        </div>
            <nav className =" navBar">
                <ul className = "nav-element">
                    <li><a className=" nav-link" href="./">Search</a></li>
                    <li><a className=" nav-link" href="../home.js">Home</a></li>
                    <li><a className=" nav-link" href="../About">About Us</a></li>
                    <li><a className=" nav-link" href="../Fqas">FAQs</a></li>
                    <li><a className=" nav-link" href="../Login">Login</a></li>
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