"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-gray-900">NMG</h1>
          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-900">
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>

          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">About</a>
            <a href="/skills" className="text-gray-700 hover:text-blue-600 font-medium transition">Skills</a>
            <a href="/projects" className="text-gray-700 hover:text-blue-600 font-medium transition">Projects</a>
            <a href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition">Blog</a>
            <a href="/contact" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Contact</a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <a href="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="/about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="/skills" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">Skills</a>
            <a href="/projects" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">Projects</a>
            <a href="/blog" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">Blog</a>
            <a href="/contact" onClick={() => setIsOpen(false)} className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-center">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
