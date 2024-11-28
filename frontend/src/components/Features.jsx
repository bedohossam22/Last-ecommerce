import React from 'react'
import Title from './Title'
import { TbArrowBack, TbTruckDelivery } from 'react-icons/tb'
import { RiSecurePaymentLine } from 'react-icons/ri'

function Features() {
  return (
    <section className='max-padd-container py-16'>
      { /*  title */}
      <Title title = {'Our Features'} titleStyles={'text-center'}/>
      {/* container */}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 bg-white rounded-xl'>
        <div className='p-4 rounded-3xl'>
            <TbArrowBack className='bold-32 mb-3 text-yellow-500'/>
            <h4 className='h4 capitalize'>Easy Return</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore in pariatur ea earum, sapiente sit voluptate!</p>
        </div>
        <div className='p-4 rounded-3xl'>
            <TbTruckDelivery className='bold-32 mb-3 text-secondary'/>
            <h4 className='h4 capitalize'>Fast Delivery</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore in pariatur ea earum, sapiente sit voluptate!</p>
        </div>
        <div className='p-4 rounded-3xl'>
            <RiSecurePaymentLine className='bold-32 mb-3 text-red-500'/>
            <h4 className='h4 capitalize'>Secure Payment</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore in pariatur ea earum, sapiente sit voluptate!</p>
        </div>
        </div>  
    </section>
  )
}

export default Features
