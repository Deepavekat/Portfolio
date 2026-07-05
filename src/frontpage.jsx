import myphoto from './assets/image.jpg'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-900"
    >
     
       <div className="px-6 mx-40"><img
          src={myphoto}
          alt="Profile"
          className="w-90 h-100 rounded-2xl border-3 border-cyan-400  hover:scale-105  transition duration-500"
        /></div> 

         <div className="px-6 mx-10 text-center "> 
          <h1 className="text-3xl font-bold ">
           I'm <span className="text-cyan-400">DEEPA V</span>
        </h1>

        <p className=" text-5xl text-gray-400 mt-6 max-w-xl mx-auto">
          Frontend Developer 
        </p>
           {/* Social Icons */}
            <div className=" px-6 mx-20 flex  items-center gap-4 mt-10">
              <a
                href="https://deepavenkat093@gmail.com"
                className="bg-blue-300  p-4 rounded-lg shadow hover:scale-110 transition duration-300"
              >
                <FaEnvelope size={22} />
              </a>

              <a
                href="https://github.com/Deepavekat"
                className="bg-blue-300 p-4 rounded-lg shadow hover:scale-110 transition duration-300"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/deepa-venkat-3585522a7?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                className="bg-blue-300  p-4 rounded-lg shadow hover:scale-110 duration-300"
              >
                <FaLinkedin size={22} />
              </a>

            </div>
       
        </div>
       
  

      
    </section>
  );
}