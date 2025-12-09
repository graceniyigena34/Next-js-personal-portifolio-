"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    { category: "web", title: "E-Commerce Platform", desc: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics dashboard.", tech: ["React", "TypeScript", "Tailwind"], link: "https://e-commerce-vxgc-lake.vercel.app", image: "/E-commerce image.png" },
    { category: "web", title: "Developer Dashboard", desc: "Developer Dashboard is a modern, responsive web application. It offers a clean interface for viewing and managing essential metrics via a sidebar navigation, top navbar, analytics / stats cards, and interactive charts.", tech: ["React", "TypeScript", "Tailwind"], link: "https://developer-dashboard-2cfv.vercel.app", image: "/developer dashboard.png" },
    { category: "web", title: "Task Management App", desc: "A collaborative task management application with real-time updates, team collaboration features, and project tracking.", tech: ["Next.js", "TypeScript", "Tailwind", "Socket.io"], link: "#", gradient: "from-purple-600 to-purple-800" },
    { category: "web", title: "Financial Tracker", desc: "The Financial Tracker is a web application designed to help users manage personal finances efficiently. Users can track income and expenses, categorize transactions, and view summaries.", tech: ["Next.js", "TypeScript", "Tailwind", "Firebase"], link: "https://capstone-personal-financial-tracker-psi.vercel.app", gradient: "from-green-600 to-green-800" },
    { category: "mobile", title: "Weather Mobile App", desc: "A beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts.", tech: ["React Native", "Redux", "Weather API", "Maps"], link: "#", gradient: "from-pink-600 to-red-600" },
    { category: "design", title: "Brand Identity Design", desc: "Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.", tech: ["Figma", "Adobe CC", "Branding", "UI/UX"], link: "#", gradient: "from-yellow-600 to-pink-600" }
  ];

  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <div>
      <Navbar />
      <section className="min-h-screen py-20 px-8 bg-gradient-to-br from-gray-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text mb-4">
              Featured Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work and projects I'm proud of. Each project represents my passion for creating innovative solutions.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {["all", "web", "mobile", "design"].map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`px-6 py-2 rounded-full border-2 border-blue-600 font-medium transition ${filter === f ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-600 hover:text-white'}`}>
                {f === "all" ? "All Projects" : f === "web" ? "Web Apps" : f === "mobile" ? "Mobile" : "Design"}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className={`h-48 ${project.image ? '' : `bg-gradient-to-br ${project.gradient}`} flex items-center justify-center relative group`} style={project.image ? {backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center'} : {}}>
                  {!project.image && <i className={`fas ${project.category === 'web' ? 'fa-laptop-code' : project.category === 'mobile' ? 'fa-mobile-alt' : 'fa-paint-brush'} text-6xl text-white opacity-80`}></i>}
                  <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition">
                      {project.category === 'design' ? 'View Design' : 'Live Demo'}
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, j) => (
                      <span key={j} className="px-3 py-1 bg-gray-100 text-blue-600 rounded-full text-sm">{t}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    {project.category === 'design' ? 'View Design' : project.category === 'mobile' ? 'Download' : 'Live Demo'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
