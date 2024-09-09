import { BookA, Clock } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
    {
        id: 1,
        day: "30",
        parday: "03",
        title: "AutoCAD",
        image: "https://via.placeholder.com/200",
        description: "AutoCAD is a software application for 2D and 3D computer-aided design (CAD) and drafting. Available since 1982 as a desktop application and since 2010 as a mobile, web- and cloud-based app, AutoCAD is used across a wide range of industries, by architects, project managers, engineers, graphic designers, city planners, and other professionals.",
    },
    {
        id: 2,
        day: "30",
        parday: "03",
        title: "ETABS",
        image: "https://via.placeholder.com/200",
        description: "ETABS is an engineering software product that caters to multi-story building analysis and design. Modeling tools and templates, code-based load prescriptions, analysis methods, and solution techniques are all coordinated with the grid-like geometry unique to this class of structure.",
    },
    {
        id: 3,
        day: "30",
        parday: "03",
        title: "Revit Architecture",
        image: "https://via.placeholder.com/200",
        description: "Revit Architecture is a building information modeling software for architects, landscape architects, structural engineers, MEP engineers, designers, and contractors. It allows users to design a building and structure and its components in 3D, annotate the model with 2D drafting elements, and access building information from the building model's database.",
    },
    {
        id: 4,
        day: "30",
        parday: "03",
        title: "3DS MAX",
        image: "https://via.placeholder.com/200",
        description: "3DS Max is a professional 3D computer graphics program for making 3D animations, models, games, and images. It is often used in the video game industry for creating visual effects for movies and television, and for architectural visualization.",
    },
    {
        id: 5,
        day: "30",
        parday: "03",
        title: "Civil 3D",
        image: "https://via.placeholder.com/200",
        description: "Civil 3D from Autodesk supports BIM for civil engineering design and documentation for rail, roads, land development, airports, water, and civil structures. Civil 3D helps professionals better understand project performance, maintain more consistent data and processes, and respond faster to changes.",
    },
    {
        id: 6,
        day: "30",
        parday: "03",
        title: "MX Road",
        image: "https://via.placeholder.com/200",
        description: "MX Road is an advanced string-based modeling tool that enables the rapid and accurate design of all types of roads. It is widely used for designing, drafting, and analysis by civil engineers and planners for highway planning.",
    },
    {
        id: 7,
        day: "30",
        parday: "03",
        title: "STAAD.Pro",
        image: "https://via.placeholder.com/200",
        description: "STAAD.Pro is a structural analysis and design software application originally developed by Research Engineers International in 1997. In late 2005, Research Engineers International was bought by Bentley Systems. It is used for analyzing and designing structures – buildings, bridges, towers, transportation, industrial, and utility structures.",
    },
    {
        id: 8,
        day: "30",
        parday: "03",
        title: "Quantity Take off",
        image: "https://via.placeholder.com/200",
        description: "Quantity Take Off is the process of estimating material quantities in construction. It is used in the preparation of bids for contracts and to determine the cost of a project. It is an essential part of the construction cost estimation process.",
    },
    {
        id: 9,
        day: "30",
        parday: "03",
        title: "Google SketchUp",
        image: "https://via.placeholder.com/200",
        description: "Google SketchUp, now known as SketchUp, is a 3D modeling computer program for a wide range of drawing applications such as architectural, interior design, landscape architecture, civil and mechanical engineering, film, and video game design.",
    },
    {
        id: 10,
        day: "30",
        parday: "03",
        title: "Catia",
        image: "https://via.placeholder.com/200",
        description: "CATIA is a multi-platform software suite for computer-aided design (CAD), computer-aided manufacturing (CAM), computer-aided engineering (CAE), PLM, and 3D, developed by the French company Dassault Systèmes.",
    },
    {
        id: 11,
        day: "30",
        parday: "03",
        title: "Creo",
        image: "https://via.placeholder.com/200",
        description: "Creo is a family of CAD software products for product design by PTC. It offers powerful and flexible 3D CAD capabilities to accelerate the product development process by reducing time from design to digital prototype.",
    },
    {
        id: 12,
        day: "30",
        parday: "03",
        title: "Ansys WB",
        image: "https://via.placeholder.com/200",
        description: "Ansys Workbench is a platform which can simulate the interaction of multiple physics: structural, fluid dynamics, electromagnetics, etc. It provides necessary tools to perform robust and powerful simulation in a user-friendly environment.",
    },
    {
        id: 13,
        day: "30",
        parday: "03",
        title: "NX CAM",
        image: "https://via.placeholder.com/200",
        description: "NX CAM is a comprehensive and integrated computer-aided manufacturing tool that helps you improve the entire digital manufacturing process, from planning and tooling to managing CNC operations.",
    },
    {
        id: 14,
        day: "30",
        parday: "03",
        title: "SolidWorks",
        image: "https://via.placeholder.com/200",
        description: "SolidWorks is a solid modeling computer-aided design (CAD) and computer-aided engineering (CAE) software program that runs on Microsoft Windows. SolidWorks is published by Dassault Systèmes.",
    },
    {
        id: 15,
        day: "30",
        parday: "03",
        title: "ANSYS CFD",
        image: "https://via.placeholder.com/200",
        description: "ANSYS CFD (Computational Fluid Dynamics) solutions are used to simulate fluid motion and its interaction with surfaces. Used by engineers and designers across a broad spectrum of industries, ANSYS CFD software is instrumental in efforts to minimize drag, reduce drop sizes, analyze particulate suspension, and much more.",
    },
    {
        id: 16,
        day: "30",
        parday: "03",
        title: "CNC",
        image: "https://via.placeholder.com/200",
        description: "CNC (Computer Numerical Control) machines use computer-generated code to control machining tools. CNC machining is a manufacturing process which utilizes computerized controls to operate and manipulate machine and cutting tools to shape stock material—e.g., metal, plastic, wood, foam, composite, etc.—into custom parts and designs.",
    },
    {
        id: 17,
        day: "30",
        parday: "03",
        title: "Revit MEP",
        image: "https://via.placeholder.com/200",
        description: "Revit MEP is a specialized version of Revit for mechanical, electrical, and plumbing engineers, providing tools for designing complex building systems. MEP stands for Mechanical, Electrical, and Plumbing, which are the three engineering disciplines that Revit MEP targets.",
    },
    {
        id: 18,
        day: "30",
        parday: "03",
        title: "GD & T",
        image: "https://via.placeholder.com/200",
        description: "GD & T is a system for defining and communicating engineering tolerances. It uses a symbolic language on engineering drawings and computer-generated three-dimensional solid models for explicitly describing nominal geometry and its allowable variation.",
    },
    {
        id: 19,
        day: "30",
        parday: "03",
        title: "V-ray",
        image: "https://via.placeholder.com/200",
        description: "V-ray is a 3D rendering software that is used in media, entertainment, and design industries for visualizing and computer graphics rendering. Known for its versatility and ability to handle any type of project — from massive, dynamic scenes having thousands of lights to a sublime still life.",
    },
    {
        id: 20,
        day: "30",
        parday: "03",
        title: "Photoshop",
        image: "https://via.placeholder.com/200",
        description: "Adobe Photoshop is a software application for image editing and photo retouching for use on Windows or MacOS computers. Photoshop offers users the ability to create, enhance, or otherwise edit images, artwork, and illustrations.",
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
