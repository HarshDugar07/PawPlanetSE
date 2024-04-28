import "./App.css";
import NavbarTW from "components/NavbarTW";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import AdminDashboard from "./Pages/AdminDashboard";
import Services from "./Pages/Services"
import Adoption from "Pages/Adoption";

function App() {
  return (
    <div className="App">
    
    <NavbarTW/>

    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        {/* <Route path="/adminDashboard" element={<AdminDashboard />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/adoption" element={<Adoption />} />
        {/* <Route path="/vet" element={<Vet />} /> */}
        <Route path="/about" element={<About />} />
    </Routes>


    <Footer />
    
    </div>
  );
}

export default App;
