// AdminDashboard.js

import React from 'react';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';
import UsersContent from './UsersContent';
import ReportsContent from './ReportsContent';
import CampaignsContent from './CampaignsContent';
import DonationsContent from './DonationsContent';
import DisbursementContent from './DisbursementContent';
import EnquiriesContent from './EnquiriesContent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    
      <div className="App">
        <div className="container">
          <Sidebar />
          <div className="content">
         
          </div>
        </div>
      </div>
    
  );
}

export default AdminDashboard;
