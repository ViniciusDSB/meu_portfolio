
import { useEffect, useState } from "react";
import FeaturedProject from "../other_components/FeaturedProject";
import ProjectCard from "../other_components/ProjectCard";
import Hero from "../other_components/Hero";

import { projects } from "../content_data/Projects_info";

export default function Projects() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(projects[0].id);

  const featured = projects.find((p) => p.id === selectedId) ?? projects[0];
  // Featured project is removed from the carousel so it doesn't show twice
  const carouselProjects = projects.filter((p) => p.id !== selectedId);

  useEffect(() => {
    const onMenuScroll = () => {
      // Reveal the projects menu after a small scroll
      if (window.scrollY > 8) setMenuVisible(true);
      else setMenuVisible(false);
    };
    window.addEventListener("scroll", onMenuScroll, { passive: true });
    return () => window.removeEventListener("scroll", onMenuScroll);
  }, []);

  return (
    <>
      {/* Background hero fixed behind */}
      <div  className={`
        fixed -inset-0 -z-10
        transition-all duration-500
        ${menuVisible ? "blur-md scale-110" : "scale-100"}
      `} >
        <Hero />
      </div>

      {/* Spacer to enable an initial small scroll */}
      <div className="h-screen" />

      {/* Projects menu overlays hero and blurs background */}
      <div
        id="projects-menu"
        className={
          `fixed inset-0 z-10
           transition-transform duration-1000 ease-out 
           border-t border-white/10 
           p-6 lg:p-12
           ${menuVisible ? "translate-y-0" : "translate-y-full"}`
        }
      >
        <div className="w-full h-full flex flex-col lg:flex-row overflow-hidden gap-x-5">
          {/* FEATURED — LEFT */}
          <div
            id="featured_project"
            className="w-full lg:w-[100%] h-full flex items-center justify-center"
          >
            <div className="w-full h-full">
              <FeaturedProject {...featured} />
            </div>
          </div>

          {/* CAROUSEL — RIGHT */}
          <div
            id="projects_carousel"
            className="w-full lg:w-[35%] h-full 
              overflow-auto 
              flex flex-col gap-y-5 items-start"
          >
            {carouselProjects.map((p) => (
              <ProjectCard
                key={p.id}
                id={p.id}
                title={p.title}
                tools={p.tools}
                images={p.images}
                onClick={() => setSelectedId(p.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
