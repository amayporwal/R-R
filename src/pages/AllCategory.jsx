import React, { useEffect, useState } from 'react'
import Box from '../component/Box'
import SearchBar from '../component/SearchBar'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import BookSection from '../component/BookSection'
import MobileSection from '../component/MobileSection'
import MovieSection from './MovieSection'

function AllCategory() {
    const [toggleBook, settoggleBook] = useState(false);
    const [toggleMovie, settoggleMovie] = useState(false);
    const [toggleMobile, settoggleMobile] = useState(false)
  // Initialize AOS animation library on component mount
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    })

;
    
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault()
        const targetId = this.getAttribute('href')
        const targetElement = document.querySelector(targetId)
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })
    
    // Cleanup event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {})
      })
    }
  }, [])
  
  return (
    <div className="overflow-x-hidden" >
      {/*Top bg Image with fade-in animation*/}
      <div id="Top" className='h-96 w-full bg-black flex justify-center text-white items-center flex-col bg-[url(https://img.freepik.com/free-vector/abstract-blue-light-pipe-speed-zoom-black-background-technology_1142-9980.jpg?semt=ais_hybrid&w=740)]'
        data-aos="fade-down">
        <hr className='m-5' />
        <h1 className='text-4xl font-semibold my-4 transition-all duration-300 hover:scale-105'>All Categories</h1>
        <SearchBar 
            widthGiven="w-1/2"
          classNameInput="transition-all duration-300 focus:ring-2 focus:ring-red-500"
        />
        
      </div>

      <div>
        <div className='container mx-auto'>
          <div className='mx-15'>
            <div className='flex justify-between mt-20'>
              <Box 
                imageURL="../src/assets/Categories/phone.png"
                classNameDiv="relative group overflow-hidden w-1/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                classNameHeading="text-center font-bold"
                classNameImage="w-full transition-transform duration-500 group-hover:scale-110"
                heading="Mobile"
                data-aos="fade-right"
                data-aos-delay="100"
              />

              <Box 
                imageURL="../src/assets/Categories/Headphone.png"
                classNameDiv="relative group overflow-hidden w-1/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                classNameHeading="text-center font-bold"
                classNameImage="w-full transition-transform duration-500 group-hover:scale-110"
                heading="Headphone"
                data-aos="fade-up"
                data-aos-delay="200"
              />

              <Box 
                imageURL="../src/assets/Categories/Books.png"
                classNameDiv="relative group overflow-hidden w-1/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                classNameHeading="text-center font-bold"
                classNameImage="w-full transition-transform duration-500 group-hover:scale-110"
                heading="Books"
                data-aos="fade-left"
                data-aos-delay="300"
              />
            </div>

            <div className='container mx-auto flex justify-between mt-20'>
              <Box 
                imageURL="../src/assets/Categories/watch.png"
                classNameDiv="relative group overflow-hidden w-1/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                classNameHeading="text-center font-bold"
                classNameImage="w-full transition-transform duration-500 group-hover:scale-110"
                heading="Watch"
                data-aos="fade-right"
                data-aos-delay="150"
              />

              <Box 
                imageURL="../src/assets/Categories/Movies.png"
                classNameDiv="relative group overflow-hidden w-1/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                classNameHeading="text-center font-bold"
                classNameImage="w-full transition-transform duration-500 group-hover:scale-110"
                heading="Movies"
                data-aos="fade-up"
                data-aos-delay="250"
              />

              <Box 
                imageURL="../src/assets/Categories/speakers.png"
                classNameDiv="relative group overflow-hidden w-1/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                classNameHeading="text-center font-bold"
                classNameImage="w-full transition-transform duration-500 group-hover:scale-110"
                heading="Speakers"
                data-aos="fade-left"
                data-aos-delay="350"
              />
            </div>
          </div>
        </div>
      </div>

      <hr className='m-5'/>

      {/* Book Review Section */}
      <BookSection/>

      <hr className="my-5 mx-5" />

      {/* Mobile Review Section */}
      <MobileSection />

      <hr className="my-5 mx-5" />

      {/* Movie Review Section */}

      <MovieSection/>

      <hr className="my-5 mx-5" />

      {/* Quick category navigation */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-white shadow-lg rounded-full p-4 flex flex-col gap-2">
          <a href="#book-reviews" className="w-10 h-10 border-1 border-gray-500 hover:bg-gray-200 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
            📚
          </a>
          <a href="#mobile-reviews" className="w-10 h-10 border-1 border-gray-500 hover:bg-gray-200 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
            📱
          </a>
          <a href="#movie-reviews" className="w-10 h-10 border-1 border-gray-500 hover:bg-gray-200 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
            🎬
          </a>
          <a href="#Top" className="w-10 h-10 bg-gray-700 border-1 border-gray-500 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
            ⬆️
          </a>
        </div>
      </div>
    </div>
  )
}

export default AllCategory