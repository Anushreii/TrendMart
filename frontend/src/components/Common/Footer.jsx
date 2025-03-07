import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6 lg:px-12">

        {/* Newsletter Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Newsletter</h3>
          <p className="text-gray-600 mb-4">
            Be the first to hear about new products, exclusive events, and online offers.
          </p>
          <p className="font-medium text-sm text-gray-700 mb-6">
            Sign up and get 10% off your first order.
          </p>

          {/* Newsletter Form */}
          <form className="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg overflow-hidden p-1">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-3 w-full text-sm text-gray-800 bg-white border-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-400" 
              required
            />
            <button 
              type="submit" 
              className="bg-pink-200 text-gray-900 px-3 py-3 text-sm font-semibold rounded-r-lg hover:bg-pink-400 transition-all">
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Shop</h3>
          <ul className="space-y-4 text-gray-700">
            <li><Link to="#" className="hover:text-blue-600 transition-colors">Men's Top Wear</Link></li>
            <li><Link to="#" className="hover:text-red-600 transition-colors">Men's Bottom Wear</Link></li>
            <li><Link to="#" className="hover:text-green-600 transition-colors">Women's Clothing</Link></li>
            <li><Link to="#" className="hover:text-purple-600 transition-colors">Accessories</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Support</h3>
          <ul className="space-y-4 text-gray-700">
            <li><Link to="#" className="hover:text-orange-600 transition-colors">Contact Us</Link></li>
            <li><Link to="#" className="hover:text-pink-600 transition-colors">About Us</Link></li>
            <li><Link to="#" className="hover:text-yellow-600 transition-colors">FAQ</Link></li>
            <li><Link to="#" className="hover:text-teal-600 transition-colors">Features</Link></li>
          </ul>
        </div>

        {/* Follow Us & Contact Us */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Follow Us</h3>
          <div className="flex gap-6 mb-6">
            <a href="#" className="text-gray-700 text-2xl hover:text-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-700 text-2xl hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-700 text-2xl hover:text-pink-500 transition">
              <FaInstagram />
            </a>
          </div>

          {/* Contact Us */}
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
          <p className="flex items-center gap-2 text-gray-700">
            <FaPhoneAlt className="text-lg" /> +123 456 7890
          </p>
          <p className="flex items-center gap-2 text-gray-700 mt-2">
            <FaEnvelope className="text-lg" /> support@example.com
          </p>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-200 py-4 text-center text-gray-700 text-sm mt-12">
        © {new Date().getFullYear()} TrendsMart. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
