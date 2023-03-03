import React from 'react'
import Image from 'next/image'
const RerralLink = () => {
    return (
        <div className='flex justify-between max-sm:gap-2 h-full border border-black px-[28px] max-md:p-[0px] max-sm:px-[5px] '>
            <div className='flex gap-4 max-sm:gap-1 items-center'>
                <Image
                    priority
                    src="/Icons/Resourses.svg"
                    height={74}
                    width={74}
                    alt="Resources Icon"
                    className='w-[74px] h-[74px] max-sm:w-[40px] max-sm:h-[40px]'
                />
                <div className='flex flex-col gap-[4px] '>
                        <h5 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 '>Resourses</h5>
                    <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 '>Check everything our material in Figma for using</h5>
                </div>
            </div>
            <div className='flex  border-l items-center px-[36px] max-sm:px-[5px] h-full '>
                
                    <Image
                        priority
                        src="/Icons/ArrowBlack.svg"
                        height={20}
                        width={54}
                        alt="Arrow"
                        className='w-auto h-auto max-sm:w-[20px] max-sm:h-auto'
                    />
                
            </div>
        </div>
    )
}

export default RerralLink