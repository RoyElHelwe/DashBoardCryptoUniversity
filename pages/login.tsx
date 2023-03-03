import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
import axios from 'axios';
import { Dispatch } from 'redux';


type FormInput = {
  email: string;
  password: string;
};

const login = () => {
  const [view, setView] = useState(false)
  const [formInput, setFormInput] = useState<FormInput>({
    email: '',
    password: '',
  });
  const router = useRouter();

  useEffect(() => {
    // Check if there is an access token in localStorage
    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      // Redirect the user to the dashboard page
      router.push('/dashboard');
    }
  }, []);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormInput((prevFormInput) => ({ ...prevFormInput, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formInput.email)) {
      console.log('Please enter a valid email address');
      return;
    }

    try {
      const response = await axios.post('https://afternoon-mesa-53878.herokuapp.com/api/login', {
        email: formInput.email,
        password: formInput.password,
      });
      console.log(response.data);
      localStorage.setItem('access_token', response.data.token)
      router.push('/dashboard');
    } catch (error) {
      console.log(error);
    }

    console.log(formInput);
  };

  return (
    <div className="container mx-auto">
      <div className='flex flex-col font-poppins '>
        <h1 className='text-lg-h1'>Login</h1>
        <form className='flex flex-col gap-4 py-4 px-2 border border-black/20' onSubmit={handleSubmit}>
          <div className='flex flex-col w-full'>
            <label htmlFor="">Username or email address</label>
            <input type="text" name="email" value={formInput.email} onChange={handleInputChange} className='bg-black/20 p-4' required />
          </div>

          <div className='flex flex-col w-full' >
            <label htmlFor="">Password</label>
            <div className='relative'>
              <input type={view ? "text" : "password"} name="password" value={formInput.password} onChange={handleInputChange} className='bg-black/20 p-4 relative w-full' required />
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
            <input type="submit" value={"Login"} className="py-2 px-4 border " />
            <div className='flex items-center gap-2'>
              <input type="checkbox" id='remember' />
              <label htmlFor="remember">Remember me</label>
            </div>
          </div>
          <Link href={"#"}><button type="button" >Lost your password?</button></Link>
        </form>
      </div>
    </div>
  )
}

export default login