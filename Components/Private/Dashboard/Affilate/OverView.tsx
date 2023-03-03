import React from 'react'
import Link from 'next/link'
const OverView = () => {
    return (
        <div className='flex flex-col bg-black py-[20px] px-[38px] gap-[40px] max-sm:gap-[20px] text-white h-full max-md:px-[20px] max-sm:px-[10px] max-sm:py-[10px]'>
            <div className='flex flex-col gap-[28px] max-sm:gap-[20px]'>
                <div className='flex flex-col'>
                    <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>Account overview</h4>
                    <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'><span className='opacity-50'>Date from </span> 22/09/28 - 22/09/28</h5>
                </div>
                <div className='flex gap-[5px] flex-wrap'>
                    <button className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 p-[5px] border border-white'>24H</button>
                    <button className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 p-[5px] border border-white'>7D</button>
                    <button className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 p-[5px] border border-white'>1M</button>
                    <button className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 p-[5px] border border-white'>1Y</button>
                    <button className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 p-[5px] border border-white'>All</button>
                </div>
            </div>
            <div className='flex flex-col gap-[12px]  '>
                <div className='flex gap-[20px] items-center max-sm:gap-[10px]'>
                    <h4 className='flex items-center justify-center px-[12px] py-[3px] max-sm:px-[6px] max-sm:py-[2px] rounded-full text-black bg-white text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>7</h4>
                    <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Account level</h5>
                </div>
                <div className='flex gap-[20px] items-center max-sm:gap-[10px]'>
                    <h4 className='flex items-center justify-center px-[12px] py-[3px] max-sm:px-[6px] max-sm:py-[2px] rounded-full text-black bg-white text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>3</h4>
                    <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>No. of Sign-ups</h5>
                </div>
                <div className='flex gap-[20px] items-center max-sm:gap-[10px]'>
                    <h4 className='flex items-center justify-center px-[12px] py-[3px] max-sm:px-[6px] max-sm:py-[2px] rounded-full text-black bg-white text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>3</h4>
                    <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>No. of Paid Users</h5>
                </div>
            </div>
        </div>
    )
}

export default OverView