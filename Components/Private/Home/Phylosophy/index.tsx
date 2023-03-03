import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BtnPrimary from '../../../Global/Button/primary'
const index = () => {
    return (
        <div className='bg-black py-[88px] max-md:py-[70px] w-full text-white max-sm:py-[40px]'>
            <div className='container mx-auto flex flex-col  px-3 gap-[40px]'>
                <h2 className='text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2 '>Our philosophy here <span className='text-green'>at Crypto University</span></h2>
                <div className='flex gap-[22px] items-center'>
                    <h4 className='px-[19px] py-[17px] border rounded-full text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 '>Beginner Friendly</h4>
                    <h4 className='px-[19px] py-[17px] border rounded-full text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 '>Learn at your pace</h4>
                    <h4 className='px-[19px] py-[17px] bg-white text-black rounded-full text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 '> Community Support</h4>
                </div>
                <div className='flex items-center'>
                    <div className='flex flex-col gap-[97px] max-md:gap-[30px]  '>

                        <h3 className='w-[600px] max-md:w-[450px] max-sm:w-full text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3 opacity-50 '>You’ll be part of our Discord server where you can ask questions to experts and other learners.</h3>
                        <BtnPrimary url={""} value={"register now"}/>
                    </div>
                    <div className='w-[450px] max-sm:hidden h-[450px] max-md:w-[150px] max-md:h-[150px] bg-green flex justify-center items-center rounded-full '>
                        <Image
                            priority
                            src="/Logo/discord.svg"
                            height={220}
                            width={288}
                            alt="Cursor Icon"
                            className='  w-[288px] h-[220px] max-md:w-[50px] max-md:h-[55px] max-sm:w-[40px] max-sm:h-[45px]'
                        />
                    </div>
                </div>
            </div>


        </div>

    )
}

export default index