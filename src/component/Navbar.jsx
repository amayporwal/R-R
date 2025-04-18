const Navbar = () => {
    return (
      <nav className="w-full py-6 mt-20  flex flex-col items-center">
        {/* Logo */}
  
        {/* Navigation layout */}
        <div className="flex items-center justify-between w-full  max-w-5xl">
          {/* Left Links */}
          <div className="flex-1">
            <div className="border-t border-b border-black inline-flex gap-8 px-2 py-1">
              <a href="#" className="text-md">Fiction</a>
              <a href="#" className="text-md">Non Fiction</a>
              <a href="#" className="text-md">Biographies</a>
            </div>
          </div>
  
          {/* Center Highlight */}
          <div className="flex-shrink-0 bg-pink-100 px-6 py-1 rounded">
            <span className="font-semibold text-lg">Book Reviews</span>
          </div>
  
          {/* Right Links */}
          <div className="flex-1 text-right">
            <div className="border-t border-b border-black inline-flex gap-8 px-2 py-1 float-right">
              <a href="#" className="text-md">Thriller</a>
              <a href="#" className="text-md">suspense</a>
              <a href="#" className="text-md">Love</a>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  