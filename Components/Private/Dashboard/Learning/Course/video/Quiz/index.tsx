import React, { useState } from 'react'
import Questions from './Questions'

const Quiz = () => {
  const [answerIsTrue , setAnserIsTrue] = useState(false) // hon bdi a3ml eza jewab 8alat ma by3ti points w bi5ale bs y3id lsaf ama eza jewab sa7 by3ti lpoints w bi2elo next topic
  return (
    <div className='flex flex-col py-[40px] max-md:py-[25px] max-sm:py-[15px] px-3 gap-[70px] max-md:gap-[40px] max-sm:gap-[20px]'>
      <div className='flex flex-col gap-[40px] max-md:gap-[25px] max-sm:gap-[15px]'>
        <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'><span className='opacity-50'>Learning </span>&gt; Crypto Automated Trading Course</h5>
        <div className='flex flex-col w-full gap-[10px]  border-b pb-[50px] max-sm:pb-[20px]'>
          <h3 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3 opacity-50'> &#9733; You will earn 750 points</h3>
          <h1 className='text-lg-h1 max-md:text-md-h1 max-sm:text-sm-h1'><span className='opacity-50'>Hello, world!</span> | Quiz</h1>
        </div>
      </div>
      <Questions numberQ={2} question={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal "} yesNoQ={true} answerArray={[""]} trueAnswer={"No"} />
    </div>
  )
}

export default Quiz