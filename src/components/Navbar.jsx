


import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../hooks/useTheme";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f1115]/80 backdrop-blur-md transition-colors duration-500">
  <div className="max-w-6xl w-[75%] mx-auto border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          {/* <h1 className="text-lg md:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white transition-all duration-300 hover:opacity-80">
            CodeWithOsama03
          </h1> */}
        <h1 className="text-slate-900 dark:text-white text-lg md:text-xl font-bold">
             CodeWithOsama03
           </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700 dark:text-gray-300">
            {[
              ["Home", "#"],
              ["About", "#about"],
              ["Projects", "#projects"],
              ["Contact", "#footer"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="
                  relative
                  transition-all
                  duration-300
                  hover:text-black
                  dark:hover:text-white
                  hover:-translate-y-0.5
                "
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="
                p-2.5
                rounded-xl
                hover:bg-gray-200
                dark:hover:bg-gray-800
                hover:scale-105
                active:scale-95
                transition-all
                duration-300
              "
            >
              {theme === "dark" ? (
                <FiSun className="text-lg text-yellow-400" />
              ) : (
                <FiMoon className="text-lg text-gray-700" />
              )}
            </button>

            {/* Mobile Menu */}
            <button
              className="
                md:hidden
                text-slate-900
                dark:text-white
                transition-all
                duration-300
                hover:scale-110
                active:scale-95
              "
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-500
            ${
              open
                ? "max-h-60 opacity-100 pb-4"
                : "max-h-0 opacity-0 pb-0"
            }
          `}
        >
          <div
            className="
              rounded-2xl
              border
              border-gray-200
              dark:border-gray-700
              bg-white
              dark:bg-[#171b20]
              shadow-lg
              p-4
              flex
              flex-col
              gap-4
              text-gray-700
              dark:text-gray-300
            "
          >
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="transition-all duration-300 hover:text-black dark:hover:text-white"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="transition-all duration-300 hover:text-black dark:hover:text-white"
            >
              About
            </a>

            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="transition-all duration-300 hover:text-black dark:hover:text-white"
            >
              Projects
            </a>

            <a
              href="#footer"
              onClick={() => setOpen(false)}
              className="transition-all duration-300 hover:text-black dark:hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}