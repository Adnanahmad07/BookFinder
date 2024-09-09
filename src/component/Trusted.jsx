import React from 'react'
import demoimage1 from '../assets/hero.jpg'
import { button } from '@nextui-org/react'
import { Link } from 'react-router-dom'


const topCourseData = [
    {
        Name: "AutoCAD Architecture",
        Details: "AutoCAD is a software application for 2D and 3D computer-aided design (CAD) and drafting. Available since 1982 as a desktop application and since 2010 as a mobile, web- and cloud-based app, AutoCAD is used across a wide range of industries, by architects, project managers, engineers, graphic designers, city planners, and other professionals.",
        Imagesr: demoimage1,
        betch: "New"


    },
    {
        Name: "ETABS Architecture",
        Details: "ETABS is an engineering software product that caters to multi-story building analysis and design. Modeling tools and templates, code-based load prescriptions, analysis methods, and solution techniques are all coordinated with the grid-like geometry unique to this class of structure.",
        Imagesr: demoimage1,
        betch: "top rated"

    },
    {
        Name: "Revit Architecture",
        Details: "Revit Architecture is a building information modeling software for architects, landscape architects, structural engineers, MEP engineers, designers, and contractors. It allows users to design a building and structure and its components in 3D, annotate the model with 2D drafting elements, and access building information from the building model's database.",
        Imagesr: demoimage1,
        betch: "Most loved"


    },
    {
        Name: "3DS MAX",
        Details: "3DS Max is a professional 3D computer graphics program for making 3D animations, models, games, and images. It is often used in the video game industry for creating visual effects for movies and television, and for architectural visualization.",
        Imagesr: demoimage1,
        betch: "New"


    },
    {
        Name: "Civil 3D Architecture",
        Details: "Civil 3D from Autodesk supports BIM for civil engineering design and documentation for rail, roads, land development, airports, water, and civil structures. Civil 3D helps professionals better understand project performance, maintain more consistent data and processes, and respond faster to changes.",
        Imagesr: demoimage1,
        betch: "New"


    },
    {
        Name: "MX Road",
        Details: "MX Road is an advanced string-based modeling tool that enables the rapid and accurate design of all types of roads. It is widely used for designing, drafting, and analysis by civil engineers and planners for highway planning.",
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