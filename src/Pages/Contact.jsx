import React from 'react'
import MapComponent from '../component/MapComponent.jsx'
import Address from '../component/Address.jsx'
import Located from '../component/Located.jsx'
import Form from '../component/Form.jsx'

const Contact = () => {
    return (
        <div className='dark:bg-custom-course-black py-12'>
            <div className='w-full text-center my-12'>
                <span className='font-light md:ext-2xl text-xl tracking-wider dark:text-neutral-50'>
                    Contact Us</span>
                <h3 className='md:text-4xl text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4'>Connect with us today at Treenig Institute to unlock your potential</h3>
                <div className='w-full '>
                    <p className='h-1 w-60 bg-red-500 rounded-2xl mx-auto'></p>
                </div>
            </div>
            <div className='md:p-12 p-4'>
                <MapComponent />
            </div>
            <div className='p-4'>
                <Address />
            </div>

            <div className=' md:flex py-14 xl:px-12 px-4'>
                <div className='flex-1 flex justify-center items-center  p-4'><Located /></div>
                <div className='flex-1 flex justify-center items-center p-4'><Form /></div>
            </div>

        </div>
    )
}

export default Contact