import React from "react";
import { Link } from 'react-router-dom';
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
                    <li><span className="dashboard-icons"><FaRegPlusSquare /></span>
                    <Link className="profile-links" to="create-campaign">Create new campaign</Link></li>

                    <li><span className="dashboard-icons"><FaUserEdit />
                    </span><Link className="profile-links" to="create-campaign">Edit profile</Link></li>

                    <li><span className="dashboard-icons"><FaBell />
                    </span><Link  className="profile-links" to="create-campaign">Notification</Link></li>

                    <li><span className="dashboard-icons"><FaEdit />
                    </span><Link className="profile-links" to="create-campaign"  >Edit story</Link></li>
                    {/* <li><span className="dashboard-icons"><FaHome /></span>Home</li> */}
                    <li id="logout"><span className="dashboard-icons"><FaSignOutAlt /></span>LogOut</li>
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