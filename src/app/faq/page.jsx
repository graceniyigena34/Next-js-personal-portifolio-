"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    q: "What type of roles are you currently looking for?",
    a: "I am actively looking for roles in Full-Stack Development, Mobile Development, and Data Engineering. I am particularly interested in positions where I can use my backend, database, and API skills to build scalable, data-driven systems.",
  },
  {
    q: "What technologies do you work with?",
    a: "Frontend: React.js, Next.js, TypeScript, JavaScript, HTML, CSS. Mobile: React Native. Backend: Node.js, Express.js, Django. Databases: MongoDB, PostgreSQL, Supabase. Tools: Git, GitHub, Figma, Adobe Express, Canva.",
  },
  {
    q: "How does your experience relate to Data Engineering?",
    a: "I have hands-on experience designing and managing databases (PostgreSQL, MongoDB, Supabase), building RESTful APIs for data exchange, and working with backend systems that handle real-world data flows. I am actively expanding into data pipelines, ETL processes, and data-driven system architecture to transition into Data Engineering.",
  },
  {
    q: "Have you worked with databases in real projects?",
    a: "Yes. I have used PostgreSQL and MongoDB in production projects including Event Konnect and Enjoy Rwanda, and implemented authentication and data storage with Supabase. I am comfortable with database schema design, querying, and integration with backend APIs.",
  },
  {
    q: "Are you available for internships or full-time opportunities?",
    a: "Yes, I am open to internships, graduate roles, freelance projects, and full-time opportunities in both web/mobile development and data engineering. I am based in Kigali, Rwanda and can also work remotely.",
  },
  {
    q: "What real-world projects have you built?",
    a: "Greenex Waste Collection Management System (Next.js, REST APIs), Event Konnect — a full-stack event management platform (kLab Academy), Enjoy Rwanda — a tourism and business listing platform (RG Consult internship), and a Banking Mobile App (React Native) with send money, withdraw, and chat features.",
  },
  {
    q: "What is your educational background?",
    a: "I hold a BSc (Hons) in Information Technology from the University of Rwanda (2022–2026), and an A2 Certificate in Mathematics, Physics, and Geography from GS Ruhango Catholique (2015–2021).",
  },
  {
    q: "What languages do you speak?",
    a: "English (Excellent), French (Good), and Kinyarwanda (Native).",
  },
  {
    q: "How can I reach you?",
    a: "You can email me at graceniyigena34@gmail.com, connect with me on LinkedIn (Marie Grace Niyigena), or use the Contact form on this portfolio.",
  },
  {
    q: "Are you comfortable working in a team?",
    a: "Absolutely. I have worked in Agile team environments at kLab Academy and RG Consult, collaborating using Git, GitHub, and modern development workflows. I value clear communication and shared goals.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div>
      <Navbar />
      <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
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
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === i ? "bg-blue-600 rotate-45" : "bg-gray-100"}`}>
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
          <div className="mt-14 text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Still have questions?</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Feel free to reach out — I respond within 24 hours.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition"
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
