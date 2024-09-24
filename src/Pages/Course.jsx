import { BookA, Clock } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import autocadmech from '../assets/autocadmech.jpg'
import AutoEls from '../assets/AUTOCADELECTRICAL.jpeg'
import SCADA from '../assets/scada.png'
import SKETCHUP from "../assets/SKETCHUP.jpg"
import Catia from '../assets/catiamodellingsoftware.jpg'
import creo from '../assets/creo.jpg'
import ansys from '../assets/ansys.jpg'
import SOLIDWORKS from '../assets/SOLIDWORKS.jpg'
import nxcad from '../assets/nxcad.jpg'
import Revit from '../assets/REVIT1.jpg'
import autocadcivil from '../assets/autocadcivil.jpg'
import vray from '../assets/vray.jpg'
import Mas from '../assets/3dsmax.jpg'
import photoshop from '../assets/photoshop.jpg'
import revitmep from '../assets/RevitMEP.jpg'
import lumion1 from '../assets/lumion1.jpg'
import Plc from '../assets/plc.jpg'




const courses = [
    {
        id: 1,
        day: "30",
        parday: "03",
        title: "AutoCAD Mechanical",
        image: autocadmech,
        description: "AutoCAD is a software application for 2D and 3D computer-aided design (CAD) and drafting. Available since 1982 as a desktop application and since 2010 as a mobile, web- and cloud-based app, AutoCAD is used across a wide range of industries, by architects, project managers, engineers, graphic designers, city planners, and other professionals.",
    },
    {
        id: 2,
        day: "30",
        parday: "03",
        title: "AutoCAD Electrical",
        image: AutoEls,
        description: "AutoCAD Electrical is a specialized version of AutoCAD tailored for electrical design. It provides powerful tools to create, modify, and document electrical control systems.",
    },
    {
        id: 5,
        day: "30",
        parday: "03",
        title: " AutoCad Civil",
        image: autocadcivil,
        description: "Civil 3D from Autodesk supports BIM for civil engineering design and documentation for rail, roads, land development, airports, water, and civil structures. Civil 3D helps professionals better understand project performance, maintain more consistent data and processes, and respond faster to changes.",
    },

    {
        id: 3,
        day: "30",
        parday: "03",
        title: "Revit Architecture",
        image: Revit,
        description: "Revit Architecture is a building information modeling software for architects, landscape architects, structural engineers, MEP engineers, designers, and contractors. It allows users to design a building and structure and its components in 3D, annotate the model with 2D drafting elements, and access building information from the building model's database.",
    },
    {
        id: 4,
        day: "30",
        parday: "03",
        title: "3DS MAX",
        image: Mas,
        description: "3DS Max is a professional 3D computer graphics program for making 3D animations, models, games, and images. It is often used in the video game industry for creating visual effects for movies and television, and for architectural visualization.",
    },



    {
        id: 8,
        day: "30",
        parday: "03",
        title: "SCADA",
        image: SCADA,
        description: "SCADA is the process of estimating material quantities in construction. It is used in the preparation of bids for contracts and to determine the cost of a project. It is an essential part of the construction cost estimation process.",
    },
    {
        id: 9,
        day: "30",
        parday: "03",
        title: " SketchUp",
        image: SKETCHUP,
        description: " SketchUp, now known as SketchUp, is a 3D modeling computer program for a wide range of drawing applications such as architectural, interior design, landscape architecture, civil and mechanical engineering, film, and video game design.",
    },
    {
        id: 10,
        day: "30",
        parday: "03",
        title: "Catia",
        image: Catia,
        description: "CATIA is a multi-platform software suite for computer-aided design (CAD), computer-aided manufacturing (CAM), computer-aided engineering (CAE), PLM, and 3D, developed by the French company Dassault Systèmes.",
    },
    {
        id: 11,
        day: "30",
        parday: "03",
        title: "Creo",
        image: creo,
        description: "Creo is a family of CAD software products for product design by PTC. It offers powerful and flexible 3D CAD capabilities to accelerate the product development process by reducing time from design to digital prototype.",
    },
    {
        id: 12,
        day: "30",
        parday: "03",
        title: "Ansys WB",
        image: ansys,
        description: "Ansys Workbench is a platform which can simulate the interaction of multiple physics: structural, fluid dynamics, electromagnetics, etc. It provides necessary tools to perform robust and powerful simulation in a user-friendly environment.",
    },

    {
        id: 14,
        day: "30",
        parday: "03",
        title: "SolidWorks",
        image: SOLIDWORKS,
        description: "SolidWorks is a solid modeling computer-aided design (CAD) and computer-aided engineering (CAE) software program that runs on Microsoft Windows. SolidWorks is published by Dassault Systèmes.",
    },
    {
        id: 15,
        day: "30",
        parday: "03",
        title: "NX CAD",
        image: nxcad,
        description: "NX CAD (Computational Fluid Dynamics) solutions are used to simulate fluid motion and its interaction with surfaces. Used by engineers and designers across a broad spectrum of industries, NX CAD software is instrumental in efforts to minimize drag, reduce drop sizes, analyze particulate suspension, and much more.",
    },

    {
        id: 17,
        day: "30",
        parday: "03",
        title: "Revit MEP",
        image: revitmep,
        description: "Revit MEP is a specialized version of Revit for mechanical, electrical, and plumbing engineers, providing tools for designing complex building systems. MEP stands for Mechanical, Electrical, and Plumbing, which are the three engineering disciplines that Revit MEP targets.",
    },

    {
        id: 19,
        day: "30",
        parday: "03",
        title: "V-ray",
        image: vray,
        description: "V-ray is a 3D rendering software that is used in media, entertainment, and design industries for visualizing and computer graphics rendering. Known for its versatility and ability to handle any type of project — from massive, dynamic scenes having thousands of lights to a sublime still life.",
    },
    {
        id: 20,
        day: "30",
        parday: "03",
        title: "Photoshop",
        image: photoshop,
        description: "Adobe Photoshop is a software application for image editing and photo retouching for use on Windows or MacOS computers. Photoshop offers users the ability to create, enhance, or otherwise edit images, artwork, and illustrations.",
    },
    {
        id: 21,
        day: "30",
        parday: "03",
        title: "Lumion",
        image: lumion1,
        description: "Lumion is a powerful 3D rendering software that transforms architectural models into stunning visuals. With real-time rendering, it offers fast, realistic output, making it ideal for architects and designers.",
    },
    {
        id: 22,
        day: "30",
        parday: "03",
        title: "PLC",
        image: Plc,
        description: "PLC (Programmable Logic Controller) is an essential industrial control system used to automate machinery and processes. It ensures efficient and reliable control in manufacturing and engineering industries.",
    },

];


const Course = () => {
    return (
        <div className='flex flex-col justify-center items-center py-24 dark:bg-gray-950'>

            <div className='w-full text-center my-12'>
                <span className='font-light text-2xl tracking-wider dark:text-neutral-50'>OUR BEST CATEGORY</span>
                <h3 className='text-4xl font-bold text-gray-700 dark:text-gray-200 mb-4'>We Success Learning Platform Creative Service.</h3>
                <div className='w-full '>
                    <p className='h-1 w-60 bg-red-500 rounded-2xl mx-auto'></p>
                </div>
            </div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-8">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="relative rounded-lg lg:w-80 pb-4 overflow-hidden bg-slate-50 dark:bg-slate-900 border border-transparent hover:border-gray-500 ">
                        <div className=' w-full h-52'>
                            <img src={course.image} alt={course.title} className='w-full h-full object-cover  ' />
                        </div>

                        <div className='p-3 relative mb-14'>
                            <h2 className='text-neutral-900 dark:text-neutral-100 font-bold text-2xl leading-4 my-4'>{course.title}</h2>
                            <div className=' py-2 my-2 dark:text-neutral-300 '>
                                <p className='flex gap-x-3 my-2 text-sm'><BookA size={15} /> {course.day} Days</p>
                                <p className='flex gap-x-3 my-2 text-sm'><Clock size={15} /> {course.parday} Hours Per Day</p>

                            </div>
                            <p className='text-neutral-800 dark:text-neutral-100 text-md text-left'>{course.description}</p>

                        </div>
                        <Link
                            to={`/course/${course.id}`}
                            className='dark:text-blue-500 py-1 px-4 border rounded-full absolute bottom-7 right-7 '
                        >Learn More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Course;
