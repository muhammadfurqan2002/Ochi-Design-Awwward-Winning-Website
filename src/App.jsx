/* eslint-disable no-unused-vars */
import About from "./components/About";
import Cards from "./components/Cards";
import Eyes from "./components/Eyes";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Marque from "./components/Marque";
import NavBar from "./components/NavBar";
import LocomotiveScroll from "locomotive-scroll";
import Reviews from "./components/Reviews";
import ReadyProject from "./components/ReadyProject";
import WorkLanding from "./components/work/WorkLanding";
import WorkPurpose from "./components/work/WorkPurpose";
import WorkMarquee from "./components/work/WorkMarquee";
import SingleEye from "./components/SingleEye";
import ServiceLanding from "./components/services/ServiceLanding";
import Capabilities from "./components/services/Capabilities";
import ClientCount from "./components/services/ClientCount.jsx";
import Recommend from "./components/services/Recommend.jsx";
import AboutOchi from "./components/about/AboutOchi.jsx";
import Slider from "./components/about/Slider.jsx";
import AboutMarque from "./components/about/AboutMarque.jsx";
import Principle from "./components/about/Principle.jsx";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white overflow-hidden">
      {/* Services","Our Work","About Us","Insights","Contact" */}
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Services" element={<ServiceLanding />} />
        <Route path="/Our Work" element={<WorkLanding />} />
        <Route path="/About Us" element={<AboutOchi />} />
      </Routes>
      {/* Work Page */}

      {/* Services */}

      {/* About */}

      <Footer />
    </div>
  );
}

export default App;
