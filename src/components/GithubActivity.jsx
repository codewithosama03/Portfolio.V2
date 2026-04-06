import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";

export default function GithubActivity() {
  const [blockSize, setBlockSize] = useState(14);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setBlockSize(10);
      else if (window.innerWidth < 768) setBlockSize(12);
      else setBlockSize(14);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-[75%]">

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100">
          GitHub Activity
        </h2>

        <div className="bg-gray-100 dark:bg-[#1a1f22] p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300">

          <div className="w-full overflow-x-auto">
            <div className="min-w-max flex justify-center">

              <GitHubCalendar
                username="codewithosama03"
                blockSize={blockSize}
                blockMargin={4}
                fontSize={12}
                theme={{
                  light: ["#ebedf0","#c6e48b","#7bc96f","#239a3b","#196127"],
                  dark: ["#161b22","#0e442986","#006d32","#26a641","#39d353"],
                }}
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}