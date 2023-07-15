import React, { useEffect } from "react";
import "./assets/styles/main.css";
import Works from "./components/workspace/Works";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import DefaultLayout from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import Skills from "./pages/skills/Skills";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      {/* ROutes between pages*/}
      <Routes basename="/atia">
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Works />} />
          <Route path="skill" element={<Skills />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
