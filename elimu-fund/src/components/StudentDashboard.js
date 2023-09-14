import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';
import { FaBell, FaEdit, FaHome, FaRegPlusSquare, FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import StudentDashboardCard from "./StudentDashboardCard";
import StudentCampaignData from "./StudentCampaignData";

const StudentDashboard = () => {

    return(
        <div id="studentDashboard-main-contaainer">
                <div id="student-dashboard-container">
                    <div className="StudentDashboardMenuSection">
                    <h1>Juma Kibula</h1>
                    <ul>
                    <li><span className="dashboard-icons"><FaRegPlusSquare  color="#43d02a" size={20} /></span>
                    <Link className="profile-links" to="/createcampaign">Create new campaign</Link></li>

                    <li><span className="dashboard-icons"><FaUserEdit  color="#43d02a" size={20} />
                    </span><Link className="profile-links" to="/createcampaign">Edit profile</Link></li>

                    <li><span className="dashboard-icons"><FaBell  color="#43d02a" size={20}/>
                    </span><Link  className="profile-links" to="/createcampaign">Notification</Link></li>

                    <li>
                        <span className="dashboard-icons">
                        <FaEdit  color="#43d02a" size={20} />
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
                        <FaSignOutAlt   color="#43d02a" size={20} />
                        </span>
                        <Link className="profile-links" to="/login"  >LogOut</Link>
                    </li>
                </ul>
                    </div>
                    <div className="StudentDashboardStorySection">
                    <p>At ElimuFund, we are on a mission to redefine the educational 
                        landscape in Tanzania by removing financial obstacles that hinder 
                        university and college students from pursuing their dreams.
                        We are a digital fundraising platform that firmly believes 
                        education should be accessible to all, regardless of economic
                        constraints.</p>

                        <progress className="fund-progress" value="10" max="100"></progress>
                    </div>
                    <div className="StudentDashboardProfilePicture">
                           
                    </div>

                </div>
       
        </div>
    )
}

export default StudentDashboard;