const education = [
  {
    degree: "Bachelor of Engineering (BE) - Electrical and Electronics Engineering",
    institution:
      "ALAGAPPA CHETTIAR GOVERNMENT COLLEGE OF ENGINEERING AND TECHNOLOGY, KARAIKUDI",
    year: "2022 - 2026",
    score: "CGPA: 7.6950",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution:
      "GOVERNMENT GIRLS HIGHER SECONDARY SCHOOL, KARAIKUDI",
    year: "2021 - 2022",
    score: "83.8%",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution:
      "GOVERNMENT GIRLS HIGHER SECONDARY SCHOOL, KARAIKUDI",
    year: "2019 - 2020",
    score: "73.8%",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 text-center sm:text-left mb-8">
          Education
        </h2>

        <div className="space-y-5 md:space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 transition duration-300"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                {item.degree}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-2 leading-relaxed">
                {item.institution}
              </p>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-4 text-sm sm:text-base">
                <span className="text-gray-400">{item.year}</span>

                <span className="font-bold text-cyan-400">
                  {item.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}