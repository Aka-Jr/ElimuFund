import React, { useState, useEffect } from 'react';
import CampaignsTable from './CampaignsTable';
import axios from 'axios';

const CampaignsContent = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Define your API endpoint for fetching campaigns data
    const apiUrl = 'http://localhost:5000/fetchCampaigns'; // Use the correct URL for your API

    // Fetch campaigns data from the API when the component mounts
    axios
      .get(apiUrl)
      .then((response) => {
        // Set the fetched campaigns data to the state
        setCampaigns(response.data);
      })
      .catch((error) => {
        console.error('Error fetching campaigns data:', error);
      });
  }, []);

  const handleDeleteCampaign = (campaignId) => {
    // Confirm campaign deletion with a dialog
    const confirmDelete = window.confirm('Are you sure you want to delete this campaign?');
    
    if (confirmDelete) {
      // Define your API endpoint for deleting a campaign
      const deleteApiUrl = `http://localhost:5000/deleteCampaign/${campaignId}`; // Use the correct URL for your delete endpoint

      // Send a request to delete the campaign in the backend
      axios
        .delete(deleteApiUrl)
        .then((response) => {
          if (response.status === 200) {
            // Remove the campaign from the frontend
            setCampaigns((prevCampaigns) => prevCampaigns.filter((campaign) => campaign.id !== campaignId));
          } else {
            console.error('Error deleting campaign:', response.statusText);
          }
        })
        .catch((error) => {
          console.error('Error deleting campaign:', error);
        });
    }
  };

  return (
    <div>
      <h2>Campaign Management</h2>
      <CampaignsTable
        campaigns={campaigns}
        onDeleteCampaign={handleDeleteCampaign} // Pass the handleDeleteCampaign function
      />
    </div>
  );
};

export default CampaignsContent;
