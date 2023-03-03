import React from 'react'

const BoxCounter = ({title, number}:any) => {
  return (
    <div className='flex flex-col pt-[10px] pb-[5px] pl-[19px] pr-[16px] max-sm:pt-[6px] max-sm:pb-[4px]  bg-black text-white '>
        <h5 className=' text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5  w-[100px] max-md:w-[80px] max-sm:w-[50px] '>{title}</h5>
        <h2 className=' text-lg-number text-right max-md:text-md-number max-sm:text-sm-number  '>{number}</h2>
    </div>
  )
}

export default BoxCounter 