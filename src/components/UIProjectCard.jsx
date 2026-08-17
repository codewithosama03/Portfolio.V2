import { ExternalLink } from "lucide-react";

export default function UIProjectCard({ project }) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        bg-gray-100 dark:bg-[#1a1f22]
        border border-gray-200 dark:border-gray-700
        shadow-sm
        hover:shadow-xl
        dark:hover:shadow-black/30
        hover:-translate-y-1
        transition-all duration-300
      "
    >
      {/* Image */}
      <div className="bg-gray-200 dark:bg-[#11161b] p-4">
        <div className="flex items-center justify-center h-44 overflow-hidden rounded-xl">
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

        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          {project.title}
        </h3>

        <p className="text-sm leading-6 text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="
                text-xs
                font-medium
                px-3 py-1
                rounded-full
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

          {project.live && project.live !== "#" && (
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
          )}

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

