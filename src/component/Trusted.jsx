import React from 'react'
import AutoCAD from '../assets/AUTOCADELECTRICAL.jpeg'
import autocad from '../assets/autocadcivil.jpg'

import photoshop from '../assets/photoshop.jpg'
import creo from '../assets/creo.jpg'
import vray from '../assets/vray.jpg'
import ETABS from '../assets/cad.jpg'
import Revit from '../assets/REVIT1.jpg'
import Cvil from '../assets/civl.jpg'
import ansys from '../assets/ansys.jpg'

import Plc from '../assets/plc.jpg'
import Cad from '../assets/c-1.jpg'
import { button } from '@nextui-org/react'
import { Link } from 'react-router-dom'


const topCourseData = [
    {
        Name: "AutoCAD Architecture",
        Details: "AutoCAD is a software application for 2D and 3D computer-aided design (CAD) and drafting. Available since 1982 as a desktop application and since 2010 as a mobile, web- and cloud-based app, AutoCAD is used across a wide range of industries, by architects, project managers, engineers, graphic designers, city planners, and other professionals.",
        Imagesr: autocad,
        betch: "New"


    },
    {
        Name: "Photoshop",
        Details: "Adobe Photoshop is a software application for image editing and photo retouching for use on Windows or MacOS computers. Photoshop offers users the ability to create, enhance, or otherwise edit images, artwork, and illustrations.",
        Imagesr: photoshop,
        betch: "top rated"

    },
    {
        Name: "Revit Architecture",
        Details: "Revit Architecture is a building information modeling software for architects, landscape architects, structural engineers, MEP engineers, designers, and contractors. It allows users to design a building and structure and its components in 3D, annotate the model with 2D drafting elements, and access building information from the building model's database.",
        Imagesr: Revit,
        betch: "Most loved"


    },
    {
        Name: "Creo",
        Details: "Creo is a family of CAD software products for product design by PTC. It offers powerful and flexible 3D CAD capabilities to accelerate the product development process by reducing time from design to digital prototype.",
        Imagesr: creo,
        betch: "New"


    },
    {
        Name: "Ansys WB",
        Details: "Ansys Workbench is a platform which can simulate the interaction of multiple physics: structural, fluid dynamics, electromagnetics, etc. It provides necessary tools to perform robust and powerful simulation in a user-friendly environment.",
        Imagesr: ansys,
        betch: "New"


    },
    {
        Name: "V-ray",
        Details: "V-ray is a 3D rendering software that is used in media, entertainment, and design industries for visualizing and computer graphics rendering. Known for its versatility and ability to handle any type of project — from massive, dynamic scenes having thousands of lights to a sublime still life.",
        Imagesr: vray,
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