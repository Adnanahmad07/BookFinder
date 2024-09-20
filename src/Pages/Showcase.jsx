import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Showcaseimg from "../assets/SKETCHUP.jpg"
import Cad from "../assets/cad.jpg"
import about2 from '../assets/about2.png'
import photoshop from '../assets/photoshop.jpg'
import revitmep from '../assets/RevitMEP.jpg'



const Button = ({ children, className }) => (
    <button className={`px-4 py-2 bg-red-500 text-white rounded ${className}`}>
        {children}
    </button>
)

const Showcase = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white flex items-center justify-center p-4 mt-20 py-12">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Welcome to Our <span className="text-red-500">Showcase</span>
                        </h1>
                        <p className="text-gray-600 mb-6">
                            Discover our latest innovations and cutting-edge solutions. We're revolutionizing the industry with our state-of-the-art technology.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button className="group flex items-center">
                                Learn More
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
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

                    <div className='relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl'>
                        <img
                            src={Showcaseimg}
                            alt="Showcase Image"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <div className=' h-full pt-4 '>
                        <h2 className='text-3xl font-bold mb-4'>
                            Interior Design
                        </h2>
                        <p className='text-md font-normal text-justify '>Interior Designers Make The Closet Space Practical, Safe, And Delightful By Identifying Space Requirements And Selecting Decorative Items Like Color, Lighting, And Materials. They Read Blueprints And Must Understand Building Codes And Inspection Rules, Also As General Accessibility Standards.

                            <br />
                            <br />

                            Interior Designers Make The Closet Space Practical, Safe, And Delightful By Identifying Space Requirements And Selecting Decorative Items Like Color, Lighting, And Materials. They Read Blueprints And Must Understand Building Codes And Inspection Rules, Also As General Accessibility Standards.
                        </p>

                    </div>


                </div>
            </div>
            <div className='  1 p-4 mt-20 py-12'>
                <div className='relative h-[400px]  rounded-lg overflow-hidden '>
                    <img src={about2} alt="Cad" className='  object-cover ' />
                </div>


                <div className=' md:flex justify-center items-center gap-x-12 mt-24'>

                    <div className='relative h-[300px]  rounded-lg overflow-hidden shadow-xl md:w-[500px]'>
                        <img
                            src={photoshop}
                            alt="Showcase Image"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <div className=' h-full pt-4 md:w-1/2  '>
                        <h2 className='text-3xl font-bold mb-4'>
                            photoshop
                        </h2>
                        <p className='text-md font-normal text-justify '>Adobe Photoshop is a software application for image editing and photo retouching for use on Windows or MacOS computers.

                            <br />
                            <br />

                            Adobe Photoshop is the industry-standard software for image editing and digital art. This course covers the essentials of photo editing, including cropping, retouching, and applying filters. You’ll also learn how to create and manipulate layers, adjust color, and add effects to images. Photoshop is an essential tool for graphic designers, photographers, and digital artists, offering endless creative possibilities.
                        </p>

                    </div>

                </div>


                <div className=' md:flex justify-center items-center gap-x-12 mt-24'>


                    <div className=' h-full pt-4 md:w-1/2  '>
                        <h2 className='text-3xl font-bold mb-4'>
                            Revit MEP
                        </h2>
                        <p className='text-md font-normal text-justify '>Revit MEP is a specialized version of Revit for mechanical, electrical, and plumbing engineers, providing tools for designing complex building systems. MEP stands for Mechanical, Electrical, and Plumbing, which are the three engineering disciplines that Revit MEP targets.

                            <br />
                            <br />

                            Revit MEP offers a suite of tools for designing and documenting mechanical, electrical, and plumbing systems. This course covers everything from creating MEP systems to generating detailed documentation. You’ll learn how to create coordinated models, check for clashes, and simulate building performance. By the end of the course, you'll have the skills needed to design complex building systems efficiently.
                        </p>

                    </div>

                    <div className='relative h-[300px]  rounded-lg overflow-hidden shadow-xl md:w-[500px]'>
                        <img
                            src={revitmep}
                            alt="Showcase Image"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Showcase