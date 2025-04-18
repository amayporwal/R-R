// WeeklyBookCard.jsx
import React from 'react';

const WeeklyBookCard = ({ image, alt, title, description, author }) => {
    return (
        <div className="flex flex-col md:flex-row gap-6 border-b pb-6">
            <img src={image} alt={alt} className="w-44 h-68 object-cover rounded-md" />
            <div>
                <h3 className="text-2xl font-semibold leading-tight mb-1">{title}</h3>
                <p className="text-md text-gray-700 mb-1 w-300">{description}</p>
                <p className="text-xs font-bold text-gray-500">by {author}</p>
            </div>
        </div>
    );
};

export default WeeklyBookCard;