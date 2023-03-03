import React from 'react'
import Image from 'next/image'
import ButtonPrimary from '../../../Global/Button/primary'
const BSubscription = ({ setSubscription }: any) => {
    return (
        <div className=''>
            <div className='flex flex-col px-2 py-[2.375rem] max-md:py-[2rem] max-sm:py-[1.7rem] gap-[0.875rem] '>
                <h1 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3'>Subscription</h1>
                <div className='flex border border-black '>
                    <div className='flex flex-col gap-[30px] px-[32px] max-md:px-[25px] max-sm:px-[4px] justify-center items-center border-black border-r flex-1'>
                        <div className='flex flex-col items-center '>
                            <h1 className='text-lg-h1 opacity-30'>$322</h1>
                            <h3 className='text-lg-h4 max-md:text-md-h3 max-sm:text-sm-h3 '>for year learning</h3>
                        </div>
                        <div onClick={() => setSubscription(true)}>
                            <ButtonPrimary url="" value="Buy it now" />
                        </div>
                    </div>

                    <div className=' flex flex-col  gap-[45px] py-[20px] px-[20px] max-md:py-[15px] max-md:px-[20px] max-sm:py-[15px] max-sm:px-[4px] max-md:gap-[30px] max-md:justify-center flex-1 '>
                        <h3 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3 max-w-[260px] '>All courses in one subscription</h3>
                        <div className='flex flex-col gap-[15px]'>
                            <div className='flex items-center gap-[17px] max-sm:gap-[13px] '>
                                <input type="checkbox" name="checkbox-one" id="checkbox-one" className="checked:bg-black checked:border-2 checked:border-black focus:ring-0 focus:bg-transparent focus:outline-none checked:focus:ring-0 checked:focus:bg-black hover:bg-white/10 checked:hover:bg-black checked:hover:border-2 checked:hover:border-black shadow-checkedBlack border-black bg-transparent cursor-pointer w-[35px] h-[35px] max-md:w-[25px] max-md:h-[25px] max-sm:w-[20px] max-sm:h-[20px] border-2  " />
                                <h3 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h3'>Basics Course</h3>
                            </div>
                            <div className='flex items-center gap-[17px] max-sm:gap-[13px] '>
                                <input type="checkbox" name="checkbox-one" id="checkbox-one" className="checked:bg-black checked:border-2 checked:border-black focus:ring-0 focus:bg-transparent focus:outline-none checked:focus:ring-0 checked:focus:bg-black hover:bg-white/10 checked:hover:bg-black checked:hover:border-2 checked:hover:border-black shadow-checkedBlack border-black bg-transparent cursor-pointer w-[35px] h-[35px] max-md:w-[25px] max-md:h-[25px] max-sm:w-[20px] max-sm:h-[20px] border-2  " />
                                <h3 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h3'>Trading Course</h3>
                            </div>
                            <div className='flex items-center gap-[17px] max-sm:gap-[13px] '>
                                <input type="checkbox" name="checkbox-one" id="checkbox-one" className="checked:bg-black checked:border-2 checked:border-black focus:ring-0 focus:bg-transparent focus:outline-none checked:focus:ring-0 checked:focus:bg-black hover:bg-white/10 checked:hover:bg-black checked:hover:border-2 checked:hover:border-black shadow-checkedBlack border-black bg-transparent cursor-pointer w-[35px] h-[35px] max-md:w-[25px] max-md:h-[25px] max-sm:w-[20px] max-sm:h-[20px] border-2  " />
                                <h3 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h3'>Investing Course</h3>
                            </div>
                            <div className='flex items-center gap-[17px] max-sm:gap-[13px] '>
                                <input type="checkbox" name="checkbox-one" id="checkbox-one" className="checked:bg-black checked:border-2 checked:border-black focus:ring-0 focus:bg-transparent focus:outline-none checked:focus:ring-0 checked:focus:bg-black hover:bg-white/10 checked:hover:bg-black checked:hover:border-2 checked:hover:border-black shadow-checkedBlack border-black bg-transparent cursor-pointer w-[35px] h-[35px] max-md:w-[25px] max-md:h-[25px] max-sm:w-[20px] max-sm:h-[20px] border-2  " />
                                <h3 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h3'>NFT Course</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BSubscription