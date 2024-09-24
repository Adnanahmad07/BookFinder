import { useState } from 'react';
import axios from 'axios';
import React from 'react';

const Form = () => {
    // State for form inputs
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page

        // Basic validation
        if (name.length === 0) {
            alert('Name is required');
        } else if (mobile.length === 0) {
            alert('Mobile number is required');
        } else if (email.length === 0) {
            alert('Email is required');
        } else if (course.length === 0) {
            alert('Please select a course');
        } else {
            const url = 'https://27kisanagro.com/cadcontact.php';

            // Create form data to send
            let fData = new FormData();
            fData.append('name', name);
            fData.append('mobile', mobile);
            fData.append('email', email);
            fData.append('course', course);

            // Send form data via POST request
            axios.post(url, fData)
                .then(response => {
                    window.alert('Form submitted successfully!'); // Show success message
                    window.location.reload(); // Close form by reloading the page
                })
                .catch(error => {
                    window.alert('Error sending form: ' + error.message); // Handle error
                });
        }
    };

    return (
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">CONTACT US</h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Send Your Message<br />Our team is ready to answer all your questions.</p>

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="mobile">
                        Mobile Number
                    </label>
                    <input
                        type="text"
                        id="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="course">
                        Select Course
                    </label>
                    <select
                        id="course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    >
                        <option value="">Select Course</option>
                        <option value="civil-cad">Civil CAD</option>
                        <option value="mechanical-cad">Mechanical CAD</option>
                        <option value="electrical-cad">Electrical CAD</option>

                        <option value="architecture-cad">Architecture CAD</option>
                        <option value="interior-design">Interior Design</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-red-600 dark:bg-red-500 rounded-md shadow-sm hover:bg-blue-700 dark:hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
