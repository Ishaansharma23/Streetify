import React from 'react'
import butterchicken from '../assets/btrchicken.jpg'
import cholebhature from '../assets/cholebhature.jpg'
import Momos from '../assets/Momos.jpg'
import Pavbhaji from '../assets/Pavbhaji.jpg'

const vendors = [
  {
    name: 'Spice Corner',
    cuisine: 'Indian Street Food',
    time: '25–35 min',
    rating: 4.8,
    famous: 'Pav Bhaji',
    image: Pavbhaji
  },
  {
    name: 'Amritsari Naan',
    cuisine: 'Punjabi Street Food',
    time: '10-12 min',
    rating: 4.5,
    famous: 'Chole Bhature',
    image: cholebhature
  },
  {
    name: 'Pishori Meat Wala',
    cuisine: 'East African Cuisine',
    time: '13–15 min',
    rating: 4.2,
    famous: 'Butter Chicken',
    image: butterchicken
  },
  {
    name: 'Momos Express',
    cuisine: 'Indo-Tibetan Street Food',
    time: '20–30 min',
    rating: 5,
    famous: 'Kurkure Momos',
    image: Momos
  }
]

const Vendors = () => {
  return (
    <div className="relative py-20 px-4 w-full">
    <div
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{
        backgroundImage: "url('/food.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'blur(5px)',
        height: '100%',
        width: '100%',
      }}
    ></div>

      <div className="relative z-10 w-full px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
          Popular Street Food Vendors
        </h2>
        <p className="text-black mb-10 max-w-2xl mx-auto">
          Discover the most loved street food vendors in your area, each
          offering their unique specialties.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {vendors.map((vendor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={vendor.image}
                alt={vendor.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-gray-800">
                  {vendor.name}
                </h3>
                <p className="text-gray-500 text-sm">{vendor.cuisine}</p>
                <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                  <span>⏱ {vendor.time}</span>
                  <span>⭐ {vendor.rating}</span>
                </div>
                <p className="mt-2 text-orange-500 font-semibold">
                  🔥 Famous for: {vendor.famous}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Vendors
