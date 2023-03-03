import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const index = () => {
    return (
        <div className='pt-[1.25rem]'>
            <div className='grid grid-cols-12 border-b place-items-center'>
                <div className='col-span-3 max-sm:col-span-5 w-full'>
                    <div className='flex gap-[14px] max-md:gap-[10px] max-sm:gap-[5px] items-center border-r'>
                        <Image
                            priority
                            src="/Header/profile.svg"
                            height={1080}
                            width={720}
                            alt="Profile Icon"
                            className='w-[50px] h-[50px] max-md:w-[30px] max-md:h-[30px]'
                        />
                        <div className='flex flex-col pr-4'>
                            <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 font-semibold'>Kavia Simora</h5>
                            <h5 className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>Level 07: explorer</h5>
                        </div>
                    </div>
                </div>
                <div className=' pl-4 col-start-4 max-sm:col-start-6 col-span-8 max-sm:col-span-6 w-full flex items-center border-r h-full    '>
                    <div className='flex items-center gap-[40px] max-md:gap-[30px] max-sm:gap-[20px] w-full'>
                        <Link href={""} className="text-lg-link max-md:text-md-link max-sm:text-sm-link">Blog</Link>
                        <Link href={""} className="text-lg-link max-md:text-md-link max-sm:text-sm-link">Coaching</Link>
                        <Link href={""} className="text-lg-link max-md:text-md-link max-sm:text-sm-link">Events</Link>
                    </div>
                </div>
                <div className=' col-start-12 col-span-1 flex items-center'>
                    <Link className='pl-2' href={""}>
                        <Image
                            priority
                            src="/Icons/Exit.svg"
                            height={1080}
                            width={720}
                            alt="Profile Icon"
                            className='w-[20px] h-[20px] max-md:w-[15px] max-md:h-[15px]'
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default index