"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    e.target.reset();
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div>
      <Navbar />
      <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text mb-4">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing together!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold">Let's Connect</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a friendly conversation about web development and design.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "fa-envelope", title: "Email", info: "graceniyigena34@gmail.com" },
                  { icon: "fa-phone", title: "Phone", info: "+25 791 168 136" },
                  { icon: "fa-map-marker-alt", title: "Location", info: "Kigali, Rwanda" },
                  { icon: "fa-clock", title: "Response Time", info: "Within 24 hours" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className={`fas ${item.icon} text-white text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-600">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Send Message</h2>
                <p className="text-gray-600">Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-medium">First Name</label>
                    <input type="text" required className="w-full p-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:border-blue-600 focus:bg-white outline-none transition" />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Last Name</label>
                    <input type="text" required className="w-full p-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:border-blue-600 focus:bg-white outline-none transition" />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-medium">Email Address</label>
                  <input type="email" required className="w-full p-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:border-blue-600 focus:bg-white outline-none transition" />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Subject</label>
                  <input type="text" required className="w-full p-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:border-blue-600 focus:bg-white outline-none transition" />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Message</label>
                  <textarea required rows="5" placeholder="Tell me about your project or just say hello..." className="w-full p-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:border-blue-600 focus:bg-white outline-none transition resize-none"></textarea>
                </div>

                <button type="submit" className="w-full p-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:shadow-xl hover:-translate-y-1 transition flex items-center justify-center gap-2">
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </button>

                {showSuccess && (
                  <div className="p-4 bg-green-100 text-green-800 rounded-xl border border-green-200 text-center">
                    ✓ Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
