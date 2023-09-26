import React, { useEffect, useState } from 'react'
import DonationCardes from './DonationCardes';

function Donation() {
  const [donation, setDonation] = useState([]);
  const [noDataFound, setNoDataFound] = useState("")

  useEffect(()=>{
    const donationItems = JSON.parse(localStorage.getItem('donation'));
    if (donationItems){
      setDonation(donationItems)
    }else{
      setNoDataFound('No data Donation added')
    }

  },[])
  // console.log(donation)
  return (
    <div>
      {noDataFound ?<p className='h-[80vh] text-7xl text-center items-center'>{noDataFound}</p>
      : <div>
          <div className='grid grid-cols-2 gap-4'>
              {
                donation.map(data =><DonationCardes key={data.id} data={data}/>)
              }
          </div>
      </div>}
    </div>
  )
}

export default Donation
