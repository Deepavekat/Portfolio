const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Bootstrap",
  "Tailwind CSS",
  "GitHub",
  "Python",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 text-center sm:text-left mb-6 md:mb-8">
  
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 text-base sm:text-lg md:text-xl rounded-xl p-4 sm:p-5 md:p-6 text-center hover:bg-cyan-500 transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}