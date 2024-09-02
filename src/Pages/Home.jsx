import React from 'react';
import Category from '../component/Category.jsx'
import Trusted from '../component/Trusted.jsx'
import WhyHome from '../component/WhyHome.jsx'
import background from '../assets/homeBg.jpg';
import modal from '../assets/modal1.png'

const Home = () => {
    return (
        <div>
            <div
                className=' pt-20 backgroundImage md:flex justify-center items-center gap-x-12 px-12'

            >

                <div className='text-white dark:text-neutral-400 flex-1'>
                    <h1 className='xl:text-5xl text-3xl mb-6 font-bold tracking-wider linehight'>Best <span className='font-extrabold text-red-500'>Autocad</span> Training Institutes In Gadge Nagar Amravati</h1>
                    <p className='md:min-w-96 text-md mb-8 '>Caddesk Ameerpet Hyderabad Is The Best Autocad Training Institutes in Hyderabad Which Offers various Courses In Civil CAD, Mechanical CAD, Electrical CAD, Architecture CAD, Interior Designing, BIM course In Hyderabad. Build Your Career In The CAD Join Caddesk.Our best infrastructure resources and experienced instructors make you the premier choice for anyone looking to elevate their skills in this field. You won’t find a more competent organization to help you reach your full potential in AutoCAD. Trust us, if you want to become an expert in this field, Caddesk Hyderabad is the place to start. Don’t hesitate to sign up for free demo and unlock your fullest potential today!</p>
                    <div className='flex flex-nowrap'>


                        <button className='  mr-8 md:text-xl px-4 py-2 rounded-lg bg-red-500'>Get Start</button>

                        <button className=' border mr-8 md:text-xl px-4 py-2 rounded-lg  border-gray-400'>Explore Course</button>


                    </div>
                </div>

                <div className=''>
                    <img src={modal} alt="" className='' />
                </div>
            </div>

            <Category />
            <Trusted />
            <WhyHome />
        </div>

    );
};

export default Home;
