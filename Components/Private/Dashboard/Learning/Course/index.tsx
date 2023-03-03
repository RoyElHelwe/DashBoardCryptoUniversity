import React from 'react'
import Lessons from './LessonCard'
import BarProgress from '../../../../Global/Dashboard/ProgressBar/Bar'
const index = () => {
    return (
        <div className='flex flex-col py-[40px] max-md:py-[25px] max-sm:py-[15px] px-3 gap-[70px] max-md:gap-[40px] max-sm:gap-[20px]'>
            <div className='flex flex-col gap-[40px] max-md:gap-[25px] max-sm:gap-[15px]'>
                <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'><span className='opacity-50'>Learning </span>&gt; Crypto Automated Trading Course</h5>
                {/* IMAGE */}
                <div className='w-full h-[600px] bg-black/20 border'></div>
            </div>

            <div className='flex flex-col gap-[60px]  pb-[60px] max-md:gap-[40px] max-sm:gap-[25px] max-md:pb-[30px] max-sm:pb-[20px] border-b'>
                <div className='flex flex-col gap-[30px] max-md:gap-[20px] max-sm:gap-[10px]'>
                    <div className='flex flex-col gap-[20px] max-md:gap-[15px] max-sm:gap-[10px]'>
                        <h3 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3 opacity-50'> &#9733; 8300 points for course</h3>
                        <h1 className='text-lg-h1 max-md:text-md-h1 max-sm:text-sm-h1'>Eth Smart Contract Development Course</h1>
                    </div>
                    <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 opacity-50'>6 hours  |  16 modules </h4>
                </div>
                <div className='flex flex-col gap-[40px] border-y py-[60px]'>
                    <div className='flex justify-between'>
                        <h2 className='text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2'>Lesson progress</h2>
                        <h2 className='text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2'>75/<span className='opacity-50'>100%</span></h2>
                    </div>
                    <BarProgress progress={75} color="bg-black" />
                </div>
                <p className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy
                </p>
            </div>

            <div className='flex flex-col gap-[32px] max-md:gap-[25px] max-sm:gap-[15px]'>
                <h2 className='text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2'>Lessons</h2>
                <Lessons />
            </div>
        </div>
    )
}

export default index