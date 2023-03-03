import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const index = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div className=' bg-black w-full relative uppercase border-b border-white'>
            <div className='container mx-auto flex text-white justify-between h-full items-center px-3'>
                <div className='flex  py-[0.9375rem]'>
                    <Image
                        priority
                        src="/Logo/logo.svg"
                        height={81}
                        width={55}
                        alt="Crypto University Logo"
                        className='w-[81px] h-[55px] '
                    />
                </div>

                <ul className='flex text-lg-link max-md:text-md-link max-sm:text-sm-link py-[2.1875rem] max-md:hidden  gap-[30px] '>
                    <li><Link href={""}>Courses</Link></li>
                    <li><Link href={""}>Coaching</Link></li>
                    <li><Link href={""}>Indicators</Link></li>
                    <li><Link href={""}>Tools</Link></li>
                    <li><Link href={""}>Events</Link></li>
                    <li><Link href={""}>Blog</Link></li>
                </ul>

                <div className='flex border-x  max-md:hidden  border-white text-lg-link max-md:text-md-link max-sm:text-sm-link'>
                    <Link href={""} className="px-[40px] py-[2.19rem]">Login</Link>
                    <Link href={""} className="px-[40px] flex py-[2.19rem] bg-white text-black">Register Now</Link>
                </div>

                <div className={menu ? "hidden max-md:hidden" : "hidden max-md:flex"}>
                    <button onClick={() => { setMenu(true) }}>
                        <Image
                            priority
                            src="/Icons/menu-white.svg"
                            height={81}
                            width={55}
                            alt="Open Menu"
                            className='w-[50px] h-[50px] '
                        />
                    </button>
                </div>

                <div className={!menu ? "hidden max-md:hidden" : "hidden max-md:flex"}>
                    <button onClick={() => { setMenu(false) }}>
                        <Image
                            priority
                            src="/Icons/close-white.svg"
                            height={81}
                            width={55}
                            alt="Close Menu"
                            className='w-[50px] h-[50px] '
                        />
                    </button>
                </div>

            </div>
            <div className={menu ? 'w-full h-screen fixed z-30 bg-black flex flex-col text-white py-[50px] items-center text-lg-link gap-12  ' : "hidden"}>
                <div className='flex w-full justify-around items-center'>
                    <button><Link href={"/login"} className="uppercase py-2 px-5 border">Login</Link></button>
                    <button><Link href={"/register"} className="uppercase py-2 px-5 bg-white text-black">Register Now</Link></button>
                </div>

                <div className='flex flex-col  gap-[3rem]'>
                    <button><Link href={""} className="uppercase">Courses</Link></button>
                    <button><Link href={""} className="uppercase">Coaching</Link></button>
                    <button><Link href={""} className="uppercase">Indicators</Link></button>
                    <button><Link href={""} className="uppercase">Tools</Link></button>
                    <button><Link href={""} className="uppercase">Events</Link></button>
                    <button><Link href={""} className="uppercase">Blog</Link></button>
                </div>
            </div>
        </div>

    )
}

export default index