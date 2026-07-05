const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Bootstrap",
  "Tailwind CSS",
  "Github",
  "Python",
  
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 text-xl rounded-xl p-6 text-center hover:bg-cyan-500 transition duration-800"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}