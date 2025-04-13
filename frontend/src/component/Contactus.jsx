import React from "react";

const Contactus = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-4 py-20 mt-7">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 ">
        
        <div>
          <h2 className="text-5xl font-bold mb-10">
            GET IN TOUCH <br />
            <span className="text-white tracking-tight">
              <span className="text-white">CON</span>
              <span className="text-orange-500">TACT</span>
            </span>
          </h2>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="e.g. Ishaan"
              className="w-full px-5 py-3 rounded-full bg-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="e.g. Ishaan123@email.com"
              className="w-full px-5 py-3 rounded-full bg-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="tel"
              placeholder="+91 8765431239"
              className="w-full px-5 py-3 rounded-full bg-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              rows="4"
              placeholder="Write Your Message Here"
              className="w-full px-5 py-3 rounded-2xl bg-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              SUBMIT
            </button>
          </form>
        </div>

        <div className="space-y-6 mt-9 ">
          <div className="bg-[#1a1a1a] rounded-xl p-6 flex items-center gap-4 transform transition-all duration-300 hover:scale-[1.03] hover:-rotate-[4deg] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] cursor-pointer">
            <span className="text-2xl">📧</span>
            <div>
              <h4 className="font-bold text-lg">EMAIL</h4>
              <p className="text-gray-300 text-sm">streeetifyyy@gmail.com</p>
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl p-6 flex items-center gap-4 transform transition-all duration-300 hover:scale-[1.03] hover:-rotate-[4deg] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] cursor-pointer">
            <span className="text-2xl">📍</span>
            <div>
              <h4 className="font-bold text-lg">LOCATION</h4>
              <p className="text-gray-300 text-sm">
                Delhi 
              </p>
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl p-6 flex items-center gap-4 transform transition-all duration-300 hover:scale-[1.03] hover:-rotate-[4deg] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] cursor-pointer">
            <span className="text-2xl">📞</span>
            <div>
              <h4 className="font-bold text-lg">PHONE</h4>
              <p className="text-gray-300 text-sm">+91 7303334568</p>
              <p className="text-gray-300 text-sm">+91 8764423962</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
