import { Book, BookUser, Clock, Group, GroupIcon, LineChart, Package2Icon, Percent, ThermometerSnowflakeIcon } from 'lucide-react';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Course from './Course';
import { BiLeftArrowAlt, BiRightArrow } from 'react-icons/bi';


const courses = [
    {
        id: 1,
        title: "AutoCAD",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Learn to design everything from architecture to intricate machinery.",
        details: "AutoCAD is one of the most widely used CAD software for creating blueprints for buildings, bridges, and computer chips. This course covers 2D drafting and 3D modeling techniques. You will learn to work with layers, blocks, and layouts, as well as manage printing, plotting, and annotating drawings. By the end of this course, you will have the skills needed to create professional-level AutoCAD projects.",
    },
    {
        id: 2,
        title: "ETABS",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Master the art of building design and analysis software.",
        details: "ETABS is a software for building analysis and design, offering powerful tools for creating 3D models, running structural analyses, and designing buildings of all sizes. This course will guide you through creating detailed building models, applying loads, and running structural simulations. You will learn the nuances of designing concrete, steel, and timber buildings, preparing you for real-world engineering challenges.",
    },
    {
        id: 3,
        title: "Revit Architecture",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Dive into the world of BIM to revolutionize building design and construction.",
        details: "Revit Architecture is a robust software used in Building Information Modeling (BIM). It allows architects and engineers to create and manage a digital model of a building project. This course covers parametric design, 3D modeling, and the creation of construction documents, with a focus on how Revit streamlines workflows from the early design phase through to construction. By the end, you’ll understand how to create architectural models, assign building materials, and produce renderings and construction drawings.",
    },
    {
        id: 4,
        title: "3DS MAX",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Unlock the potential of 3D modeling and animation.",
        details: "3DS Max is industry-leading software used for 3D modeling, animation, and rendering. This course is designed for beginners to intermediate users, focusing on creating photorealistic models, animations, and VR experiences. You'll explore character rigging, lighting effects, and camera controls, providing you with all the tools you need to create engaging animations for games, films, and visualizations.",
    },
    {
        id: 5,
        title: "Civil 3D",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Learn to manage civil engineering projects with precision.",
        details: "Autodesk Civil 3D is a civil engineering design and documentation solution that supports BIM workflows. This course covers road and highway design, land development, and infrastructure projects. You'll explore the tools needed for surface modeling, grading, alignment, and corridor design. By the end of the course, you’ll have a thorough understanding of how to design civil projects using Civil 3D's powerful features.",
    },
    {
        id: 6,
        title: "MX Road",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Specialize in advanced road design techniques.",
        details: "MX Road is a comprehensive civil engineering software used for designing roads and highways. This course teaches you how to create accurate road designs, apply earthworks, and optimize designs for cost-efficiency. The software's advanced string-based modeling will allow you to design roads while considering real-world constraints, such as terrain and project specifications.",
    },
    {
        id: 7,
        title: "STAAD.Pro",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Enhance your structural analysis skills with STAAD.Pro.",
        details: "STAAD.Pro is a widely-used software for structural analysis and design. This course covers everything from simple beam design to complex seismic and wind load analysis. You'll learn how to model and analyze various structures such as buildings, bridges, and towers. The course also includes hands-on projects that simulate real-world engineering problems, helping you become proficient in both concrete and steel structure design.",
    },
    {
        id: 8,
        title: "Quantity Take off",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Master the skills of accurate cost estimating.",
        details: "Quantity Take Off is an essential skill for anyone in the construction industry. This course provides you with the knowledge to extract quantities from construction drawings, calculate material needs, and estimate labor costs. You will learn how to use digital tools like Bluebeam and PlanSwift to automate the takeoff process and create accurate cost estimates, giving you a competitive edge in project bidding.",
    },
    {
        id: 9,
        title: "Google SketchUp",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Create stunning 3D models with simplicity and precision.",
        details: "Google SketchUp, now known as SketchUp, is a user-friendly 3D modeling tool that allows designers and architects to quickly create detailed models. This course will walk you through the basics of 3D modeling, including applying textures, shadows, and materials. You’ll also learn how to integrate SketchUp with other software like Google Earth and how to produce renderings for presentations. It’s an ideal course for anyone interested in architecture, interior design, or urban planning.",
    },
    {
        id: 10,
        title: "Catia",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "CATIA is a multi-platform software suite for computer-aided design (CAD), computer-aided manufacturing (CAM), computer-aided engineering (CAE), PLM, and 3D, developed by the French company Dassault Systèmes.",
        details: "CATIA is a comprehensive software solution used in the aerospace, automotive, and shipbuilding industries. It enables engineers to perform 3D modeling, simulation, and analysis of products. This course covers parametric and surface modeling, product assembly design, and simulation techniques, allowing you to develop high-performance products efficiently. CATIA is known for its advanced capabilities in complex systems design and manufacturing, making it essential for engineers looking to enhance their skill set.",
    },
    {
        id: 11,
        title: "Creo",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Creo is a family of CAD software products for product design by PTC. It offers powerful and flexible 3D CAD capabilities to accelerate the product development process by reducing time from design to digital prototype.",
        details: "Creo is widely used in the manufacturing and product development industries. This course will teach you how to create parametric models, assembly structures, and detailed engineering drawings. You'll also explore how to apply simulation and analysis tools for testing product designs. Creo’s ability to seamlessly integrate design, analysis, and manufacturing makes it a versatile tool for mechanical engineers.",
    },
    {
        id: 12,
        title: "Ansys WB",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Ansys Workbench is a platform that can simulate the interaction of multiple physics: structural, fluid dynamics, electromagnetics, etc.",
        details: "Ansys Workbench is a highly regarded simulation tool for engineers. This course will provide you with a thorough understanding of how to run simulations on structural, fluid, and thermal systems. You'll learn how to create finite element models, apply loads, and run analyses to solve complex engineering problems. Ansys Workbench integrates multiple physical simulations into one environment, making it a powerful tool for optimizing designs across multiple domains.",
    },
    {
        id: 13,
        title: "NX CAM",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "NX CAM is a comprehensive and integrated computer-aided manufacturing tool that helps you improve the entire digital manufacturing process, from planning and tooling to managing CNC operations.",
        details: "NX CAM provides a complete suite of tools for programming CNC machine tools and validating machining processes. This course focuses on advanced features such as high-speed machining, multi-axis operations, and machine tool simulation. You’ll learn how to create efficient machining strategies and generate G-code for a variety of CNC machines, helping streamline your manufacturing processes.",
    },
    {
        id: 14,
        title: "SolidWorks",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "SolidWorks is a solid modeling computer-aided design (CAD) and computer-aided engineering (CAE) software program that runs on Microsoft Windows.",
        details: "SolidWorks is one of the leading CAD software used for designing mechanical products. This course will teach you how to create parametric models, assemblies, and detailed engineering drawings. You’ll also learn how to use simulation tools to analyze the structural integrity of designs. SolidWorks is ideal for professionals looking to streamline product development, with powerful tools for surface modeling, sheet metal design, and motion simulation.",
    },
    {
        id: 15,
        title: "ANSYS CFD",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "ANSYS CFD (Computational Fluid Dynamics) solutions are used to simulate fluid motion and its interaction with surfaces.",
        details: "ANSYS CFD is an advanced tool used by engineers to simulate fluid flow, heat transfer, and chemical reactions. This course will cover fundamental concepts of fluid dynamics and their application in CFD. You will learn how to create simulations for aerodynamic designs, heat exchangers, and fluid-structure interactions. This is a key skill for engineers working in industries like aerospace, automotive, and energy.",
    },
    {
        id: 16,
        title: "CNC",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "CNC (Computer Numerical Control) machines use computer-generated code to control machining tools.",
        details: "CNC machines are vital to modern manufacturing, and this course will introduce you to the fundamentals of CNC programming. You’ll learn how to write and interpret G-code, set up CNC machines, and run basic operations such as milling, drilling, and turning. This course is ideal for aspiring machinists and manufacturing engineers looking to automate the production of precision parts.",
    },
    {
        id: 17,
        title: "Revit MEP",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Revit MEP is a specialized version of Revit for mechanical, electrical, and plumbing engineers.",
        details: "Revit MEP offers a suite of tools for designing and documenting mechanical, electrical, and plumbing systems. This course covers everything from creating MEP systems to generating detailed documentation. You’ll learn how to create coordinated models, check for clashes, and simulate building performance. By the end of the course, you'll have the skills needed to design complex building systems efficiently.",
    },
    {
        id: 18,
        title: "GD & T",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "GD & T is a system for defining and communicating engineering tolerances.",
        details: "Geometric Dimensioning and Tolerancing (GD&T) is a standardized system that allows engineers to define allowable variations in part geometry. This course covers the fundamentals of interpreting and applying GD&T symbols, tolerances, and datums. You will learn how to use this system to communicate design intent clearly, ensuring high-quality manufacturing and assembly processes.",
    },
    {
        id: 19,
        title: "V-ray",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "V-ray is a 3D rendering software that is used in media, entertainment, and design industries for visualizing and computer graphics rendering.",
        details: "V-Ray is a powerful rendering engine that integrates with 3D modeling software to produce photorealistic images. This course teaches you how to set up scenes, apply realistic lighting and textures, and render images with high-quality results. V-Ray is used across industries, including architecture, film, and product design, making it a valuable skill for designers looking to create professional-quality visuals.",
    },
    {
        id: 20,
        title: "Photoshop",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Adobe Photoshop is a software application for image editing and photo retouching for use on Windows or MacOS computers.",
        details: "Adobe Photoshop is the industry-standard software for image editing and digital art. This course covers the essentials of photo editing, including cropping, retouching, and applying filters. You’ll also learn how to create and manipulate layers, adjust color, and add effects to images. Photoshop is an essential tool for graphic designers, photographers, and digital artists, offering endless creative possibilities.",
    }
];


const CourseDetail = () => {
    const { id } = useParams();
    const course = courses.find((course) => course.id === parseInt(id));

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <>
            <div className='dark:bg-custom-course-black dark:text-neutral-200'>
                <div className="p-4  mt-20 ">
                    <Link to="/Course">
                        <p className='flex justify-center items-center gap-x-3 border w-fit px-3 py-1 rounded-full arrow '> <BiLeftArrowAlt size={25} /> <span className='hidden showe'>go back</span></p>
                    </Link>
                </div>
                <div className="course-detail md:flex md:gap-x-7 py-10 justify-center xl:px-12 px-6  ">

                    <div className=' flex-1 mb-12'>
                        <img
                            src={course.image}
                            alt={course.title}
                            className='md:w-1/2 w-full mb-8 rounded-3xl'
                        />
                        <h1 className='font-bold text-3xl my-3'>{course.title}</h1>
                        <h4 className='text-2xl font-semibold my-2'>{course.description}</h4>
                        <p className='text-justify'>{course.details}</p>
                    </div>

                    <div>
                        <div className='min-w-80 xl:min-w-96  rounded-xl shadow-2xl dark:border border-gray-800 h-fit py-10 px-6  '>
                            <h3 className='text-3xl font-bold text-red-500 mb-4'>Material Includes</h3>
                            <ul>
                                <li className='flex gap-x-2 py-4 border-t border-gray-200 '><Clock /> <span>Time Duration:</span>{course.duration} Days</li>
                                <li className='flex gap-x-2 py-4 border-t border-gray-200 '><Book /> <span>Reference Guides</span></li>
                                <li className='flex gap-x-2 py-4 border-t border-gray-200 '><LineChart /> <span>Student Login</span></li>
                                <li className='flex gap-x-2 py-4 border-t border-gray-200 '><GroupIcon /> <span>ISO Certification</span></li>
                                <li className='flex gap-x-2 py-4 border-t border-gray-200 '><Percent /> <span>Pre-Placement Training</span></li>
                                <li className='flex gap-x-2 py-4 border-t border-gray-200 '><Package2Icon /> <span> Best Infrastructure</span></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseDetail;
