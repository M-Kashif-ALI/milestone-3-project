import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Nike</h3>
            <p className="text-gray-400 leading-6">
              Nike is a leading innovator in athletic footwear, apparel, and gear, empowering athletes worldwide.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="ml-14">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-300">About Us</Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-gray-300">Products</Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-gray-300">Contact Us</Link>
              </li>
            </ul>
          </div>

          
          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4">
              Sign up for exclusive updates on new arrivals, sales, and more.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 text-black rounded-md"
              />
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nike, Inc. All rights reserved.
          </p>
          <div className="space-x-6 text-gray-400 text-sm mt-4 md:mt-0">
            <a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
