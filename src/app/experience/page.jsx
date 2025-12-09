"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Experience() {
  const experiences = [
    { date: "2024 - Present", title: "Frontend Developer", company: "Tech Company, Kigali", desc: "Leading frontend development projects and creating responsive web applications.", items: ["Developed 20+ responsive web applications", "Improved website performance by 40%", "Mentored junior developers"] },
    { date: "2023 - 2024", title: "UI/UX Designer", company: "Design Studio, Kigali", desc: "Created user-centered designs and improved user experience across multiple platforms.", items: ["Designed 15+ web and mobile interfaces", "Conducted user research and testing", "Increased user engagement by 35%"] },
    { date: "2022 - 2023", title: "Web Developer Bootcamp", company: "SheCanCode Bootcamp, Kigali", desc: "Assisted in developing web applications and learned modern development practices.", items: ["Built responsive landing pages", "Collaborated with developers", "Learned React, modern JavaScript and nextjs"] },
    { date: "March 24 - May 23, 2025", title: "IT Support Internship (Networking)", company: "Rwanda Energy Group (REG), Kigali", desc: "Completed a two-month IT support internship focusing on networking and technical support tasks.", items: ["Assisted in setting up and maintaining network infrastructure", "Troubleshot network connectivity issues for staff", "Configured routers, switches, and network devices", "Learned practical networking skills in a professional IT environment"] },
    { date: "2021 - 2022", title: "Freelance Web Designer", company: "Self-Employed", desc: "Provided web design services to local businesses and startups.", items: ["Completed 20+ client projects", "Built strong client relationships", "Developed portfolio of diverse work"] }
  ];

  return (
    <div>
      <Navbar />
      <section className="min-h-screen py-20 px-8 bg-gradient-to-br from-gray-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text mb-4">
              Work Experience
            </h1>
            <p className="text-xl text-gray-600">My professional journey and career milestones</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-600 hidden lg:block"></div>
            
            {experiences.map((exp, i) => (
              <div key={i} className={`flex flex-col lg:flex-row mb-12 relative ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <div className={`lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm mb-4">{exp.date}</span>
                    <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                    <h4 className="text-lg text-blue-600 mb-4">{exp.company}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.desc}</p>
                    <ul className="space-y-2">
                      {exp.items.map((item, j) => (
                        <li key={j} className="text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg" style={{top: '2rem'}}></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 p-12 bg-white rounded-2xl shadow-xl">
            <h2 className="text-3xl font-semibold mb-4">Read My Blog</h2>
            <p className="text-gray-600 text-lg mb-6">Check out my latest articles on web development and design</p>
            <a href="/blog" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-semibold hover:scale-105 transition">
              View Blog <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
