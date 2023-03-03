import React from 'react'
import Image from 'next/image'
const RerralLink = () => {
    return (
        <div className='flex justify-center items-center gap-4 max-sm:gap-2 border border-black p-[28px] max-md:p-[20px] max-sm:p-[10px] '>
            <h3 className='border py-[14px] px-[10px] max-sm:py-[8px] max-sm:px-[6px] bg-black text-white text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>ICON</h3>
            <div className='flex flex-col gap-[4px]'>
                <div className='flex gap-[6px] items-center max-sm:gap-[2px]'>
                    <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 '>Refferal link: lnk/tr3235</h5>
                    <Image
                        priority
                        src="/Icons/copy.svg"
                        height={11}
                        width={11}
                        alt="Copy"
                        className='w-[14px] h-[14px] max-sm:w-[6px] max-sm:h-[6px]'
                    />
                </div>
                <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 '>Invite Code: 6B892</h5>
            </div>
        </div>
    )
}

export default RerralLink