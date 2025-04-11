import React from 'react'
import butterchicken from "../assets/btrchicken.jpg"
import cholebhature from "../assets/cholebhature.jpg"
import Momos from "../assets/Momos.jpg"
import Pavbhaji from "../assets/Pavbhaji.jpg"

const vendors = [
    {
      name: "Spice Corner",
      cuisine: "Indian Street Food",
      time: "25–35 min",
      rating: 4.8,
      famous: "Pav Bhaji",
      image: Pavbhaji
    },
    {
      name: "Amritsari Naan",
      cuisine: "Punjabi Street Food",
      time: "10-12 min",
      rating: 4.5,
      famous: "Chole Bhature",
      image: cholebhature
    },
    {
      name: "Pishori Meat Wala",
      cuisine: "East African Cuisine",
      time: "13–15 min",
      rating: 4.2,
      famous: "Butter Chicken",
      image: butterchicken,
    },
    {
      name: "Momos Express",
      cuisine: "Indo-Tibetan Street Food",
      time: "20–30 min",
      rating: 5,
      famous: "Kurkure Momos",
      image: Momos
    },
  ];
  
const Vendors = () => {
  return (
    <div className="py-16 bg-white ">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800">
        Popular Street Food Vendors
      </h2>
      <p className="text-gray-500 mt-2 mb-10">
        Discover the most loved street food vendors in your area, each
        offering their unique specialties.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-white hover:bg-black rounded-2xl shadow-lg p-6  items-start transform transition-all duration-300 hover:scale-[1.08] hover:-rotate-[2deg] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] cursor-pointer hover:rotate-y-3">
        {vendors.map((vendor, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden text-left"
          >
            <img
              src={vendor.image}
              alt={vendor.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {vendor.name}
              </h3>
              <p className="text-gray-500">{vendor.cuisine}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-500">{vendor.time}</span>
                <span className="flex items-center text-sm text-yellow-500 font-semibold">
                  ⭐ {vendor.rating}
                </span>
              </div>
              <div className="mt-3">
                <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 text-sm rounded-full">
                  Famous for: <span className="font-medium">{vendor.famous}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Vendors