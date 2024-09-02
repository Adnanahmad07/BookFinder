import { BookA, Clock } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
    {
        id: 1,
        day: "30",
        parday: "03",
        title: "Course 1",
        image: "https://via.placeholder.com/200",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        day: "30",
        parday: "03",
        title: "Course 2",
        image: "https://via.placeholder.com/200",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        day: "30",
        parday: "03",
        title: "Course 3",
        image: "https://via.placeholder.com/200",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 4,
        day: "30",
        parday: "03",
        title: "Course 4",
        image: "https://via.placeholder.com/200",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 5,
        day: "30",
        parday: "03",
        title: "Course 5",
        image: "https://via.placeholder.com/200",
        description: "Excepteur sint occaecat cupidatat non proident, Lorem ipsum dolor sit amet, consectetur adipiscing elit sunt in culpa.",
    },
    {
        id: 6,
        day: "30",
        parday: "03",
        title: "Course 6",
        image: "https://via.placeholder.com/200",
        description: "Excepteur sint occaecat cupidatat non proident, Lorem ipsum dolor sit amet, consectetur adipiscing elit sunt in culpa.",
    },
    {
        id: 7,
        day: "30",
        parday: "03",
        title: "Course 7",
        image: "https://via.placeholder.com/200",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 8,
        day: "30",
        parday: "03",
        title: "Course 8",
        image: "https://via.placeholder.com/200",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 9,
        day: "30",
        parday: "03",
        title: "Course 9",
        image: "https://via.placeholder.com/200",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 10,
        day: "30",
        parday: "03",
        title: "Course 10",
        image: "https://via.placeholder.com/200",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 11,
        day: "30",
        parday: "03",
        title: "Course 11",
        image: "https://via.placeholder.com/200",
        description: "Excepteur sint occaecat cupidatat non proident, Lorem ipsum dolor sit amet, consectetur adipiscing elit sunt in culpa.",
    },
    {
        id: 12,
        day: "30",
        parday: "03",
        title: "Course 12",
        image: "https://via.placeholder.com/200",
        description: "Excepteur sint occaecat cupidatat non proident, Lorem ipsum dolor sit amet, consectetur adipiscing elit sunt in culpa.",
    },
    {
        id: 13,
        day: "30",
        parday: "03",
        title: "Course 13",
        image: "https://via.placeholder.com/200",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 14,
        day: "30",
        parday: "03",
        title: "Course 14",
        image: "https://via.placeholder.com/200",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 15,
        day: "30",
        parday: "03",
        title: "Course 15",
        image: "https://via.placeholder.com/200",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 16,
        day: "30",
        parday: "03",
        title: "Course 16",
        image: "https://via.placeholder.com/200",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 17,
        day: "30",
        parday: "03",
        title: "Course 17",
        image: "https://via.placeholder.com/200",
        description: "Excepteur sint occaecat cupidatat non proident, Lorem ipsum dolor sit amet, consectetur adipiscing elit sunt in culpa.",
    },
    {
        id: 18,
        day: "30",
        parday: "03",
        title: "Course 18",
        image: "https://via.placeholder.com/200",
        description: "Excepteur sint occaecat cupidatat non proident, Lorem ipsum dolor sit amet, consectetur adipiscing elit sunt in culpa.",
    },
];

const Course = () => {
    return (
        <div className='flex flex-col justify-center items-center py-24 dark:bg-gray-950'>

            <div className='w-full text-center my-12'>
                <span className='font-light text-2xl tracking-wider dark:text-neutral-50'>OUR BEST CATEGORY</span>
                <h3 className='text-4xl font-bold text-gray-700 dark:text-gray-200 mb-4'>We Success Learning Platform Creative Service.</h3>
                <div className='w-full '>
                    <p className='h-1 w-60 bg-red-500 rounded-2xl mx-auto'></p>
                </div>
            </div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-8">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="relative rounded-lg lg:w-80 pb-4 overflow-hidden bg-slate-50 dark:bg-slate-900 border border-transparent hover:border-gray-500 ">
                        <div className=' w-full h-52'>
                            <img src={course.image} alt={course.title} className='w-full h-full object-cover  ' />
                        </div>

                        <div className='p-3 relative mb-14'>
                            <h2 className='text-neutral-900 dark:text-neutral-100 font-bold text-2xl leading-4 my-4'>{course.title}</h2>
                            <div className=' py-2 my-2 dark:text-neutral-300 '>
                                <p className='flex gap-x-3 my-2 text-sm'><BookA size={15} /> {course.day} Days</p>
                                <p className='flex gap-x-3 my-2 text-sm'><Clock size={15} /> {course.parday} Hours Per Day</p>

                            </div>
                            <p className='text-neutral-800 dark:text-neutral-100 text-md text-left'>{course.description}</p>

                        </div>
                        <Link
                            to={`/course/${course.id}`}
                            className='dark:text-blue-500 py-1 px-4 border rounded-full absolute bottom-7 right-7 '
                        >Learn More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Course;
