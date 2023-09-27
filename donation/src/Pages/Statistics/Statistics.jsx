import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

function Statistics() {
  const [donationItems, setDonationItems] = useState([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const  donationItems = JSON.parse(localStorage.getItem('donation')) || [];
    if ( donationItems) {
      setDonationItems( donationItems);
      calculatePercentage(donationItems);
    }
  }, []);

  const calculatePercentage = (donationItems) => {
    const donationLength = donationItems.length;
    const remainingPercentage = (donationLength / 12) * 100;
    setPercentage(remainingPercentage);
  };

  const data = [
    ['Donated', 'Amount', { role: 'green' }],
    ['Donation', donationItems.length, 'style'], 
    ['Remaining', 50 - percentage, 'red'], 
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
