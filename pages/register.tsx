import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
import axios from 'axios';
import { Dispatch } from 'redux';


interface FormData {
    email: string;
    password: string;
    country: string,
    discord: string,
    display_name: string,
    first_name: string,
    last_name: string,
    phone: string,
    referred: string,
    stripeCustomerID: string,
    telegram: string,

}


const login = () => {
    const [view, setView] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const country = "Lebanon";
    const display_name = "Roy"
    const discord = "raed__helwe"
    const first_name = "raed"
    const last_name = "helwe"
    const phone = "70575302"
    const referred = "0"
    const stripeCustomerID ="000"
    const telegram = "Roy"


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data: FormData = {country , discord, display_name, email, first_name, last_name, password, phone, referred, stripeCustomerID, telegram  };

        try {
            const res = await axios.post('https://afternoon-mesa-53878.herokuapp.com/api/signup', data);
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <div className="container mx-auto">
            <div className='flex flex-col font-poppins '>
                <h1 className='text-lg-h1'>Login</h1>
                <form className='flex flex-col gap-4 py-4 px-2 border border-black/20' onSubmit={handleSubmit}>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className='bg-black/20 p-4' required />
                    </div>

                    <div className='flex flex-col w-full'>
                        <label htmlFor="">Username or email address</label>
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='bg-black/20 p-4' required />
                    </div>

                    <div className='flex flex-col w-full' >
                        <label htmlFor="">Password</label>
                        <div className='relative'>
                            <input type={view ? "text" : "password"} name="password" value={password} onChange={(e) => setPassword(e.target.value)} className='bg-black/20 p-4 relative w-full' required />
                            <Image
                                priority
                                src="/Icons/noun-show-password-4779893.svg"
                                height={37}
                                width={37}
                                alt="Profile"
                                className='w-[37px] h-[37px] absolute top-1 right-1 cursor-pointer'
                                onClick={() => { setView(!view) }}
                            />
                        </div>
                    </div>
                    <div className='flex gap-4 items-start'>
                        <input type="submit" value={"Sign Up"} className="py-2 px-4 border " />

                    </div>

                </form>
            </div>
        </div>
    )
}

export default login