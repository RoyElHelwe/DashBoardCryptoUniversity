import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/Global/Dashboard/NavBar'
import Header from '../../Components/Global/Dashboard/Header'
import RerralLink from '../../Components/Private/Dashboard/Home/RerralLink'
import BoxCounter from '../../Components/Private/Dashboard/Home/BoxCounter'
import BSubscription from '../../Components/Private/Dashboard/Home/BSubscription'
import ASubscription from '../../Components/Private/Dashboard/Home/ASubscription'
import Downloads from '../../Components/Private/Dashboard/Home/Downloads'
import ProfileCard from '../../Components/Private/Dashboard/Home/ProfileCard'
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import CheckOut from '@/Components/Private/Dashboard/Home/CheckOut'
const index = ({ user }: any) => {

  const router = useRouter();

  const [subscription, setSubscription] = useState(false)
  // useEffect(() => {
  //   const accessToken = localStorage.getItem('access_token');
  //   if (!accessToken) {
  //     router.push('/login');
  //     return;
  //   }
  // })

  return (
    <div className='flex '>
      <NavBar />
      <div className='grid grid-cols-12 w-full px-4 place-content-start gap-4 max-md:pb-20 max-md:gap-[0px] '>
        <div className='col-span-12 '>
          <Header />
          <CheckOut/>
        </div>
        {/* <div className='col-span-8 max-md:pb-[35px] max-md:col-start-1 max-md:col-span-12 max-md:order-2 '>
          <div className=' flex flex-col'>
            <div className='flex justify-between'>
              <RerralLink/>
              <BoxCounter title="Complete courses" number ="6" />
              <BoxCounter title="Days of subscription left" number ="126" />
            </div>
            {subscription ? <ASubscription/> : <BSubscription setSubscription={setSubscription}/>}
            <Downloads/>
          </div>
        </div>

        <div className='max-md:col-start-1 max-md:col-span-12 max-md:order-1 col-start-9 col-span-5 max-md:py-[35px]'>
           <ProfileCard/>
        </div> */}
      </div>
    </div>

  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const user = true;

  if (!user) {
    // User is not authenticated, redirect to login page
    res.writeHead(302, { Location: '/login' });
    res.end();
    return { props: {} };
  }

  // User is authenticated, pass user data to component
  return { props: { user } };
};

export default index