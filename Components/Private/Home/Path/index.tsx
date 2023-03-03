import React from 'react'
import Image from 'next/image'
import Card from './Card'

const index = () => {
    return (
        <div className='bg-blue py-[110px] max-md:py-[60px] max-sm:py-[40px] w-full'>
            <div className='container mx-auto flex flex-col text-black px-3 gap-[65px] max-sm:gap-[40px]'>
                <div className='flex items-center gap-[12px]'>
                    <Image
                        priority
                        src="/Icons/arrow.svg"
                        height={62}
                        width={55}
                        alt="Arrow Icon"
                        className='  w-[40px] h-[45px] max-md:w-[30px] max-md:h-[35px] max-sm:w-[20px] max-sm:h-[25px]'
                    />
                    <h2 className='text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2 '>Find your path</h2>
                </div>
                <div className='flex flex-wrap justify-between gap-[40px] max-sm:flex-col'>
                    <Card icon={"/Path/trading.svg"} title={"Trading"} sub={"32 hours for learn"} color={"bg-pink"} />
                    <Card icon={"/Path/investing.svg"} title={"Investing"} sub={"56 hours for learn"} color={"bg-green"}/>
                    <Card icon={"/Path/gaming.svg"} title={"Gaming"} sub={"48 hours for learn"} color={"bg-orange"}/>
                    <Card icon={"/Path/develop.svg"} title={"Develop"} sub={"32 hours for learn"} color={"bg-sky"}/>
                    <Card icon={"/Path/corporate.svg"} title={"Corporate"} sub={"56 hours for learn"} color={"bg-yellow"}/>
                    <Card icon={"/Path/coaching.svg"} title={"Coaching"} sub={"48 hours for learn"} color={"bg-purple"}/>

                </div>
            </div>
        </div>
    )
}

export default index