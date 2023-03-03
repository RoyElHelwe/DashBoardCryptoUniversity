import React from 'react'
import Link from 'next/link'
const PrimaryMedium = ({url, value}:any) => {
  return (
    <button className='flex'><Link href={url} className="uppercase px-[30px] py-[30px] max-md:px-[25px] max-md:py-[25px] max-sm:px-[10px] max-sm:py-[15px] text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 shadow-buttom bg-btn text-black">{value}</Link></button>
  )
}

export default PrimaryMedium