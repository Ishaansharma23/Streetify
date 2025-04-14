import React, { useEffect } from 'react';
import Fooddel from './Fooddel';
import { Element } from 'react-scroll';
import Vendors from './Vendors';
import { toast, Bounce } from 'react-toastify';
import Downloadsection from './Downloadsection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spotlight from './Spotlight';

const Homepage = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: false,
            easing: 'ease-in-out',
            offset: 100,
        });

        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const downloadapp = () => {
        toast.success('✅ Download Started!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            transition: Bounce,
        });
    };

    return (
        <div className="w-full overflow-x-hidden">
            {/* ✅ FULL SCREEN */}
            <Element name="home">
                <section
                    className="bg-gradient-to-br from-black to-gray-900 text-white min-h-screen flex items-center"
                    data-aos="zoom-in"
                    data-aos-delay={100}
                >

                    <div
                        className="absolute inset-0 bg-cover bg-center blur-xs -z-10"
                        style={{
                            backgroundImage: "url('/main.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></div>
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                            <div className="mb-4 font-bold text-4xl">
                                <Spotlight text="Street Food Delivered Right To Your Door" />
                            </div>
                            <p className="text-xl mb-8">
                                Enjoy authentic local street food from the best vendors in your
                                city, delivered hot and fresh to your doorstep.
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

                        <div className="md:w-1/2 relative overflow-hidden">
                            <div className="rounded-lg overflow-hidden shadow-xl h-full">
                                <Fooddel />
                            </div>
                            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg hidden md:block max-w-[200px]">
                                <div className="flex items-center">
                                    <div className="bg-green-500 h-3 w-3 rounded-full mr-2"></div>
                                    <p className="text-sm font-medium text-black">
                                        2,500+ Active Vendors
                                    </p>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg hidden md:block max-w-[200px]">
                                <div className="flex items-center">
                                    <div className="bg-orange-500 h-3 w-3 rounded-full mr-2"></div>
                                    <p className="text-sm font-medium text-black">
                                        30 min Average Delivery
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Element>

            {/*  WHY US SECTION */}
            <Element name="Why Us">
                <section
                    className="py-20 px-4 sm:px-6 md:px-8 lg:px-16 relative z-10"
                    style={{
                        backgroundImage: "url('/bg1.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                    data-aos="zoom-in"
                    data-aos-delay={100}
                >
                    <div className="bg-opacity-10 backdrop-blur-md rounded-xl p-6 sm:p-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 group hover:text-orange-500 transition-colors duration-300">
                                Why Choose Streetify?
                            </h2>
                            <p className="text-black max-w-2xl mx-auto text-lg">
                                We bring the vibrant street food culture right to your home with
                                all the convenience of modern food delivery.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    icon: '📍',
                                    title: 'Local Vendors',
                                    desc: 'Discover hidden gems and popular street food vendors from your local area.',
                                },
                                {
                                    icon: '⏱️',
                                    title: 'Quick Delivery',
                                    desc: 'Get your favorite street food delivered to your doorstep in under 30 minutes.',
                                },
                                {
                                    icon: '👍',
                                    title: 'Quality Assured',
                                    desc: 'All vendors are verified for hygiene and food quality standards.',
                                },
                                {
                                    icon: '🏷️',
                                    title: 'Affordable Pricing',
                                    desc: 'Enjoy street food at the same prices as the stalls with minimal delivery fee.',
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 transform transition-all duration-300 hover:scale-[1.03] hover:-rotate-[1deg] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-black group"
                                    data-aos="flip-left"
                                >
                                    <div className="text-3xl mt-1">{item.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-white transition-all duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 group-hover:text-white transition-all duration-300">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Element>

            <Element name='Download App'>
                <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16 relative z-10" data-aos="fade-down-right">
                    <div
                        className="absolute inset-0 bg-cover bg-center blur-sm scale-110 -z-10"
                        style={{
                            backgroundImage: "url('/veggies.avif')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></div>


                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                            How Streetify Works
                        </h2>
                        <p className="text-black max-w-2xl mx-auto text-lg">
                            Getting your favorite street food delivered is easy and
                            convenient with our simple 3-step process.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start max-w-5xl mx-auto">
                        {[
                            {
                                icon: '🔍',
                                title: 'Browse Vendors',
                                desc: 'Search for street food vendors by cuisine, location, or dish name.',
                            },
                            {
                                icon: '🗺️',
                                title: 'Place Your Order',
                                desc: 'Select your favorite dishes and customize them to your taste.',
                            },
                            {
                                icon: '🚚',
                                title: 'Fast Delivery',
                                desc: 'Track your order in real-time as it’s prepared and delivered to you.',
                            },
                        ].map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center">
                                <div className="relative mb-4">
                                    <div className="bg-orange-500 text-white text-3xl p-4 rounded-full">
                                        {step.icon}
                                    </div>
                                    <span className="absolute -top-2 -right-4 bg-white border-2 border-orange-400 text-orange-500 text-sm rounded-full w-6 h-6 flex items-center justify-center font-semibold">
                                        {idx + 1}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-black max-w-xs">{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button
                            onClick={downloadapp}
                            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                        >
                            Download Our App
                        </button>
                        <p className="text-gray-500 text-sm mt-2">Available on iOS and Android</p>
                    </div>
                </section>
            </Element>

            {/* VENDORS SECTION */}
            <Element name="Popular Vendors" data-aos="zoom-in-up" className="scroll-mt-20">
                <Vendors />
            </Element>

            {/* DOWNLOAD SECTION */}
             <Element  data-aos="fade-down-left" className="scroll-mt-20">
                <Downloadsection />
            </Element>
        </div>
    );
};

export default Homepage;