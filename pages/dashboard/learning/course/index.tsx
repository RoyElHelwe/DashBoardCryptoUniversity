import React from 'react'
import NavBar from '../../../../Components/Global/Dashboard/NavBar'
import Header from '../../../../Components/Global/Dashboard/Header'
import Pages from '../../../../Components/Private/Dashboard/Learning/Course'
const Course = () => {
    return (
        <div className='flex'>
            <NavBar />
            <div className='grid grid-cols-12 w-full px-4 place-content-start gap-4 max-md:pb-20 max-md:gap-[0px]  '>
                <div className='col-span-12 '>
                    <Header />
                    <Pages/>
                </div>
            </div>

        </div>
    )
}

export default Course