import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';
import { FaBell, FaEdit, FaHome, FaRegPlusSquare, FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import StudentDashboardCard from "./StudentDashboardCard";
import StudentCampaignData from "./StudentCampaignData";

const StudentDashboard = () => {

    return(
        <div id="student-dashboard-container">
      
        <h1 className="welcome-user"> Welcome Username</h1>
        <div className="student-dashboard">
            <div className="student-profile-section">
                <ul>
                    <li><span className="dashboard-icons"><FaRegPlusSquare  color="white" size={30} /></span>
                    <Link className="profile-links" to="/createcampaign">Create new campaign</Link></li>

                    <li><span className="dashboard-icons"><FaUserEdit  color="white" size={30} />
                    </span><Link className="profile-links" to="/createcampaign">Edit profile</Link></li>

                    <li><span className="dashboard-icons"><FaBell  color="white" size={30}/>
                    </span><Link  className="profile-links" to="/createcampaign">Notification</Link></li>

                    <li>
                        <span className="dashboard-icons">
                        <FaEdit  color="white" size={30} />
                        </span>

                    <Link className="profile-links" to="/createcampaign"  >Edit story</Link>
                    
                    </li>
                    {/* <li>
                        <span className="dashboard-icons">
                            <FaHome color="white" size={30} />
                        </span>
                        <Link className="profile-links" to="/"  >Home</Link>
                    </li> */}
                    <li id="logout">
                        <span className="dashboard-icons">
                        <FaSignOutAlt   color="white" size={30} />
                        </span>
                        <Link className="profile-links" to="/login"  >LogOut</Link>
                    </li>
                </ul>

            </div>
            <div className="student-story-section">
                <p id="title">Your Story</p>
                
                < StudentDashboardCard details={StudentCampaignData} />

            </div>

            

        </div>
        </div>
    )
}

export default StudentDashboard;