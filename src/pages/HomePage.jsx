import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Box from '../component/Box';
import SearchBar from '../component/SearchBar';
import BookSection from '../component/BookSection';
import MovieSection from './MovieSection';
import MobileSection from '../component/MobileSection';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    category: false,
    featured: false,
    about: false,
    bookReview: false,
    mobileReview: false
  });

  const sectionRefs = {
    hero: useRef(null),
    category: useRef(null),
    featured: useRef(null),
    about: useRef(null),
    bookReview: useRef(null),
    mobileReview: useRef(null),
  };

  // Smooth scroll function for navigation
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Check if element is in viewport for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.dataset.section]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.dataset.section = key;
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  // Animation classes for fade-in effect
  const getAnimationClass = (section) => {
    return isVisible[section] 
      ? 'opacity-100 translate-y-0 transition-all duration-1000 ease-out' 
      : 'opacity-0 translate-y-10 transition-all duration-1000 ease-out';
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section with smooth scroll indicator */}
      <div 
        ref={sectionRefs.hero}
        className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white pt-24"
        style={{ 
          backgroundImage: 'url(https://i.pinimg.com/736x/6c/1a/d9/6c1ad9b17042d2db57bb9eff96483590.jpg)' 
        }}
      >
        <div className={`bg-black/50 p-8 rounded-lg max-w-2xl text-center mx-4 ${getAnimationClass('hero')}`}>
          <h1 className="text-4xl font-bold mb-4">Create Better Content in Less Time</h1>
          <p className="text-xl mb-6">Write helps you create amazing, original content that ranks #1 on search engines. Try for Free.</p>
          <SearchBar />
        </div>
        
        {/* Scroll down indicator */}
        <div 
          className="absolute bottom-8 cursor-pointer animate-bounce"
          onClick={() => scrollToSection('categorySection')}
        >
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Category Section */}
      <div 
        id="categorySection"
        ref={sectionRefs.category}
        className='container mx-auto scroll-mt-24'
      >
        <hr className='my-5 mx-5' />
        <h1 className={`text-3xl 1875rem ml-5 font-bold ${getAnimationClass('category')}`}>Category</h1>

        {/* Horizontal scroll with improved behavior */}
        <div className={`flex overflow-x-auto snap-x snap-mandatory hide-scrollbar py-4 mt-5 ${getAnimationClass('category')}`}>
          <div className='flex flex-row space-x-8 px-12 pb-4 mx-auto'>
            
            <Link to="/phone">
              <Box 
                imageURL="../../public/Categories/phone.png"
                classNameDiv="relative group overflow-hidden snap-center min-w-[160px] hover:scale-105 transition-all duration-300 ease-out"
                classNameHeading="text-center font-bold mt-2"
                classNameImage="hover:scale-110 transition-all duration-300"
              />
            </Link>

            <Link to="/book">
              <Box 
                imageURL="../../public/Categories/Books.png"
                classNameDiv="relative group overflow-hidden snap-center min-w-[160px] hover:scale-105 transition-all duration-300 ease-out"
                classNameHeading="text-center font-bold mt-2"
                classNameImage="hover:scale-110 transition-all duration-300"
              />
            </Link>

            <Link to="/home">
              <Box 
                imageURL="../../public/Categories/watch.png"
                classNameDiv="relative group overflow-hidden snap-center min-w-[160px] hover:scale-105 transition-all duration-300 ease-out"
                classNameHeading="text-center font-bold mt-2"
                classNameImage="hover:scale-110 transition-all duration-300"
              />
            </Link>

            <Link to="/home">
              <Box 
                imageURL="../../public/Categories/Headphone.png"
                classNameDiv="relative group overflow-hidden snap-center min-w-[160px] hover:scale-105 transition-all duration-300 ease-out"
                classNameHeading="text-center font-bold mt-2"
                classNameImage="hover:scale-110 transition-all duration-300"
              />
            </Link>

            <Link to="/home">
              <Box 
                imageURL="../../public/Categories/Movies.png"
                classNameDiv="relative group overflow-hidden snap-center min-w-[160px] hover:scale-105 transition-all duration-300 ease-out"
                classNameHeading="text-center font-bold mt-2"
                classNameImage="hover:scale-110 transition-all duration-300"
              />
            </Link>

            <Link to="/home">
              <Box 
                imageURL="../../public/Categories/speakers.png"
                classNameDiv="relative group overflow-hidden snap-center min-w-[160px] hover:scale-105 transition-all duration-300 ease-out"
                classNameHeading="text-center font-bold mt-2"
                classNameImage="hover:scale-110 transition-all duration-300"
              />
            </Link>
          </div>
        </div>

        <hr className='my-5 mx-5' />
      </div>

      {/* Featured Reviews */}
      <div 
        ref={sectionRefs.featured}
        className={`bg-black rounded-3xl mx-auto container my-20 overflow-hidden scroll-mt-24 ${getAnimationClass('featured')}`}
      >
        <div className="h-96 flex items-center justify-center text-white p-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Featured Reviews</h2>
            <p className="text-xl max-w-2xl mx-auto">Discover top-rated products and reviews from our community members.</p>
            <button className="mt-8 bg-white text-black rounded-full px-8 py-3 font-bold hover:bg-opacity-80 transition-all duration-300">
              Explore Featured
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div 
        id="About" 
        ref={sectionRefs.about}
        className={`flex flex-col md:flex-row w-full my-20 font-sans scroll-mt-24 ${getAnimationClass('about')}`}
      >
        {/* Left Section */}
        <div className='flex flex-col md:flex-row w-full md:w-1/2'>
          {/* Text Content */}
          <div className='flex flex-col w-full md:w-1/2'>
            <div className='bg-[#BCD9D5] md:h-1/2 p-6 flex flex-col justify-center hover:bg-[#a7c5c1] transition-colors duration-300'>
              <div className='flex items-center mb-2'>
                <svg className="w-10 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className='text-4xl font-bold'>Verified Reviews</h1>
              </div>
              <p className='text-gray-700'>Only genuine user ratings and opinions to help you decide.</p>
            </div>
            
            <div className='bg-[#979797] md:h-1/2 p-6 flex flex-col justify-center hover:bg-[#868686] transition-colors duration-300'>
              <div className='flex items-center mb-2'>
                <svg className="w-10 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <h1 className='text-4xl font-bold'>Multi-Category</h1>
              </div>
              <p className='text-gray-700'>Books, Mobiles, Movies, Headphones & more — all in one place.</p>
            </div>
          </div>

          {/* Image */}
          <div className='w-full md:w-1/2'>
            <img 
              src="../../public/default/pic-13.png" 
              alt="Review illustration" 
              className='w-full h-full object-cover transition-transform duration-700 hover:scale-105' 
            />
          </div>
        </div>

        {/* Right Section */}
        <div className='flex flex-col w-full md:w-1/2'>
          <div className='bg-[#979797] md:h-1/2 p-6 flex flex-col justify-center hover:bg-[#868686] transition-colors duration-300'>
            <div className='flex items-center mb-2'>
              <svg className="w-12 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <h1 className='text-5xl font-bold'>Why Choose Us?</h1>
            </div>
            <p className='text-gray-700 mx-5'>We bring you trusted reviews across all popular categories, helping you make informed choices with ease and confidence.</p>
          </div>
          
          <div className='flex flex-col md:flex-row md:h-1/2'>
            <div className='bg-[#BCD9D5] w-full md:w-1/2 p-6 flex flex-col justify-center hover:bg-[#a7c5c1] transition-colors duration-300'>
              <div className='flex items-center mb-2'>
                <svg className="w-10 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className='text-4xl font-bold'>Daily Updates</h1>
              </div>
              <p className='text-gray-700'>New reviews and ratings added every day.</p>
            </div>
            
            <div className='bg-black w-full md:w-1/2 p-6 flex flex-col justify-center text-white hover:bg-gray-900 transition-colors duration-300'>
              <div className='flex items-center mb-2'>
                <svg className="w-10 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h1 className='text-4xl font-bold'>Community Driven</h1>
              </div>
              <p className='text-gray-300'>Powered by the people who use it. Share your own thoughts too!</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-5 mx-5" />

      {/* Book Review */}
      <BookSection />

      <hr className="my-5 mx-5" />

      {/* Mobile Review */}
      <MobileSection />

      <hr className="my-5 mx-5" />

      {/* Add custom CSS for hiding scrollbar but allowing scroll functionality */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}