import React from 'react'
import Image from 'next/image'
const Card = ({ icon, title, sub, color }: any) => {
    return (
        <div className={`flex flex-col  py-[40px] px-[45px] max-md:py-[35px] max-md:px-[35px] gap-[28px]  shadow-buttom ` + color}>
            <div className='flex gap-[25px] max-md:gap-[15px] items-center max-sm:justify-center'>
                <div className='w-[86px] h-[86px] max-md:w-[45px] max-md:h-[45px] max-sm:w-[50px] max-sm:h-[50px] bg-white flex  justify-center items-center rounded-full border-2'>
                    <Image
                        priority
                        src={icon}
                        height={72}
                        width={72}
                        alt={title}
                        className='  w-[72px] h-[72px] max-md:w-[35px] max-md:h-[35px] max-sm:w-[30px] max-sm:h-[30px]'
                    />
                </div>
                <h3 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3 w-[100px] max-md:w-[80px] '>{title}</h3>
            </div>
            <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 w-[300px] max-md:w-[200px] max-sm:w-full flex max-sm:justify-center '>{sub}</h4>
        </div>
    )
}

export default Card