const education = [
  {
    degree: "Bachelor of Engineering (BE) -Electrical and Electronics Engineering",
    institution: "ALAGAPPA CHETTIAR GOVERNMENT COLLEGE OF ENGINEERING AND TECHNOLOGY,KARAIKUDI",
    year: "2022-2026",
    score: "CGPA: 7.6950",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "GOVERNMENT GIRLS HIGHER SECONDARY SCHOOL,KARAIKUDI",
    year: "2021 - 2022",
    score: "83.8%",
  },
  {
    degree: "Secondary School Leaving  Certificate (SSLC)",
    institution: "GOVERNMENT GIRLS HIGHER SECONDARY SCHOOL,KARAIKUDI",
    year: "2019 - 2020",
    score: "73.8%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-950 px-6 text-white">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-4xl font-bold  text-cyan-400  mb-10">
          Education
        </h2>

        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-blue-500/20 transition duration-500"
            >
              <h3 className="text-xl font-semibold">{item.degree}</h3>
              <p className="text-gray-300 mt-2">{item.institution}</p>

              <div className="flex justify-between mt-4 text-gray-400 text-sm">
                <span>{item.year}</span>
                <span className="font-bold  text-cyan-400">{item.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}