// components/BookCard.jsx
import React from "react";

const BookCard = ({ img, title, author, className }) => {
    return (
        <div className={`w-56 p-2 ${className}`}>
        <img src={img} alt={title} className="w-full h-72 object-cover rounded-2xl" />
        <h3 className="text-sm font-bold mt-2">{title}</h3>
        <p className="text-xs text-gray-500">{author}</p>
        </div>
    );
};

export default BookCard;