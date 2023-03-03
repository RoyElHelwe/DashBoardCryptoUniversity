import React from 'react'

const Commision = () => {
    return (
        <div className='flex flex-col bg-black py-[20px] max-sm:py-[10px] text-white h-full'>
            <div className='flex flex-col border-b pb-[30px] max-sm:pb-[15px]'>
                <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 px-[38px] max-md:px-[20px] max-sm:px-[10px]'>My commision tier</h4>
                <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 underline text-black select-none'>View all coins</h5>
            </div>
            <div className='flex flex-col justify-end h-full px-[38px] max-md:px-[20px] max-sm:px-[10px] '>
                <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>Your commision rate:</h4>
                <h2 className='text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2 '>30%</h2>
            </div>
        </div>
    )
}

export default Commision