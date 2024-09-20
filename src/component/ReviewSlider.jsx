import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import image1 from '../assets/member-3.png'
import image2 from '../assets/member-4.png'
import image3 from '../assets/member-5.png'


import image7 from '../assets/member-8.png'

const reviews = [
    {
        name: "John Doe",
        demoImg: image1,
        review: "Great product! I love using it every day."
    },
    {
        name: "Jane Smith",
        demoImg: image1,
        review: "Excellent service and fast delivery. Highly recommended!"
    },
    {
        name: "Mike Johnson",
        demoImg: image1,
        review: "The quality exceeded my expectations. Will buy again."
    },
    {
        name: "Emily Brown",
        demoImg: image1,
        review: "User-friendly and efficient. Saved me a lot of time."
    },
    {
        name: "Chris Wilson",
        demoImg: image1,
        review: "Impressive features and great value for money."
    },
    {
        name: "Sarah Lee",
        demoImg: image1,
        review: "Customer support was outstanding. Thank you!"
    }
]

export default function ReviewSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }

    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
    }

    const currentReview = reviews[currentIndex]

    return (
        <div className="md:w-full w-[380px] max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md drop-shadow-md">
            <div className="flex flex-col items-center mb-8 ">
                <img
                    src={currentReview.demoImg}
                    alt={currentReview.name}
                    className="w-24 h-24 rounded-full mb-4"
                />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 ">{currentReview.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-center">{currentReview.review}</p>
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
    )
}