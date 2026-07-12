import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./frontpage";
import Footer from "./Footer";
import Alldetails from "./Alldetails";

function App() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-slate-950 text-white">
      <Navbar />

      <Hero onShowDetails={() => setShowDetails(true)} />

      {showDetails && <Alldetails />}

      <Footer />
    </div>
  );
}

export default App;