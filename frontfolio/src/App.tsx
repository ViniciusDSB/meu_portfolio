import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";

import NavBar from './other_components/NavBar'

import ProjectsAbstract from './views/ProjectsAbstract'
import ProjectsPage from './views/ProjectsPage'
import Tools from './views/Tools'
import Resume from './views/Resume'

import './App.css'

// Scrolls to the matching section id when the URL has a #hash, e.g.
// /projects#project-0 from the "See more" link on the featured card.
function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.slice(1);
    const timeout = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
    return () => clearTimeout(timeout);
  }, [hash, pathname]);

  return null;
}

function App() {

  return (
    <>
      <ScrollToHash />
      <NavBar />
      <Routes>
        <Route path="/" element={<ProjectsAbstract />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  )
}

export default App
