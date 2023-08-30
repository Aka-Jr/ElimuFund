import './App.css';
import './styles.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Faqs from './pages/Faqs';
import About from './pages/About';
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';





class App extends Component  {
  render(){
  return(
    <div>  
       <Router>
         <div>
         <div class = "top">
        <div className ="nav-div">
        <div class ="logo">
            <span class="dual-color">ELIMUFUND</span>
        </div>
        <nav className="navBar">
      <ul className="nav-element">
        <li className="nav-link" >   <FaSearch /></li>
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li><Link className="nav-link" to="/about">About Us</Link></li>
        <li><Link className="nav-link" to="/faqs">FAQs</Link></li>
        <li><Link className="nav-link" to="/login">Login</Link></li>
        <li className="language">Language</li>
      </ul>
    </nav>
            
        </div>
        <div class = "nav-student">
            <img class="card-img" src="./student.png" alt="" />
            </div>
     </div>
            <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/about' element={<About/>}></Route>
              <Route exact path='/faqs' element={<Faqs/>}></Route>
              <Route exact path='/login' element={<Login/>}></Route>
            </Routes>
            </div>
        </Router>
     
      </div>
    
  )
}
  
 
  
  // <Home />
  
}
export default App;
