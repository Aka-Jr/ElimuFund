import React from 'react';

const DonationsTable = ({ donations }) => {
  return (
    <div className="donations-table-container">
      <table className="donations-table">
        <thead>
          <tr>
            <th className="header">S/N</th>
            <th className="header">Name</th>
            <th className="header">Account No</th>
            <th className="header">Transaction ID</th>
            <th className="header">Amount</th>
            <th className="header">Target Person</th>
            <th className="header">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation, index) => (
            <tr key={donation.id}>
              <td>{index + 1}</td>
              <td>{donation.name}</td>
              <td>{donation.accountNo}</td>
              <td>{donation.transactionId}</td>
              <td>{donation.amount}</td>
              <td>{donation.targetPerson}</td>
              <td>{donation.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationsTable;
