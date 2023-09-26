import React, { useEffect, useState } from 'react'
import DonationCardes from './DonationCardes';

function Donation() {
  const [donation, setDonation] = useState([]);
  const [noDataFound, setNoDataFound] = useState("")
  const[isShow, setisShow] = useState(false)

  useEffect(()=>{
    const donationItems = JSON.parse(localStorage.getItem('donation'));
    if (donationItems){
      setDonation(donationItems)
    }else{
      setNoDataFound('No data Donation added')
    }

  },[])
  // console.log(donation)

  // console.log(isShow)
  return (
    <div>
      {noDataFound ?<p className='h-[80vh] text-7xl text-center items-center'>{noDataFound}</p>
      : <div>
          <div className='grid grid-cols-2 gap-4'>
              {
                isShow ? donation.map(data =><DonationCardes key={data.id} data={data}/>)
                :
                donation.slice(0, 4).map(data =><DonationCardes key={data.id} data={data}/>)
              }
          </div>
      </div>}
      <button onClick={()=>setisShow(!isShow)}
      className='btn bg-green-500 ml-96 mt-11'>See more</button>
    </div>
  )
}

export default Donation
