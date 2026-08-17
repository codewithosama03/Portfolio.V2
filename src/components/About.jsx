

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
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
    <section
      id="about"
      className="pt-16 pb-16 px-4 sm:px-6 "
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100 text-center md:text-left">
          About Me
        </h2>

        {/* Card */}
        <div
          className="
            bg-gray-100
            dark:bg-[#1a1f22]
            rounded-3xl
            p-7 md:p-10
            border border-gray-200 dark:border-gray-700
            shadow-sm
            hover:shadow-xl
            dark:hover:shadow-black/20
            transition-all duration-500
          "
        >

          {/* Content */}
          <p className="text-gray-700 dark:text-gray-300 leading-8 text-base md:text-lg">

            I am a <strong>MERN Stack Developer</strong> passionate about building
            modern, scalable, and responsive web applications. My expertise
            includes MongoDB, Express.js, React, Node.js, JavaScript, Tailwind
            CSS, HTML, and CSS, with a strong focus on writing clean,
            maintainable, and performance-oriented code.

            <br /><br />

            I enjoy developing full-stack applications from frontend interfaces
            to backend APIs and database architecture. Through continuous
            hands-on project development, I keep improving my understanding of
            modern web technologies, application scalability, and user-focused
            software design.

          </p>

          {/* Skills */}
          <h3 className="text-xl font-semibold mt-10 mb-6 text-slate-800 dark:text-white">
            Languages & Tools
          </h3>

          <div className="flex flex-wrap gap-6">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="
                  group
                  flex flex-col
                  items-center
                  cursor-pointer
                  transition-all duration-300
                  hover:-translate-y-2
                "
              >

                <div
                  className="
                    text-3xl
                    text-gray-600 dark:text-gray-400
                    group-hover:text-black
                    dark:group-hover:text-white
                    transition-all duration-300
                  "
                >
                  {skill.icon}
                </div>

                <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}