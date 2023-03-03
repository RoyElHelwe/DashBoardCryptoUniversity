import React from 'react'
import Image from 'next/image'
const index = () => {
    return (
        <div className='bg-blue py-[110px] max-md:py-[70px] max-sm:py-[40px] w-full'>
            <div className='container mx-auto text-black px-3 flex flex-col   gap-[65px] max-sm:gap-[40px]'>
                <div className='flex gap-[30px] items-center '>
                    <Image
                        priority
                        src="/Icons/Heart.svg"
                        height={45}
                        width={50}
                        alt="Heart Icon"
                        className='  w-[50px] h-[45px]'
                    />
                    <h2 className='text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2 '>Feedback from our students</h2>
                </div>

                <div className='flex justify-center gap-8 flex-wrap'>
                    <h3 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3 py-[170px] px-[230px] max-md:py-[140px] max-md:px-[190px] max-sm:py-[100px] max-sm:px-[120px] rounded-2xl bg-purple border-2'>Screen1</h3>
                    <h3 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3 py-[170px] px-[230px] max-md:py-[140px] max-md:px-[190px] max-sm:py-[100px] max-sm:px-[120px] rounded-2xl bg-green border-2'>Screen2</h3>
                </div>
            </div>
        </div>
    )
}

export default index