import React, { useState } from 'react'
import Image from 'next/image'
const PopUp = ({setClose , close}:any) => {
    
    return (
        <div className={ close ? "hidden  bg-black/50 z-10 inset-0  justify-center items-center" : " fixed  bg-black/50 z-10 inset-0 flex justify-center items-center "}>
            <div className='bg-white relative py-[54px] flex flex-col '>
                <div onClick={() => setClose(true)} className='absolute cursor-pointer top-4 right-4'>
                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2.35819" y1="1.25704" x2="29.8256" y2="28.7244" stroke="black" strokeWidth="2.22708" />
                        <line x1="1.5256" y1="28.7243" x2="28.993" y2="1.25696" stroke="black" strokeWidth="2.22708" />
                    </svg>

                </div>
                <div className='border-b'>
                    <div className='flex items-center gap-[40px] px-[50px] pb-[50px] max-md:gap-[30px] max-md:px-[40px] max-md:pb-[40px] max-sm:gap-[10px] max-sm:px-[20px] max-md:sm-[20px] '>
                        <h2 className='border text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2  py-[35px] px-[25px] max-md:py-[30px] max-md:px-[20px] max-sm:py-[25px] max-sm:px-[15px] bg-black text-white'>ICON</h2>
                        <h2 className='text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2 max-w-[420px] max-md:max-w-[300px] max-sm:w-[200px] flex items-start '>Invite your friend and earn bonus</h2>
                    </div>
                </div>


                <div className='flex flex-col text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2 gap-[10px] items-center pt-[20px]'>
                    <div className='flex gap-[17px] items-center'>
                        <h2>Refferal link: lnk/tr3235</h2>
                        <Image
                            priority
                            src="/Icons/copy.svg"
                            height={30}
                            width={30}
                            alt="Copy"
                            className='w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px]'
                        />
                    </div>
                    <h2>Invite Code: 6B892</h2>
                </div>
            </div>
        </div>
    )
}

export default PopUp