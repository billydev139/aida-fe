import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import Logo from "../assets/Group.png";
import footer from "../assets/footer.png";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r from-[#070B34] to-[#111C44] text-white pt-8 md:pt-16 pb-6 relative"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "300px",
        height: "auto",
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-0 mb-10 lg:mb-20">
          {/* Logo section */}
          <div className="w-full lg:w-auto">
            <img
              src={Logo}
              alt="AiDA Chat"
              className="h-10 md:h-14 w-auto"
            />
            <p className="text-sm md:text-base mt-4 md:mt-6 text-white leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
          </div>

          {/* Navigation - Centered on mobile, flex-row on larger screens */}
          <nav className="flex flex-col md:flex-row gap-8 md:gap-24">
            <div className="space-y-3 md:space-y-4">
              <a href="#" className="block text-sm md:text-base hover:text-gray-300">
                Home
              </a>
              <a href="#" className="block text-sm md:text-base hover:text-gray-300">
                About
              </a>
              <a href="#" className="block text-sm md:text-base hover:text-gray-300">
                Social
              </a>
              <a href="#" className="block text-sm md:text-base hover:text-gray-300">
                Pricing
              </a>
            </div>
            <div className="space-y-3 md:space-y-4">
              <a href="#" className="block text-base md:text-lg hover:text-gray-300">
                Social
              </a>
              <div className="flex gap-4 md:gap-6">
                <FaTwitter className="h-4 w-4 md:h-5 md:w-5 text-white hover:text-gray-300 cursor-pointer" />
                <FaInstagram className="h-4 w-4 md:h-5 md:w-5 text-white hover:text-gray-300 cursor-pointer" />
                <FaLinkedin className="h-4 w-4 md:h-5 md:w-5 text-white hover:text-gray-300 cursor-pointer" />
                <FaYoutube className="h-4 w-4 md:h-5 md:w-5 text-white hover:text-gray-300 cursor-pointer" />
              </div>
            </div>
          </nav>

          {/* Subscribe section */}
          <div className="w-full lg:w-[440px]">
            <h1 className="text-base md:text-lg text-start mb-2 md:mb-4 font-medium">
              Subscribe
            </h1>
            <p className="text-sm md:text-base text-[#B7B7B7] mb-4">
              Join our community to receive updates
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-2">
              <input
                type="email"
                placeholder="Type your email"
                className="w-full border border-gray-600 bg-white text-[#7E9EC0] rounded-full px-4 md:px-6 py-2 md:py-3 text-sm focus:outline-none focus:border-blue-500"
              />
              <button className="w-full sm:w-auto bg-[#0051FF] hover:bg-blue-700 px-6 py-2.5 text-[#E9FAFF] text-sm md:text-base rounded-full font-medium transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs mt-2 md:mt-4 text-[#A7A7A7]">
              By subscribing you agree to our Privacy Policy
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-800">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-xs md:text-sm text-[#8C8F9D]">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300">
              Cookie Policy
            </a>
          </div>

          <div className="text-xs md:text-sm text-[#8C8F9D]">
            © 2024 James Alonso. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;