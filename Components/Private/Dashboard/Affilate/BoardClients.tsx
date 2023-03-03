import React from 'react'
import Clients from './Clients'

const BoardClients = ({title}:any) => {
    return (
        <div className='py-[20px] px-[38px] max-sm:px-[10px] max-sm:py-[10px] bg-black flex flex-col text-white gap-[18px] max-sm:gap-[10px]'>
            <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>{title}</h4>
            <div className='flex flex-col gap-[14px]'>
                <div className="grid grid-cols-12">
                    <div className='col-span-4 text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Clients</div>
                    <div className='col-span-7 text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Joined</div>
                    <div className='col-span-1 text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Purchased</div>
                </div>
                <div className='flex flex-col gap-[10px] w-full'>
                    <Clients/>
                    <Clients/>
                    <Clients/>
                </div>
            </div>
        </div>
    )
}

export default BoardClients