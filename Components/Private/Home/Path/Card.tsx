import React from 'react'
import Image from 'next/image'
const Card = ({icon, title, sub, color}:any) => {
    return (
        <div className={`flex items-center max-sm:justify-center py-[40px] px-[45px] max-md:py-[35px] max-md:px-[35px] gap-[25px] shadow-Card `+color}>
            <div className='w-[86px] h-[86px] max-md:w-[70px] max-md:h-[70px] max-sm:w-[50px] max-sm:h-[50px] bg-white flex justify-center items-center rounded-full border-2'>
                <Image
                    priority
                    src={icon}
                    height={72}
                    width={72}
                    alt={title}
                    className='  w-[72px] h-[72px] max-md:w-[50px] max-md:h-[50px] max-sm:w-[30px] max-sm:h-[30px]'
                />
            </div>
            <div className='flex flex-col gap-[16px]'>
                <h3 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3'>{title}</h3>
                <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>{sub}</h4>
            </div>
        </div>
    )
}

export default Card