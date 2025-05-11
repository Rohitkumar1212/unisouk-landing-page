// components/FooterMinimal.tsx
import {
    Facebook,
    Twitter,
    Instagram,
    Github,
    Dribbble
  } from 'lucide-react';
  
  export default function FooterSection() {
    return (
      <footer className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Navigation Links */}
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center space-x-6 text-sm text-gray-700 font-medium">
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900">Team</a></li>
              <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms</a></li>
            </ul>
          </nav>
  
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 text-gray-500 mb-6">
            <a href="#" aria-label="Facebook" className="hover:text-gray-800"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-800"><Instagram size={20} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-800"><Twitter size={20} /></a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-800"><Github size={20} /></a>
            <a href="#" aria-label="Dribbble" className="hover:text-gray-800"><Dribbble size={20} /></a>
          </div>
  
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © 2021 SomeCompany, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  