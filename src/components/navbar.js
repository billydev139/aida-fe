import React, { useState } from "react";
import Logo from "../assets/LOGO.png";

const NAV_ITEMS = [
  { name: "What is AiDA?", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "Pricing", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="">
          <img
            src={Logo}
            alt="AiDA Chat"
            className=""
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden gap-8 md:flex md:justify-center md:items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[16px] font-normal text-[#262627] hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}
          
          <div className="flex justify-center items-center gap-5 ml-12">
            <a
              href="#"
              className="text-[16px] font-normal text-[#262627] hover:text-blue-600"
            >
              Log in
            </a>
            <a
              href="#"
              className="rounded-lg bg-[#0057FF] px-6 py-3 text-[16px] text-white shadow-md hover:bg-blue-600 transition-colors"
            >
              Register
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-lg border-t`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-[16px] font-normal text-[#262627] hover:text-blue-600 py-2"
            >
              {item.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
            <a
              href="#"
              className="block text-[16px] font-normal text-[#262627] hover:text-blue-600"
            >
              Log in
            </a>
            <a
              href="#"
              className="block w-full rounded-lg bg-[#0057FF] px-6 py-2 text-center text-[16px] text-white shadow-md hover:bg-blue-600 transition-colors"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;