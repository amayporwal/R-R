// components/SearchBar.jsx
import React from "react";
import "remixicon/fonts/remixicon.css";

const SearchBar = () => {
    return (
        <div className="flex items-center justify-between px-4 py-2 bg-white">
        <div className="relative w-full max-w-md flex border rounded-lg ">
        <i className="ri-search-line relative text-2xl mt-1 ml-1"></i>
            <input
            type="text"
            placeholder="Search"
            className=" pl-10 pr-4 py-2 w-full focus:border-transparent focus:outline-none"
            />
        </div>
        <div className="flex gap-8 ml-4 text-md font-bold text-gray-700">
            <span>Books</span>
            <span>Authors</span>
            <span>Genres</span>
            <span>Lists</span>
        </div>
        </div>
    );
};

export default SearchBar;