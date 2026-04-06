import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../hooks/useTheme";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-[#0f1115]/80 backdrop-blur-md transition-colors duration-300">
      
      {/* 75% WIDTH CONTAINER */}
      <div className="max-w-6xl mx-auto w-[75%]">

        {/*  FLEX ROW */}
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <h1 className="text-slate-900 dark:text-white text-lg md:text-xl font-bold">
            CodeWithOsama03
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-700 dark:text-gray-300">
            <a href="#" className="hover:text-black dark:hover:text-white transition">Home</a>
            <a href="#about" className="hover:text-black dark:hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-black dark:hover:text-white transition">Projects</a>
            <a href="#footer" className="hover:text-black dark:hover:text-white transition">Contact</a>
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-3">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              {theme === "dark" ? (
                <FiSun className="text-lg text-yellow-400" />
              ) : (
                <FiMoon className="text-lg text-gray-700" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-900 dark:text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>

          </div>
        </div>

        {/* 75% WIDTH BORDER*/}
        <div className="border-b border-gray-200 dark:border-gray-800"></div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-[#111] w-[75%] mx-auto pb-4 flex flex-col gap-4 text-gray-700 dark:text-gray-300">
          <a href="#" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#footer" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}