import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Explore from "./components/Explore";
import GetStarted from "./components/GetStarted";
import WhatsNew from "./components/WhatsNew";
import World from "./components/World";
import Insights from "./components/Insights";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main  className="bg-gray-950 overflow-hidden">
        <Navbar/>
        <Hero/>
      <div className="relative">
        <About/>
        <div className="gradient-03 z-0" />
        <Explore/>
      </div>
      <div className="relative">
        <GetStarted/>
        <div className="gradient-04 z-0" />
        <WhatsNew/>
      </div>
      <World/>
      <div className="relative">
      <Insights/>
        <div className="gradient-04 z-0" />
        <Feedback/>
      </div>
        <Footer/>
    </main>
  );
}
