import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
    
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">
            <span>Street</span>
            <span className='text-orange-500'>ify 🍽️</span>
            </h2>
          <p className="text-sm text-gray-400">
            Delivering the best street food right to your doorstep. Fresh, fast & flavorful.
          </p>
        </div>

        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="space-y-2 text-sm">
            <p>📧 admin@streetify.com</p>
            <p>📍 G.L Bajaj, Noida, India</p>
            <p>📞 +91 98765 43210</p>
          </div>
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-orange-500 transition">📘</a>
            <a href="#" className="hover:text-orange-500 transition">📷</a>
            <a href="#" className="hover:text-orange-500 transition">🐦</a>
            <a href="#" className="hover:text-orange-500 transition">
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 text-xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Streetify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
