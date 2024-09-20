import { MenuIcon, X } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { motion } from 'framer-motion';

const Routs = [
    {
        Name: "Home",
        NavLink: "/"
    },
    {
        Name: "About us",
        NavLink: "About"
    },
    {
        Name: "Show Case",
        NavLink: "Showcase"
    },

    {
        Name: "Contact",
        NavLink: "Contact"
    }
];

const NavLinkStyles = ({ isActive }) => {
    return {
        fontWeight: isActive ? "800" : "500",
        backgroundColor: isActive ? "rgba(255, 255, 255, )" : "transparent",
        padding: isActive ? "8px" : "8px",
        borderRadius: isActive ? "4px" : "0"
    }
}

const Navbar = () => {
    const [togle, setTogle] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null); // For item2 dropdown
    const [showDropdown, setShowDropdown] = useState(false); // For item2 dropdown toggle

    const setTogleMenu = () => {
        setTogle(!togle);
    };

    // Categories and courses data for item2
    const categories = [
        {
            name: 'Cvil Cad',
            courses: [
                { name: 'AutoCAD', link: '/course/1' },
                { name: 'Ravit Arch.', link: '/course/3' },
                { name: 'V-ray', link: '/course/19' },
                { name: 'Photoshop', link: '/course/20' },
            ]
        },
        {
            name: 'Mechanical Cad',
            courses: [
                { name: 'Catia', link: '/course/10' },
                { name: 'Creo', link: '/course/11' },
                { name: 'Ansys WB', link: '/course/12' },
                { name: 'SolidWorks', link: '/course/14' },
                { name: 'NX CAD', link: '/course/15' },
                { name: 'Revit MEP', link: '/course/17' },
            ]
        },
        {
            name: 'Electrical Cad',
            courses: [
                { name: 'AutoCAD', link: '/course/1' },
                { name: 'SCANA', link: '/course/8' },
                { name: 'Revit MEP', link: '/course/17' },
                { name: 'SCADA', link: '/course/8' }
            ]
        },
        {
            name: 'Interior Design',
            courses: [
                { name: '3DS MAX', link: '/course/4' },
                { name: 'SketchUp', link: '/course/9' },
                { name: 'AutoCAD', link: '/course/1' },
                { name: 'Revit Architecture', link: '/course/3' }
            ]
        }
    ];

    return (
        <>
            {togle && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: '0%' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className='md:hidden bg-red-50 dark:bg-gray-950 dark:text-neutral-300 h-full w-5/6 fixed z-20 pt-28'
                >
                    <div className='w-full flex justify-center items-center'>
                        <Link
                            to="/Course"
                            className=' w-full text-center font-bold border-b border-gray-200 py-5'
                        >Course Offered</Link>
                    </div>
                    {Routs.map((item, index) => (
                        <div key={index} className='text-center font-bold border-b border-gray-200 py-5'>
                            <Link to={item.NavLink}>{item.Name}</Link>
                        </div>
                    ))}
                </motion.div>
            )}

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='fixed top-0 z-20 w-full flex justify-between items-center mx-auto py-4 px-4 bg-red-50 dark:bg-custom-gradient-black xl:px-12'


            >
                <div className='flex justify-center items-center gap-x-4 '>
                    <motion.button
                        onClick={setTogleMenu}
                        className='md:hidden dark:text-neutral-50'
                        initial={{ rotate: 0 }}
                        animate={{ rotate: togle ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        {togle ? (
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 45 }}
                                transition={{ duration: 0.3 }}
                            >
                                <X />
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <MenuIcon />
                            </motion.div>
                        )}
                    </motion.button>

                    <Link to='/'>
                        <img
                            src={logo}
                            alt="Logo"
                            className='w-36 rounded-md'
                        />
                    </Link>
                </div>

                {/* Main navigation */}
                <div className='hidden md:flex space-x-8'>
                    {Routs.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.NavLink}
                            className='text-gray-900 dark:text-neutral-200 font-thin hover:text-red-500 transition duration-300'
                            style={NavLinkStyles}
                        >
                            {item.Name}
                        </NavLink>
                    ))}

                    {/* Dropdown for "item2" */}
                    <div
                        className="relative flex "
                        onMouseEnter={() => setShowDropdown(true)}  // Show dropdown on hover
                        onMouseLeave={() => setShowDropdown(false)} // Hide dropdown on mouse leave

                    >
                        <NavLink
                            className='text-gray-900 dark:text-neutral-200 font-semibold hover:text-red-500 transition duration-300 '
                            to="/Course"
                            style={NavLinkStyles}


                        >  Course Offered</NavLink>

                        {/* First dropdown (Categories) */}
                        {showDropdown && (
                            <div className="absolute top-full left-0 w-48 bg-white dark:bg-gray-900 shadow-lg z-10">
                                {categories.map((category, index) => (
                                    <div
                                        key={index}
                                        className="p-2 text-gray-900  hover:bg-gray-100 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
                                        onMouseEnter={() => setActiveCategory(index)} // Show the second dropdown when hovering over a category
                                    >
                                        {category.name}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Second dropdown (Courses) */}
                        {activeCategory !== null && showDropdown && (
                            <div className="absolute top-full left-48 w-48 bg-white shadow-lg z-10">
                                {categories[activeCategory].courses.map((course, courseIndex) => (
                                    <Link
                                        key={courseIndex}
                                        to={course.link}
                                        className="block p-2 text-gray-900 hover:bg-gray-100 dark:text-neutral-200 dark:hover:bg-gray-700"
                                    >
                                        {course.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Whatsapp Button */}
                <div className='flex justify-center items-center gap-x-5'>
                    <button
                        className='border px-6 py-2 mr-10 md:mr-16 xl:mr-12 rounded-sm border-gray-800 dark:border-neutral-50 dark:text-neutral-50 hover:bg-white hover:border-transparent dark:hover:text-black'
                        onClick={() => window.open("https://wa.me/918087212653?text=I%20want%20to%20learn%20more%20about%20CadLinks%20Amravati", "_blank")}
                    >
                        Whatsapp
                    </button>

                </div>
            </motion.div>
        </>
    );
};

export default Navbar;
