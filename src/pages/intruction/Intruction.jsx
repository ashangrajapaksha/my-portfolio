import React from "react";

function Introduction() {
  return (
    <div
      id="home"
      className="flex items-center justify-center h-screen relative"
    >
      <div className="dot-background absolute inset-0"></div>
      <div
        className="z-10 text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Adjusting font size for mobile screens */}
        <span className="text-2xl sm:text-4xl text-black block capitalize mb-4">
          Hello, I am
        </span>
        <span className="text-5xl sm:text-8xl text-black block capitalize font-bold mb-6">
          Ashan Rajapaksha
        </span>
        <span className="text-lg sm:text-2xl text-slate-500 block capitalize mb-6">
          Software Engineer | Full Stack Developer
        </span>
        <span className="block text-white mb-8"></span>

        <a
          href="/ashan_rajapaksha.pdf"
          download
          target="_blank"
          className="px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform transition hover:scale-105 cursor-pointer"
        >
          Download Resume <i className="fa-solid fa-download"></i>
        </a>
      </div>

      {/* SVG Wave Section */}
    </div>
  );
}

export default Introduction;
