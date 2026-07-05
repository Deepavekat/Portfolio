const certifications = [
  {
    title: " Junior English Typing -First Class and Distinction ",
    provider: "Government of Tamil Nadu Department of Technical Education ",
    year: "2024  ",
  },
  {
    title: "Python Programming (Workshop)",
    provider: "ACGCET",
    year: "2023 - 1 Day",
  },
  {
    title: " Full Stack and Web Development Internship",
    provider: " NSIC",
    year: "2025 - 1 Week",
  },
  {
    title: "Electronic Systems Design: Hands-on Circuits and PCB Design with CAD Software",
    provider: "NPTEL",
    year: "2025 - 12 Week",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-4xl font-bold  text-cyan-400  mb-10">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl shadow-md hover:scale-105 hover:bg-slate-700 transition duration-500"
            >
              <h3 className="text-xl font-semibold">{cert.title}</h3>

              <p className="text-gray-300 mt-2">
                <strong>Provider:</strong> {cert.provider}
              </p>

              <p className="text-gray-400 mt-1">
                <strong>Year:</strong> {cert.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}