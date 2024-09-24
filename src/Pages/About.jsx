import React from 'react';
import { FaRocket, FaLightbulb, FaCogs, FaUsers } from 'react-icons/fa';
import topBackground from '../assets/aobut2.png'
import Ceo from "../assets/Ceo.jpg"


const About = () => {
    return (
        <div className="min-h-screen p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            {/* Top Section */}
            <div className="text-center">
                <img src={topBackground} alt="About Us" className="mx-auto w-[300px] object-cover" />
                <h1 className="text-4xl font-bold mt-4">About Us</h1>
                <p className="text-lg mt-2">CADLINK provides professional software training on a vast array of courses in the fields of CAD, CAM and CAE. Since its founding in 2019, CADLINK has provided training to over thousand of students.
                    Since its inception, in a very short span of time itself, with the qualitative services of training and well-designed training modules.</p>
            </div>

            {/* CEO Section */}
            <div className="mt-10 p-6 rounded-lg bg-gradient-to-r from-red-700 via-red-500 to-red-800 animate-pulse xl:w-[800px] mx-auto">
                <h2 className="text-3xl font-semibold text-center">Message from our CEO</h2>
                <p className="mt-2 text-center">Our institute is dedicated to empowering students with quality education and hands-on experience.</p>
            </div>

            {/* Features Section */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-4 rounded-lg shadow-lg dark:bg-gray-800">
                    <FaRocket className="text-3xl mx-auto text-blue-500" />
                    <h3 className="text-xl font-semibold mt-4 text-center">Innovation</h3>
                    <p className="text-center mt-2">We foster creativity and innovation in every step.</p>
                </div>
                <div className="p-4 rounded-lg shadow-lg dark:bg-gray-800">
                    <FaLightbulb className="text-3xl mx-auto text-yellow-500" />
                    <h3 className="text-xl font-semibold mt-4 text-center">Leadership</h3>
                    <p className="text-center mt-2">Cultivating the next generation of leaders.</p>
                </div>
                <div className="p-4 rounded-lg shadow-lg dark:bg-gray-800">
                    <FaCogs className="text-3xl mx-auto text-green-500" />
                    <h3 className="text-xl font-semibold mt-4 text-center">Technology</h3>
                    <p className="text-center mt-2">Leveraging cutting-edge technology for education.</p>
                </div>
                <div className="p-4 rounded-lg shadow-lg dark:bg-gray-800">
                    <FaUsers className="text-3xl mx-auto text-red-500" />
                    <h3 className="text-xl font-semibold mt-4 text-center">Community</h3>
                    <p className="text-center mt-2">Building a strong and inclusive community.</p>
                </div>
            </div>

            {/* Team Section */}
            <div className="mt-16">
                {/* <h2 className="text-3xl font-semibold text-center">Our Team</h2> */}
                <div className="mt-10 flex flex-wrap justify-center">
                    {/* CEO Image */}
                    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <img src={Ceo} alt="CEO" className="mx-auto rounded-full" />
                        <h3 className="text-xl font-semibold mt-4 text-center">Er. Kunal Joshi</h3>
                        <p className="text-center mt-2">CEO & Founder</p>
                        <p className="text-center mt-2">Leading the institute with a vision for excellence.</p>
                    </div>
                    {/* Other Team Members */}
                    {/* <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex flex-col sm:flex-row">
                        <div className="w-full sm:w-1/2 p-2">
                            <img src="https://via.placeholder.com/200" alt="Team Member 1" className="rounded-full mx-auto" />
                            <h3 className="text-lg font-semibold mt-4 text-center">Jane Smith</h3>
                            <p className="text-center">Head of Operations</p>
                        </div>
                        <div className="w-full sm:w-1/2 p-2">
                            <img src="https://via.placeholder.com/200" alt="Team Member 2" className="rounded-full mx-auto" />
                            <h3 className="text-lg font-semibold mt-4 text-center">Robert Brown</h3>
                            <p className="text-center">Lead Developer</p>
                        </div>
                    </div> */}

                </div>
                <div className='my-4 md:px-12 px-4'>
                    <h2 className='my-3 font-bold text-2xl'>ABOUT COMPANY</h2>
                    <p class="text-lg leading-relaxed">
                        Welcome to <span class="font-semibold">CadLink</span>, the premier training institute located in <span class="font-semibold">Gadge Nagar, Amravati</span>. Under the leadership of our CEO, <span class="font-semibold">Er. Kunal Joshi </span>, we are dedicated to providing top-notch training in a wide range of design and engineering software. Our mission is to equip students and professionals alike with the skills needed to excel in fields like civil, mechanical and elactrical engineering.
                    </p>
                    <p class="text-lg leading-relaxed mt-4">
                        At CadLink, we offer comprehensive courses in software such as AutoCAD, Revit Architecture, 3DS MAX, Civil 3D, SCADA, SketchUp, Catia, Creo, Ansys WB, SolidWorks, NX CAD, Revit MEP, V-ray, and Photoshop. Our state-of-the-art facilities and expert instructors ensure a practical and innovative learning experience that prepares you for success in today's competitive job market. Join us today to unlock your full potential and take the next step in your career.
                    </p>

                </div>
            </div>
        </div>
    );
}

export default About;
