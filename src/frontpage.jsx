import myphoto from './assets/image.jpg'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Hero() {
  return (
    <section
      id="home"
     className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-slate-900"
    >
     
       <div className="px-6 mx-6 lg:mx-40 mb-8 lg:mb-0  "><img
          src={myphoto}
          alt="Profile"
          
          className="w-64 sm:w-64 md:w-80 lg:w-96 lg:h-100 h-auto rounded-2xl  border-cyan-400 hover:scale-105 shadow-md hover:shadow-cyan-500/90 transition duration-500"
        /></div> 

         <div className="px-6 mx-4 lg:mx-10 text-center "> 
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
           I'm <span className="text-cyan-400">DEEPA V</span>
        </h1>

        <p className="text-2xl sm:text-3xl md:text-5xl text-gray-400 mt-6 max-w-xl mx-auto">
          Frontend Developer 
        </p>
           {/* Social Icons */}
            <div className="flex justify-center items-center gap-4 mt-8 ">
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