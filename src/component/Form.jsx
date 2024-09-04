import React from 'react'

const Form = () => {
    return (
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">CONTACT US</h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Send Your Message<br />Our team is ready to answer all your questions.</p>

            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
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
                        className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="course">
                        Select Course
                    </label>
                    <select
                        id="course"
                        className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    >
                        <option value="">Select Course</option>
                        <option value="civil-cad">Civil CAD</option>
                        <option value="mechanical-cad">Mechanical CAD</option>
                        <option value="electrical-cad">Electrical CAD</option>
                        <option value="project-management">Project Management</option>
                        <option value="architecture-cad">Architecture CAD</option>
                        <option value="interior-design">Interior Design</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-red-600 dark:bg-red-500 rounded-md shadow-sm hover:bg-blue-700 dark:hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                >
                    Submit
                </button>
            </form>
        </div>

    )
}

export default Form