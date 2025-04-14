import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faInstagram , faTwitter} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        <div>
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-3">
            <span>Street</span>
            <span className="text-orange-500">ify 🍽️</span>
          </h2>
          <p className="text-sm text-gray-400">
            Delivering the best street food right to your doorstep. Fresh, fast & flavorful.
          </p>
        </div>

     
        <div className="hidden md:block text-white text-xl font-semibold mb-4 ml-24 ">
          <span className='text-orange-500'>Connect </span>
          <span>With</span>
          <span className='text-orange-500'> Us</span>
          <div className="flex justify-center items-center gap-4 mt-4 text-xl mr-28">
            <a href="https://x.com/IshaanSharma06">
            <FontAwesomeIcon icon={faTwitter} beat />
            </a>
            <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} beat  className='bg-pink-500'/>
            </a>
            <a href="https://www.linkedin.com/in/ishaan-sharma-611361326/" className="hover:text-orange-500 transition">
              <FontAwesomeIcon icon={faLinkedin} beat className="bg-blue-500  text-white" />
            </a>
          </div>
          </div>
        
        

  
        <div className="md:col-start-3 flex flex-col items-end text-right">
          <div className="space-y-2 text-sm">
            <p>📧 admin@streetify.com</p>
            <p>📍 G.L Bajaj, Noida, India</p>
            <p>📞 +91 98765 43210</p>
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
