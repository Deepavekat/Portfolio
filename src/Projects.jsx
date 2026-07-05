const projects = [
  {
    title: "FARM2INDUSTRY",
    description: [
      "Developed a responsive web platform connecting farmers and industries.",
      "Designed the user interface using HTML, CSS, and JavaScript.",
      "Implemented interactive forms and client-side validation.",
    ],
  },
  {
    title: "SELF POWERED SPEED MEASURING SYSTEM",
    description: [
      "Designed a motor speed measurement system powered by rotational energy.",
      "Integrated an IR sensor with ESP8266 for RPM calculation.",
      "Displayed real-time speed data on an LCD screen.",
    ],
  },
  {
    title: "NETFLIX WEBSITE CLONE",
    description: [
      "Developed a Netflix-inspired website using HTML, CSS, and JavaScript.",
      "Used AI tools to improve UI design and optimize code.",
      "Created responsive pages similar to the original Netflix platform.",
      "Strengthened front-end development skills through practical implementation.",
    ],
  },
  {
    title: "MEESHO WEBSITE CLONE",
    description: [
      "Built a responsive e-commerce website using React.js.",
      "Implemented product listing, category filtering, search, and shopping cart features.",
      "Used React Hooks and React Router for efficient navigation.",
      "Followed a component-based architecture for reusable code.",
    ],
  },
];
export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project,index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transition duration-500"
            >
              
              <div className="p-6">
                <h3 className="text-xl font-bold">
                {project.title}
                </h3>

             <ul className="list-none list-inside pl-5 text-gray-400 mt-3 space-y-2">
  {project.description.map((point, i) => (
    <li key={i}>{point}</li>
  ))}
</ul>

                <button className="mt-5 bg-cyan-500 px-5 py-2 rounded-lg">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}