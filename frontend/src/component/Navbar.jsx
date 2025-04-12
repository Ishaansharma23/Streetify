import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = () => {
    return (
        <nav className="bg-black text-white p-4 shadow-md fixed top-0 left-0 w-full z-50 ">
            <div className="container mx-auto flex justify-between items-center">

                <ScrollLink to='home' smooth={true} duration={500} className="cursor-pointer text-3xl font-bold text-white py-5 hover:text-orange-500 transition-all duration-500 transform hover:rotate-360">
                  Streetify🍽️
                </ScrollLink>

                <div className="flex space-x-6">
                    <ScrollLink to='Why Us' smooth={true} duration={500} offset={-80} className='py-5 text-white hover:text-orange-500 transition-all duration-500 transform hover:rotate-360'>
                        Why Us
                    </ScrollLink>
                    <ScrollLink to='Popular Vendors' smooth={true} duration={500} offset={-80} className='py-5 text-white hover:text-orange-500 transition-all duration-500 transform hover:rotate-360'>
                        Popular Vendors
                    </ScrollLink>

                    <ScrollLink to='Download App' smooth={true} duration={500} offset={-80} className='py-5 text-white hover:text-orange-500 transition-all duration-500 transform hover:rotate-360'>
                        Download App
                    </ScrollLink>


                    <Link to="/contact" className='py-5 text-white hover:text-orange-500 transition-all duration-500 transform hover:rotate-360'>
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar