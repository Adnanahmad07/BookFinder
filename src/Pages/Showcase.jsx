import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Showcaseimg from "../assets/SKETCHUP.jpg";
import Cad from "../assets/cad.jpg";
import Cad2 from "../assets/cad2.jpg";
import Cad3 from "../assets/cad3.jpg";
import about2 from '../assets/about2.png';
import photoshop from '../assets/photoshop.jpg';
import revitmep from '../assets/RevitMEP.jpg';
import { Link } from 'react-router-dom';
import projectvisit1 from '../assets/projectvisit1.jpg';
import projectvisit2 from '../assets/projectvisit2.jpg';
import projectvisit3 from '../assets/projectvisit3.jpg';
import office1 from "../assets/office1.jpg";
import office2 from "../assets/office2.jpg";
import office3 from "../assets/office3.jpg";
import Carousel from '../component/Carousel.jsx';

const Button = ({ children, className }) => (
    <button className={`px-4 py-2 bg-red-500 text-white rounded ${className}`}>
        {children}
    </button>
);

const Showcase = () => {
    const images = [projectvisit1, projectvisit2, projectvisit3];
    const Office = [office1, office2, office3];
    const Cads = [Cad, Cad2, Cad3];

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-4 mt-20 py-12">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                            Welcome to Our <span className="text-red-500">Showcase</span>
                        </h1>
                        <p className="text-gray-600 mb-6 dark:text-gray-300">
                            Discover our latest innovations and cutting-edge solutions. We're revolutionizing the industry with our state-of-the-art technology.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/Contact">
                                <Button className="group flex items-center">
                                    Learn More
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                            <img
                                src={Cad}
                                alt="Showcase Image"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    </motion.div>

                    <div className='relative h-fit w-full rounded-lg overflow-hidden shadow-xl'>
                        <Carousel images={images} />
                    </div>
                    <div className='h-full pt-4'>
                        <h2 className='text-3xl font-bold mb-4 text-gray-900 dark:text-white'>
                            Site Visit
                        </h2>
                        <p className='text-md font-normal text-justify dark:text-gray-300'>
                            Explore your CAD project portfolio, showcasing precision-driven designs, technical expertise, and innovative solutions crafted during your course. Review and reflect on your completed works, where industry-standard tools and methodologies have been applied to real-world projects. To access or submit your projects, simply fill out the form below with your Name, Email, and Student ID. Our team will verify your details, and you'll gain access to your portfolio and ongoing project reviews.
                        </p>
                    </div>
                </div>
            </div>
            <div className='p-4  py-12 dark:bg-gray-900'>
                <div className='relative h-[400px] rounded-lg overflow-hidden'>
                    <img src={about2} alt="Cad" className='object-cover' />
                </div>

                <div className='md:flex justify-center items-center gap-x-12 mt-24'>
                    <div className='relative rounded-lg overflow-hidden shadow-xl md:w-[500px]'>
                        <Carousel images={Office} />
                    </div>
                    <div className='h-full pt-4 md:w-1/2'>
                        <h2 className='text-3xl font-bold mb-4 text-gray-900 dark:text-white'>
                            Welcome to Our State-of-the-Art Office
                        </h2>
                        <p className='text-md font-normal text-justify dark:text-gray-300'>
                            Experience a glimpse into our vibrant workspace, where creativity meets collaboration. Our office is designed to inspire innovation and foster teamwork, equipped with modern amenities that enhance productivity. From open spaces that encourage brainstorming sessions to quiet areas for focused work, every corner of our office reflects our commitment to excellence. Join us in this inspiring environment where ideas come to life and visions turn into reality.
                        </p>
                    </div>
                </div>

                <div className='md:flex justify-center items-center gap-x-12 mt-24'>
                    <div className='h-full pt-4 md:w-1/2'>
                        <h2 className='text-3xl font-bold mb-4 text-gray-900 dark:text-white'>
                            Revit MEP
                        </h2>
                        <p className='text-md font-normal text-justify dark:text-gray-300'>
                            Revit MEP is a specialized version of Revit for mechanical, electrical, and plumbing engineers, providing tools for designing complex building systems. MEP stands for Mechanical, Electrical, and Plumbing, which are the three engineering disciplines that Revit MEP targets.
                            <br />
                            <br />
                            Revit MEP offers a suite of tools for designing and documenting mechanical, electrical, and plumbing systems. This course covers everything from creating MEP systems to generating detailed documentation. You’ll learn how to create coordinated models, check for clashes, and simulate building performance. By the end of the course, you'll have the skills needed to design complex building systems efficiently.
                        </p>
                    </div>

                    <div className='relative h-[300px] rounded-lg overflow-hidden shadow-xl md:w-[500px]'>
                        <img
                            src={revitmep}
                            alt="Showcase Image"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Showcase;
