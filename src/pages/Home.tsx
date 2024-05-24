import Landing from "../components/atoms/info/Landing";
import Script from "../components/Script";
import Projects from "../components/projects/Projects";
import Exper from "../components/Exper";
import Footer from "../components/footer/Footer";
import Nav from "../components/navigation/Nav";

export const Home = () => (
  <>
    <div className=" order-1 over flex flex-col items-center justify-center w-full h-screen font-helvetica relative">
      <Nav />
      <Landing />
    </div>
    <Script />
    <Exper />
    <Projects />
    {/* <Footer /> */}
  </>
);
