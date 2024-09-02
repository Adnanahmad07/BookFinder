import { HandMetalIcon, LucideFlaskRound } from 'lucide-react'
import React from 'react'


const CardData = [
    {
        icon: <HandMetalIcon size={40} />,
        heading: "CAD course1",
        text: "lorem ther fdsht fdf ffff my name is lana rusave and im from africa"
    },
    {
        icon: <HandMetalIcon size={40} />,
        heading: "CAD course2",
        text: "lorem ther fdsht fdf ffff my name is lana rusave and im from africa"
    },
    {
        icon: <HandMetalIcon size={40} />,
        heading: "CAD course3",
        text: "lorem ther fdsht fdf ffff my name is lana rusave and im from africa"
    },
    {
        icon: <HandMetalIcon size={40} />,
        heading: "CAD course4",
        text: "lorem ther fdsht fdf ffff my name is lana rusave and im from africa"
    },
    {
        icon: <HandMetalIcon size={40} />,
        heading: "CAD course5",
        text: "lorem ther fdsht fdf ffff my name is lana rusave and im from africa"
    },
    {
        icon: <HandMetalIcon size={40} />,
        heading: "CAD course6",
        text: "lorem ther fdsht fdf ffff my name is lana rusave and im from africa"
    },
]
const Category = () => {
    return (
        <div className='py-14 xl:px-16 px-10 bg-gray-100 dark:bg-gray-900 dark:text-neutral-50 '>
            <div className=' md:flex '>
                <div className='flex-1'>
                    <span className='font-light text-2xl tracking-wider'>OUR BEST CATEGORY</span>
                    <h3 className='text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4'>We Success Learning Platform Creative Service.</h3>
                    <p className='h-1 w-16 bg-red-500 rounded-2xl'></p>
                </div>
                <div className='flex-1'>
                    <p>We offer Courses For Civil Engineers, Mechanical Engineers, Electrical Engineers, Architects & Interior Designers. We Have A Vrious Course Catogeries With 100% Job Placement Assistance </p>

                    <button className=' text-neutral-100 mr-8 md:text-xl px-5 py-2 rounded-lg bg-red-500 mt-4'>More Courses</button>
                </div>
            </div>


            <div className='grid__container  mt-12'>
                {CardData.map((item, index) => (
                    <div key={index}
                        className='box border h-52 border-gray-700 flex flex-col justify-center items-center p-4 gap-y-2'
                    >
                        <p>{item.icon}</p>
                        <h3 className='text-2xl font-bold text-center'>{item.heading}</h3>
                        <p className='text-center'>{item.text}</p>
                    </div>
                ))}

            </div>


        </div>
    )
}

export default Category