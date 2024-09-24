import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import the icons
import image1 from '../assets/banner-1.jpg';
import image2 from '../assets/banner-2.jpg';
import image3 from '../assets/banner-3.jpg';
import image4 from '../assets/banner-4.jpg';
import image5 from '../assets/banner-5.jpg';

const images = [image1, image2, image3, image4, image5];

const Homeslider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = useRef(null);

    const startSlideShow = () => {
        slideInterval.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
    };

    const stopSlideShow = () => {
        if (slideInterval.current) clearInterval(slideInterval.current);
    };

    useEffect(() => {
        startSlideShow();
        return () => stopSlideShow(); // Clean up on component unmount
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-[400px] object-cover"
                    />
                ))}
            </div>
            {/* Left Arrow */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                aria-label="Previous Slide"
            >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            {/* Right Arrow */}
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                aria-label="Next Slide"
            >
                <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
        </div>
    );
};

export default Homeslider;
