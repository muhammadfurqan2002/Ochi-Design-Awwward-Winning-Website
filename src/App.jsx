import About from "./components/About"
import Cards from "./components/Cards"
import Eyes from "./components/Eyes"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import LandingPage from "./components/LandingPage"
import Marque from "./components/Marque"
import NavBar from "./components/NavBar"
import LocomotiveScroll from 'locomotive-scroll';



function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <NavBar />
      <LandingPage />
      <Marque />
      <About />
      <Eyes />
      <Feature />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
