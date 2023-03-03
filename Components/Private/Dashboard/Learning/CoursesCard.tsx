import React from 'react'
import SimpleButtom from '../../../Global/Button/SimpleButtom'
const CoursesCard = () => {
    return (
        <div className='flex flex-col px-[40px] py-[35px] max-md:px-[25px] max-md:py-[20px] max-sm:px-[15px] max-sm:py-[15px] gap-[50px] max-sm:gap-[20px] bg-black text-white'>
            <div className='flex flex-col gap-[30px] max-sm:gap-[15px]'>
                <div className='flex gap-2 items-center'>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.58228 0.619141L11.0541 5.79924L16.7445 6.54935L12.5818 10.5009L13.6268 16.1446L8.58228 13.4067L3.53774 16.1446L4.58278 10.5009L0.420047 6.54935L6.11045 5.79924L8.58228 0.619141Z" fill="white" />
                    </svg>
                    <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>8300 points for course</h5>
                </div>
                <div className='flex flex-col gap-[13px] max-sm:gap-[5px]'>
                    <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 w-[170px] max-sm:w-auto'>Crypto Automated Trading</h4>
                    <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 '>Learn how to make robots trade for you 24/7 and earn passive income.</h5>
                </div>
            </div>
            <div className='flex flex-col gap-[18px] w-full'>
                <SimpleButtom url="" value="Continue learning" />
                <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 flex justify-center'>6 hours  |  16 modules </h5>
            </div>
        </div>
    )
}

export default CoursesCard