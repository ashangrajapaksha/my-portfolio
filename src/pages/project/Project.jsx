import React from "react";

function Project() {
  return (
    <div
      id="project"
      className="h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-600 to-orange-400"
    >
      <div className="relative z-10 flex flex-col items-start justify-start h-full p-8 pb-32">
        <h2
          className="text-6xl font-bold text-white mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Services
        </h2>
        <div
          className="bg-purple-900 bg-opacity-50 rounded-xl p-6 w-full max-w-2xl"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-5xl font-bold text-white mb-2">01</h3>
              <h4 className="text-2xl font-semibold">
                <span className="text-purple-300">Graphic</span>{" "}
                <span className="text-pink-400">Design</span>
              </h4>
            </div>
            <div className="bg-black p-4 rounded-lg">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
