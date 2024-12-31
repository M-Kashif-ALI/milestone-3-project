// pages/contact-us.tsx
import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white py-8">
        <h1 className="text-center text-4xl font-bold">Contact Us</h1>
        <p className="text-center text-gray-400 mt-2">{`We'd love to hear from you!`}</p>
      </header>
      <main className="px-6 py-12 md:px-20">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-600 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600 mb-2">Your Message</label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Contact Details</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Address:</strong> Orangi Towm Karachi, Pakistan
              </p>
              <p>
                <strong>Phone:</strong> +92 324-81824287
              </p>
              <p>
                <strong>Email:</strong> mparvezalam1978@gmail.com
              </p>
              <p>
                <strong>Working Hours:</strong> Mon-Fri: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
