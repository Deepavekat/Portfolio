import Education from "./Education";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-950/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">
          My Portfolio
        </h1>

        <ul className="hidden md:flex gap-8">
          <li><a href="#home" className="hover:text-cyan-400 transition duration-500">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition duration-500">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition duration-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition duration-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition duration-500">Contact</a></li>
          <li><a href="#education" className="hover:text-cyan-400 transition duration-500">Education</a></li>
        </ul>
      </div>
    </nav>
  );
}