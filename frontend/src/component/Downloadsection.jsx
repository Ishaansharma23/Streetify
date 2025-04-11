import React from 'react'
import { toast , Bounce } from 'react-toastify';

const Downloadsection = () => {

    const downloadapp = () =>{
        toast.success('✅ Download Started!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
    }

  return (
    <div className="bg-orange-500 text-white text-center py-16 px-6">
      <h2 className="text-4xl font-bold mb-4">Ready to Experience the Best Street Food in Town?</h2>
      <p className="text-lg max-w-2xl mx-auto mb-8">
        Download our app now and get your first delivery fee waived. Discover, order, and enjoy authentic street food from the comfort of your home.
      </p>

      <div className="flex justify-center items-center gap-4 mb-10 flex-wrap">
        <button onClick={downloadapp} className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-orange-100 transition">
          Download App →
        </button>
        <button className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition">
          Become a Vendor
        </button>
      </div>

      <div className="flex justify-center gap-10 text-white text-sm flex-wrap">
        <div className="flex items-center gap-2">
          <span className="bg-orange-300 text-orange-900 font-bold px-3 py-1 rounded-full">50+</span>
          Cities
        </div>
      </div>
    </div>
  );
};


export default Downloadsection