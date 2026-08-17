import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        border border-gray-200 dark:border-gray-700
        bg-gray-100 dark:bg-[#1a1f22]
        shadow-sm
        hover:shadow-xl
        dark:hover:shadow-black/30
        hover:-translate-y-1
        transition-all duration-300
      "
    >
      {/* Image */}
      <div className="bg-gray-200 dark:bg-[#11161b] p-5">
        <div className="flex items-center justify-center h-52 overflow-hidden rounded-xl">
          <img
            src={project.image}
            alt={project.title}
            className="
              max-h-full
             max-w-full
             object-contain
             transition-all
             duration-700
             ease-[cubic-bezier(0.22,1,0.36,1)]
             group-hover:scale-[1.03]
             "
            
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Title */}
        <div className="flex justify-between items-start gap-3 mb-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
            {project.title}
          </h3>

          {project.status && (
            <span
              className="
                whitespace-nowrap
                text-[11px]
                font-medium
                px-2 py-1
                rounded-full
                bg-gray-200
                dark:bg-gray-700
                text-gray-600
                dark:text-gray-300
              "
            >
              {project.status}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm leading-6 text-gray-600 dark:text-gray-400 mb-5 line-clamp-4">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="
                rounded-full
                px-3 py-1
                text-xs
                font-medium
                bg-white
                dark:bg-[#242b31]
                border border-gray-200 dark:border-gray-600
                text-gray-700 dark:text-gray-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-5 text-sm font-medium">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
             flex items-center gap-1
             text-gray-700
             dark:text-gray-300
             hover:text-black
             dark:hover:text-white           
             transition-colors duration-300
           "
          >
            Live <ExternalLink size={15} />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
  flex items-center gap-1
  text-gray-700
  dark:text-gray-300
  hover:text-black
  dark:hover:text-white
  transition-colors duration-300
"
          >
            GitHub
          </a>

        </div>

      </div>
    </div>
  );
}