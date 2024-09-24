import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import image1 from '../assets/member-3.png';
import image2 from '../assets/member-4.png';
import image3 from '../assets/member-5.png';
import image7 from '../assets/member-8.png';
import image4 from '../assets/member-7.png'

const reviews = [
    {
        name: "Rahul Sharma",
        demoImg: image1,
        course: "AutoCAD",
        review: "CadLink's AutoCAD course gave me hands-on experience that significantly improved my technical skills. The instructors are very supportive!",
    },
    {
        name: "Sneha Patil",
        demoImg: image4,
        course: "Photoshop",
        review: "The Photoshop course at CadLink helped me build a strong foundation. The projects were practical and helped me create a stunning portfolio.",
    },
    {
        name: "Rohan Deshmukh",
        demoImg: image3,
        course: "Revit Architecture",
        review: "Revit Architecture training was top-notch. I feel confident in using the software professionally thanks to the detailed guidance from the trainers.",
    },
    {
        name: "Priya Nair",
        demoImg: image7,
        course: "3DS MAX",
        review: "CadLink's 3DS MAX course was detailed and interactive. The instructors ensured we understood every concept thoroughly, making the learning process easy.",
    },

];

export default function ReviewSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const currentReview = reviews[currentIndex];

    return (
        <div className="md:w-full w-[380px] max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md drop-shadow-md">
            <div className="flex flex-col items-center mb-8">
                <img
                    src={currentReview.demoImg}
                    alt={currentReview.name}
                    className="w-24 h-24 rounded-full mb-4"
                />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{currentReview.name}</h2>
                <p className="text-gray-500 dark:text-gray-400">
                    Course: <span className="text-blue-500 dark:text-blue-400">{currentReview.course}</span>
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-center mt-2">{currentReview.review}</p>
            </div>
            <div className="flex justify-center space-x-4">
                <button
                    onClick={prevReview}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Previous review"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextReview}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Next review"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
