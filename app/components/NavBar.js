// components/NavBar.js

"use client"; // Marking this component as a Client Component

import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <nav className="fixed w-full top-0 z-10 bg-white shadow-md transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-2xl font-bold text-gray-800">
            Resume Builder
          </div>
          <div className="flex items-center md:hidden"> {/* Show hamburger menu on small screens */}
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {/* Main menu container for larger screens */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-blue-500 hover:text-blue-700 p-4">Home</Link>
            <Link href="/about" className="text-blue-500 hover:text-blue-700 p-4">About Us</Link>
            <Link href="/pricing" className="text-blue-500 hover:text-blue-700 p-4">Pricing</Link>
            <Link href="/templates" className="text-blue-500 hover:text-blue-700 p-4">Templates</Link>
            <Link href="/contact" className="text-blue-500 hover:text-blue-700 p-4">Contact</Link>
          </div>
          {/* Mobile menu for small screens */}
          <div
            className={`${
              isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden transition-all duration-500 ease-in-out transform bg-white fixed inset-0 z-10 md:hidden flex flex-col items-center justify-center space-y-6`}
          >
            <Link href="/" className="text-blue-500 hover:text-blue-700 text-xl" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="text-blue-500 hover:text-blue-700 text-xl" onClick={toggleMenu}>
              About Us
            </Link>
            <Link href="/pricing" className="text-blue-500 hover:text-blue-700 text-xl" onClick={toggleMenu}>
              Pricing
            </Link>
            <Link href="/templates" className="text-blue-500 hover:text-blue-700 text-xl" onClick={toggleMenu}>
              Templates
            </Link>
            <Link href="/contact" className="text-blue-500 hover:text-blue-700 text-xl" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
