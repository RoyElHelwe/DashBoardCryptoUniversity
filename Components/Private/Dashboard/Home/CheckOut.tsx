import React from 'react'
import Orders from './Orders'
import PaymentOption from './PaymentOption'
const CheckOut = () => {
    return (
        <div className='flex flex-col pt-[40px] bg-black text-white justify-center'>
            <div className='flex flex-col justify-center gap-[30px] max-sm:gap-[15px]'>
                <h2 className='text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2 px-[30px] max-md:px-[10px]'>Your Cart</h2>
                <div className='flex flex-col gap-[35px] border-b pb-[60px] max-sm:pb-[30px]'>
                    <Orders name={"Basics Course"} date={"for year(up to 31/12/22)"} IsSale={true} sale={50} price={255} />
                    <Orders name={"Basics Course"} date={"for year(up to 31/12/22)"} IsSale={false} sale={50} price={255} />
                    <Orders name={"Basics Course"} date={"for year(up to 31/12/22)"} IsSale={false} sale={50} price={255} />
                    <Orders name={"Basics Course"} date={"for year(up to 31/12/22)"} IsSale={false} sale={50} price={255} />
                </div>
            </div>
            <div className="grid grid-cols-4 ">
                <div className='col-span-3 border-r max-sm:col-span-4'>
                    <div className='py-[30px] flex flex-col gap-[30px] px-[30px] max-md:px-[10px]'>
                        <h3 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3  '>Choose you payment option:</h3>
                        <div className='flex gap-[22px] flex-wrap max-sm:justify-around'>
                            <PaymentOption option={"Card"} />
                            <PaymentOption option={"PayPal"} />
                            <PaymentOption option={"Crypto"} />
                            <PaymentOption option={"Metamask"} />
                            <PaymentOption option={"Wallet Connection"} />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 max-sm:col-span-4 ">
                    <div className='grid grid-rows-2 h-full'>
                        <div className='row-span-1 border-b max-sm:border-y'>
                            <div className='flex flex-col items-center justify-center h-full gap-[10px] max-sm:py-[10px]'>
                                <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>Coupon code:</h4>
                                <div className='relative w-[200px] max-md:w-[150px] h-[55px]'>
                                    <input type="text" className='relative w-full h-full text-black' />
                                    <button className='w-[45px] h-[45px] bg-black absolute top-[5px] right-[5px] flex items-center justify-center'>
                                        <svg width="25" height="8" viewBox="0 0 25 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z" fill="white" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='row-span-1  '>
                            <div className='flex flex-col items-center justify-center h-full'>
                                <h3 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3'>Summary:</h3>
                                <h1 className='text-lg-h1 max-md:text-md-h1 max-sm:text-sm-h1'>$2550</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut