import React from 'react'
import Image from 'next/image'
import Card from './Card'

const index = () => {
    return (
        <div className='bg-black py-[110px] w-full max-sm:py-[40px]'>
            <div className='container mx-auto text-black px-3 flex flex-wrap justify-between gap-[40px] max-sm:flex-col'>
                
                <div className='flex flex-wrap justify-between gap-[40px] max-sm:flex-col'>
                    <Card icon={"/Path/trading.svg"} title={"Upcoming Events"} sub={"Explore our weekly webinars and new events to grow your crypto knowledge."} color={"bg-pink"} />
                    <Card icon={"/Path/gaming.svg"} title={"CU Gaming"} sub={"Through our scholarship program we enable our scholars to PLAY2EARN."} color={"bg-green"}/>
                    <Card icon={"/Path/earn.svg"} title={"Earn Money"} sub={"Do a small task and Earn upto $100 today."} color={"bg-orange"}/>
                    <Card icon={"/Path/guide.svg"} title={"Crypto Guide"} sub={"Master the art of cryptocurrency with our in-depth guides and learn all the basics"} color={"bg-sky"}/>
                    <Card icon={"/Path/affiliates.svg"} title={"Affiliates Area"} sub={"Become a Crypto University affiliate and start earning today!"} color={"bg-yellow"}/>
                    <Card icon={"/Path/blog.svg"} title={"CU Blog"} sub={"Articles on NFTs, Cryptocurrency, Blockchain & Daily news to stay updated."} color={"bg-purple"}/>
                </div>
            </div>
        </div>
    )
}

export default index