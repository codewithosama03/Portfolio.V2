import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
];

export default function About() {
  return (
    <section id="about" className="pt-16 pb-16 px-4 sm:px-6">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100 text-center md:text-left">
          About Me
        </h2>

        {/* Main Box */}
        <div className="bg-gray-100 dark:bg-[#1a1f22] rounded-2xl p-6 md:p-10 shadow-sm border border-gray-200 dark:border-gray-700">

          {/* About Text */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg space-y-4">
            
           I am a MERN Stack Developer with a strong foundation in building modern, responsive, and scalable web applications. My expertise includes MongoDB, Express.js, React, and Node.js, along with HTML, CSS, JavaScript, and Tailwind CSS. I focus on writing clean, maintainable code and delivering seamless, user-focused experiences across the full stack.

            <br /><br />

       I have developed full-stack applications with end-to-end functionality, handling everything from intuitive frontend interfaces to efficient backend systems and database management. I continuously refine my skills by building real-world projects, exploring modern development practices, and improving performance, scalability, and overall application architecture.

          </p>

          {/* Skills Heading */}
          <h3 className="text-lg font-semibold mt-8 mb-4 text-slate-800 dark:text-gray-200">
            Languages & Tools
          </h3>

          {/* Skills */}
          <div className="flex flex-wrap gap-5">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition duration-300 cursor-pointer hover:-translate-y-1"
              >
                
                <div className="text-2xl mb-1">
                  {skill.icon}
                </div>

                <p className="text-xs">{skill.name}</p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}