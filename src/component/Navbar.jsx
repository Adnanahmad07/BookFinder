import { MenuIcon, X } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'
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
        Name: "Course Offered",
        NavLink: "Course"
    },
    {
        Name: "Blog Section",
        NavLink: "Blog"
    },
    {
        Name: "Contact",
        NavLink: "Contact"
    }
];

const NavLinkStyles = ({ isActive }) => {
    return {
        fontWeight: isActive ? "800" : "400",
        backgroundColor: isActive ? "rgba(255, 255, 255, )" : "transparent",
        padding: isActive ? "8px" : "8px",
        borderRadius: isActive ? "4px" : "0"
    }
}
const Navbar = () => {

    const [togle, setTogle] = useState(false);
    const setTogleMenu = () => {
        setTogle(!togle);

    }

    return (
        <>
            {togle && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: '0%' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className='md:hidden bg-red-50 dark:bg-gray-950 dark:text-neutral-300 h-full w-5/6 fixed z-20 pt-28'
                >
                    {Routs.map((item, index) => (
                        <div
                            key={index}
                            className='text-center font-bold border-b border-gray-200 py-5'
                        >
                            <Link to={item.NavLink}>{item.Name}</Link>
                        </div>
                    ))}
                </motion.div>


            )}



            <div className='fixed top-0 z-20 w-full flex justify-between items-center mx-auto py-4 px-4 bg-red-50 dark:bg-custom-gradient-black xl:px-12'>
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
                            className='w-20 rounded-md border-gray-400 border-2'
                        />
                    </Link>
                </div>
                <div className=' hidden md:flex space-x-8 hide '>
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
                </div>
                <div className=' flex justify-center items-center gap-x-5'>
                    <button className='border px-6 py-2 mr-10 md:mr-16 xl:mr-12 rounded-sm border-gray-800 dark:border-neutral-50 dark:text-neutral-50 hover:bg-white hover:border-transparent dark:hover:text-black'>Whatsapp</button>

                </div>

            </div>
        </>
    );
};

export default Navbar;
