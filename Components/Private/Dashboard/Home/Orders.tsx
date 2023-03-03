import React from 'react'

const Orders = ({name,date,IsSale,sale,price}:any) => {
    if(!IsSale){
        sale = 0
    }
    return (
        <div className='grid grid-cols-10 gap-6 max-md:gap-0 px-[30px] max-md:px-[10px] '>
            <div className='col-span-4 flex items-center gap-[30px] max-md:gap-[20px] max-sm:gap-[10px] max-sm:col-span-5  '>
                <input type="checkbox" name="checkbox-one" id="checkbox-one" className="checked:bg-black checked:border-2  checked:border-white focus:ring-0 focus:bg-transparent focus:outline-none checked:focus:ring-0 checked:focus:bg-black hover:bg-white/10 checked:hover:bg-black checked:hover:border-2 checked:hover:border-white shadow-checked border-white bg-transparent cursor-pointer w-[45px] h-[45px] max-md:w-[25px] max-md:h-[25px] max-sm:w-[20px] max-sm:h-[20px] border-2  " />
                <div className='flex flex-col'>
                    <h3 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3'>{name}</h3>
                    <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 font-semibold'>{date}</h5>
                </div>
            </div>
            <div className='col-span-5 flex  items-center gap-[40px] max-md:gap-[30px] max-sm:gap-[20px] max-md:col-span-4 max-sm:col-span-3 '>
                <div className='border-t w-full' />
                <h3 className={IsSale ? "text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3 opacity-50 line-through " : "hidden"}>(${price})</h3>
            </div>
            <div className='col-span-1 flex flex-col justify-center items-center gap-2  max-md:col-span-2 '>
                <h3 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3'>${Math.floor(price - (price*sale/100))}</h3>
                <h5 className={IsSale ? 'text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 bg-white text-black py-1 px-3 font-semibold': "hidden"}>{sale}$ SALE</h5>
            </div>
        </div>
    )
}

export default Orders