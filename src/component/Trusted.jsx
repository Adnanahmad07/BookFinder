import React from 'react'
import demoimage1 from '../assets/hero.jpg'
import { button } from '@nextui-org/react'
import { Link } from 'react-router-dom'


const topCourseData = [
    {
        Name: "AutoCAD Architecture",
        Details: "training that focus on teaching individuals how to use Autodesk 3ds Max, which is a professional 3D computer graphics software used in various industries such as architecture, design, gaming, and film production. The training aims to equip students or professionals with the skills and knowledge needed to create 3D models, animations, and visualizations using the software.3dsmax skills are in great demand and there are plenty of job opportunities available in Hyderabad for freshers. The right training and the right guidance will help you launch your career in 3dsmax sooner and will give you the right beginning.Caddesk Ameerpet Offers 3dsmax training with expert trainers. 3dsmax course curriculum is designed as per industry trends. Join Our 3dsmax course program and start your career in industry. At caddesk ameerpet Hyderabad you get training and placements at one place. At Caddesk We help individual students to help in creating their portfolios",
        Imagesr: demoimage1,
        betch: "New"


    },
    {
        Name: "AutoCAD Architecture",
        Details: "training that focus on teaching individuals how to use Autodesk 3ds Max, which is a professional 3D computer graphics software used in various industries such as architecture, design, gaming, and film production. The training aims to equip students or professionals with the skills and knowledge needed to create 3D models, animations, and visualizations using the software.3dsmax skills are in great demand and there are plenty of job opportunities available in Hyderabad for freshers. The right training and the right guidance will help you launch your career in 3dsmax sooner and will give you the right beginning.Caddesk Ameerpet Offers 3dsmax training with expert trainers. 3dsmax course curriculum is designed as per industry trends. Join Our 3dsmax course program and start your career in industry. At caddesk ameerpet Hyderabad you get training and placements at one place. At Caddesk We help individual students to help in creating their portfolios",
        Imagesr: demoimage1,
        betch: "top rated"

    },
    {
        Name: "AutoCAD Architecture",
        Details: "training that focus on teaching individuals how to use Autodesk 3ds Max, which is a professional 3D computer graphics software used in various industries such as architecture, design, gaming, and film production. The training aims to equip students or professionals with the skills and knowledge needed to create 3D models, animations, and visualizations using the software.3dsmax skills are in great demand and there are plenty of job opportunities available in Hyderabad for freshers. The right training and the right guidance will help you launch your career in 3dsmax sooner and will give you the right beginning.Caddesk Ameerpet Offers 3dsmax training with expert trainers. 3dsmax course curriculum is designed as per industry trends. Join Our 3dsmax course program and start your career in industry. At caddesk ameerpet Hyderabad you get training and placements at one place. At Caddesk We help individual students to help in creating their portfolios",
        Imagesr: demoimage1,
        betch: "Most loved"


    },
    {
        Name: "AutoCAD Architecture",
        Details: "training that focus on teaching individuals how to use Autodesk 3ds Max, which is a professional 3D computer graphics software used in various industries such as architecture, design, gaming, and film production. The training aims to equip students or professionals with the skills and knowledge needed to create 3D models, animations, and visualizations using the software.3dsmax skills are in great demand and there are plenty of job opportunities available in Hyderabad for freshers. The right training and the right guidance will help you launch your career in 3dsmax sooner and will give you the right beginning.Caddesk Ameerpet Offers 3dsmax training with expert trainers. 3dsmax course curriculum is designed as per industry trends. Join Our 3dsmax course program and start your career in industry. At caddesk ameerpet Hyderabad you get training and placements at one place. At Caddesk We help individual students to help in creating their portfolios",
        Imagesr: demoimage1,
        betch: "New"


    },
    {
        Name: "AutoCAD Architecture",
        Details: "training that focus on teaching individuals how to use Autodesk 3ds Max, which is a professional 3D computer graphics software used in various industries such as architecture, design, gaming, and film production. The training aims to equip students or professionals with the skills and knowledge needed to create 3D models, animations, and visualizations using the software.3dsmax skills are in great demand and there are plenty of job opportunities available in Hyderabad for freshers. The right training and the right guidance will help you launch your career in 3dsmax sooner and will give you the right beginning.Caddesk Ameerpet Offers 3dsmax training with expert trainers. 3dsmax course curriculum is designed as per industry trends. Join Our 3dsmax course program and start your career in industry. At caddesk ameerpet Hyderabad you get training and placements at one place. At Caddesk We help individual students to help in creating their portfolios",
        Imagesr: demoimage1,
        betch: "New"


    },
    {
        Name: "AutoCAD Architecture",
        Details: "training that focus on teaching individuals how to use Autodesk 3ds Max, which is a professional 3D computer graphics software used in various industries such as architecture, design, gaming, and film production. The training aims to equip students or professionals with the skills and knowledge needed to create 3D models, animations, and visualizations using the software.3dsmax skills are in great demand and there are plenty of job opportunities available in Hyderabad for freshers. The right training and the right guidance will help you launch your career in 3dsmax sooner and will give you the right beginning.Caddesk Ameerpet Offers 3dsmax training with expert trainers. 3dsmax course curriculum is designed as per industry trends. Join Our 3dsmax course program and start your career in industry. At caddesk ameerpet Hyderabad you get training and placements at one place. At Caddesk We help individual students to help in creating their portfolios",
        Imagesr: demoimage1,
        betch: "New"


    },
]

const Trusted = () => {
    return (
        <div className='dark:bg-custom-gradient-black pb-20'>


            <div className='flex justify-center px-5'>
                <div className='py-20 w-fit flex flex-col  justify-center items-center'>
                    <span className='font-light text-2xl tracking-wider dark:text-neutral-100'>About Top Rated Courses</span>
                    <h3 className='text-4xl font-bold text-gray-700 dark:text-gray-200 mb-4 text-center'>Most Featured Courses</h3>
                    <p className='h-1 w-full bg-red-500 rounded-2xl'></p>
                </div>

            </div>


            <div className='flex justify-center items-center dark:text-neutral-50'>
                <div className="topcourse px-6 grid gap-10 xl:grid-cols-3 md:grid-cols-2">
                    {topCourseData.map((item, index) => (
                        <div
                            key={index}
                            className='card bg-base-100 xl:w-96  shadow-xl dark:bg-neutral-800'
                        >

                            <figure className='h-80'>
                                <div className='w-full h-full'>
                                    <img src={item.Imagesr} alt="courseImg object-cover" />
                                </div>
                            </figure>


                            <div className='card-body '>
                                <h2 className='card-title'>{item.Name}
                                    <div className="badge badge-secondary">{item.betch}</div>
                                </h2>
                                <p>{item.Details}</p>

                                <div className="card-actions justify-end">
                                    <div className=" mt-5">
                                        <Link to="/Course">
                                            <button className='btn border border-red-400 '>Viwe All Course</button>
                                        </Link>                                    </div>

                                </div>


                            </div>

                        </div>
                    ))}





                </div>
            </div>



        </div>
    )
}

export default Trusted