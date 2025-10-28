import { MenuIcon, X } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const Routs = [
    {
        Name: "Home",
        NavLink: "/"
    },
    {
        Name: "Books",
        NavLink: "/Books"
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

    return (
        <>
            {togle && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: '0%' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className='md:hidden bg-gray-200  dark:bg-gray-950 dark:text-neutral-300 h-full w-5/6 fixed z-20 pt-28'
                >

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
                className='fixed top-0 z-20 w-full flex justify-between items-center mx-auto py-4 px-4 bg-gradient-to-r from-slate-200 to-zinc-100  dark:bg-custom-gradient-black xl:px-12'


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
                        <h2 className='text-black dark:text-gray-50 text-3xl font-extrabold tracking-wider font-serif '>BookFind</h2>
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



                    </div>
                </div>

                {/* Whatsapp Button */}
                <div className='flex justify-center items-center gap-x-5'>
                    <button
                        className=' px-6 py-2 mr-10 md:mr-16 xl:mr-12 rounded-sm border-gray-800 hover:cursor-default '

                    >

                    </button>

                </div>
            </motion.div>
        </>
    );
};

export default Navbar;
