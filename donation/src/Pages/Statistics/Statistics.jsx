import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

function Statistics() {
  const [donationItems, setDonationItems] = useState([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const storedDonations = JSON.parse(localStorage.getItem('donation'));
    if (storedDonations) {
      setDonationItems(storedDonations);
      calculatePercentage(storedDonations);
    }
  }, []);

  const calculatePercentage = (donations) => {
    const donationLength = donations.length;
    const remainingPercentage = (donationLength / donationItems.length) * 100;
    setPercentage(remainingPercentage);
  };

  const data = [
    ['Donated', 'Amount', { role: 'style' }],
    ['Donation', donationItems.length, 'green'], 
    ['Remaining', 100 - percentage, 'red'], 
  ];

  const options = {
    title: 'Donation Statistics',
    sliceVisibilityThreshold: 0.2,
  };

  return (
    <div>
      <h1>Statistics</h1>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default Statistics;
