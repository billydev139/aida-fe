import React from "react";
import Logo from "../assets/LOGO.png"
const NAV_ITEMS = [
  { name: "What is AiDA?", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "Pricing", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function Navbar() {
  return (
    <nav className="bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo} // Replace with your logo path
            alt="AiDA Chat"
            className="h-14 w-auto"
          />
       
        </div>

        {/* Navigation Links */}
        <div className="hidden gap-8 md:flex md:justify-center md:items-center ">
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
              className="hidden rounded-lg bg-[#0057FF] px-6 py-2 text-[16px] text-white shadow-md hover:from-blue-600 hover:to-blue-700 md:inline-block"
            >
              Register
            </a>
          </div>
        </div>
        {/* Mobile Menu Button (Optional for Responsive Design) */}
        <div className="flex items-center md:hidden">
          <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
