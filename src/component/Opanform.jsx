import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Opanform = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        course: ''
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setIsVisible(true);
            }, 300);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const closeForm = () => {
        setIsAnimating(false);
        setTimeout(() => {
            setIsVisible(false);
        }, 300);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://27kisanagro.com/cadcontact.php', formData);
            console.log('Form submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    if (!isVisible && !isAnimating) {
        return null;
    }

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 dark:bg-opacity-80 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-center relative transition-all duration-300 transform ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <button
                    className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 focus:outline-none"
                    onClick={closeForm}
                >
                    &times;
                </button>

                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Inquiry Form</h2>
                <p className="mb-2 text-gray-700 dark:text-gray-300">Send your inquiry</p>
                <p className="mb-6 text-gray-700 dark:text-gray-300">Our team is ready to answer all your questions.</p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4 text-left">
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-red-200 dark:bg-gray-700 dark:text-gray-100"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-4 text-left">
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Mobile Number</label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-red-200 dark:bg-gray-700 dark:text-gray-100"
                            placeholder="Enter your mobile number"
                            required
                        />
                    </div>
                    <div className="mb-4 text-left">
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-red-200 dark:bg-gray-700 dark:text-gray-100"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6 text-left">
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Select Course</label>
                        <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-red-200 dark:bg-gray-700 dark:text-gray-100"
                            required
                        >
                            <option value="" disabled>Select Course</option>
                            <option value="civil-cad">Civil CAD</option>
                            <option value="mechanical-cad">Mechanical CAD</option>
                            <option value="electrical-cad">Electrical CAD</option>
                            <option value="project-management">Project Management</option>
                            <option value="architecture">Architecture</option>
                            <option value="interior-design">Interior Design</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300 dark:bg-red-500 dark:hover:bg-red-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Opanform;
