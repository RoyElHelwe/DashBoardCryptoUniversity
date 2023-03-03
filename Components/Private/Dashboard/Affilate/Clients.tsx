import React from 'react'

const Clients = () => {
  return (
    <div className='py-[12px] px-[17px] max-sm:px-[5px] grid grid-cols-12 bg-white text-black items-center '>
        <div className='col-span-4'>
            <div className='flex gap-[16px] items-center max-sm:gap-[5px]'>
                <div className='bg-gray rounded-full w-[50px] h-[50px] max-sm:w-[25px] max-sm:h-[25px]'></div>
                <div className="flex flex-col">
                  <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>UID 3493294</h5>
                  <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 opacity-50'>A***@gmail.com</h5>
                </div>
            </div>
        </div>
        <div className='col-span-7'>
        <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 font-medium'>09/12/2022</h5>

        </div>
        <div className='col-span-1'>
        <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 px-[20px] max-sm:px-[8px] py-[2px] rounded-xl bg-gray font-medium'>Yes</h5>

        </div>
    </div>
  )
}

export default Clients