import React from 'react'
import Image from "next/image";
import ProgressBar from '@/Components/Global/Dashboard/ProgressBar/Bar';
const Profile = () => {
    return (
        <div className='flex flex-col bg-black text-white pb-[30px] max-md:py-[25px] gap-[20px] pt-[60px] h-full '>
            <div className='flex max-sm:flex-col gap-[45px] max-md:gap-[20px] max-sm:gap-[10px] items-center border-b-2 px-[40px] max-md:px-[20px] max-sm:px-[10px] border-white pb-[30px] max-sm:pb-[15px]'>
                <Image
                    priority
                    src="/Header/profile.svg"
                    height={1080}
                    width={720}
                    alt="Profile Icon"
                    className='w-[110px] h-[110px] max-md:w-[80px] max-md:h-[80px] max-sm:w-[40px] max-sm:h-[40px]'
                />
                <div className='flex flex-col max-sm:items-center'>
                    <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 font-normal'>Explorer</h4>
                    <h3 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3'>Kavia Simora</h3>
                </div>
            </div>

            <div className='flex flex-col gap-[12px] px-[40px] max-md:px-[20px] '>
                <ProgressBar progress={40} />
                <div className='flex justify-between'>
                    <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Level 07: <span className='opacity-50'>explorer</span></h5>
                    <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>1250 / <span className='opacity-50'>3000 points</span></h5>
                </div>
            </div>
        </div>
    )
}

export default Profile