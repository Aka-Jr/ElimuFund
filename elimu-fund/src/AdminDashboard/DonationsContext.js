import React, { createContext, useContext, useState } from 'react';

const DonationsContext = createContext();

export const useDonations = () => {
  return useContext(DonationsContext);
};

export const DonationsProvider = ({ children }) => {
  const [donations, setDonations] = useState([]);
  
  const addDonation = (newDonation) => {
    setDonations([...donations, newDonation]);
  };

  const donationCount = donations.length;
  const totalAmountCollected = donations.reduce((total, donation) => total + donation.amount, 0);

  return (
    <DonationsContext.Provider value={{ donations, addDonation, donationCount, totalAmountCollected }}>
      {children}
    </DonationsContext.Provider>
  );
};
