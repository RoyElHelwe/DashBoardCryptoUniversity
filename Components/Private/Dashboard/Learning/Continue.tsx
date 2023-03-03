import React from 'react'
import PrimaryMedium from '../../../Global/Button/PrimaryMedium'
const Continue = () => {
    return (
        <div className='flex border border-black h-full'>
            <div className='bg-black/20 flex-1 '>

            </div>
            <div className='flex flex-col py-[40px] px-[20px] max-md:py-[25px] max-sm:py-[20px] max-sm:px-[10px] max-md:gap-[20px] max-sm:gap-[10px]  gap-[40px] flex-[1.5] '>
                <div className='flex flex-col gap-[15px] flex-1 max-md:gap-[10px] max-sm:gap-[5px] '>
                    <h3 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3'>Crypto Automated Trading</h3>
                    <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Learn how to make robots trade for you 24/7 and earn passive income.</h5>
                </div>
                <div className='flex flex-1 '>
                    <PrimaryMedium url="" value="Continue learning" />
                </div>
            </div>
        </div>
    )
}

export default Continue