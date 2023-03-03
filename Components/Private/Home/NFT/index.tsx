import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BtnPrimary from '../../../Global/Button/primary'
const index = () => {
    return (
        <div className='bg-black py-[145px] max-md:py-[70px] max-sm:py-[40px] w-full text-white'>
            <div className='container mx-auto flex items-center justify-between px-3 max-sm:flex-col max-sm:items-start max-sm:gap-4'>
                <div className='flex flex-col gap-[38px] max-md:gap-[20px] max-sm:gap-[16px] '>
                    <div className='flex gap-[26px]  items-center'>
                        <Image
                            priority
                            src="/Header/profile.svg"
                            height={62}
                            width={62}
                            alt="Profile"
                            className='  w-[62px] h-[62px] max-md:w-[50px] max-md:h-[55px] max-sm:w-[40px] max-sm:h-[45px]'
                        />
                        <div className='flex flex-col text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>
                            <h4 className='opacity-50'>Hosted by:</h4>
                            <h4>Michael Jordan</h4>
                        </div>
                    </div>
                    <h1 className='text-lg-h1 max-md:text-md-h1 max-sm:text-sm-h1'><span className='text-green'>Crypto for Beginners–</span> The future of NFTs </h1>
                </div>

                <div className='flex flex-col gap-[50px] '>
                    <div className='flex flex-col gap-[18px]'>
                        <div className="flex gap-[18px] items-center">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22.4762" cy="22.4762" r="21.4286" fill="black" stroke="white" strokeWidth="1.90476" />
                                <path d="M14.4737 24.0055C12.9298 23.1142 12.9298 20.8858 14.4737 19.9945L24.0263 14.4793C25.5702 13.5879 27.5 14.7021 27.5 16.4848L27.5 27.5152C27.5 29.2979 25.5702 30.4121 24.0263 29.5207L14.4737 24.0055Z" fill="white" />
                            </svg>
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22.5231" cy="22.4762" r="21.4286" fill="black" stroke="white" strokeWidth="1.90476" />
                                <path d="M29.5263 24.0055C31.0702 23.1142 31.0702 20.8858 29.5263 19.9945L19.9737 14.4793C18.4298 13.5879 16.5 14.7021 16.5 16.4848L16.5 27.5152C16.5 29.2979 18.4298 30.4121 19.9737 29.5207L29.5263 24.0055Z" fill="white" />
                            </svg>
                        </div>
                        <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>September 22, 2022 | 5:00 pm - 6:00 pm UTC <span className='opacity-50 '>at Twitter Spaces</span></h4>
                    </div>
                    <BtnPrimary url={""} value={"know more"} />
                </div>
            </div>
        </div>
    )
}

export default index