import React from "react";
import '../App.css';
import Footer from "./Footer";
import { FaBell, FaEdit, FaHome, FaRegPlusSquare, FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import StudentCampaign from "./StudentCampaign";
import StudentCampaignData from "./StudentCampaignData";

const StudentDashboard = () => {

    return(
        <>
      
        <h1 className="welcome-user"> Welcome Username</h1>
        <div className="student-dashboard">
            <div className="student-profile-section">
                <ul>
                    <li><span><FaRegPlusSquare /></span>Create new campaign</li>
                    <li><span><FaUserEdit /></span>Edit profile</li>
                    <li><span><FaBell /></span>Notification</li>
                    <li><span><FaEdit /></span>Edit story</li>
                    <li><span><FaHome /></span>Home</li>
                    <li id="logout"><span><FaSignOutAlt /></span>LogOut</li>
                </ul>

            </div>
            <div className="student-story-section">
                <p id="title">Your Story</p>
                
                < StudentCampaign details={StudentCampaignData} />

            </div>

            

        </div>
        <Footer/>

        </>
    )
}

export default StudentDashboard;