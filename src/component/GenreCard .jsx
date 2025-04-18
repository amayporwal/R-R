// components/GenreCard.jsx
import React from "react";

const GenreCard = ({ label, img, className }) => {
  return (
    <div className={`flex flex-col items-center w-36 ${className}`}>
      <img src={img} alt={label} className="w-full h-28 rounded-2xl object-cover " />
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
};

export default GenreCard;