import React from 'react'

const Contactus = () => {
  return (
    <div>
        <div className="pt-28 min-h-screen bg-orange-50 flex flex-col items-center px-4 py-16">
      <h2 className="text-4xl font-bold text-orange-600 mb-4">Contact Us</h2>
      <p className="text-gray-700 text-center mb-10 max-w-xl">
        Have questions, suggestions, or just want to say hi? Fill out the form below and we’ll get back to you shortly.
      </p>

      <form className="bg-white rounded-xl shadow-md p-8 w-full max-w-xl space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Message</label>
          <textarea
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition w-full font-semibold"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 text-sm text-gray-600">
        <p>📍 G.L Bajaj College, Noida , India</p>
        <p>📞 +91 98765 43210</p>
        <p>✉️ support@streeteats.com</p>
      </div>
    </div>
    </div>
  )
}

export default Contactus