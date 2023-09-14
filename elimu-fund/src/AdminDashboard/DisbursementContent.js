import React from 'react';
import DisbursementTable from './DisbursementTable';

const DisbursementContent = () => {
  // Sample data for two disbursement rows
  const sampleDisbursements = [
    {
      id: 1,
      name: 'Recipient 1',
      regNo: 'R123456',
      phone: '123-456-7890',
      controlNumber: 'C987654',
      amount: '$200',
      timestamp: '2023-09-15 10:30 AM',
    },
    {
      id: 2,
      name: 'Recipient 2',
      regNo: 'R789012',
      phone: '987-654-3210',
      controlNumber: 'C543210',
      amount: '$150',
      timestamp: '2023-09-14 09:45 AM',
    },
  ];

  return (
    <div className="content">
      <h1>Disbursement</h1>
      <DisbursementTable disbursements={sampleDisbursements} />
    </div>
  );
};

export default DisbursementContent;
