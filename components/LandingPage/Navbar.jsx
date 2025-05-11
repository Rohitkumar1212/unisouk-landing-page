
'use client';
import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react'; // Optional: Lucide for icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full max-w-7xl lg:w-[90%] m-auto sticky top-0 bg-white z-50 border-b-1 border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight text-gray-900">
          nullBrains<span className="text-purple-600">.</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 items-center text-sm font-medium text-gray-700">
          <li><a href="#" className="hover:text-purple-600 transition">Home</a></li>
          <li><a href="#" className="hover:text-purple-600 transition">Features</a></li>
          <li><a href="#" className="hover:text-purple-600 transition">Blog</a></li>
          <li><a href="#" className="hover:text-purple-600 transition">Contact</a></li>
          <li><a href="#" className="hover:text-purple-600 transition">
          <Search />
            </a></li>
          
        </ul>
        <ul className="hidden md:flex space-x-8 items-center text-sm font-medium text-gray-700">
        <li><a href="#" className="hover:text-purple-600 transition">Sign In</a></li>
          <li>
            <a
              href="#"
              className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700 transition"
            >
              Sign Up
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-sm font-medium text-gray-700 flex justify-center flex-col items-center">
            <li><a href="#" className="block hover:text-purple-600">Home</a></li>
            <li><a href="#" className="block hover:text-purple-600">Features</a></li>
            <li><a href="#" className="block hover:text-purple-600">Blog</a></li>
            <li><a href="#" className="block hover:text-purple-600">Contact</a></li>
            <li><a href="#" className="block hover:text-purple-600">Sign In</a></li>
            <li>
              <a
                href="#"
                className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700 transition"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

