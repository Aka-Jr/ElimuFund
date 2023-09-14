import React from 'react';
import { FaTrash } from 'react-icons/fa'; // Import the FaTrash icon

const CampaignsTable = ({ campaigns, onDeleteCampaign }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S/N</th>
            <th>StudentID</th>
            <th>Title</th>
            <th>Story</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign, index) => (
            <tr key={campaign.id}>
              <td>{index + 1}</td>
              <td>{campaign.student_id}</td>
              <td>{campaign.title}</td>
              <td>{campaign.story}</td>
              <td>{campaign.amount}</td>
              <td>{campaign.due_date}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDeleteCampaign(campaign.id)}
                >
                  <FaTrash color='red'/> 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignsTable;
