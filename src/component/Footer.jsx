import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
  
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">

          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img src="../../public/default/Logo.jpg" className='w-1/2' alt="" />
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full ">
            {/* Column 1 */}
            <div>
              <h3 className="text-white font-semibold mb-4">WEBILY THEMES</h3>
              <ul className="space-y-2">
                <li><Link to="/pre-sale" className="hover:text-white transition">Pre-Sale FAQs</Link></li>
                <li><Link to="/support" className="hover:text-white transition">Submit a Ticket</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-white font-semibold mb-4">SERVICES</h3>
              <ul className="space-y-2">
                <li><Link to="/themes" className="hover:text-white transition">Theme Tweak</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-white font-semibold mb-4">SHOWCASE</h3>
              <ul className="space-y-2">
                <li><Link to="/whogetkit" className="hover:text-white transition">Whogetkit</Link></li>
                <li><Link to="/support" className="hover:text-white transition">Support</Link></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-white font-semibold mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
                <li><Link to="/affiliates" className="hover:text-white transition">Affiliates</Link></li>
                <li><Link to="/resources" className="hover:text-white transition">Resources</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <div className='flex justify-between'>
          <p className='text-lg'>anaykamplikar@gmail.com</p>
          <p className='text-lg'>+91 77788 99999</p>
          </div>
          
          <p>© Copyright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;