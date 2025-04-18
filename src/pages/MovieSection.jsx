import React from 'react'
import Box from '../component/Box'
import { Link } from 'react-router-dom';

function MovieSection() {
  return (
    <div id="movie-reviews" className='container mx-auto flex flex-col' data-aos="fade-up">
    <h1 className='text-3xl font-bold relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-46 pb-2'>Movie Reviews</h1>
    <div className='flex'>
      <Box 
        classNameHeading="text-left text-lg font-semibold"
        classNameSubHeading="text-left text-sm mt-1"
        Subheading={`Experience the emotional journey of "It Ends with Us," a film directed by Justin Baldoni and based on Colleen Hoover's best-selling novel. Our in-depth review explores the story's powerful themes of love, trauma, and redemption.`}
        classNameDiv="w-1/2 p-8 transition-all duration-300 hover:shadow-xl"
        heading="It Ends with Us Movie Honest review (2024): A Cinematic Journey Through Love, Trauma, and Redemption"
        imageURL="../../public/Movie/Movie1.png"
        classNameImage="w-full transition-transform duration-500 hover:scale-105"
        data-aos="fade-right"
        data-aos-delay="100"
      />

      <Box 
        classNameHeading="text-left text-lg font-semibold"
        classNameSubHeading="text-left text-sm mt-1"
        Subheading={`Experience the emotional journey of "It Ends with Us," a film directed by Justin Baldoni and based on Colleen Hoover's best-selling novel. Our in-depth review explores the story's powerful themes of love, trauma, and redemption.`}
        classNameDiv="w-1/2 p-8 transition-all duration-300 hover:shadow-xl"
        heading="It Ends with Us Movie Honest review (2024): A Cinematic Journey Through Love, Trauma, and Redemption"
        imageURL="../../public/Movie/Movie2.png"
        classNameImage="w-full transition-transform duration-500 hover:scale-105"
        data-aos="fade-left"
        data-aos-delay="200"
      />
    </div>

    <div className='flex'>
      <Box 
        classNameHeading="text-left text-lg font-semibold"
        classNameSubHeading="text-left text-sm mt-1"
        Subheading={`Experience the emotional journey of "It Ends with Us," a film directed by Justin Baldoni and based on Colleen Hoover's best-selling novel. Our in-depth review explores the story's powerful themes of love, trauma, and redemption.`}
        classNameDiv="w-1/2 p-8 transition-all duration-300 hover:shadow-xl"
        heading="It Ends with Us Movie Honest review (2024): A Cinematic Journey Through Love, Trauma, and Redemption"
        imageURL="../../public/Movie/Movie3.png"
        classNameImage="w-full transition-transform duration-500 hover:scale-105"
        data-aos="fade-right"
        data-aos-delay="300"
      />

      <Box 
        classNameHeading="text-left text-lg font-semibold"
        classNameSubHeading="text-left text-sm mt-1"
        Subheading={`Experience the emotional journey of "It Ends with Us," a film directed by Justin Baldoni and based on Colleen Hoover's best-selling novel. Our in-depth review explores the story's powerful themes of love, trauma, and redemption.`}
        classNameDiv="w-1/2 p-8 transition-all duration-300 hover:shadow-xl"
        heading="It Ends with Us Movie Honest review (2024): A Cinematic Journey Through Love, Trauma, and Redemption"
        imageURL="../../public/Movie/Movie4.png"
        classNameImage="w-full transition-transform duration-500 hover:scale-105"
        data-aos="fade-left"
        data-aos-delay="400"
      />
    </div>

    <div className='flex justify-center w-full my-8'>
        <Link
        to="#"
        onClick={()=>{
            settoggleMovie(true);
        }} 
        className='text-center py-2 px-6 text-white bg-red-500 transition-all duration-300 hover:bg-red-600 hover:shadow-lg transform hover:-translate-y-1 rounded'>
          For More, Click Here
        </Link>
      </div>
  
  
  </div>

  
  )
}

export default MovieSection