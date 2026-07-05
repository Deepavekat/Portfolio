import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto ">

        <h2 className="text-4xl font-bold  text-cyan-400 mb-12">
          Contact Me
        </h2>

        <div className=" gap-10">

          {/* Contact Information */}
          <div className="bg-slate-800 p-8 rounded-xl  mx-80 shadow-lg">

            

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-blue-300  text-xl" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-400">+91 86086 12728 </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-300  text-xl" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400">
                    deepavenkat093@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-300  text-xl" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-400">
                    No.4,Periyar Street Anna Nagar,Karaikudi, Sivagangai Dist, Tamil Nadu, India
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