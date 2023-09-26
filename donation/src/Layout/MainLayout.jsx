
import Navber from '../Components/Header/Navber'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className='max-w-[1350px] mx-auto'>
      <Navber />
      <div className='py-10'>
      <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
