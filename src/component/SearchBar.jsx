import React, { useState, useRef, useEffect } from 'react';

function SearchBar({classNameInput="" , widthGiven="", ...props}) {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [category, setCategory] = useState('All Categories');
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef(null);

    const categories = ['mobile', 'books', 'headphones'];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropDownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        // Perform search action with category and searchQuery
        console.log(`Searching for ${searchQuery} in ${category}`);
    };

    return (
        <form onSubmit={handleSearch} className={`${widthGiven ? widthGiven : "w-full"} mx-auto flex`}>
            {/* Category dropdown */}
            <div className="relative" ref={dropdownRef}>
                <button 
                    type="button"
                    onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                    className="flex items-center justify-between px-4 py-2.5 bg-none border border-gray-300 rounded-l-lg cursor-pointer min-w-[160px]"
                >
                    <span className="truncate">{category}</span>
                    <svg 
                        className={`w-4 h-4 ml-2 transition-transform ${isDropDownOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {isDropDownOpen && (
                    <div className="absolute z-10 w-full mt-1 border border-gray-200  rounded-lg shadow-lg">
                        {categories.map((item) => (
                            <button
                                type="button"
                                onClick={() => {
                                    setCategory(item);
                                    setIsDropDownOpen(false);
                                }}
                                key={item}
                                className={`block w-full px-4 py-2 cursor-pointer text-left hover:bg-white-50 ${category === item ? 'bg-blue-100 text-gray-700' : ''}`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Search input */}
            <div className="relative flex-1 flex">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full p-2.5 border-t border-b border-gray-300 ${classNameInput}`}

                    placeholder="Search for products..."
                />
                <button
                    type="submit"
                    className="px-4 py-2.5 border text-white rounded-r-lg "
                >
                    <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
        </form>
    );
}

export default SearchBar;