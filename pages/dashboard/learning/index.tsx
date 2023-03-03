import React, { useState } from 'react'
import NavBar from '../../../Components/Global/Dashboard/NavBar'
import Header from '../../../Components/Global/Dashboard/Header'
import BSubscription from '@/Components/Private/Dashboard/Learning/BSubscription'
import Profile from '../../../Components/Private/Dashboard/Learning/Profile'
import Continue from '@/Components/Private/Dashboard/Learning/Continue'
import Courses from '@/Components/Private/Dashboard/Learning/Courses'
const learning = () => {
  const [sub, setSub] = useState(false)
  return (
    <div className='flex'>
      <NavBar />
      <div className='grid grid-cols-12 w-full px-4 place-content-start gap-4 max-md:pb-12 max-md:gap-[0px] max-sm:pb-20 '>
        <div className='col-span-12 '>
          <Header />
          {sub ? "" : <BSubscription setSub={setSub} />}
        </div>
        {sub ?
          <>
            <div className='col-span-5 py-4 max-sm:col-span-12'>
              <Profile />
            </div>
            <div className='col-span-7 py-4 max-sm:col-span-12'>
              <Continue />
            </div>
            <div className='col-span-12'>
              <Courses/>
            </div>
          </>
          : ""
        }

      </div>
    </div>
  )
}

export default learning