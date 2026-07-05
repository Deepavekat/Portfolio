import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 text-center sm:text-left mb-10 md:mb-12">
          Contact Me
        </h2>

        <div className="flex justify-center">
          <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 bg-slate-800 p-6 sm:p-8 rounded-xl shadow-lg">

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-blue-300 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-400 break-words">
                    +91 86086 12728
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-blue-300 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-400 break-words">
                    deepavenkat093@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-blue-300 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Address</h4>
                  <p className="text-gray-400 leading-7 break-words">
                    No.4, Periyar Street, Anna Nagar,
                    Karaikudi, Sivagangai District,
                    Tamil Nadu, India.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}