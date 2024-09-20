import { Settings, Settings2 } from 'lucide-react'
import React from 'react'

const WhyHome = () => {
    return (
        <div className='py-20 px-3 bg-red-100 dark:bg-red-950'>
            <div className=' w-fit '>
                <span className='font-light text-2xl tracking-wider dark:text-neutral-100'>Why Students Choose Us for gain Their Knowledge</span>
                <h3 className='text-4xl font-bold text-gray-700 dark:text-gray-200 mb-4'>Value provided by Us</h3>
                <p className='h-1 w-20 bg-red-500 rounded-2xl'></p>
            </div>

            <div className='xl:max-w-[1000px]   mx-auto my-12  whyimg'>
                <div className='py-12 w-full h-full custom-bg rounded-3xl  flex flex-col justify-center items-center text-neutral-50 dark:text-neutral-300 '>
                    <h2 className='xl:text-5xl text-center my-3 text-3xl'>Why Students Choose Us for gain Their Knowledge</h2>
                    <p className='w-48 h-1 bg-red-500'></p>
                    <p className='text-sm w-[80%] text-center leading-6 mt-5'>CAD Amravati, a leading institute, offers CAD, CAM and CAE software courses. With experienced trainers and advanced software, students receive practical, industry-standard education. Students also receive placement assistance. CAD Amravati delivers quality education and empowers students with the latest technology. Choose CAD Amravati for a successful career as a CAD, CAM or CAE professional</p>

                    <p className='mb-5'>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </p>

                    <div className='xl:flex gap-2 startd  font-bold '>

                        <span className='flex my-3'><Settings /> Industry Expert Instructor  |  </span>
                        <span className='flex my-3'><Settings2 /> Up-to-Date Course Content  |  </span>
                        <span className='flex my-3'><Settings /> Biggest Student Community  |  </span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default WhyHome