import React from 'react'
import BtnPrimary from '../../../Global/Button/primary'
const index = () => {
    return (
        <div className='bg-blue py-[100px] max-sm:py-[40px] w-full'>
            <div className='container mx-auto text-white px-3 flex flex-col items-center max-md:items-start'>
                <div className='flex shadow-register'>
                    <div className='border-r flex-1 justify-center border-white flex flex-col gap-[38px] bg-black py-[47px] px-[55px] max-md:py-[40px] max-md:px-[10px]'>
                        <h2 className='text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2'>Register for your start</h2>
                        <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 w-[430px] max-md:w-full opacity-50'>A special package deal of all of our best courses. you can start from 0 and become an expert.</h4>
                        <BtnPrimary url={""} value={"Earn now"} />
                    </div>

                    <div className='border-r flex-1 border-white flex flex-col max-sm:gap-[15px]  gap-[38px] bg-black py-[90px] px-[120px] max-md:py-[0px] max-md:px-[20px] max-md:justify-center'>
                        <div className='flex items-center gap-[13px] '>
                            <input type="checkbox" name="checkbox-one" id="checkbox-one" className="checked:bg-transparent checked:border-2 checked:border-white focus:ring-0 focus:bg-transparent focus:outline-none checked:focus:ring-0 checked:focus:bg-transparent hover:bg-white/10 checked:hover:bg-transparent checked:hover:border-2 checked:hover:border-white shadow-checked border-white bg-transparent cursor-pointer w-[35px] h-[35px] max-md:w-[25px] max-md:h-[25px] max-sm:w-[20px] max-sm:h-[20px] border-2  " />
                            <h3 className='text-lg-h3 max-md:text-md-h4 max-sm:text-sm-h4 w-full'>Basics Course</h3>
                        </div>
                        <div className='flex items-center gap-[13px]'>
                            <input type="checkbox" name="checkbox-one" id="checkbox-one" className="checked:bg-transparent checked:border-2 checked:border-white focus:ring-0 focus:bg-transparent focus:outline-none checked:focus:ring-0 checked:focus:bg-transparent hover:bg-white/10 checked:hover:bg-transparent checked:hover:border-2 checked:hover:border-white shadow-checked border-white bg-transparent cursor-pointer w-[35px] h-[35px] max-md:w-[25px] max-md:h-[25px] max-sm:w-[20px] max-sm:h-[20px] border-2  " />
                            <h3 className='text-lg-h3 max-md:text-md-h4 max-sm:text-sm-h4'>Trading Course</h3>
                        </div>
                        <div className='flex items-center gap-[13px]'>
                            <input type="checkbox" name="checkbox-one" id="checkbox-one" className="checked:bg-transparent checked:border-2 checked:border-white focus:ring-0 focus:bg-transparent focus:outline-none checked:focus:ring-0 checked:focus:bg-transparent hover:bg-white/10 checked:hover:bg-transparent checked:hover:border-2 checked:hover:border-white shadow-checked border-white bg-transparent cursor-pointer w-[35px] h-[35px] max-md:w-[25px] max-md:h-[25px] max-sm:w-[20px] max-sm:h-[20px] border-2  " />
                            <h3 className='text-lg-h3 max-md:text-md-h4 max-sm:text-sm-h4'>Investing Course</h3>
                        </div>
                        <div className='flex items-center gap-[13px]'>
                            <input type="checkbox" name="checkbox-one" id="checkbox-one" className="checked:bg-transparent checked:border-2 checked:border-white focus:ring-0 focus:bg-transparent focus:outline-none checked:focus:ring-0 checked:focus:bg-transparent hover:bg-white/10 checked:hover:bg-transparent checked:hover:border-2 checked:hover:border-white shadow-checked border-white bg-transparent cursor-pointer w-[35px] h-[35px] max-md:w-[25px] max-md:h-[25px] max-sm:w-[20px] max-sm:h-[20px] border-2  " />
                            <h3 className='text-lg-h3 max-md:text-md-h4 max-sm:text-sm-h4'>NFT Course</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index