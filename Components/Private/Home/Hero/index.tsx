import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BtnPrimary from '../../../Global/Button/primary'
const index = () => {
    return (
        <div className='bg-black py-[30px] w-full'>
            <div className='container mx-auto flex text-white max-md:flex-col max-md:gap-[40px] px-3'>
                <div className='flex flex-col gap-[100px]'>
                    <div className='flex flex-col gap-[30px]'>
                        <h1 className='w-[700px] max-md:w-full text-lg-h1 max-md:text-md-h1 max-sm:text-sm-h1'>Join 30,000+ scholars
                            Learn Blockchain
                            & Cryptocurrency
                        </h1>
                        <h4 className='opacity-50 text-lg-h4'>#1  crypto community in the world</h4>
                    </div>

                    <div className='flex gap-[30px] items-center'>
                        <div className='relative'>
                            <BtnPrimary url={""} value={"register now"}/>
                            <div className='absolute top-[70%] right-0 '>
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
                        <button><Link href={"/pages/login.tsx"} className="uppercase px-[55px] py-[30px] max-md:px-[45px] max-md:py-[25px] max-sm:px-[35px] max-sm:py-[15px] text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 bg-white text-black">Log In</Link></button>
                    </div>
                </div>

                <div className=' flex justify-center items-center '>
                    <div className='flex flex-col items-center gap-[75px] max-md:gap-[60px] max-sm:gap-[40px]'>
                        <Image
                            priority
                            src="/Hero/simple1.svg"
                            height={37}
                            width={386}
                            alt="Profile"
                            className='w-[313px] h-[386px] max-md:w-[280px] max-md:h-[300px] max-sm:w-[220px] max-sm:h-[250px]'
                        />
                        <Image
                            priority
                            src="/Hero/ball.svg"
                            height={105}
                            width={105}
                            alt="Ball"
                            className='w-[105px] h-[105px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[60px] max-sm:h-[60px]'
                        />
                    </div>

                    <div className='flex flex-col items-center gap-[20px] max-md:gap-[15px] max-sm:gap-[10px]'>
                        <Image
                            priority
                            src="/Hero/ball.svg"
                            height={105}
                            width={105}
                            alt="Ball"
                            className='w-[105px] h-[105px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[60px] max-sm:h-[60px]'
                        />
                        <Image
                            priority
                            src="/Hero/simple2.svg"
                            height={37}
                            width={386}
                            alt="Profile"
                            className='w-[313px] h-[386px] max-md:w-[280px] max-md:h-[300px] max-sm:w-[220px] max-sm:h-[250px]'
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default index