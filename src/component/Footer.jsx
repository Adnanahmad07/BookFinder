import { Facebook, Instagram, Telescope, Twitch, Twitter, Youtube } from 'lucide-react';
import React from 'react';
import logo from '../assets/logo.jpg'

const Footer = () => {
    return (
        <footer className="bg-gray-700 dark:bg-gray-950 text-white p-8 dark:border-t border-r-neutral-500" >
            <div className="container mx-auto flex flex-col lg:flex-row justify-between">

                <div className="mb-6 lg:mb-0">
                    <img src={logo} alt="Logo" className="h-12 mb-4 rounded-sm" />
                    <p className="text-gray-400">Best Autocad Training Institutes In Gadge Nagar Amravati</p>
                    <p className="mt-4">
                        <a href="tel:+1234567890" className="block">Phone: +1234567890</a>
                        <a href="mailto:info@yourcompany.com" className="block">Email: info@yourcompany.com</a>
                    </p>
                </div>

                {/* Quick Links */}
                <div className="mb-6 lg:mb-0">
                    <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                    <ul>
                        <li><a href="#link1" className="block text-gray-400 hover:text-white">Link 1</a></li>
                        <li><a href="#link2" className="block text-gray-400 hover:text-white">Link 2</a></li>
                        <li><a href="#link3" className="block text-gray-400 hover:text-white">Link 3</a></li>
                    </ul>
                </div>

                {/* Pages */}
                <div className="mb-6 lg:mb-0">
                    <h2 className="text-lg font-semibold mb-4">Pages</h2>
                    <ul>
                        <li><a href="#page1" className="block text-gray-400 hover:text-white">Page 1</a></li>
                        <li><a href="#page2" className="block text-gray-400 hover:text-white">Page 2</a></li>
                        <li><a href="#page3" className="block text-gray-400 hover:text-white">Page 3</a></li>
                        <li><a href="#page4" className="block text-gray-400 hover:text-white">Page 4</a></li>
                    </ul>
                </div>

                {/* Social Media Icons */}
                <div className="mb-6 lg:mb-0">
                    <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <p className='none'><Facebook /></p>
                        <p className='none'><Instagram /></p>
                        <p className='none'><Twitter /></p>
                        <p className='none'><Youtube /></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
