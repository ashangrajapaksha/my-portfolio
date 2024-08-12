import React from "react";

function Introduction() {
  return (
    <div
      id="home"
      className=" flex items-center justify-center h-screen relative"
    >
      <div className="dot-background absolute inset-0"></div>
      <div
        className="z-10 text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="text-4xl text-black block capitalize mb-4">
          Hello, I am
        </span>
        <span className="text-8xl text-black block capitalize font-bold mb-6">
          Ashan Rajapaksha
        </span>
        <span className="text-2xl text-slate-500 block capitalize mb-6">
          Software Engineer | Full stack developer
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

      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-black"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Introduction;
