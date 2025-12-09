"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">NMG</h3>
            <p className="text-gray-400">
              Frontend Developer & Designer creating clean, functional and intuitive web experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-green-500 transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-green-500 transition">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-green-500 transition">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-green-500 transition">Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>graceniyigena34@gmail.com</li>
              <li>+25 791 168 136</li>
              <li>Kigali, Rwanda</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-green-500 transition">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/marie-grace-niyigena" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-green-500 transition">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://instagram.com/marie_grace_niyigena" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-green-500 transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Marie Grace Niyigena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
