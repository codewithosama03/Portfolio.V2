import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gray-100 dark:bg-[#0f1113] text-gray-600 dark:text-gray-400 py-14 px-4 sm:px-6 transition-colors duration-300 scroll-mt-24"
    >

      <div className="max-w-6xl mx-auto w-[75%]">

        {/* Top */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-3">
              Get in touch
            </h3>
            <a
              href="mailto:osamapathan03@gmail.com"
              className="hover:text-black dark:hover:text-white transition"
            >
              osamapathan03@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-3">
              Follow my journey
            </h3>
            <a
              href="https://www.instagram.com/code_with_osama03/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black dark:hover:text-white transition"
            >
              @code_with_osama03
            </a>
          </div>

          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-3">
              Location
            </h3>
            <p>New Delhi, India</p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Created By Osama Pathan.
          </p>

          {/* REAL SOCIAL LINKS  */}
          <div className="flex gap-3">

            <a
              href="https://github.com/codewithosama03"
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-gray-300 dark:border-gray-700 rounded-full hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition hover:-translate-y-1"
            >
              <FaGithub size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/osama-pathan-351106375/"
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-gray-300 dark:border-gray-700 rounded-full hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition hover:-translate-y-1"
            >
              <FaLinkedin size={16} />
            </a>

            <a
              href="https://www.instagram.com/code_with_osama03/"
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-gray-300 dark:border-gray-700 rounded-full hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition hover:-translate-y-1"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="https://x.com/osamapathan03"
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-gray-300 dark:border-gray-700 rounded-full hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition hover:-translate-y-1"
            >
              <FaTwitter size={16} />
            </a>

            <a
              href="https://www.youtube.com/@Allaboutfifa03"
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-gray-300 dark:border-gray-700 rounded-full hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition hover:-translate-y-1"
            >
              <FaYoutube size={16} />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}