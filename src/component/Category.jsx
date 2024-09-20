import { FaDraftingCompass, FaHardHat, FaCogs, FaBuilding, FaPencilRuler } from 'react-icons/fa'; // Architecture, Civil, Mechanical, BIM, and Interior Design
import { Link } from 'react-router-dom';
import { MdElectricalServices } from 'react-icons/md'; // Electrical icon
import React from 'react';

const CardData = [
    {
        icon: <FaHardHat size={40} className='text-red-500' />, // Civil Engineering
        heading: "Civil Engineering Course",
        text: "Learn the fundamentals of civil engineering and infrastructure design."
    },
    {
        icon: <FaCogs size={40} className='text-green-500' />, // Mechanical Engineering
        heading: "Mechanical Engineering Course",
        text: "Explore the mechanics and engineering concepts behind machine design."
    },
    {
        icon: <MdElectricalServices size={40} className='text-blue-500' />, // Electrical Engineering
        heading: "Electrical Engineering Course",
        text: "Master the principles of electrical systems and circuit design."
    },
    {
        icon: <FaBuilding size={40} className='text-yellow-500' />, // BIM Modeling
        heading: "BIM Modeling Course",
        text: "Delve into Building Information Modeling for efficient construction."
    },
    {
        icon: <FaDraftingCompass size={40} className='text-purple-500' />, // Architecture
        heading: "Architecture CAD Course",
        text: "Learn architectural CAD design and drafting techniques."
    },
    {
        icon: <FaPencilRuler size={40} className='text-pink-500' />, // Interior Design
        heading: "Interior Design Course",
        text: "Create stunning interior designs using advanced CAD tools."
    },
];
// Array of colors for light and dark themes
const colors = [
    { light: 'bg-red-100', dark: 'dark:bg-red-800' },
    { light: 'bg-green-100', dark: 'dark:bg-green-800' },
    { light: 'bg-blue-100', dark: 'dark:bg-blue-800' },
    { light: 'bg-yellow-100', dark: 'dark:bg-yellow-800' },
    { light: 'bg-purple-100', dark: 'dark:bg-purple-800' },
    { light: 'bg-pink-100', dark: 'dark:bg-pink-800' },
];

const Category = () => {
    return (
        <div className='py-14 xl:px-16 px-10 bg-gray-100 dark:bg-gray-900 dark:text-neutral-50 '>
            <div className='md:flex'>
                <div className='flex-1'>
                    <span className='font-light text-2xl tracking-wider'>OUR BEST CATEGORY</span>
                    <h3 className='text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4'>We Success Learning Platform Creative Service.</h3>
                    <p className='h-1 w-16 bg-red-500 rounded-2xl'></p>
                </div>
                <div className='flex-1'>
                    <p>We offer Courses For Civil Engineers, Mechanical Engineers, Electrical Engineers, Architects & Interior Designers. We Have Various Course Categories With 100% Job Placement Assistance.</p>

                    <Link to="/Showcase">
                        <button className='text-neutral-100 mr-8 md:text-xl px-5 py-2 rounded-lg bg-red-500 mt-4'>See Showcase</button>
                    </Link>
                </div>
            </div>

            <div className='grid__container mt-12'>
                {CardData.map((item, index) => (
                    <div
                        key={index}
                        className={`box  hover:scale-105 duration-300 h-52  rounded-md drop-shadow-lg shadow-inner flex flex-col justify-center items-center p-4 gap-y-2 
                            ${colors[index % colors.length].light}
                            ${colors[index % colors.length].dark}
                            `}
                    >
                        <p>{item.icon}</p>
                        <h3 className='text-xl font-bold text-center'>{item.heading}</h3>
                        <p className='text-center text-sm px-12'>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
