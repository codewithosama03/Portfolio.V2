import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects, projects2 } from "../data/project";
import UIProjectCard from "./UIProjectCard";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter(p => p.category === "featured");
  const uiProjects = projects.filter(p => p.category === "ui");

  return (
    /* 🔥 REDUCED SECTION HEIGHT (py-16 instead of py-20) */
    <section id="projects" className="py-16 px-4 sm:px-6">

      {/*  75% WIDTH SYSTEM APPLIED HERE */}
      <div className="max-w-6xl mx-auto w-[75%]">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100">
          Projects
        </h2>

        {/* Featured */}
        <h3 className="text-lg md:text-xl font-semibold mb-5 text-slate-800 dark:text-gray-300">
          Featured
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>

        {/* UI Projects */}
        <h3 className="text-lg md:text-xl font-semibold mb-5 text-slate-800 dark:text-gray-300">
          UI / UX Projects
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8">
          {uiProjects.map((p, i) => (
            <UIProjectCard key={i} project={p} />
          ))}
        </div>

        {/* Button */}
        <div className="mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="
              px-6 py-2 rounded-lg border 
              border-gray-400 dark:border-gray-500
              text-slate-900 dark:text-white
              
              hover:bg-black hover:text-white
              dark:hover:bg-white dark:hover:text-black
              
              transition duration-300
            "
          >
            {showAll ? "Hide Projects" : "View All Projects"}
          </button>
        </div>

        {/* All Projects */}
        {showAll && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {projects2.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}