
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 ">

      <div className="max-w-6xl w-[75%] mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* LEFT - IMAGE */}
        <div className="flex justify-center">

          <div className="relative w-[250px] h-[250px] md:w-[360px] md:h-[360px]">

            <div
              className="
                w-full h-full overflow-hidden
                animate-blob
                shadow-xl shadow-gray-400/20
                dark:shadow-black/40
                transition-all duration-500
                hover:scale-[1.02]
              "
            >
              <img
                src="/img-5.jpg"
                alt="profile"
                className="
                  w-full h-full object-cover
                  transition-transform duration-700
                  hover:scale-105
                "
              />
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="text-center md:text-left">

          <h1
            className="
              text-4xl md:text-6xl
              font-extrabold
              tracking-tight
              text-slate-900 dark:text-white
            "
          >
            OSAMA PATHAN
          </h1>

          <h3 className="text-lg md:text-2xl mt-3 text-gray-700 dark:text-gray-300">
            MERN Stack Developer
          </h3>

          <p
            className="
              mt-5
              max-w-lg
              mx-auto md:mx-0
              text-gray-600 dark:text-gray-400
              leading-8
            "
          >
            I build scalable, full-stack web applications focused on clean
            architecture, performance, and intuitive user experiences—turning
            ideas into production-ready solutions.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 justify-center md:justify-start flex-wrap">

            <a
              href="FINAL_RESUME.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                px-6 py-3 rounded-xl
                border border-gray-300 dark:border-gray-600
                text-slate-900 dark:text-white

                hover:bg-black hover:text-white
                dark:hover:bg-white dark:hover:text-black

                hover:-translate-y-1
                active:scale-95
                transition-all duration-300
              "
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="
                px-6 py-3 rounded-xl

                bg-black text-white
                dark:bg-white dark:text-black

                hover:bg-gray-800
                dark:hover:bg-gray-200

                hover:-translate-y-1
                active:scale-95
                shadow-md
                transition-all duration-300
              "
            >
              View Projects
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}