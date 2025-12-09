"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (allowedTypes.includes(file.type)) {
        setUploadStatus(`✓ CV "${file.name}" uploaded successfully!`);
        setTimeout(() => setUploadStatus(""), 5000);
      } else {
        setUploadStatus('✗ Please upload a PDF, DOC, or DOCX file.');
        setTimeout(() => setUploadStatus(""), 5000);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hi! I'm Marie Grace Niyigena, a passionate frontend developer and designer 
              specializing in building modern, responsive, and user-friendly websites. 
              I enjoy transforming ideas into real digital experiences using clean code 
              and creative design.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I work with frontend and backend technologies including HTML, CSS, 
              JavaScript, React,next. js,  Python, Django, and more. I love solving problems 
              and continuously learning new technologies to stay ahead in this 
              ever-evolving field.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
              <div className="flex items-center gap-3">
                <i className="fas fa-check text-green-600 text-xl"></i>
                <span className="text-gray-800">Frontend Development</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-check text-green-600 text-xl"></i>
                <span className="text-gray-800">UI/UX Design</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-check text-green-600 text-xl"></i>
                <span className="text-gray-800">Responsive Design</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-check text-green-600 text-xl"></i>
                <span className="text-gray-800">JavaScript & React</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/Grace CV (1).pdf" download="Marie_Grace_CV.pdf" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                <i className="fas fa-download"></i> Download CV
              </a>
              <button onClick={() => document.getElementById('cvUpload').click()} className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
                <i className="fas fa-upload"></i> Upload New CV
              </button>
              <input type="file" id="cvUpload" accept=".pdf,.doc,.docx" onChange={handleFileUpload} className="hidden" />
            </div>
            
            {uploadStatus && (
              <div className={`p-3 rounded ${uploadStatus.includes('✓') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {uploadStatus}
              </div>
            )}
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700">
                <i className="fas fa-info-circle text-blue-500"></i> Click "Download CV" to get my latest resume or "Upload New CV" to replace it with an updated version.
              </p>
            </div>
          </div>

          <div className="flex-1 flex justify-center mt-8 lg:mt-0">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img src="/figma.jpeg" alt="Marie Grace Niyigena" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
