import React from "react";
import '../App.css';
import {  FaPlus } from 'react-icons/fa';

const UniversityDashboard =()=>{
    return(
        <div className="university-container">
        <div className="university-details">
            <img src="./udsm logo.jpg" width="40px" height="40px" alt="university-logo"/>
            <h1>University of Dar es salaam</h1>
        </div>
        <div className="cards">
            <div className="approved">
                <h3>Approved students</h3>
                <h1>245</h1>
            </div>
            <div className="submitted">
                <h3>Submitted students</h3><h1>321</h1>
            </div>
            <div className="rejected">
                <h3>Rejected students</h3>
                <h1>29</h1>
            </div>
        </div>
        <div className="add-student">
            <button 
            className="add-student-button">
                 <h2>  <FaPlus />   Add new student</h2>
            </button>
        </div>
  </div>
    );
}

export default UniversityDashboard;