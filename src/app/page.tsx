import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const stacks = [
  {
    icon: "fa-code",
    title: "Frontend Engineering",
    summary:
      "React.js, Next.js, TypeScript, JavaScript, HTML, and CSS for responsive, accessible user interfaces.",
  },
  {
    icon: "fa-mobile-screen-button",
    title: "Mobile Development",
    summary:
      "Cross-platform mobile applications with React Native, focused on usability and performance.",
  },
  {
    icon: "fa-server",
    title: "Backend Development",
    summary:
      "Node.js, Express.js, and Django for RESTful APIs, business logic, and scalable backend services.",
  },
  {
    icon: "fa-database",
    title: "Data & Storage",
    summary:
      "MongoDB, PostgreSQL, and Supabase for structured data management, authentication, and app scalability.",
  },
  {
    icon: "fa-screwdriver-wrench",
    title: "Tools & Collaboration",
    summary:
      "Git, GitHub, Figma, Adobe Express, Canva, and Agile workflows for collaborative software delivery.",
  },
];

const projects = [
  {
    title: "Greenex Waste Collection Management System",
    description:
      "Web-based waste collection and environmental services platform with scheduling, tracking, and service request workflows.",
    stack: ["Next.js", "TypeScript", "REST APIs", "Scalable Frontend"],
  },
  {
    title: "Event Konnect",
    description:
      "Event platform that connects vendors and clients, where the client is an event planner who books vendors for events.",
    stack: ["React", "Node.js", "Vendor Booking", "Event Planner"],
  },
  {
    title: "Enjoy Rwanda",
    description:
      "Tourism platform where visitors can book shops and restaurants, reserve tables, and pay online.",
    stack: ["Next.js", "Node.js", "Online Payments", "Table Reservation"],
  },
];

const timeline = [
  {
    period: "Apr 2026 - May 2026",
    role: "Software Developer Intern",
    place: "RG Consult",
    points: [
      "Worked as a Full-Stack Developer on the Enjoy Rwanda platform.",
      "Improved business listing features and user interaction system.",
      "Contributed to both frontend and backend development.",
      "Collaborated using Git and GitHub for version control.",
    ],
  },
  {
    period: "Nov 2025 - Apr 2026",
    role: "Full-Stack Developer",
    place: "kLab Academy",
    points: [
      "Built Event Konnect, a full-stack event management system.",
      "Developed event creation, registration, and user interaction features.",
      "Worked in an Agile team environment using modern workflows.",
      "Integrated APIs and databases for dynamic functionality.",
    ],
  },
  {
    period: "Sep 2025 - Mar 2026",
    role: "Frontend Development Trainee",
    place: "SheCanCode Bootcamp, Kigali",
    points: [
      "Learned HTML, CSS, JavaScript, React, TypeScript, and Next.js.",
      "Built responsive UI components and frontend applications.",
      "Developed Greenex Waste Management System (Frontend).",
      "Applied UI/UX best practices in real-world projects.",
    ],
  },
  {
    period: "2022 - 2026",
    role: "Information Technology Student",
    place: "University of Rwanda, College of Science and Technology",
    points: [
      "Studied Information Technology at University of Rwanda, College of Science and Technology (2022 - 2026).",
      "Learned networking and software development through academic and practical projects.",
      "Developed web and mobile apps using React, Next.js, React Native, Django, and TypeScript.",
      "Built RESTful APIs using Node.js and Express.js.",
      "Managed MongoDB and PostgreSQL databases.",
      "Implemented authentication systems using Supabase.",
      "Worked collaboratively using Git and GitHub.",
    ],
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="overflow-hidden">
        <section id="home" className="hero-shell px-4 pt-28 pb-20 sm:px-6 lg:px-8 lg:pt-36 lg:pb-28">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Full Stack Developer
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.02] tracking-tight text-slate-900">
                Marie Grace Niyigena
              </h1>

              <p className="mx-auto lg:mx-0 max-w-2xl text-lg sm:text-xl text-slate-700 leading-relaxed">
                Full-Stack and Mobile Developer building modern web and mobile applications with React, Next.js,
                React Native, Node.js, Django, and TypeScript. I focus on scalable systems, clear user experience,
                and practical solutions that connect frontend, backend, and data.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                <a
                  href="#projects"
                  className="rounded-xl bg-slate-900 px-7 py-3 text-white font-semibold hover:-translate-y-1 transition"
                >
                  Explore Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border-2 border-slate-900 px-7 py-3 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition"
                >
                  Start a Project
                </a>
              </div>

              <div className="flex items-center gap-5 justify-center lg:justify-start pt-2 text-2xl text-slate-700">
                <a href="https://github.com/graceniyigena34" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition">
                  <i className="fa-brands fa-github" />
                </a>
                <a href="https://linkedin.com/in/marie-grace-niyigena" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href="mailto:graceniyigena34@gmail.com" className="hover:text-emerald-600 transition">
                  <i className="fa-solid fa-envelope" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md flex justify-center">
              <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_top,_#34d399_0,_transparent_60%)] opacity-80 blur-xl" />
              <div className="relative rounded-full border border-white/70 bg-white/80 p-4 shadow-2xl backdrop-blur">
                <img
                  src="/profile.jpg"
                  alt="Marie Grace Niyigena"
                  className="h-[360px] w-[360px] rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-5">
              <p className="section-kicker">About Me</p>
              <h2 className="section-title">Building products from idea to production</h2>
              <p className="section-copy">
                I am a Full-Stack and Mobile Developer based in Kigali, Rwanda. I build end-to-end systems that combine
                modern frontend architecture, reliable backend APIs, and strong database design.
              </p>
              <p className="section-copy">
                I have worked on real-world platforms like Greenex, Event Konnect, and Enjoy Rwanda, contributing to
                product usability, dynamic features, and technical scalability in collaborative Agile environments.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Frontend Engineering",
                "Mobile Development",
                "Backend API Development",
                "Database Management",
                "Supabase Authentication",
                "Agile Collaboration",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="font-semibold text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto">
            <p className="section-kicker section-kicker-dark">Core Expertise</p>
            <h2 className="section-title section-title-dark max-w-3xl">End-to-end full stack capabilities</h2>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {stacks.map((stack) => (
                <article key={stack.title} className="rounded-2xl border border-white/15 bg-white/5 p-6 hover:bg-white/10 transition">
                  <div className="mb-4 text-2xl text-emerald-300">
                    <i className={`fas ${stack.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold">{stack.title}</h3>
                  <p className="mt-2 text-slate-200 leading-relaxed">{stack.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="section-kicker">Projects</p>
            <h2 className="section-title">Selected Work</h2>

            <div className="mt-10 grid lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <article key={project.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                  <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8 bg-[#f3f7f4]">
          <div className="max-w-7xl mx-auto">
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">Career Timeline</h2>

            <div className="mt-10 space-y-6">
              {timeline.map((item) => (
                <article key={item.role} className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
                  <p className="text-sm font-semibold text-emerald-700">{item.period}</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">{item.role}</h3>
                  <p className="text-slate-600 font-medium">{item.place}</p>
                  <ul className="mt-4 space-y-2 text-slate-700">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto rounded-[2rem] bg-slate-900 px-6 py-14 sm:px-10 text-center text-white">
            <p className="section-kicker section-kicker-dark">Let&apos;s Build Together</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">Need a full stack developer for your next product?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-200 text-lg">
              I am available for internships, freelance projects, and full-time opportunities where modern frontend,
              backend APIs, and scalable databases come together.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="mailto:graceniyigena34@gmail.com" className="rounded-xl bg-emerald-500 px-7 py-3 font-semibold text-slate-900 hover:bg-emerald-400 transition">
                Email Me
              </a>
              <a href="/contact" className="rounded-xl border border-white/30 px-7 py-3 font-semibold hover:bg-white/10 transition">
                Contact Form
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
