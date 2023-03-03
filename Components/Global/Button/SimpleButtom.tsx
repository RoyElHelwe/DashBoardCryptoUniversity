import React from 'react'
import Link from 'next/link'
const PrimaryMedium = ({url, value}:any) => {
  return (
    <button className='flex'><Link href={url} className="uppercase py-[30px] px-[] max-md:py-[20px]  max-sm:py-[15px] text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5 w-full  bg-btn text-black">{value}</Link></button>
  )
}

export default PrimaryMedium