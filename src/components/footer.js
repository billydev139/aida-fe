import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#070B34] to-[#111C44] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-start mb-20">
          {/* Logo section */}
          <div className="max-w-[280px]">
            <h2 className="text-2xl font-bold mb-3">AiDA</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-24">
            <div className="space-y-4">
              <a href="#" className="block text-[15px] hover:text-gray-300">Home</a>
              <a href="#" className="block text-[15px] hover:text-gray-300">About</a>
            </div>
            <div className="space-y-4">
              <a href="#" className="block text-[15px] hover:text-gray-300">Social</a>
              <a href="#" className="block text-[15px] hover:text-gray-300">Pricing</a>
            </div>
            <div className="space-y-4">
              <a href="#" className="block text-[15px] hover:text-gray-300">Subscribe</a>
              <a href="#" className="block text-[15px] hover:text-gray-300">Contact</a>
            </div>
          </nav>

          {/* Subscribe section */}
          <div className="max-w-[320px]">
            <p className="text-[15px] mb-4">Join our community to receive updates</p>
            <div className="flex gap-3 mb-2">
              <input
                type="email"
                placeholder="Type your email"
                className="bg-transparent border border-gray-600 rounded-lg px-4 py-2.5 flex-grow text-sm focus:outline-none focus:border-blue-500"
              />
              <button className="bg-[#0051FF] hover:bg-blue-700 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400">
              By subscribing you agree to our Privacy Policy
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex justify-between items-center pt-6 border-t border-gray-800">
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Cookie Policy</a>
          </div>

          <div className="flex gap-6">
            <FaTwitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            <FaInstagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            <FaLinkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            <FaYoutube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>

          <div className="text-sm text-gray-400">
            © 2024 James Alonso. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;