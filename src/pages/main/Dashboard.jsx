import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import SectionOne from './Dashboard/SectionOne'
import MyProductSec from './Dashboard/MyProductSec'

const Dashboard = () => {

    const {state:{user}} = useContext(AppContext)

    const {userName} = user.user
  return (
    <div>
        <div className='flex flex-col-reverse md:flex-row items-center justify-between  bg-slate-700 rounded-lg shadow-md'>
            <div className='p-10'>
                <h2 className='font-iceberg  text-5xl md:text-7xl text-rose-600 mb-5'>Hello, {userName}</h2>
                <p className='md:text-xl text-xl text-white'>
                    Begin your journey at Ooja, buy and sell at your comfort.
                    We are here to make your experience worthwhile. Sell your products and buy from the best sellers...
                </p>

                <div className='md:mt-10 flex mt-4 '>
                    <button className='py-3 mr-2 px-10 rounded-lg font-bold text-white bg-rose-600 transition-none duration-150 ease-linear hover:bg-rose-500'>Buy</button>

                    <button className='py-3 ml-2 px-10 rounded-lg font-bold text-white bg-slate-900 transition-none duration-150 ease-linear hover:bg-slate-500'>Sell</button>

                </div>

            </div>
            <img src="/images/girlremove.png" alt="" width={900} className='mr-10 ' />
        </div>

        {/* mobile */}


    <SectionOne/>
    <MyProductSec/>
    </div>
  )
}

export default Dashboard