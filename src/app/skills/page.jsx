"use client";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Skills() {
  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress-fill');
    setTimeout(() => {
      progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
      });
    }, 500);
  }, []);

  return (
    <div>
      <Navbar />
      <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text mb-4">
              Skills & Expertise
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Technical skills I use to design, build, and scale full-stack and mobile applications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              { icon: "fa-code", title: "Frontend", desc: "React.js, Next.js, TypeScript, JavaScript, HTML, and CSS for building responsive user interfaces." },
              { icon: "fa-mobile-alt", title: "Mobile", desc: "React Native for cross-platform mobile application development and smooth user experiences." },
              { icon: "fa-server", title: "Backend", desc: "Node.js, Express.js, and Django for RESTful API development and scalable server-side logic." },
              { icon: "fa-database", title: "Databases", desc: "MongoDB, PostgreSQL, and Supabase for reliable data storage, querying, and authentication workflows." },
              { icon: "fa-tools", title: "Tools", desc: "Git, GitHub, Figma, Adobe Express, Canva, and MS Office for development and team collaboration." },
              { icon: "fa-users", title: "Workflow", desc: "Agile teamwork, collaborative development, and end-to-end delivery from concept to deployment." }
            ].map((skill, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300" style={{animation: `fadeInUp 1s ease ${i * 0.1}s both`}}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6">
                  <i className={`fas ${skill.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-gray-600 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 sm:p-10 lg:p-12 rounded-3xl shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12">Technical Proficiency</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6 sm:gap-y-8">
              {[
                { name: "React.js & Next.js", percent: 90 },
                { name: "JavaScript & TypeScript", percent: 88 },
                { name: "Node.js & Express.js", percent: 82 },
                { name: "Django", percent: 76 },
                { name: "React Native", percent: 80 },
                { name: "MongoDB & PostgreSQL", percent: 84 }
              ].map((skill, i) => (
                <div key={i} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                    <span className="font-semibold text-blue-600">{skill.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="progress-fill h-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-full transition-all duration-[2s] ease-out" data-width={skill.percent} style={{width: 0}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
