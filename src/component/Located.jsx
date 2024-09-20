import { PhoneCall } from 'lucide-react'
import React from 'react'
import { FaLocationPin } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Located = () => {
    return (
        <div>
            <h4 className='text-3xl font-thin dark:text-neutral-50'>
                Touch With US</h4>
            <h2 className='font-bold text-2xl dark:text-neutral-100 '>Feel Free To Contact And Reach Us For More Info !</h2>
            <p className='h-1 w-24 bg-red-600 my-4'></p>


            <p className='text-md  dark:text-neutral-300'>We love to hear from you! For more information and any inquiries, please don’t hesitate to contact us. We’re always happy to help.</p>

            <div className='flex  flex-wrap py-12 dark:text-neutral-100'>
                <div className='w-[100%]  bg-slate-100 drop-shadow-xl shadow-inner dark:bg-slate-900 card  h-40 my-4 mx-auto flex flex-row'>
                    <div className='w-52 flex justify-center items-center font-extrabolds'><FaLocationPin size={65} className=' p-3 rounded-full bg-red-600 text-white' /></div>
                    <div className='w-full  p-3'>
                        <h6 className='font-bold md:text-2xl text-xl'>Location Address :</h6>
                        <p className='font-normal text-sm my-3'>In front of Govenment Polytechnic College Gate, Gadge Nagar, Amravati, Maharashtra 444602</p>
                    </div>
                </div>
                <div className='w-1/2  h-40 p-1'>
                    <div className=' w-[100%] bg-slate-100 drop-shadow-xl shadow-inner dark:bg-slate-900 h-full mx-auto card text-center pb-2'>
                        <div className='w-full my-3 flex justify-center items-center font-extrabolds'><MdEmail size={65} className='border p-3 rounded-full bg-red-600 text-white' /></div>
                        <h2 className='font-bold md:text-xl text-md'>Phone Numbers :</h2>
                        <p className='font-normal text-sm'>  8180834389 | 8087212653</p>
                    </div>
                </div>
                <div className='w-1/2  h-40 p-1'>
                    <div className=' w-[100%] bg-slate-100 drop-shadow-xl shadow-inner dark:bg-slate-900 h-full mx-auto card text-center pb-2'>
                        <div className='w-full my-3 flex justify-center items-center font-extrabolds'><PhoneCall size={65} className='border p-3 rounded-full bg-red-600 text-white' /></div>
                        <h2 className='font-bold md:text-xl text-md'>Email Address :</h2>
                        <p className='font-normal md:text-sm text-[12px] '>Info@caddeskamravati.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Located