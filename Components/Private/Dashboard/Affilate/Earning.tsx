import React from 'react'
import SimpleButton from '../../../Global/Button/primary'
const Earning = () => {
    return (
        <div className='flex flex-col bg-black py-[20px] max-sm:py-[10px]  text-white h-full'>
            <div className='flex flex-col border-b pb-[30px] max-sm:pb-[15px]'>
                <div className='flex flex-col px-[38px] max-md:px-[25px] max-sm:px-[10px]'>
                    <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>My earnings</h4>
                    <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 underline'>View all coins</h5>
                </div>
            </div>
            <div className='flex flex-col border-b pb-[16px] max-sm:pb-[0px]'>
                <div className='flex flex-col px-[38px] py-[16px] max-sm:py-[10px] max-md:px-[25px] max-sm:px-[10px]'>
                    <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>Estimate Balance:</h4>
                    <h2 className='text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2'>$50,676</h2>
                </div>
            </div>
            <div className='flex px-[38px] justify-between py-[26px] max-md:px-[20px] max-sm:px-[10px] max-sm:flex-wrap max-sm:justify-center max-sm:gap-2 max-sm:py-[10px]'>
                <button className='bg-orange uppercase text-black px-[25px] py-[10px] max-sm:px-[10px] max-sm:py-[5px]  text-lg-h6 '>wITHDRAW</button>
                <button className=' uppercase border-white border px-[25px] py-[10px] text-lg-h6 max-sm:px-[10px] max-sm:py-[5px]'>History</button>
            </div>
        </div>
    )
}

export default Earning