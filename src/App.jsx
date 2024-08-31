import About from "./components/About"
import Cards from "./components/Cards"
import Eyes from "./components/Eyes"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import LandingPage from "./components/LandingPage"
import Marque from "./components/Marque"
import NavBar from "./components/NavBar"
import LocomotiveScroll from 'locomotive-scroll';
import Reviews from "./components/Reviews"
import ReadyProject from "./components/ReadyProject"
import WorkLanding from "./components/work/WorkLanding"
import WorkPurpose from "./components/work/WorkPurpose"
import WorkMarquee from "./components/work/WorkMarquee"



function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white overflow-hidden">
      <NavBar />
      {/* <LandingPage /> */}
      {/* <Marque /> */}
      {/* <About /> */}
      {/* <Eyes /> */}
      {/* <Feature /> */}
      {/* <Reviews/> */}
      {/* <Cards /> */}
      {/* <ReadyProject/> */}
      {/* <Footer /> */}

      {/* Work Page */}
      <WorkLanding/>
      <WorkPurpose/>
      <WorkMarquee/>
      <ReadyProject/>
      <Footer />
    </div>
  )
}

export default App
