import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div
            className=" h-screen mx-auto mt-18 p-10 l text-center transition-all duration-500 
      bg-gradient-to-br from-gray-100 via-white to-gray-200 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
      shadow-lg border border-gray-300 dark:border-gray-700 flex justify-center items-center flex-col"
        >
            {/* Title */}
            <h1
                className="text-5xl md:text-6xl font-extrabold mb-4 
        bg-gradient-to-r from-black via-gray-700 to-gray-900 
        dark:from-white dark:via-gray-300 dark:to-gray-500 
        bg-clip-text text-transparent"
            >
                Book Finder Web App
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                Discover, explore, and buy your favorite books instantly.
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-6">

                <Link to={"/Books"}><button
                    className="px-6 py-2 rounded-full font-medium 
          bg-gradient-to-r from-gray-200 to-gray-300 
          text-gray-800 hover:from-gray-300 hover:to-gray-400 
          dark:from-gray-700 dark:to-gray-800 dark:text-gray-100 
          dark:hover:from-gray-600 dark:hover:to-gray-700 
          transition-all duration-300 shadow-md"
                >
                    Explore Books
                </button></Link>
            </div>
        </div>
    );
};

export default HeroSection;
