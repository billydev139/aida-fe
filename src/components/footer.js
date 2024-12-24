import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import Logo from "../assets/Group.png";
import footer from "../assets/footer.png";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r from-[#070B34] to-[#111C44] text-white pt-16 pb-6"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundRepeat: "no-repeat", // Prevents tiling
        backgroundPosition: "center", // Centers the image
        height: "387px", // Example height
        width: "auto", // Example width
      }}
    >
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-start mb-20">
          {/* Logo section */}
          <div className="">
            <img
              src={Logo} // Replace with your logo path
              alt="AiDA Chat"
              className="h-14 w-auto"
            />
            <p className=" text-[16px] mt-6  text-[#ffff] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit, sed do eiusmod tempor
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-24">
            <div className="space-y-4">
              <a href="#" className="block text-[16px] hover:text-gray-300">
                Home
              </a>
              <a href="#" className="block text-[16px] hover:text-gray-300">
                About
              </a>
              <a href="#" className="block text-[16px] hover:text-gray-300">
                Social
              </a>
              <a href="#" className="block text-[16px] hover:text-gray-300">
                Pricing
              </a>
            </div>
            <div className="space-y-4">
              <a href="#" className="block text-[18px] hover:text-gray-300">
                Social
              </a>
              <div className="flex gap-6">
                <FaTwitter className="h-5 w-5 text-white hover:text-white cursor-pointer" />
                <FaInstagram className="h-5 w-5 text-white hover:text-white cursor-pointer" />
                <FaLinkedin className="h-5 w-5 text-white hover:text-white cursor-pointer" />
                <FaYoutube className="h-5 w-5 text-white hover:text-white cursor-pointer" />
              </div>
            </div>
          </nav>

          {/* Subscribe section */}
        <div className="max-w-[440px]">
            <h1 className="text-[18px] text-start mb-4 font-medium text-[#fffff]">
              Subscribe
            </h1>
            <p className="text-[16px] text-[#B7B7B7] mb-4">
              Join our community to receive updates
            </p>
            <div className="flex items-center justify-center gap-3 mb-2">
              <input
                type="email"
                placeholder="Type your email"
                className=" border border-gray-600 bg-[#fffff] text-[#7E9EC0] rounded-full px-6 py-3  flex-grow text-sm focus:outline-none focus:border-blue-500"
              />
              <button className="bg-[#0051FF] hover:bg-blue-700 px-6 py-2.5 text-[#E9FAFF] text-[16px]  rounded-full text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs mt-4 text-[#A7A7A7]">
              By subscribing you agree to our Privacy Policy
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex justify-between items-center pt-6 border-t border-gray-800">
          <div className="flex gap-8 text-sm text-[#8C8F9D]">
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

          <div className="text-sm text-[#8C8F9D]">
            © 2024 James Alonso. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
