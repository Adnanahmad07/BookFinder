import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Books = () => {
    const [query, setQuery] = useState("harry potter");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef();
    const navigate = useNavigate();

    const fetchBooks = async (pageNum = 1, isNewSearch = false) => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://openlibrary.org/search.json?title=${query}&page=${pageNum}`
            );
            const data = await res.json();

            if (isNewSearch) setBooks(data.docs.slice(0, 12));
            else setBooks((prev) => [...prev, ...data.docs.slice(0, 12)]);

            if (data.docs.length === 0) setHasMore(false);
        } catch (error) {
            console.error("Error fetching books:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks(1, true);
    }, []);

    // Infinite Scroll
    const lastBookRef = useRef();
    useEffect(() => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPage((prevPage) => prevPage + 1);
            }
        });

        if (lastBookRef.current) observer.current.observe(lastBookRef.current);
    }, [loading, hasMore]);

    useEffect(() => {
        if (page > 1) fetchBooks(page);
    }, [page]);

    const handleSearch = (e) => {
        e.preventDefault();
        setPage(1);
        setHasMore(true);
        fetchBooks(1, true);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-12 py-10 pt-24">
            {/* Search Bar */}
            <form
                onSubmit={handleSearch}
                className="flex justify-center mb-10 w-full"
            >
                <div className=" w-full max-w-lg border border-gray-300 bg-white dark:bg-gray-800 px-4 py-2 rounded-full flex justify-between items-center shadow-sm ">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for a book..."
                        className="flex-1 bg-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                    />
                    <button
                        type="submit"
                        className="ml-2 px-6 py-2 rounded-full font-medium 
              bg-gradient-to-r from-gray-200 to-gray-300 
              text-gray-800 hover:from-gray-300 hover:to-gray-400 
              dark:from-gray-700 dark:to-gray-800 dark:text-gray-100 
              dark:hover:from-gray-600 dark:hover:to-gray-700 
              transition-all duration-300 shadow-md hidden md:block"
                    >
                        Search
                    </button>
                    <button className="md:hidden block"><FaSearch /></button>
                </div>
            </form>

            {/* Books Grid */}
            <div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 
        gap-4 sm:gap-6 md:gap-8 justify-items-center"
            >
                {books.map((book, index) => {
                    const isLast = index === books.length - 1;
                    return (
                        <motion.div
                            key={index}
                            ref={isLast ? lastBookRef : null}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="w-full max-w-[180px] bg-gray-100 dark:bg-gray-950 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
                        >
                            {book.cover_i ? (
                                <figure className="h-48 overflow-hidden">
                                    <img
                                        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                        alt={book.title}
                                        className="object-cover w-full h-full"
                                    />
                                </figure>
                            ) : (
                                <div className="h-48 bg-gray-200 dark:bg-gray-800"></div>
                            )}
                            <div className="p-3 flex flex-col justify-between min-h-[120px]">
                                <h3 className="text-black dark:text-white font-semibold text-base line-clamp-2">
                                    {book.title}
                                </h3>
                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                    {book.author_name ? book.author_name[0] : "Unknown Author"}
                                </p>
                                <button
                                    onClick={() => navigate(`/book/${book.key.replace("/works/", "")}`)}
                                    className="mt-3 text-sm font-medium px-3 py-1 rounded-full border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                                >
                                    View
                                </button>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Loading */}
            {loading && (
                <div className="flex justify-center items-center mt-10">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                </div>
            )}
        </div>
    );
};

export default Books;
