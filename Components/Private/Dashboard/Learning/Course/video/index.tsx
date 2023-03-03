
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Files from './Files'

const index = () => {
    return (
        <div className='flex flex-col py-[40px] max-md:py-[25px] max-sm:py-[15px] px-3 gap-[70px] max-md:gap-[40px] max-sm:gap-[20px]'>
            <div className='flex flex-col gap-[40px] max-md:gap-[25px] max-sm:gap-[15px]'>
                <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'><span className='opacity-50'>Learning </span>&gt; Crypto Automated Trading Course</h5>
                {/* Video */}
                <div className='w-full h-[600px] bg-black/20 border'></div>
            </div>

            <div className='flex flex-col gap-[60px]  pb-[60px] max-md:gap-[40px] max-sm:gap-[25px] max-md:pb-[30px] max-sm:pb-[20px] '>
                <div className='flex flex-col w-full  border-b pb-[60px]'>
                        <h3 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3 opacity-50'> &#9733; You will earn 750 points</h3>
                        <div className='flex justify-between items-center w-full '>
                            <h1 className='text-lg-h1 max-md:text-md-h1 max-sm:text-sm-h1'>Hello, world!</h1>
                            <button className='flex'>
                                <Link href={""} className="uppercase px-[62px] py-[30px] max-md:px-[40px] max-md:py-[25px] max-sm:px-[10px] max-sm:py-[10px] text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 shadow-buttom bg-btn text-black">
                                    <div className='flex gap-[24px]'>
                                        Quiz
                                        <Image
                                            priority
                                            src="/Icons/ArrowBlack.svg"
                                            height={20}
                                            width={31}
                                            alt="Arrow"
                                            className='w-auto h-auto max-md:w-[30px] max-sm:w-[20px] max-sm:h-auto'
                                        />
                                    </div>
                                </Link>
                            </button>
                        </div>
                    

                </div>
                <p className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 '>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy
                </p>
            </div>

            <div className='flex flex-col gap-[32px] max-md:gap-[25px] max-sm:gap-[15px]'>
                <h2 className='text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2'>Files</h2>
                <Files />
            </div>
        </div>
    )
}

export default index