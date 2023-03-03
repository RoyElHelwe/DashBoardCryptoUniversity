
import CircularProgressBar from '../../../Global/Dashboard/ProgressBar/Circular'
import React from 'react'

const ASubscription = () => {
    return (
        <div className='flex flex-col px-2 py-[2.375rem] max-md:py-[2rem] max-sm:py-[1.7rem] gap-[0.875rem] '>
            <div className='flex justify-between items-start'>
                <h4 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3'>My items</h4>
                <button className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>ADD NEW COURSE</button>
            </div>

            <div className=' flex flex-col w-full border gap-[22px] border-black px-[20px] py-[30px] max-md:px-[15px] max-md:py-[20px] max-sm:px-[10px] max-sm:py-[15px]'>
                <div className='flex items-center justify-between gap-[25px]'>
                    <CircularProgressBar percentage={25} />
                    <div className='flex flex-col'>
                        <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>Crypto Automated Trading</h4>
                        <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Learn how to make robots trade for you 24/7 and earn passive income.</h5>
                    </div>
                    <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3428 29.4482L24.0884 21.0162L17.3428 12.5842" stroke="#28303F" strokeWidth="1.30556" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </div>

                <div className='flex items-center justify-between gap-[25px]'>
                    <CircularProgressBar percentage={25} />
                    <div className='flex flex-col'>
                        <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>Crypto Automated Trading</h4>
                        <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Learn how to make robots trade for you 24/7 and earn passive income.</h5>
                    </div>
                    <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3428 29.4482L24.0884 21.0162L17.3428 12.5842" stroke="#28303F" strokeWidth="1.30556" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </div>

                <div className='flex items-center justify-between gap-[25px]'>
                    <CircularProgressBar percentage={25} />
                    <div className='flex flex-col'>
                        <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>Crypto Automated Trading</h4>
                        <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Learn how to make robots trade for you 24/7 and earn passive income.</h5>
                    </div>
                    <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3428 29.4482L24.0884 21.0162L17.3428 12.5842" stroke="#28303F" strokeWidth="1.30556" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default ASubscription