import { ExternalLink  } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-100 dark:bg-[#1a1f22] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition duration-300">

      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-contain"
      />

      {/* Content */}
      <div className="p-4">

        {/* Title + Status */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
            {project.title}
          </h3>
          <span className="text-xs text-gray-500">
            {project.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 text-sm">

          <a
            href={project.live}
            target="_blank"
            className="flex items-center gap-1 hover:text-black dark:hover:text-white"
          >
            Live <ExternalLink size={14} />
          </a>

          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-1 hover:text-black dark:hover:text-white"
          >
            GitHub 
          </a>

        </div>

      </div>
    </div>
  );
}