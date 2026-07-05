const certifications = [
  {
    title: "Junior English Typing - First Class and Distinction",
    provider: "Government of Tamil Nadu Department of Technical Education",
    year: "2024",
  },
  {
    title: "Python Programming (Workshop)",
    provider: "ACGCET",
    year: "2023 - 1 Day",
  },
  {
    title: "Full Stack and Web Development Internship",
    provider: "NSIC",
    year: "2025 - 1 Week",
  },
  {
    title:
      "Electronic Systems Design: Hands-on Circuits and PCB Design with CAD Software",
    provider: "NPTEL",
    year: "2025 - 12 Weeks",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 text-center sm:text-left mb-8 md:mb-10">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800 p-4 sm:p-6 rounded-xl shadow-md hover:scale-105 hover:bg-slate-700 transition duration-300"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed">
                {cert.title}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-3">
                <span className="font-semibold text-white">Provider:</span>{" "}
                {cert.provider}
              </p>

              <p className="text-gray-400 text-sm sm:text-base mt-2">
                <span className="font-semibold text-cyan-400">Year:</span>{" "}
                {cert.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}