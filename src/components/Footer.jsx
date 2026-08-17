import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="
        pt-24
        pb-10
        bg-white
        dark:bg-[#0f1115]
        transition-colors
        duration-500
      "
    >
      <div className="max-w-6xl mx-auto w-[75%]">

        {/* Top */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Get in Touch
            </h3>

            <a
              href="mailto:osamapathan03@gmail.com"
              className="
                text-gray-600
                dark:text-gray-400
                hover:text-black
                dark:hover:text-white
                transition-colors
                duration-300
              "
            >
              osamapathan03@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Follow My Journey
            </h3>

            <a
              href="https://www.instagram.com/code_with_osama03/"
              target="_blank"
              rel="noreferrer"
              className="
                text-gray-600
                dark:text-gray-400
                hover:text-black
                dark:hover:text-white
                transition-colors
                duration-300
              "
            >
              @code_with_osama03
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Location
            </h3>

            <p className="text-gray-600 dark:text-gray-400">
              New Delhi, India
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div
          className="
            border-t
            border-gray-200
            dark:border-gray-800
            pt-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >

          <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Osama Pathan. All rights reserved.
          </p>

          <div className="flex items-center gap-3">

            {[
              {
                icon: <FaGithub size={17} />,
                link: "https://github.com/codewithosama03",
              },
              {
                icon: <FaLinkedin size={17} />,
                link: "https://www.linkedin.com/in/osama-pathan-351106375/",
              },
              {
                icon: <FaInstagram size={17} />,
                link: "https://www.instagram.com/code_with_osama03/",
              },
              {
                icon: <FaTwitter size={17} />,
                link: "https://x.com/osamapathan03",
              },
              {
                icon: <FaYoutube size={17} />,
                link: "https://www.youtube.com/@Allaboutfifa03",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="
                  w-11
                  h-11
                  rounded-xl
                  border
                  border-gray-200
                  dark:border-gray-700
                  bg-gray-50
                  dark:bg-[#181d22]
                  text-gray-700
                  dark:text-gray-300
                  flex
                  items-center
                  justify-center
                  hover:-translate-y-1
                  hover:shadow-lg
                  dark:hover:shadow-black/30
                  hover:border-black
                  dark:hover:border-white
                  hover:text-black
                  dark:hover:text-white
                  transition-all
                  duration-300
                "
              >
                {social.icon}
              </a>
            ))}

          </div>

        </div>

      </div>
    </footer>
  );
}