import React from 'react'

const Footer = () => {

  return (
    <div>
        <footer className="bg-black text-white text-center py-6">
      <p className="text-sm">&copy; {new Date().getFullYear()} StreetEats. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-6 text-sm">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Contact Us</a>
      </div>
    </footer>
    </div>
  )
}

export default Footer