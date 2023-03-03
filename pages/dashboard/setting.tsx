import React from 'react'
import NavBar from '../../Components/Global/Dashboard/NavBar'
import Header from '../../Components/Global/Dashboard/Header'
const setting = () => {
  return (
    <div className='flex'>
      <NavBar />
      <div className=' px-4 max-w-[930px] flex flex-col w-full'>
        <Header />
      </div>
    </div>
  )
}

export default setting