import { MenuIcon, X } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

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
                <div className='md:hidden bg-red-50 h-full w-5/6 fixed'>

                </div>

            )}



            <div className='fixed top-0 z-20 w-full flex justify-between items-center mx-auto py-4 px-4 bg-red-50 dark:bg-custom-gradient-black xl:px-12'>
                <div className='flex justify-center items-center gap-x-4 '>
                    <button
                        onClick={setTogleMenu}
                        className='md:hidden dark:text-neutral-50'
                    >{togle ? <X /> : <MenuIcon />}</button>

                    <Link to='/'><h2 className='font text-gray-900 dark:text-neutral-50 font-semibold tracking-wider text-2xl leading-7'>
                        <span className='font-bold text-red-500 tracking-tight text-3xl'>Cad</span>deshk
                    </h2></Link>
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
