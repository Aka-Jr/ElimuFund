import React from "react";
import '../App.css';
import {  FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AfterloginNavbar from './AfterLoginMobileNavbar';

const UniversityDashboard =()=>{
    return(

        <>
            <AfterloginNavbar/>
        <div className="university-details">
            <img src="./udsm logo.jpg" width="50px" height="50px" alt="university-logo"/>
            <h1>University of Dar es salaam</h1>
        </div>
        <div className="university-container">
       
        <div className="cards">
            <div className="approved">
                <h3>Approved students</h3>
                <h1>20</h1>
            </div>
            <div className="submitted">
                <h3>Submitted students</h3><h1>30</h1>
            </div>
            <div className="rejected">
                <h3>Rejected students</h3>
                <h1>10</h1>
            </div>
        </div>
        <div className="add-student">
        <Link  to="/addStudent"><button 
            className="add-student-button">
                 <h2>  <FaPlus />   Add new student</h2>
            </button></Link>
            
        </div>
  </div>
  </>
    );
}

export default UniversityDashboard;