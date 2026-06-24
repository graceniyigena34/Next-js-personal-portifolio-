"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const skills = [
  { label: "Frontend", detail: "React.js, Next.js, TypeScript, JavaScript, HTML, CSS" },
  { label: "Mobile", detail: "React Native" },
  { label: "Backend", detail: "Node.js, Express.js, Django, Python" },
  { label: "Databases", detail: "MongoDB, PostgreSQL, Supabase" },
  { label: "Tools", detail: "Git, GitHub, Figma, Adobe Express, Canva, MS Office" },
];

const achievements = [
  "Built multiple full-stack and mobile applications from concept to deployment.",
  "Contributed to real-world projects including Greenex, Event Konnect, and Enjoy Rwanda.",
  "Strong ability to integrate frontend, backend, and databases into scalable systems.",
];

const languages = [
  { lang: "English", level: "Excellent" },
  { lang: "French", level: "Good" },
  { lang: "Kinyarwanda", level: "Native" },
];

export default function About() {
  return (
    <div>
      <Navbar />

      {/* Hero / Summary */}
      <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">

          {/* Top: bio + image */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-16">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">About Me</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Full-Stack and Mobile Developer with experience in building modern web and mobile
                applications using React, Next.js, React Native, Node.js, Django, and TypeScript.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Skilled in backend API development, database management (MongoDB, PostgreSQL,
                Supabase), and building scalable, user-friendly systems. Experienced in real-world
                projects and internships with strong teamwork, problem-solving, and software
                development skills.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="/Grace%20CV%20(1).pdf"
                  download="Marie_Grace_CV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
                >
                  <i className="fas fa-download"></i> Download CV
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 flex justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/figma.jpeg"
                  alt="Marie Grace Niyigena"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div key={skill.label} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-check-circle text-green-600 text-xl"></i>
                    <span className="font-bold text-gray-900 text-lg">{skill.label}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-8">{skill.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Languages */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Languages</h3>
              <div className="space-y-4">
                {languages.map(({ lang, level }) => (
                  <div key={lang} className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">{lang}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold
                      ${level === "Excellent" ? "bg-green-100 text-green-700" :
                        level === "Good" ? "bg-emerald-50 text-emerald-700" :
                        "bg-purple-100 text-purple-700"}`}>
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h3>
              <ul className="space-y-4">
                {achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <i className="fas fa-trophy text-yellow-500 mt-1 flex-shrink-0"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Education */}
          <div className="mt-8 bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-l-4 border-green-500 pl-4">
                <div>
                  <p className="font-bold text-gray-900">BSc (Hons) in Information Technology</p>
                  <p className="text-gray-600">University of Rwanda</p>
                </div>
                <span className="text-sm font-semibold text-green-700 whitespace-nowrap">2022 – 2026</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-l-4 border-emerald-500 pl-4">
                <div>
                  <p className="font-bold text-gray-900">A2 Certificate (Mathematics, Physics, Geography)</p>
                  <p className="text-gray-600">GS Ruhango Catholique</p>
                </div>
                <span className="text-sm font-semibold text-emerald-700 whitespace-nowrap">2015 – 2021</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
