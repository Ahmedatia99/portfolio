import Landing from "../components/Landing";
import Script from "../components/Script";
import Projects from "../components/Projects";
import Exper from "../components/Exper";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Skills from "./Skills";

export const Home = () => (
  <>
    <div className=" order-1 over flex flex-col items-center justify-center w-full h-screen font-mono relative">
      <Nav />
      <Landing />
    </div>
    <Script />
    <Exper />
    <Projects />
    <Skills />
    <Footer />
  </>
);
