import React from 'react'

const PaymentOption = ({img,option}:any) => {
  return (
    <div className='px-[30px] py-[25px] max-sm:py-[15px] max-sm:px-[10px] bg-orange flex flex-col items-center gap-[45px] max-sm:gap-[20px]'>
        <h4 className='bg-black px-[12px] py-[16px] text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>Icon</h4>
        <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 text-black w-[100px] max-sm:w-[70px] text-center'>{option}</h4>
    </div>
  )
}

export default PaymentOption