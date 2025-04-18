import React from 'react'
import { Link } from 'react-router-dom';
import Box from './Box';

function BookSection() {
  return (
    <div id="book-reviews" className='container mx-auto' data-aos="fade-up">
    <h1 className='text-3xl font-bold relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-46 pb-2'>Book Review</h1>

    <div className='flex flex-row justify-between mt-5 mx-20'>
      <Box 
        classNameDiv="relative group overflow-hidden w-1/5  transition-all duration-300 hover:shadow-xl p-4 rounded-md"
        imageURL="../../public/Books/Book1.png"
        classNameImage="mx-auto w-full transition-transform rounded-md duration-500 group-hover:scale-90"           
        heading="When Haru Was Here Book Review A Heart-Wrenching Tale Of Love, Loss, And Hope"
        classNameHeading="text-left font-semibold text-md"
        Subheading={`Discover the compelling and deeply researched narrativeof "By the Fire We Carry: The Generations Long Fight for Justice on Native...`}
        classNameSubHeading="text-left text-sm"
        data-aos="fade-up"
        data-aos-delay="100"
      />

      <Box 
        classNameDiv="relative group overflow-hidden w-1/5 transition-all duration-300 hover:shadow-xl p-4 rounded-md"
        imageURL="../../public/Books/Book2.png"
        classNameImage="mx-auto w-full transition-transform duration-500 group-hover:scale-90"           
        heading="When Haru Was Here Book Review A Heart-Wrenching Tale Of Love, Loss, And Hope"
        classNameHeading="text-left font-semibold text-md"
        Subheading={`Discover the compelling and deeply researched narrativeof "By the Fire We Carry: The Generations Long Fight for Justice on Native...`}
        classNameSubHeading="text-left text-sm"
        data-aos="fade-up"
        data-aos-delay="200"
      />

      <Box 
        classNameDiv="relative group overflow-hidden w-1/5 transition-all duration-300 hover:shadow-xl p-4 rounded-md"
        imageURL="../../public/Books/Book3.png"
        classNameImage="mx-auto w-full transition-transform duration-500 group-hover:scale-90"           
        heading="When Haru Was Here Book Review A Heart-Wrenching Tale Of Love, Loss, And Hope"
        classNameHeading="text-left font-semibold text-md"
        Subheading={`Discover the compelling and deeply researched narrativeof "By the Fire We Carry: The Generations Long Fight for Justice on Native...`}
        classNameSubHeading="text-left text-sm"
        data-aos="fade-up"
        data-aos-delay="300"
      />

      <Box
        classNameDiv="relative group overflow-hidden w-1/5 transition-all duration-300 hover:shadow-xl p-4 rounded-md"
        imageURL="../../public/Books/Book4.png"
        classNameImage="mx-auto w-full transition-transform duration-500 group-hover:scale-90"           
        heading="When Haru Was Here Book Review A Heart-Wrenching Tale Of Love, Loss, And Hope"
        classNameHeading="text-left font-semibold text-md"
        Subheading={`Discover the compelling and deeply researched narrativeof "By the Fire We Carry: The Generations Long Fight for Justice on Native...`}
        classNameSubHeading="text-left text-sm"
        data-aos="fade-up"
        data-aos-delay="400"
      />
    </div>

    <div className='flex justify-center w-full my-8'>
      <Link to="#"
        onClick={()=>{
            settoggleBook(true);
        }}
        className='text-center py-2 px-6 text-white bg-red-500 transition-all duration-300 hover:bg-red-600 hover:shadow-lg transform hover:-translate-y-1 rounded'>
        For More, Click Here
      </Link>
    </div>
  </div>
  )
}

export default BookSection