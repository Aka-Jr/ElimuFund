import React, { useState } from 'react';
import { FiHome, FiUsers, FiLogOut, FiDollarSign, FiBarChart2, FiMenu, FiDatabase, FiSend, FiHelpCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../App.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        <FiMenu color="black" className="hamburger-icon" />
      </div>
      <ul>
        <li>
          <Link to='/admin/dashboard'>
            <FiHome color="black" />
            {isExpanded && <span>Dashboard</span>}
          </Link>
        </li>
        <li>
          <Link to="/admin/users">
            <FiUsers color="black" />
            {isExpanded && <span>Users</span>}
          </Link>
        </li>
        <li>
          <Link to="/admin/reports">
            <FiBarChart2 color="black" />
            {isExpanded && <span>Reports</span>}
          </Link>
        </li>
        <li>
          <Link to="/admin/campaigns">
            <FiDatabase color="black" />
            {isExpanded && <span>Campaigns</span>}
          </Link>
        </li>
        <li>
          <Link to="/admin/donations">
            <FiDollarSign color="black" />
            {isExpanded && <span>Donations</span>}
          </Link>
        </li>
        <li>
          <Link to="/admin/disbursement">
            <FiSend color="black" />
            {isExpanded && <span>Disbursement</span>}
          </Link>
        </li>
        <li>
          <Link to="/admin/enquiries">
            <FiHelpCircle color="black" />
            {isExpanded && <span>Enquiries</span>}
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <FiLogOut color="#000" />
            {isExpanded && <span>Logout</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
