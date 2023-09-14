import React from 'react';

import { useDonations } from './DonationsContext';

const DashboardCards = () => {
  const { donationCount, totalAmountCollected } = useDonations();

  return (
    <div className="dashboard">
      {/* First Row */}
      <div className="card">
        <h2>Donations</h2>
        <p className="big-number">{donationCount}</p>
        <p>From January 1, 2023, to September 30, 2023</p>
      </div>
      <div className="card">
        <h2>Money Collected</h2>
        <p className="big-number">${totalAmountCollected}</p>
        <p>From January 1, 2023, to September 30, 2023</p>
      </div>

    </div>
  );
};

export default DashboardCards;
