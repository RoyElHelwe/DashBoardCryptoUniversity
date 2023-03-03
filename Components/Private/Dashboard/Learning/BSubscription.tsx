import React from 'react'
import ButtonPrimary from '../../../Global/Button/primary'
import Media from '../../Home/Media'
const BSubscription = ({ setSub }: any) => {
    return (
        <div className='py-[20px] max-sm:py-[10px]'>
            <div className='bg-black flex flex-col justify-center  gap-[90px]  p-[60px] max-sm:px-[10px] '>
                <div className='flex justify-between items-center max-sm:flex-wrap max-sm:gap-4'>
                    <div className='flex flex-col flex-[3] w-[700px] max-sm:w-full'>
                        <h2 className=' text-white text-lg-h2 max-md:text-md-h2 max-sm:text-md-h2 opacity-50 '>Let us help you make money on cryptocurrencies.</h2>
                        <h2 className=' text-white text-lg-h2 max-md:text-md-h2 max-sm:text-md-h2 ' >All courses in one subscription</h2>
                    </div>
                    <div onClick={()=>setSub(true) }>
                        <ButtonPrimary url="" value="buy it now" />
                    </div>
                </div>

                <div className='flex flex-col bg-white border border-black  '>
                    <div className='flex border items-center border-black '>
                        <div className='flex flex-col py-[60px] gap-[30px]  max-md:px-[25px] max-sm:px-[4px] justify-center items-center border-black border-r flex-1'>
                            <div className='flex flex-col items-center '>
                                <h1 className='text-[150px] max-md:text-[100px] max-sm:text-[60px] font-bold opacity-30'>$322</h1>
                                <h3 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3 '>for year learning</h3>
                            </div>

                        </div>

                        <div className=' flex flex-col justify-center items-center  gap-[45px] max-md:py-[15px] max-md:px-[20px] max-sm:py-[15px] max-sm:px-[4px] max-md:gap-[30px] max-md:justify-center flex-1 '>
                            <div className='flex flex-col gap-[30px] max-sm:gap-[10px]'>
                                <div className='flex items-center gap-[17px] max-sm:gap-[13px] '>
                                    <input type="checkbox" name="checkbox-one" id="checkbox-one" className="checked:bg-black checked:border-2 checked:border-black focus:ring-0 focus:bg-transparent focus:outline-none checked:focus:ring-0 checked:focus:bg-black hover:bg-white/10 checked:hover:bg-black checked:hover:border-2 checked:hover:border-black shadow-checkedBlack border-black bg-transparent cursor-pointer w-[35px] h-[35px] max-md:w-[25px] max-md:h-[25px] max-sm:w-[15px] max-sm:h-[15px] border-2  " />
                                    <h3 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>Basics Course</h3>
                                </div>
                                <div className='flex items-center gap-[17px] max-sm:gap-[13px] '>
                                    <input type="checkbox" name="checkbox-one" id="checkbox-one" className="checked:bg-black checked:border-2 checked:border-black focus:ring-0 focus:bg-transparent focus:outline-none checked:focus:ring-0 checked:focus:bg-black hover:bg-white/10 checked:hover:bg-black checked:hover:border-2 checked:hover:border-black shadow-checkedBlack border-black bg-transparent cursor-pointer w-[35px] h-[35px] max-md:w-[25px] max-md:h-[25px] max-sm:w-[15px] max-sm:h-[15px] border-2  " />
                                    <h3 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>Trading Course</h3>
                                </div>
                                <div className='flex items-center gap-[17px] max-sm:gap-[13px] '>
                                    <input type="checkbox" name="checkbox-one" id="checkbox-one" className="checked:bg-black checked:border-2 checked:border-black focus:ring-0 focus:bg-transparent focus:outline-none checked:focus:ring-0 checked:focus:bg-black hover:bg-white/10 checked:hover:bg-black checked:hover:border-2 checked:hover:border-black shadow-checkedBlack border-black bg-transparent cursor-pointer w-[35px] h-[35px] max-md:w-[25px] max-md:h-[25px] max-sm:w-[15px] max-sm:h-[15px] border-2  " />
                                    <h3 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>Investing Course</h3>
                                </div>
                                <div className='flex items-center gap-[17px] max-sm:gap-[13px] '>
                                    <input type="checkbox" name="checkbox-one" id="checkbox-one" className="checked:bg-black checked:border-2 checked:border-black focus:ring-0 focus:bg-transparent focus:outline-none checked:focus:ring-0 checked:focus:bg-black hover:bg-white/10 checked:hover:bg-black checked:hover:border-2 checked:hover:border-black shadow-checkedBlack border-black bg-transparent cursor-pointer w-[35px] h-[35px] max-md:w-[25px] max-md:h-[25px] max-sm:w-[15px] max-sm:h-[15px] border-2  " />
                                    <h3 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>NFT Course</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=''>
                        <Media />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BSubscription