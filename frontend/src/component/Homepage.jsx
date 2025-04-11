import React from 'react'
import Fooddel from './Fooddel'
import { Element } from 'react-scroll'
import Vendors from './Vendors'
import { toast , Bounce } from 'react-toastify'
import Downloadsection from './Downloadsection'

const Homepage = () => {

    const downloadapp =() =>{
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
    <div className="w-full">

      {/* ✅ FULL SCREEN HERO SECTION */}
      <Element name="home">
        <section className="bg-gradient-to-br from-black to-gray-900 text-white min-h-screen flex items-center">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            {/* Left side - Text */}
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Street Food Delivered <span className="text-orange-500">Right To Your Door</span>
              </h1>
              <p className="text-xl mb-8">
                Enjoy authentic local street food from the best vendors in your city, delivered hot and fresh to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600">
                  Order Now
                </button>
                <button className="px-6 py-3 border border-orange-500 text-orange-500 font-medium rounded-md hover:bg-black hover:border-black hover:text-white">
                  Explore Menu
                </button>
              </div>
            </div>

            {/* Right side - Fooddel Image/Component */}
            <div className="md:w-1/2 relative">
              <div className="rounded-lg overflow-hidden shadow-xl h-full">
                <Fooddel />
              </div>

              {/* Floating Info Boxes (optional) */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="bg-green-500 h-3 w-3 rounded-full mr-2"></div>
                  <p className="text-sm font-medium text-black">2,500+ Active Vendors</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="bg-orange-500 h-3 w-3 rounded-full mr-2"></div>
                  <p className="text-sm font-medium text-black">30 min Average Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* ✅ WHY US SECTION */}
      <Element name="Why Us">
        <section className="py-20 px-4 md:px-8 lg:px-20 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Streetify?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We bring the vibrant street food culture right to your home with all the convenience of modern food delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto perspective-[1200px]">
            {[
              {
                icon: '📍',
                title: 'Local Vendors',
                desc: 'Discover hidden gems and popular street food vendors from your local area.'
              },
              {
                icon: '⏱️',
                title: 'Quick Delivery',
                desc: 'Get your favorite street food delivered to your doorstep in under 30 minutes.'
              },
              {
                icon: '👍',
                title: 'Quality Assured',
                desc: 'All vendors are verified for hygiene and food quality standards.'
              },
              {
                icon: '🏷️',
                title: 'Affordable Pricing',
                desc: 'Enjoy street food at the same prices as the stalls with minimal delivery fee.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 transform transition-all duration-300 hover:scale-[1.08] hover:-rotate-[2deg] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] cursor-pointer hover:rotate-y-3">
                <div className="text-3xl mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Element>
      <Element name="howItWorks">
  <section className="bg-gray-50 py-20 px-4 md:px-8 lg:px-20">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        How Streetify Works
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Getting your favorite street food delivered is easy and convenient with our simple 3-step process.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start max-w-5xl mx-auto">
      {/* Step 1 */}
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="bg-orange-500 text-white text-3xl p-4 rounded-full">
            🔍
          </div>
          <span className="absolute -top-2 -right-4 bg-white border-2 border-orange-400 text-orange-500 text-sm rounded-full w-6 h-6 flex items-center justify-center font-semibold">
            1
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Browse Vendors</h3>
        <p className="text-gray-600 max-w-xs">
          Search for street food vendors by cuisine, location, or dish name.
        </p>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="bg-orange-500 text-white text-3xl p-4 rounded-full">
            🗺️
          </div>
          <span className="absolute -top-2 -right-4 bg-white border-2 border-orange-400 text-orange-500 text-sm rounded-full w-6 h-6 flex items-center justify-center font-semibold">
            2
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Place Your Order</h3>
        <p className="text-gray-600 max-w-xs">
          Select your favorite dishes and customize them to your taste.
        </p>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="bg-orange-700 text-white text-3xl p-4 rounded-full">
            🚚
          </div>
          <span className="absolute -top-2 -right-4 bg-white border-2 border-orange-400 text-orange-500 text-sm rounded-full w-6 h-6 flex items-center justify-center font-semibold">
            3
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
        <p className="text-gray-600 max-w-xs">
          Track your order in real-time as it's prepared and delivered to you.
        </p>
      </div>
    </div>

    {/* CTA Button */}
    <div className="mt-12 text-center">
      <button onClick={downloadapp} className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
        Download Our App
      </button>
      <p className="text-gray-500 text-sm mt-2">Available on iOS and Android</p>
    </div>
  </section>
</Element>
            <Element name='Popular Vendors'>
            <Vendors/>

            </Element>
            <Element name='Download App'>

            <Downloadsection />
            </Element>
    </div>
  )
}

export default Homepage
