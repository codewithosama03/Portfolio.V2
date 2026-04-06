import { ExternalLink } from "lucide-react";

export default function UIProjectCard({ project }) {
  return (
    <div className="group rounded-xl overflow-hidden bg-gray-100 dark:bg-[#1a1f22] border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300">

      {/* Image */}
      <div className="bg-gray-200 dark:bg-[#111] flex items-center justify-center p-2">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full 
            h-auto 
            max-h-40 
            object-contain 
            transition-transform duration-300 
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-4">

        <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
          {project.title}
        </h3>

        <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex gap-4 text-xs font-medium">
          <a
            href={project.live}
            target="_blank"
            className="flex items-center gap-1 hover:text-black dark:hover:text-white transition"
          >
            Live <ExternalLink size={12} />
          </a>

          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-1 hover:text-black dark:hover:text-white transition"
          >
            GitHub
          </a>
        </div>

      </div>
    </div>
  );
}