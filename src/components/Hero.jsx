export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
      
      {/* 75% WIDTH */}
      <div className="max-w-6xl w-[75%] mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* LEFT - IMAGE */}
        <div className="flex justify-center">
          
          <div className="relative w-[250px] h-[250px] md:w-[360px] md:h-[360px]">

            <div className="w-full h-full overflow-hidden animate-blob bg-gray-800 shadow-lg shadow-gray-900/50">
              <img
                src="/img-5.jpg"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>

        {/* RIGHT - TEXT */}
        <div className="text-center md:text-left">
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white">
            OSAMA PATHAN
          </h1>

          {/*  ROLE */}
          <h3 className="text-lg md:text-2xl mt-2 text-gray-700 dark:text-gray-300">
            MERN Stack Developer
          </h3>

          {/*  CONTENT */}
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed">
            I build scalable, full-stack web applications and Focused on clean architecture, performance, and intuitive user experiences, I turn ideas 
            into production-ready solutions.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 justify-center md:justify-start flex-wrap">
            
            {/* rESUME LINK */}
            <a
              href="/osama-resume-2026.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                px-6 py-3 rounded-lg border 
                border-gray-400 dark:border-gray-500
                text-slate-900 dark:text-white
                
                hover:bg-black hover:text-white 
                dark:hover:bg-white dark:hover:text-black
                
                transition duration-300
              "
            >
              Download Resume
            </a>

            {/* VIEW PROJECTS */}
            <a
              href="#projects"
              className="
                px-6 py-3 rounded-lg 
                bg-black text-white 
                dark:bg-white dark:text-black
                
                hover:bg-gray-800 
                dark:hover:bg-gray-200
                
                transition duration-300
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