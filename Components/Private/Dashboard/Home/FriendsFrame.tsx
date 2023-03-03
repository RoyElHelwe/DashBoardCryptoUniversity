import React, { useState } from 'react'
import Image from 'next/image'
import PopUp from './PopUp'

const FriendsFrame = () => {
  const [close, setClose] = useState(true)
  return (
    <div className='w-full px-[24px] max-h-[400px] text-black bg-white flex flex-col gap-[18px] py-[12px]  '>
      <div className="border-b">
        <div className="flex justify-between items-center pb-[15px]">
          <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>Friends</h4>
          <div className='cursor-pointer' onClick={() => setClose(!close)}>
            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.414062" y="0.318359" width="22.2292" height="22.9701" rx="11.1146" fill="#D9D9D9" fillOpacity="0.45" />
              <line x1="11.5286" y1="16.6194" x2="11.5286" y2="7.72771" stroke="black" strokeWidth="1.48194" strokeLinecap="round" />
              <line x1="7.08277" y1="12.1736" x2="15.9744" y2="12.1736" stroke="black" strokeWidth="1.48194" strokeLinecap="round" />
            </svg>
          </div>
          <PopUp setClose={setClose} close={close} />
        </div>
      </div>
      <div className='flex flex-col scrollbar-thin scrollbar-thumb-black/50 scrollbar-thumb-rounded scrollbar-track-rounded scrollbar-track-black/20 gap-[20px] overflow-y-scroll'>
        <div className='flex gap-[20px] items-center'>
          <Image
            priority
            src="/Header/profile.png"
            height={60}
            width={60}
            alt="Profile"
            className='w-[60px] h-[60px] max-md:w-[40px] max-md:h-[40px] '
          />
          <div className='flex flex-col'>
            <h4 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Kavia Simora</h4>
            <h4 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Level 07: <span className='opacity-70'>explorer</span></h4>
          </div>
        </div>
        <div className='flex gap-[20px] items-center'>
          <Image
            priority
            src="/Header/profile.png"
            height={60}
            width={60}
            alt="Profile"
            className='w-[60px] h-[60px] max-md:w-[40px] max-md:h-[40px]'
          />
          <div className='flex flex-col'>
            <h4 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Kavia Simora</h4>
            <h4 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Level 07: <span className='opacity-70'>explorer</span></h4>
          </div>
        </div>
        <div className='flex gap-[20px] items-center'>
          <Image
            priority
            src="/Header/profile.png"
            height={60}
            width={60}
            alt="Profile"
            className='w-[60px] h-[60px] max-md:w-[40px] max-md:h-[40px]'
          />
          <div className='flex flex-col'>
            <h4 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Kavia Simora</h4>
            <h4 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Level 07: <span className='opacity-70'>explorer</span></h4>
          </div>
        </div>
        <div className='flex gap-[20px] items-center'>
          <Image
            priority
            src="/Header/profile.png"
            height={60}
            width={60}
            alt="Profile"
            className='w-[60px] h-[60px] max-md:w-[40px] max-md:h-[40px]'
          />
          <div className='flex flex-col'>
            <h4 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Kavia Simora</h4>
            <h4 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Level 07: <span className='opacity-70'>explorer</span></h4>
          </div>
        </div>
        <div className='flex gap-[20px] items-center'>
          <Image
            priority
            src="/Header/profile.png"
            height={60}
            width={60}
            alt="Profile"
            className='w-[60px] h-[60px] max-md:w-[40px] max-md:h-[40px]'
          />
          <div className='flex flex-col'>
            <h4 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Kavia Simora</h4>
            <h4 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Level 07: <span className='opacity-70'>explorer</span></h4>
          </div>
        </div>
        <div className='flex gap-[20px] items-center'>
          <Image
            priority
            src="/Header/profile.png"
            height={60}
            width={60}
            alt="Profile"
            className='w-[60px] h-[60px] max-md:w-[40px] max-md:h-[40px]'
          />
          <div className='flex flex-col'>
            <h4 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Kavia Simora</h4>
            <h4 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Level 07: <span className='opacity-70'>explorer</span></h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FriendsFrame