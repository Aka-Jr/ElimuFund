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
        <div>
        <p className="title">Menu</p>
            <div className="student-profile-section">
           
                <ul>
                    <li><span className="dashboard-icons"><FaRegPlusSquare  color="#43d02a" size={30} /></span>
                    <Link className="profile-links" to="/createcampaign">Create new campaign</Link></li>

                    <li><span className="dashboard-icons"><FaUserEdit  color="#43d02a" size={30} />
                    </span><Link className="profile-links" to="/createcampaign">Edit profile</Link></li>

                    <li><span className="dashboard-icons"><FaBell  color="#43d02a" size={30}/>
                    </span><Link  className="profile-links" to="/createcampaign">Notification</Link></li>

                    <li>
                        <span className="dashboard-icons">
                        <FaEdit  color="#43d02a" size={30} />
                        </span>

                    <Link className="profile-links" to="/createcampaign"  >Edit story</Link>
                    
                    </li>
                    {/* <li>
                        <span className="dashboard-icons">
                            <FaHome color="#43d02a" size={30} />
                        </span>
                        <Link className="profile-links" to="/"  >Home</Link>
                    </li> */}
                    <li id="logout">
                        <span className="dashboard-icons">
                        <FaSignOutAlt   color="#43d02a" size={30} />
                        </span>
                        <Link className="profile-links" to="/login"  >LogOut</Link>
                    </li>
                </ul>
            </div>
            </div>
            <div className="student-story-section">
                <p className="title">Your Story</p>
                <div id="dashboardCard">
                < StudentDashboardCard details={StudentCampaignData} />
                </div>

            </div>

            

        </div>
        </div>
    )
}

export default StudentDashboard;