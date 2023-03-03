import React from 'react'
import Image from 'next/image'
const RerralLink = () => {
    return (
        <div className='flex  items-center gap-4 max-sm:gap-2 border border-black p-[28px] max-md:p-[20px] max-sm:p-[10px] h-full'>
            <h3 className='border py-[20px] px-[15px] max-sm:py-[8px] max-sm:px-[6px] bg-black text-white text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>ICON</h3>
            <div className='flex flex-col gap-[4px]'>
                <div className='flex gap-[10px] items-center max-sm:gap-[2px]'>
                    <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 '>Notifications</h4>
                    <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 px-[15px] bg-gray rounded-xl'>New</h5>
                    <Image
                        priority
                        src="/Icons/Bin.svg"
                        height={28}
                        width={28}
                        alt="Copy"
                        className='w-[28px] h-[28px] max-sm:w-[14px] max-sm:h-[14px]'
                    />
                </div>
                <h5 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 max-sm:w-[70%] '>Your payment for crypto course passed succesfully</h5>
            </div>
        </div>
    )
}

export default RerralLink