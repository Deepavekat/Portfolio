

import Navbar from "./Navbar";
import Hero from  './frontpage'
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Certifications from "./Certification";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer"
  /* 
       */


function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
       

    </div>
  );
}

export default App;