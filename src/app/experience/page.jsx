"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Experience() {
  const experiences = [
    {
      date: "Apr 2026 - May 2026",
      title: "Software Developer Intern",
      company: "RG Consult",
      desc: "Worked as a Full-Stack Developer on the Enjoy Rwanda platform.",
      items: [
        "Improved business listing features and user interaction system.",
        "Contributed to frontend and backend development.",
        "Collaborated using Git and GitHub for version control."
      ]
    },
    {
      date: "Nov 2025 - Apr 2026",
      title: "Full-Stack Developer",
      company: "kLab Academy",
      desc: "Built Event Konnect, a full-stack event management system.",
      items: [
        "Developed event creation, registration, and user interaction features.",
        "Worked in an Agile team environment using modern development workflows.",
        "Integrated APIs and databases for dynamic functionality."
      ]
    },
    {
      date: "Sep 2025 - Mar 2026",
      title: "Frontend Development Trainee",
      company: "SheCanCode Bootcamp",
      desc: "Gained strong frontend foundations through real-world projects and modern tooling.",
      items: [
        "Learned HTML, CSS, JavaScript, React, TypeScript, and Next.js.",
        "Built responsive UI components and frontend applications.",
        "Developed Greenex Waste Management System (Frontend).",
        "Applied UI/UX best practices in practical development work."
      ]
    },
    {
      date: "2022 - 2026",
      title: "Information Technology Student",
      company: "University of Rwanda",
      desc: "Studied at University of Rwanda in Department of IT (2022 - 2026).",
      items: [
        "Developed applications using React, Next.js, React Native, Django, and TypeScript.",
        "Built RESTful APIs with Node.js and Express.js.",
        "Managed MongoDB and PostgreSQL databases.",
        "Implemented authentication systems using Supabase.",
        "Worked collaboratively with Git and GitHub."
      ]
    }
  ];

  return (
    <div>
      <Navbar />
      <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text mb-4">
              Work Experience
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">My full-stack and mobile development journey across internships, academy projects, and university work</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-600 hidden lg:block"></div>
            
            {experiences.map((exp, i) => (
              <div key={i} className={`flex flex-col lg:flex-row mb-8 sm:mb-12 relative ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <div className={`lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-8 xl:pr-12' : 'lg:pl-8 xl:pl-12'}`}>
                  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm mb-4">{exp.date}</span>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">{exp.title}</h3>
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

          <div className="text-center mt-12 sm:mt-16 p-6 sm:p-10 lg:p-12 bg-white rounded-2xl shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Explore My Projects</h2>
            <p className="text-gray-600 text-lg mb-6">See the platforms and products where I applied these full-stack skills in real scenarios</p>
            <a href="/projects" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-semibold hover:scale-105 transition">
              View Projects <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
