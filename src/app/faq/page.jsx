"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    q: "What type of roles are you currently looking for?",
    a: "I am actively looking for roles in Full-Stack Development, Mobile Development, and Data Engineering. I am particularly interested in positions where I can use my experience in React, Next.js, React Native, Node.js, Django, and TypeScript to build modern, scalable, and user-friendly systems. I am open to internships, freelance projects, and full-time opportunities.",
  },
  {
    q: "What technologies do you work with?",
    a: "Frontend: React.js, Next.js, TypeScript, JavaScript, HTML, CSS. Mobile: React Native. Backend: Node.js, Express.js, Django, Python. Databases: MongoDB, PostgreSQL, Supabase. Tools: Git, GitHub, Figma, Adobe Express, Canva, MS Office.",
  },
  {
    q: "How does your experience relate to Data Engineering?",
    a: "I have hands-on experience managing databases including MongoDB, PostgreSQL, and Supabase across real-world projects. I have built RESTful APIs using Node.js and Express.js, implemented authentication systems, and worked with backend data flows in platforms like Event Konnect and Enjoy Rwanda. I am actively expanding into data pipelines and data-driven system architecture to grow into Data Engineering.",
  },
  {
    q: "Have you worked with databases in real projects?",
    a: "Yes. I have managed MongoDB and PostgreSQL databases and implemented authentication systems using Supabase in multiple real-world projects including Event Konnect (kLab Academy) and Enjoy Rwanda (RG Consult). I am comfortable with database schema design, querying, and full integration with backend APIs.",
  },
  {
    q: "Are you available for internships or full-time opportunities?",
    a: "Yes, I am available for internships, graduate roles, freelance projects, and full-time opportunities. I am based in Gasabo District, Kigali, Rwanda and I am open to remote work as well. You can reach me at graceniyigena34@gmail.com or +250 791 168 136.",
  },
  {
    q: "What real-world projects have you built?",
    a: "Greenex / EcoTrack Waste Collection Management System — web and mobile platform for waste collection scheduling and tracking. Event Konnect (kLab Academy) — full-stack event management system with registration and user interaction features. Enjoy Rwanda (RG Consult internship) — tourism and business listing platform with frontend and backend development. Banking Mobile App — React Native app with send money, withdraw, and bank chat features.",
  },
  {
    q: "What is your educational background?",
    a: "I hold a BSc (Hons) in Information Technology from the University of Rwanda (2022 – 2026), where I developed web and mobile applications, built RESTful APIs, and managed databases.",
  },
  {
    q: "What languages do you speak?",
    a: "English (Excellent), French (Good), and Kinyarwanda (Native).",
  },
  {
    q: "How can I reach you?",
    a: "Email: graceniyigena34@gmail.com | Phone: +250 791 168 136 | LinkedIn: linkedin.com/in/marie-grace-niyigena-14000a285 | GitHub: github.com/graceniyigena34 | Location: Gasabo District, Kigali, Rwanda. You can also use the Contact form on this portfolio.",
  },
  {
    q: "Are you comfortable working in a team?",
    a: "Absolutely. I have worked in Agile team environments at kLab Academy as a Full-Stack Developer and at RG Consult as a Software Developer Intern. I collaborate using Git and GitHub for version control, follow modern development workflows, and value clear communication, shared goals, and continuous feedback within a team.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div>
      <Navbar />
      <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about my background, skills, and what I&apos;m looking for — especially for Data Engineering and Full-Stack roles.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900 text-base sm:text-lg pr-4">
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === i ? "bg-emerald-600 rotate-45" : "bg-gray-100"}`}>
                    <i className={`fas fa-plus text-sm ${openIndex === i ? "text-white" : "text-gray-600"}`}></i>
                  </span>
                </button>

                {openIndex === i && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-3xl p-10 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Still have questions?</h2>
            <p className="text-emerald-50 mb-6 text-lg">
              Feel free to reach out — I respond within 24 hours.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition"
            >
              Contact Me
            </a>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}
