import { motion } from "framer-motion";
import {
  Monitor,
  Laptop,
  Coffee,
  Headphones,
  BookOpen,
  MousePointer2,
} from "lucide-react";

export default function AnimatedDesk() {
  const floating = {
    animate: {
      y: [0, -6, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="relative flex items-center justify-center w-full h-[420px]">

      {/* Background Glow */}
      <div
        className="
          absolute
          w-72
          h-72
          rounded-full
          bg-gray-200/60
          dark:bg-white/5
          blur-3xl
        "
      />

      {/* Desk */}
      <div
        className="
          absolute
          bottom-10
          w-[340px]
          h-3
          rounded-full
          bg-gray-300
          dark:bg-gray-700
        "
      />

      {/* Monitor */}
     <motion.div
  {...floating}
  className="absolute top-[125px]"
>
  <div
    className="
      w-40
      h-24
      rounded-xl
      bg-slate-900
      shadow-xl
      border
      border-gray-700
      overflow-hidden
    "
  >
    {/* Fake code */}
    <div className="p-3 space-y-2">
      <div className="h-2 rounded bg-blue-500 w-20"></div>
      <div className="h-2 rounded bg-green-500 w-24"></div>
      <div className="h-2 rounded bg-pink-500 w-16"></div>
      <div className="h-2 rounded bg-yellow-500 w-28"></div>
    </div>
  </div>

  {/* Stand */}
  <div className="w-2 h-10 bg-gray-500 mx-auto rounded-full" />

  {/* Base */}
  <div className="w-20 h-2 bg-gray-600 rounded-full mx-auto" />
</motion.div>

      {/* Laptop */}
      <motion.div
        {...floating}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-20"
      >
        <Laptop
          size={58}
         className="text-black dark:text-white transition-colors duration-300"
          strokeWidth={1.7}
        />
      </motion.div>

      {/* Coffee */}
      <motion.div
        animate={{
          y: [0, -4, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-16"
      >
        <Coffee
          size={34}
        className="text-black dark:text-white transition-colors duration-300"
          strokeWidth={1.8}
        />
      </motion.div>

      {/* Headphones */}
      <motion.div
        animate={{
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-28"
      >
        <Headphones
          size={34}
         className="text-black dark:text-white transition-colors duration-300"
        />
      </motion.div>

      {/* Book */}
      <motion.div
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute bottom-12 right-28"
      >
        <BookOpen
          size={30}
         className="text-black dark:text-white transition-colors duration-300"
        />
      </motion.div>

      {/* Mouse */}
      <motion.div
        animate={{
          x: [0, 4, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-12 left-44"
      >
        <MousePointer2
          size={22}
          className="text-gray-500 dark:text-gray-400"
        />
      </motion.div>

      {/* Decorative Floating Circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="
            absolute
            rounded-full
            bg-black/10
            dark:bg-white/10
          "
          style={{
            width: 10 + i * 3,
            height: 10 + i * 3,
            left: `${10 + i * 14}%`,
            top: `${12 + (i % 3) * 18}%`,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}