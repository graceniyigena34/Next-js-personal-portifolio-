"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-inter text-gray-800">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg z-50 shadow-sm">
        <div className="w-full flex justify-between items-center px-6 py-4">
          <div className="text-2xl font-bold">NMG</div>

          {/* Hamburger */}
          <div
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-1 bg-gray-700"></span>
            <span className="w-6 h-1 bg-gray-700"></span>
            <span className="w-6 h-1 bg-gray-700"></span>
          </div>

          {/* Nav */}
          <nav
            className={`md:flex gap-8 font-medium absolute md:static top-16 right-0 md:right-auto
              bg-white md:bg-transparent w-full md:w-auto py-6 md:py-0 shadow-md md:shadow-none
              transition-all duration-300
              ${menuOpen ? "block" : "hidden md:flex"}`}
          >
            <a href="/" className="block text-center py-2 hover:text-blue-600">
              Home
            </a>
            <a href="/about" className="block text-center py-2 hover:text-blue-600">
              About
            </a>
            <a href="/skills" className="block text-center py-2 hover:text-blue-600">
              Skills
            </a>
            <a href="/projects" className="block text-center py-2 hover:text-blue-600">
              Project
            </a>
            <a href="/blog" className="block text-center py-2 hover:text-blue-600">
              Blog
            </a>
            <a
              href="/contact"
              className="block text-center py-2 px-4 rounded-full bg-blue-600 text-white hover:bg-blue-700"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* CONTACT SECTION */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
              Get In Touch
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto mt-3">
              Have a project in mind or just want to chat? Let's create something amazing together!
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* LEFT: Contact Info */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Let's Connect</h2>
              <p className="text-gray-600 leading-relaxed">
                I'm always open to discussing new opportunities, creative projects,
                or just having a friendly conversation about web development and design.
              </p>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white w-14 h-14 rounded-lg flex items-center justify-center">
                    <FaEnvelope size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">graceniyigena34@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <div className="bg-white shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-3">Send Me a Message</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Fill the form below and I will get back to you shortly.
              </p>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full p-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:shadow-xl transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-blue-500 text-2xl font-bold mb-3">NMG</h3>
              <p className="max-w-md text-gray-400">
                A creative developer passionate about UI/UX, modern web apps and digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-blue-500 font-semibold mb-3">Links</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="hover:text-blue-400">Home</a></li>
                  <li><a href="/about" className="hover:text-blue-400">About</a></li>
                  <li><a href="/skills" className="hover:text-blue-400">Skills</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-500 font-semibold mb-3">Social</h4>
                <ul className="space-y-2">
                  <li><a className="hover:text-blue-400">LinkedIn</a></li>
                  <li><a className="hover:text-blue-400">GitHub</a></li>
                  <li><a className="hover:text-blue-400">Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-10 text-sm">
            © {new Date().getFullYear()} NMG – All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
