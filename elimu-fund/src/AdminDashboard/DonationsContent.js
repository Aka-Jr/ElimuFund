import React from 'react';
import DonationsTable from './DonationsTable';

const DonationsContent = () => {
  // Sample data for two donation rows
  const sampleDonations = [
    {
      id: 1,
      name: 'Donor 1',
      accountNo: '123456',
      transactionId: 'T123456',
      amount: '$100',
      targetPerson: 'Recipient 1',
      timestamp: '2023-09-15 10:30 AM',
    },
    {
      id: 2,
      name: 'Donor 2',
      accountNo: '789012',
      transactionId: 'T789012',
      amount: '$50',
      targetPerson: 'Recipient 2',
      timestamp: '2023-09-14 09:45 AM',
    },
  ];

  return (
    <div className="content">
      <h1>Donations</h1>
      <DonationsTable donations={sampleDonations} />
    </div>
  );
};

export default DonationsContent;
