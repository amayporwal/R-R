import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="fixed top-4 left-0 w-full z-50 flex justify-center">
      <header 
        className={`w-3/4 rounded-full transition-all duration-300 ${
          scrolled 
            ? 'py-2 bg-white shadow-md' 
            : 'py-4 bg-white bg-opacity-70'
        }`}
      >
        <nav className="flex justify-between items-center px-6">
          {/* Logo with animation */}
          <div className={`text-2xl font-bold transition-all duration-300 ${
            scrolled ? 'scale-90' : 'scale-100'
          }`}>
            <Link to="/" className="hover:text-blue-600 transition-colors">
              <img src="../../public/default/Logo.jpg" alt="" className='w-20'/>
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="space-x-6">
            <Link 
              to="/" 
              className="font-semibold text-md relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link 
              to="/Category" 
              className="font-semibold text-md relative group"
            >
              Category
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <a
              href="#About"
              className="font-semibold text-md relative group"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('About')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
              className="font-semibold text-md relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          {/* Review & Rate Button with hover animation */}
          <div>
            <Link 
              to="/home" 
              className={`bg-black text-white px-5 rounded-full hover:bg-white hover:text-black hover:shadow-lg border-2 border-transparent hover:border-black transition-all duration-300 ${
                scrolled ? 'py-1.5' : 'py-2'
              }`}
            >
              Review & Rate
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}