import "./App.css";
import chatlogo from "../src/assets/chatbotlogo.jpg";
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
    <div className="App relative">
    
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

    <div className="flex flex-col justify-center items-center">
      <div>Zippy</div>
      <img src={chatlogo} alt="chatlogo" className="w-24 h-24 fixed bottom-0 right-0 m-12 hover:scale-110"/>
    </div>
    
    </div>
  );
}

export default App;
