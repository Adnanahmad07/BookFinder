import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Category from '../component/Category.jsx'
import Trusted from '../component/Trusted.jsx'
import WhyHome from '../component/WhyHome.jsx'
import ReviewSlider from '../component/ReviewSlider.jsx'
import Iso from '../assets/pngwing.com.png'
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
                    <p className='text-md my-2'>IMIE Certified</p>
                    <h1 className='xl:text-5xl text-3xl mb-6 font-bold tracking-wider linehight'>Best <span className='font-extrabold text-red-500'>CAD</span> Training Institute In Gadge Nagar, Amravati</h1>
                    <p className='md:min-w-96 text-md mb-8 '>CAD Gadge Nagar Amravati Is The Best cad Training Institutes in Amravati Which Offers various Courses In Civil CAD, Mechanical CAD, Electrical CAD, Architecture CAD, Interior Designing, BIM course In Amravati. Build Your Career In The CAD Join Caddesk.Our best infrastructure resources and experienced instructors make you the premier choice for anyone looking to elevate their skills in this field. You won’t find a more competent organization to help you reach your full potential in CAD. Trust us, if you want to become an expert in this field, Caddesk Amravati is the place to start. Don’t hesitate to sign up for free demo and unlock your fullest potential today!</p>
                    <div className='flex flex-nowrap'>


                        <Link to='/contact'>
                            <button className='  mr-8 md:text-xl px-4 py-2 rounded-lg bg-red-500'>Get Start</button>
                        </Link>

                        <Link to="/Course"><button className=' border mr-8 md:text-xl px-4 py-2 rounded-lg  border-gray-400'>Explore Course</button></Link>


                    </div>

                    <div className='  my-10 inline-block'>
                        <img
                            src={Iso}
                            alt="Iso certified"
                            className='w-24'
                        />

                    </div>
                </div>

                <motion.div
                    className=''
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <img src={modal} alt="modal" className='md:max-w-[500px] w-full' />
                </motion.div>
            </div>

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
