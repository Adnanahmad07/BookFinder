import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await fetch(`https://openlibrary.org/works/${id}.json`);
                const data = await res.json();
                setBook(data);
            } catch (error) {
                console.error("Error fetching book details:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBook();
    }, [id]);

    if (loading)
        return (
            <div className="flex items-center justify-center h-screen text-gray-700 dark:text-gray-200">
                Loading book details...
            </div>
        );

    if (!book)
        return (
            <div className="flex items-center justify-center h-screen text-gray-500 dark:text-gray-400">
                Book not found.
            </div>
        );

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-12 pt-24">
            <div className="max-w-4xl mx-auto">
                <Link
                    to="/Books"
                    className="text-sm mb-5 px-6 py-2 rounded-full font-medium 
          bg-gradient-to-r from-gray-200 to-gray-300 
          text-gray-800 hover:from-gray-300 hover:to-gray-400 
          dark:from-gray-700 dark:to-gray-800 dark:text-gray-100 
          dark:hover:from-gray-600 dark:hover:to-gray-700 
          transition-all duration-300 shadow-md"
                >
                    ← Back To Books
                </Link>

                <div className="flex flex-col md:flex-row gap-10 items-start bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg mt-6">
                    {book.covers ? (
                        <img
                            src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
                            alt={book.title}
                            className="w-60 h-80 object-cover rounded-lg shadow-md"
                        />
                    ) : (
                        <div className="w-60 h-80 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
                    )}

                    <div className="flex-1">
                        <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {book.description?.value || book.description || "No description available."}
                        </p>

                        {book.subjects && (
                            <div className="mt-4">
                                <h3 className="font-semibold text-lg mb-2">Subjects:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {book.subjects.slice(0, 8).map((subj, i) => (
                                        <span
                                            key={i}
                                            className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full"
                                        >
                                            {subj}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
