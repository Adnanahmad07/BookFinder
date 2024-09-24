import { Facebook, Instagram, Telescope, Twitch, Twitter, Youtube } from 'lucide-react';
import React from 'react';
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-700 dark:bg-gray-950 text-white p-8 dark:border-t border-r-neutral-500" >
            <div className="container mx-auto flex flex-col lg:flex-row justify-between">

                <div className="mb-6 lg:mb-0">
                    <img src={logo} alt="Logo" className="h-12 mb-4 rounded-sm" />
                    <p className="text-gray-400 xl:max-w-96">In Front Of Government Polytechnic College Gate, Gadge Nagar, Amravati 444602</p>

                    <p className="mt-4">
                        <a href="tel:+918180834389" className="block text-gray-400s">Phone: +91 8180834389</a>
                        <a href="tel:+918087212653" className="block text-gray-400s">+91 8087212653</a>
                        <a href="mailto:info@yourcompany.com" className="block text-gray-400s">Email: info@yourcompany.com</a>
                    </p>
                </div>

                {/* Quick Links */}
                <div className="mb-6 lg:mb-0">
                    <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                    <ul>
                        <li><Link to="/course/1" className="block text-gray-400 hover:text-white">AutoCAD</Link></li>
                        <li><Link to="/course/19" className="block text-gray-400 hover:text-white">V-ray</Link></li>
                        <li><Link to="/course/9" className="block text-gray-400 hover:text-white">SketchUp</Link></li>
                        <li><Link to="/course/3" className="block text-gray-400 hover:text-white">Revit Architecture</Link></li>
                        <li><Link to="/course/10" className="block text-gray-400 hover:text-white">Catia</Link></li>
                        <li><Link to="/course/14" className="block text-gray-400 hover:text-white">Solid Works</Link></li>
                        <li><Link to="/course/11" className="block text-gray-400 hover:text-white">Creo</Link></li>
                    </ul>
                </div>

                {/* Pages */}
                <div className="mb-6 lg:mb-0">
                    <h2 className="text-lg font-semibold mb-4">Pages</h2>
                    <ul>
                        <li><Link to="About" className="block text-gray-400 hover:text-white">About Us</Link></li>
                        <li><Link to="Showcase" className="block text-gray-400 hover:text-white">Showcase</Link></li>
                        <li><Link to="Blog" className="block text-gray-400 hover:text-white">Blog</Link></li>
                        <li><Link to="Contact" className="block text-gray-400 hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Media Icons */}
                <div className="mb-6 lg:mb-0">
                    <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <Link className='none'><Facebook /></Link>
                        <Link className='none'><Instagram /></Link>
                        <Link className='none'><Twitter /></Link>
                        <Link className='none'><Youtube /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
