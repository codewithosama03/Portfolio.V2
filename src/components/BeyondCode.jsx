import { motion } from "framer-motion";

import {
  BrainCircuit,
  Bot,
 Palette,
  Sparkles,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";

import Reveal from "./Reveal";
import AnimatedDesk from "./AnimatedDesk";

const items = [
  {
    icon: BrainCircuit,
    title: "Advanced MERN Architecture",
    desc: "Building scalable full-stack applications with clean architecture and reusable code.",
  },
  {
    icon: Bot,
    title: "AI-powered Applications",
    desc: "Integrating modern AI capabilities into real-world web applications.",
  },
  {
     icon: Palette,
    title: "UI / UX Design",
    desc: "Exploring Figma and improving user-centered interface design.",
  },
  {
    icon: Sparkles,
    title: "Modern Web Animations",
    desc: "Learning Framer Motion, GSAP, and polished UI interactions.",
  },
  {
    icon: LayoutDashboard,
    title: "Scalable Frontend Development",
    desc: "Creating maintainable React applications with performance in mind.",
  },
];

export default function BeyondCode() {
  return (
    <section
      id="beyond"
      className="py-28 px-4 sm:px-6"
    >
      <Reveal>

        <div className="max-w-6xl w-[75%] mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <AnimatedDesk />

          {/* RIGHT */}

          <div>

            <span
               className="
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
text-sm
bg-gray-100
text-gray-700
dark:bg-[#1b2026]
dark:text-gray-300
border
border-gray-200
dark:border-gray-700
"
            >
              Beyond the Code
            </span>

            <h2 className="text-4xl font-bold mt-6 text-slate-900 dark:text-white">
              Currently Exploring
            </h2>

            <p className="mt-5 text-gray-600 dark:text-gray-400 leading-8">
              Technology evolves every day, and so do I.
              Beyond building production-ready applications,
              I'm continuously exploring modern tools,
              better architecture, and new ways to create
              faster, more intuitive web experiences.
            </p>

            <div className="mt-10 space-y-5">

              {items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.12,
                      duration: 0.5,
                    }}
                    className="
                      flex
                      gap-4
                      p-4
                      rounded-2xl
                      border
                      border-gray-200
                      dark:border-gray-700
                      bg-gray-50
                      dark:bg-[#181d22]
                      hover:shadow-lg
                      dark:hover:shadow-black/20
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >
                    <div
                      className="
                        h-12
                        w-12
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        bg-black
                        dark:bg-white
                        text-white
                        dark:text-black
                        flex-shrink-0
                      "
                    >
                      <Icon size={22} />
                    </div>

                    <div>

                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>

                      <p className="text-sm mt-1 text-gray-600 dark:text-gray-400 leading-6">
                        {item.desc}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>

            <div
              className="
                mt-10
                flex
                items-center
                gap-2
                text-sm
                text-gray-600
                dark:text-gray-400
              "
            >
              <ArrowRight
  size={18}
  className="text-gray-600 dark:text-gray-400"
/>

<span className="text-gray-700 dark:text-gray-300">
  Always learning. Always building. Always improving.
</span>
            </div>

          </div>

        </div>

      </Reveal>
    </section>
  );
}