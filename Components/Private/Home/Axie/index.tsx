import React from 'react'
import BtnPrimary from '../../../Global/Button/primary'
import Image from 'next/image'
const index = () => {
    return (
        <div className='bg-blue py-[70px] w-full max-sm:py-[40px] text-black'>
            <div className='container mx-auto flex flex-col items-center px-3 gap-[50px] max-md:gap-[40px] w-[500px] max-md:w-full text-center'>
                <div className='flex flex-col items-center gap-[30px] max-md:gap-[20px] max-sm:gap-[10px]'>
                    <div className='flex w-[150px] h-[150px] max-md:w-[120px] max-md:h-[120px] max-sm:w-[80px] max-sm:h-[80px] items-center justify-center bg-green border-2 border-white rounded-full'>
                        <Image
                            priority
                            src="/Header/axieProfile.svg"
                            height={102}
                            width={80}
                            alt="Axie Profile"
                            className='  w-[102px] h-[80px] max-md:w-[70px] max-md:h-[55px] max-sm:w-[40px] max-sm:h-[45px]'
                        />
                    </div>
                    <h1 className='text-lg-h1 max-md:text-md-h1 max-sm:text-sm-h1'>Axie Infinity <span className='text-white'>Scholarship</span></h1>
                    <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>Through our scholarship program we enable our scholars to PLAY2EARN without bearing one’s own financial risk</h4>
                </div>
                <BtnPrimary url={""} value={"Earn now"} />
            </div>
        </div>
    )
}

export default index