import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Homeslider from '../component/Homeslider.jsx'
import Category from '../component/Category.jsx'
import Trusted from '../component/Trusted.jsx'
import WhyHome from '../component/WhyHome.jsx'
import ReviewSlider from '../component/ReviewSlider.jsx'
import Iso from '../assets/pngwing.com.png'
import Msme from '../assets/Msme.jpg'
import background from '../assets/homeBg.jpg';
import modal from '../assets/modal.png'

const Home = () => {
    return (
        <div className='dark:bg-gray-950'>
            <div
                className=' pt-24 backgroundImage md:flex justify-center items-center gap-x-12 px-12'

            >

                <div
                    className='text-white dark:text-neutral-400 flex-1
                '>

                    <h1 className='xl:text-5xl text-3xl mb-6 font-bold tracking-wider linehight'>The Best <span className='font-extrabold text-red-500'>CAD</span> Training Institute In <br /> Gadge Nagar, Amravati</h1>
                    <p className='md:min-w-96 text-md mb-8 max-w-[550px]'>Welcome to CadLink – Amravati's Leading Training Institute
                        Located at Gadge Nagar, Amravati, CadLink is the premier destination for mastering in CAD/CAM/CAE. With top-tier instructors, cutting-edge facilities, and a commitment to excellence. CadLink is your gateway to a successful career in design and technology. Elevate your skills with industry-leading courses and unlock your potential today!</p>
                    <div className='flex flex-nowrap'>


                        <Link to='/contact'>
                            <button className='  mr-8 md:text-xl px-4 py-2 rounded-lg bg-red-500'>Get Start</button>
                        </Link>

                        <Link to="/Course"><button className=' border mr-8 md:text-xl px-4 py-2 rounded-lg  border-gray-400'>Explore Course</button></Link>


                    </div>

                    <div className='  my-10 flex gap-x-5'>
                        <img
                            src={Iso}
                            alt="Iso certified"
                            className='w-24'
                        />
                        <img
                            src={Msme}
                            alt="Iso certified"
                            className='w-24 rounded-full'
                        />


                    </div>
                </div>

                <motion.div
                    className=''
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    {/* <img src={modal} alt="modal" className='md:max-w-[500px] w-full' /> */}
                </motion.div>
            </div>

            <Homeslider />
            <Category />
            <Trusted />
            <WhyHome />
            <div className='py-16'>
                <h2 className='text-4xl dark:text-neutral-100 text-center my-8 font-extralight tracking-wider'>Testimonials</h2>
                <ReviewSlider />
            </div>

        </div>

    );
};

export default Home;
