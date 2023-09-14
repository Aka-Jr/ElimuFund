import React from 'react';

const DisbursementTable = ({ disbursements }) => {
  return (
    <div className="disbursement-table-container">
      <table className="disbursement-table">
        <thead>
          <tr>
            <th className="header">S/N</th>
            <th className="header">Name</th>
            <th className="header">Reg. No</th>
            <th className="header">Phone</th>
            <th className="header">Control Number</th>
            <th className="header">Amount</th>
            <th className="header">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {disbursements.map((disbursement, index) => (
            <tr key={disbursement.id}>
              <td>{index + 1}</td>
              <td>{disbursement.name}</td>
              <td>{disbursement.regNo}</td>
              <td>{disbursement.phone}</td>
              <td>{disbursement.controlNumber}</td>
              <td>{disbursement.amount}</td>
              <td>{disbursement.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisbursementTable;
