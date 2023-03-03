import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const index = () => {
    return (
        <div className='bg-black py-[72px] max-sm:py-[30px] w-full text-white'>
            <div className='container mx-auto flex flex-col gap-[150px] max-md:gap-[100px] max-sm:gap-[60px] px-3 '>
                <div className=' flex items-center justify-between max-sm:flex-col max-sm:gap-6 '>
                    <div className='flex flex-col gap-[50px] max-sm:gap-[20px] items-center'>
                        <Image
                            priority
                            src="/Logo/logo.svg"
                            height={85}
                            width={125}
                            alt="Logo Crypto University"
                            className='  w-[125px] h-[85px] max-md:w-[90px] max-md:h-[55px] max-sm:w-[100px] max-sm:h-[60px]'
                        />
                        <div className='flex flex-col gap-6 max-sm:gap-3 w-[170px] text-center'>
                            <h5 className='text-lg-h5  max-md:text-md-h5 max-sm:text-sm-h5'>Copyright © 2022 The Crypto University.</h5>
                            <h5 className='text-lg-h5  max-md:text-md-h5 max-sm:text-sm-h5'>All rights reserved.</h5>
                        </div>
                    </div>

                    <div className='flex gap-[95px] max-md:gap-[40px]'>
                        <div className='flex flex-col gap-[26px] max-sm:gap-[15px]'>
                            <h5 className='text-lg-link  max-md:text-md-link max-sm:text-sm-link cursor-pointer'>Courses</h5>
                            <h5 className='text-lg-link  max-md:text-md-link max-sm:text-sm-link cursor-pointer'>Mentorship</h5>
                            <h5 className='text-lg-link  max-md:text-md-link max-sm:text-sm-link cursor-pointer'>Arbitrage Calculator</h5>
                            <h5 className='text-lg-link  max-md:text-md-link max-sm:text-sm-link cursor-pointer'>Resources</h5>
                            <h5 className='text-lg-link  max-md:text-md-link max-sm:text-sm-link cursor-pointer'>Affiliates</h5>
                            <h5 className='text-lg-link  max-md:text-md-link max-sm:text-sm-link cursor-pointer'>Cryptoguide</h5>
                        </div>

                        <div className='flex flex-col gap-[26px] max-sm:gap-[15px]'>
                            <h5 className='text-lg-link  max-md:text-md-link max-sm:text-sm-link cursor-pointer'>About us</h5>
                            <h5 className='text-lg-link  max-md:text-md-link max-sm:text-sm-link cursor-pointer'>Earn money</h5>
                            <h5 className='text-lg-link  max-md:text-md-link max-sm:text-sm-link cursor-pointer'>FAQs</h5>
                            <h5 className='text-lg-link  max-md:text-md-link max-sm:text-sm-link cursor-pointer'>Events</h5>
                            <h5 className='text-lg-link  max-md:text-md-link max-sm:text-sm-link cursor-pointer'>Signals</h5>
                            <h5 className='text-lg-link  max-md:text-md-link max-sm:text-sm-link cursor-pointer'>Jobs</h5>
                        </div>

                        <div className='flex flex-col gap-[26px] max-sm:gap-[15px]'>
                            <h5 className='text-lg-link  max-md:text-md-link max-sm:text-sm-link cursor-pointer'>Blog</h5>
                            <h5 className='text-lg-link  max-md:text-md-link max-sm:text-sm-link cursor-pointer'>Contact us</h5>
                            <div></div>
                            <div className='flex gap-[24px]'>
                                <Image
                                    priority
                                    src="/Socials/facebook.svg"
                                    height={37}
                                    width={37}
                                    alt="facebook icon"
                                    className='  cursor-pointer w-[37px] h-[37px] max-md:w-[20px] max-md:h-[20px] max-sm:w-[15px] max-sm:h-[15px]'
                                />
                                <Image
                                    priority
                                    src="/Socials/instagram.svg"
                                    height={37}
                                    width={37}
                                    alt="instagram icon"
                                    className=' cursor-pointer  w-[37px] h-[37px] max-md:w-[20px] max-md:h-[20px] max-sm:w-[15px] max-sm:h-[15px]'
                                />
                                <Image
                                    priority
                                    src="/Socials/youtube.svg"
                                    height={37}
                                    width={37}
                                    alt="youtube icon"
                                    className=' cursor-pointer  w-[37px] h-[37px] max-md:w-[20px] max-md:h-[20px] max-sm:w-[15px] max-sm:h-[15px]'
                                />
                            </div>
                            <div className='flex gap-[24px]'>
                                <Image
                                    priority
                                    src="/Socials/discord.svg"
                                    height={37}
                                    width={37}
                                    alt="discord icon"
                                    className='  cursor-pointer w-[37px] h-[37px] max-md:w-[20px] max-md:h-[20px] max-sm:w-[15px] max-sm:h-[15px]'
                                />
                                <Image
                                    priority
                                    src="/Socials/twitter.svg"
                                    height={37}
                                    width={37}
                                    alt="twitter icon"
                                    className=' cursor-pointer  w-[37px] h-[37px] max-md:w-[20px] max-md:h-[20px] max-sm:w-[15px] max-sm:h-[15px]'
                                />
                                <Image
                                    priority
                                    src="/Socials/telegram.svg"
                                    height={37}
                                    width={37}
                                    alt="telegram icon"
                                    className=' cursor-pointer  w-[37px] h-[37px] max-md:w-[20px] max-md:h-[20px] max-sm:w-[15px] max-sm:h-[15px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <h5 className='text-lg-link  max-md:text-md-link max-sm:text-sm-link opacity-50 cursor-pointer'>Privacy Policy  |  Terms of Service </h5>
                    <h5 className='text-lg-link  max-md:text-md-link max-sm:text-sm-link opacity-50 cursor-pointer'>Returns & Exchange Policy</h5>
                </div>
            </div>

        </div>
    )
}

export default index