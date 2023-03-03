import PrimaryMedium from '@/Components/Global/Button/PrimaryMedium'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function Files() {
    return (
        <div className='flex py-[22px] justify-between items-center border-y border-black'>
            <div className='flex gap-[30px] items-center '>
                <div className='flex relative items-center justify-center'>
                    <Image
                        priority
                        src="/Icons/FolderIcon.svg"
                        height={70}
                        width={70}
                        alt="Folder"
                        className='w-auto h-auto max-sm:w-[20px] max-sm:h-auto'
                    />
                    <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 text-white absolute pt-[10px]'>PDF</h4>
                </div>
                <h3 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3'>A start guide (.pdf)</h3>
            </div>
            <button><Link href={""} className="uppercase px-[62px] py-[30px] max-md:px-[25px] max-md:py-[25px] max-sm:px-[10px] max-sm:py-[15px] text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 shadow-buttom bg-btn text-black">Download</Link></button>
        </div>
    )
}

export default Files
