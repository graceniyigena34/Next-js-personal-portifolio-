"use client";
export default function Navbar() {
  return (
    <nav className="w-full p-4 flex justify-between items-center bg-green-600 text-white">
      <h1 className="text-xl font-bold">Grace Portfolio</h1>
      <div className="space-x-4">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/skills">Skills</a>
        <a href="/projects">Projects</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}
