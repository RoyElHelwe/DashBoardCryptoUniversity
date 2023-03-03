import React from 'react'

const index = ({txt}:any) => {
    return (
            <div className="flex justify-start z-[1] overflow-hidden py-[28px] bg-purple">
                <p className="whitespace-nowrap text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2 select-none pr-[8rem]  animate-marquee">{txt}</p>
                <p className="whitespace-nowrap text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2 select-none pr-[8rem]  animate-marquee">{txt}</p>
                <p className="whitespace-nowrap text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2 select-none pr-[8rem]  animate-marquee">{txt}</p>
                <p className="whitespace-nowrap text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2 select-none pr-[8rem]  animate-marquee">{txt}</p>
                <p className="whitespace-nowrap text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2 select-none pr-[8rem]  animate-marquee">{txt}</p>
                <p className="whitespace-nowrap text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2 select-none pr-[8rem]  animate-marquee">{txt}</p>
             </div>
    )
}

export default index