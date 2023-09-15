import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import "../App.css";
import request from "superagent";
import { toast } from "react-toastify";

import {
  FaBell,
  FaEdit,
  FaHome,
  FaRegPlusSquare,
  FaSignOutAlt,
  FaUserEdit,
} from "react-icons/fa";
import StudentDashboardCard from "./StudentDashboardCard";
import StudentCampaignData from "./StudentCampaignData";

const StudentDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          const response = await request.post("http://localhost:5000/logout");
    
          if (response.body.error === false) {
            toast.success("Logged out successfully");
            navigate("/login"); // Redirect to the login page
          } else {
            toast.error("Logout failed");
          }
        } catch (error) {
          console.error(error);
          toast.error("An error occurred during logout");
        }
      };
    
      // Rest of your component...
   
        

  return (
    <div id="studentDashboard-main-contaainer">
      <div id="student-dashboard-container">
        <div className="StudentDashboardMenuSection">
          
          <ul>
            <li>
              <span className="dashboard-icons">
                <FaRegPlusSquare color="#43d02a" size={20} />
              </span>
              <Link className="profile-links" to="/createcampaign">
                Create new campaign
              </Link>
            </li>

            <li>
              <span className="dashboard-icons">
                <FaUserEdit color="#43d02a" size={20} />
              </span>
              <Link className="profile-links" to="/createcampaign">
                Edit profile
              </Link>
            </li>

            <li>
              <span className="dashboard-icons">
                <FaBell color="#43d02a" size={20} />
              </span>
              <Link className="profile-links" to="/createcampaign">
                Notification
              </Link>
            </li>

            <li>
              <span className="dashboard-icons">
                <FaEdit color="#43d02a" size={20} />
              </span>

              <Link className="profile-links" to="/createcampaign">
                Edit story
              </Link>
            </li>
            {/* <li>
                        <span className="dashboard-icons">
                            <FaHome color="#43d02a" size={30} />
                        </span>
                        <Link className="profile-links" to="/"  >Home</Link>
                    </li> */}
            <li id="logout">
              <span className="dashboard-icons">
                <FaSignOutAlt color="#43d02a" size={20} />
              </span>
              <Link 
              className="profile-links" 
             
              onClick={handleLogout}
              >
                LogOut
              </Link>
            </li>
          </ul>
        </div>
        <div className="StudentDashboardStorySection">
          <p>
            At ElimuFund, we are on a mission to redefine the educational
            landscape in Tanzania by removing financial obstacles that hinder
            university and college students from pursuing their dreams. We are a
            digital fundraising platform that firmly believes education should
            be accessible to all, regardless of economic constraints.
          </p>

          <progress className="fund-progress" value="10" max="100"></progress>
        </div>

          <div className="StudentDashboardProfilePicture">
          <img className="student-dashboard-img" src="./Profile_JR.png" />
          <center>     <span><b>Juma Kibula</b></span></center>
     
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
