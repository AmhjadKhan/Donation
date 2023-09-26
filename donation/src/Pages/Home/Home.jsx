import React from 'react'
import Banner from '../../Components/Banner/Banner'
import { useLoaderData } from 'react-router-dom'
import Data from '../../Components/Data/Datas'

function Home() {

  const datas = useLoaderData()


  return (
    <div>
      <Banner />
      <Data datas={datas} />
    </div>
  )
}

export default Home
