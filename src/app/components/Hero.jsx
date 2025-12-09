"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-20 bg-gradient-to-br from-gray-50 to-gray-100" id="home">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <p className="text-lg text-gray-600">Hello, I'm</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">MARIE GRACE NIYIGENA</h1>
          <h2 className="text-3xl lg:text-4xl font-semibold text-green-600">Frontend Developer & Designer</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
            I create beautiful, functional web experiences that solve real-world 
            problems. Passionate about clean code, intuitive design, and innovative 
            solutions.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#projects" className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 bg-white text-black border-2 border-black rounded-lg hover:bg-gray-50 transition">
              Get In Touch
            </a>
          </div>
          <div className="flex gap-6 pt-4">
            <a href="https://github.com/graceniyigena34" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-green-600 transition">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/marie-grace-niyigena" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-green-600 transition">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://instagram.com/marie_grace_niyigena" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-green-600 transition">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-green-600 shadow-2xl">
            <img src="/profile.jpg" alt="Profile Image" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
