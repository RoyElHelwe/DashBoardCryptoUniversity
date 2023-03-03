import React from 'react'
import CircularProgress from '../../../../Global/Dashboard/ProgressBar/Circular'
import Image from 'next/image'
const Lessons = () => {
    return (
        <div className='flex  bg-black/10 max-sm:flex-col'>
            <div className='w-[30%] bg-black/20 max-sm:w-full max-sm:h-[40px]'>

            </div>

            <div className='flex flex-col py-[36px] px-[60px] w-[70%] gap-[70px] max-sm:w-full max-md:px-[40px] max-sm:py-[15px] max-sm:px-[25px] max-sm:gap-[20px] max-sm:items-center '>
                <div className='flex flex-col gap-[20px] max-sm:gap-[10px] '>
                    <div className='flex justify-between w-full max-sm:flex-col max-sm:gap-[10px]'>
                        <h3 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3 w-[500px] max-sm:w-auto'>How to Navigate Crypto University Server</h3>
                        <div className='flex justify-end'>
                            <CircularProgress percentage={100} />
                        </div>
                    </div>

                    <div className='flex gap-[32px] max-sm:justify-center max-sm:gap-[20px] items-center'>
                        <div className='flex gap-[14px] items-center pr-[32px] border-r max-sm:gap-[8px] max-sm:pr-[20px]'>
                            <Image
                                priority
                                src="/Icons/timeline.svg"
                                height={28}
                                width={28}
                                alt="Time Line"
                                className='w-[28px] h-[28px] max-sm:w-[15px] max-sm:h-[15px]'
                            />
                            <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>8 min</h4>
                        </div>
                        <div className='flex gap-[14px] items-center max-sm:gap-[8px] '>
                            <Image
                                priority
                                src="/Icons/borderBlackStar.svg"
                                height={32}
                                width={32}
                                alt="Profile"
                                className='w-[32px] h-[32px] max-sm:w-[17px] max-sm:h-[17px]'
                            />
                            <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>100 points</h4>
                        </div>
                    </div>
                </div>
                <p className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 w-[90%]'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                </p>
            </div>
        </div>
    )
}

export default Lessons