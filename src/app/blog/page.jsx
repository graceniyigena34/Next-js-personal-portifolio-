"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Blog() {
  const blogs = [
    { icon: "fa-code", date: "Jan 15, 2025", time: "5 min read", title: "Modern CSS Techniques for 2025", excerpt: "Explore the latest CSS features and techniques that will revolutionize your web development workflow in 2025.", tags: ["CSS", "Web Design", "Tutorial"] },
    { icon: "fa-laptop-code", date: "Jan 10, 2025", time: "7 min read", title: "Building Responsive Websites", excerpt: "A comprehensive guide to creating websites that look great on all devices using modern responsive design principles.", tags: ["Responsive", "HTML", "Guide"] },
    { icon: "fa-palette", date: "Jan 5, 2025", time: "6 min read", title: "UI/UX Best Practices", excerpt: "Learn essential UI/UX principles to create intuitive and engaging user experiences.", tags: ["UI/UX", "Design"] },
    { icon: "fa-react", date: "Dec 28, 2024", time: "8 min read", title: "Getting Started with React", excerpt: "A beginner-friendly guide to building your first React application.", tags: ["React", "JavaScript"] },
    { icon: "fa-rocket", date: "Dec 20, 2024", time: "5 min read", title: "Web Performance Optimization", excerpt: "Tips and tricks to make your websites faster and more efficient.", tags: ["Performance", "Optimization"] },
    { icon: "fa-mobile-alt", date: "Dec 15, 2024", time: "6 min read", title: "Mobile-First Design Approach", excerpt: "Why mobile-first design is crucial and how to implement it effectively.", tags: ["Mobile", "Design"] }
  ];

  return (
    <div>
      <Navbar />
      <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text mb-4">
              Blog & Articles
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">Thoughts, tutorials, and insights on web development and design</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {blogs.map((blog, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <i className={`fas ${blog.icon} text-6xl text-white opacity-80`}></i>
                </div>
                <div className="p-6">
                  <div className="flex gap-4 text-sm text-gray-600 mb-3">
                    <span><i className="far fa-calendar"></i> {blog.date}</span>
                    <span><i className="far fa-clock"></i> {blog.time}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{blog.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-gray-100 text-blue-600 rounded-full text-sm">{tag}</span>
                    ))}
                  </div>
                  <a href="#" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-6 sm:p-10 lg:p-12 bg-white rounded-2xl shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">View My Experience</h2>
            <p className="text-gray-600 text-lg mb-6">Explore my professional journey and career milestones</p>
            <a href="/experience" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-semibold hover:scale-105 transition">
              View Experience <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
