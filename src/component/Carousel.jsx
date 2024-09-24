import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react'; // Importing from lucide-react

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const slideInterval = useRef(null);

    const startSlideShow = () => {
        slideInterval.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 3 seconds per slide
    };

    const pauseSlideShow = () => {
        if (slideInterval.current) clearInterval(slideInterval.current);
    };

    useEffect(() => {
        if (isPlaying) {
            startSlideShow();
        } else {
            pauseSlideShow();
        }

        return () => pauseSlideShow(); // Clean up on component unmount
    }, [isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className='relative h-fit w-full rounded-lg overflow-hidden shadow-xl'>
            {/* Images */}
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="w-full  object-cover transition-transform duration-300 hover:scale-110"
            />

            {/* Play/Pause Button */}
            <div className="absolute bottom-4 left-4">
                <button
                    onClick={togglePlayPause}
                    className="bg-gray-800 text-white p-2 rounded-full focus:outline-none"
                >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />} {/* Using icons */}
                </button>
            </div>
        </div>
    );
};

export default Carousel;
