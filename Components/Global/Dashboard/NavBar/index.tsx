import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
const index = () => {
    const router = useRouter();
    const page = router.pathname;

    return (
        <div className='sticky min-h-screen bg-black min-w-[7rem] py-[1.25rem] max-md:w-full max-md:min-h-[30px] max-md:py-[0] max-md:bottom-[0%] max-md:fixed z-10 '>
            <div className='flex flex-col  gap-[8.75rem] max-md:flex-row max-md:px-0  max-md:gap-[0px]'>
                <div className='flex items-center justify-center'>
                    <Image
                        priority
                        src="/Logo/logo.svg"
                        height={1080}
                        width={720}
                        alt="Logo Crypto University"
                        className='w-[5.25rem] h-[3.5rem] max-md:w-[5rem] max-md:h-[3rem] max-sm:h-[2.5rem] max-sm:w-[4rem]'
                    />
                </div>


                <div className='flex flex-col max-md:flex-row w-full max-md:justify-around   '>
                    <Link href="/dashboard" className={page == '/dashboard' ? "bg-white flex flex-col w-full justify-center items-center py-[1.375rem] gap-[0.65625rem] max-md:h-full max-md:w-[20%] max-md:py-[0.8rem] " : 'bg-black flex flex-col w-full justify-center items-center py-[1.375rem] gap-[0.65625rem] max-md:h-full max-md:w-[20%] max-md:py-[0.8rem]'}>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.8718 14.645V8.37056C17.8718 7.3985 17.4386 6.47788 16.6919 5.86301L12.6783 2.55807C11.4964 1.58481 9.7983 1.58481 8.61634 2.55808L4.60274 5.86302C3.85604 6.47788 3.42285 7.3985 3.42285 8.37056V14.645C3.42285 16.433 4.86041 17.8825 6.63373 17.8825H14.6609C16.4342 17.8825 17.8718 16.433 17.8718 14.645Z" stroke={page == "/dashboard" ? "black" : "white"} strokeWidth="1.20408" strokeLinejoin="round" />
                            <path d="M9.04297 14.6719H12.2538" stroke={page == "/dashboard" ? "black" : "white"} strokeWidth="1.20408" strokeLinecap="round" />
                        </svg>
                        <p className={page == '/dashboard' ? "text-black text-lg-link max-md:text-md-link max-sm:text-sm-link " : "text-white text-lg-link max-md:text-md-link max-sm:text-sm-link"} >Home</p>
                    </Link>

                    <Link href="/dashboard/learning" className={page.includes('/dashboard/learning') ? "bg-white flex flex-col w-full justify-center items-center py-[1.375rem] gap-[0.65625rem] max-md:h-full max-md:w-[20%] max-md:py-[0.8rem] " : 'bg-black flex flex-col w-full justify-center items-center py-[1.375rem] gap-[0.65625rem] max-md:h-full max-md:w-[20%] max-md:py-[0.8rem]'}>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.8718 14.645V8.37056C17.8718 7.3985 17.4386 6.47788 16.6919 5.86301L12.6783 2.55807C11.4964 1.58481 9.7983 1.58481 8.61634 2.55808L4.60274 5.86302C3.85604 6.47788 3.42285 7.3985 3.42285 8.37056V14.645C3.42285 16.433 4.86041 17.8825 6.63373 17.8825H14.6609C16.4342 17.8825 17.8718 16.433 17.8718 14.645Z" stroke={page.includes('/dashboard/learning') ? "black" : "white"} strokeWidth="1.20408" strokeLinejoin="round" />
                            <path d="M9.04297 14.6719H12.2538" stroke={page.includes('/dashboard/learning') ? "black" : "white"} strokeWidth="1.20408" strokeLinecap="round" />
                        </svg>
                        <p className={page.includes('/dashboard/learning')  ? "text-black text-lg-link max-md:text-md-link max-sm:text-sm-link " : "text-white text-lg-link max-md:text-md-link max-sm:text-sm-link"} >Learning</p>
                    </Link>

                    <Link href="/dashboard/affilate" className={page.includes('/dashboard/affilate')   ? "bg-white flex flex-col w-full justify-center items-center py-[1.375rem] gap-[0.65625rem] max-md:h-full max-md:w-[20%] max-md:py-[0.8rem] " : 'bg-black flex flex-col w-full justify-center items-center py-[1.375rem] gap-[0.65625rem] max-md:h-full max-md:w-[20%] max-md:py-[0.8rem]'}>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.8718 14.645V8.37056C17.8718 7.3985 17.4386 6.47788 16.6919 5.86301L12.6783 2.55807C11.4964 1.58481 9.7983 1.58481 8.61634 2.55808L4.60274 5.86302C3.85604 6.47788 3.42285 7.3985 3.42285 8.37056V14.645C3.42285 16.433 4.86041 17.8825 6.63373 17.8825H14.6609C16.4342 17.8825 17.8718 16.433 17.8718 14.645Z" stroke={page.includes('/dashboard/affilate')  ? "black" : "white"} strokeWidth="1.20408" strokeLinejoin="round" />
                            <path d="M9.04297 14.6719H12.2538" stroke={page.includes('/dashboard/affilate')  ? "black" : "white"} strokeWidth="1.20408" strokeLinecap="round" />
                        </svg>
                        <p className={page.includes('/dashboard/affilate')  ? "text-black text-lg-link max-md:text-md-link max-sm:text-sm-link " : "text-white text-lg-link max-md:text-md-link max-sm:text-sm-link"} >Affilate</p>
                    </Link>


                    <Link href="/dashboard/setting" className={page.includes('/dashboard/setting')? "bg-white flex flex-col w-full justify-center items-center py-[1.375rem] gap-[0.65625rem] max-md:h-full max-md:w-[20%] max-md:py-[0.8rem] " : 'bg-black flex flex-col w-full justify-center items-center py-[1.375rem] gap-[0.65625rem] max-md:h-full max-md:w-[20%] max-md:py-[0.8rem]'}>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.8718 14.645V8.37056C17.8718 7.3985 17.4386 6.47788 16.6919 5.86301L12.6783 2.55807C11.4964 1.58481 9.7983 1.58481 8.61634 2.55808L4.60274 5.86302C3.85604 6.47788 3.42285 7.3985 3.42285 8.37056V14.645C3.42285 16.433 4.86041 17.8825 6.63373 17.8825H14.6609C16.4342 17.8825 17.8718 16.433 17.8718 14.645Z" stroke={page.includes('/dashboard/setting')  ? "black" : "white"} strokeWidth="1.20408" strokeLinejoin="round" />
                            <path d="M9.04297 14.6719H12.2538" stroke={page.includes('/dashboard/setting')  ? "black" : "white"} strokeWidth="1.20408" strokeLinecap="round" />
                        </svg>
                        <p className={page.includes('/dashboard/setting') ? "text-black text-lg-link max-md:text-md-link max-sm:text-sm-link " : "text-white text-lg-link max-md:text-md-link max-sm:text-sm-link"} >Setting</p>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default index