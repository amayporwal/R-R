import React from "react";

const HeroSection = ({ img, heading }) => {
    return (
        <div
        className="text-center bg-cover bg-center min-h-[600px] flex flex-col justify-center items-start px-4"
        style={{ backgroundImage: `url(${img})` }}
        >
        <h1 className="text-4xl font-bold text-black mb-4 mt-12 ml-auto mr-96 drop-shadow-md">
            {heading}
        </h1>
        <p className="mb-6 text-black font-serif  ml-auto mr-88 drop-shadow-md">
            Honest reviews for everything worth reading
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 ml-auto mr-96 rounded hover:bg-blue-600">
            Want a Review? Tap Here
        </button>
        </div>
    );
};

export default HeroSection;