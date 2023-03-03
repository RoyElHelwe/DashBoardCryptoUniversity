import React from 'react'
import BtnPrimary from '../../../Global/Button/primary'
import Image from 'next/image'
const index = () => {
    return (
        <div className='bg-blue w-full max-md:py-[70px] max-sm:py-[40px]'>
            <div className='container mx-auto flex items-center text-black px-3 max-md:flex-col max-md:gap-4 '>
                <div className='flex flex-col gap-4 flex-1'>
                    <h2 className='text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2'>Interested in getting mentored <span className='text-white'>by our experts?</span></h2>
                    <div className='flex flex-col gap-[90px] max-md:gap-[30px]'>
                        <div className='flex flex-col gap-[34px]'>
                            <h3 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3'>Limited 1-on-1 coaching spots available.</h3>
                            <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 opacity-50'>(For both traders and investors)</h4>
                        </div>
                        <BtnPrimary url={""} value={"register now"} />
                    </div>
                </div>

                <div className='flex flex-1 max-md:w-full max-md:justify-between '>
                    <div className=' flex flex-col'>
                        <Image
                            priority
                            src="/Hero/simple3.svg"
                            height={305}
                            width={300}
                            alt="Profile"
                            className='  w-[300px] h-[305px] max-md:w-[250px] max-md:h-[250px] max-sm:w-[150px] max-sm:h-[150px]'
                        />
                        <Image
                            priority
                            src="/Hero/simple4.svg"
                            height={305}
                            width={300}
                            alt="Profile"
                            className='  w-[300px] h-[305px] max-md:w-[250px] max-md:h-[250px] max-sm:w-[150px] max-sm:h-[150px]'
                        />
                    </div>
                    <div className=' flex flex-col py-[85px] max-sm:py-[40px]'>
                        <div className='relative'>
                            <Image
                                priority
                                src="/Hero/simple5.svg"
                                height={305}
                                width={300}
                                alt="Profile"
                                className='   w-[300px] h-[305px] max-md:w-[250px] max-md:h-[250px] max-sm:w-[150px] max-sm:h-[150px]'
                            />
                            <div className='absolute top-0 right-0 '>
                                <Image
                                    priority
                                    src="/Icons/cursor.svg"
                                    height={62}
                                    width={55}
                                    alt="Cursor Icon"
                                    className='  w-[60px] h-[65px] max-md:w-[50px] max-md:h-[55px] max-sm:w-[40px] max-sm:h-[45px]'
                                />
                            </div>
                        </div>
                        <Image
                            priority
                            src="/Hero/simple6.svg"
                            height={305}
                            width={300}
                            alt="Profile"
                            className='   w-[300px] h-[305px] max-md:w-[250px] max-md:h-[250px] max-sm:w-[150px] max-sm:h-[150px]'
                        />

                    </div>
                </div>

            </div>
        </div>
    )

}

export default index