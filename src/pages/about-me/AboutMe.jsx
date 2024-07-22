import React from "react";
import backgroundImage from "../../assets/background.jpg";

function Introduction() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white p-4">
      <div
        className="w-32 h-32 rounded-full overflow-hidden mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 p-1"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-full h-full rounded-full overflow-hidden">
          <img
            src={backgroundImage}
            alt="Description of image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h1
        className="text-4xl font-['Righteous'] mb-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Hi!
      </h1>
      <h2
        className="text-3xl font-['Righteous'] mb-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        I'm Ashan Rajapaksha,
      </h2>
      <p
        className="text-lg font-['Roboto'] max-w-2xl text-center mb-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        As a person who always learns from every experience, I always seek new
        challenges to explore and develop myself to a better state than I was.
        My curiosity, analytical mindset, open-minded attitude and my
        inter-personal skills always help me to blend in, learn fast and adapt
        to new domains easily.
      </p>
      <button
        className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 text-white font-semibold flex items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Connect Now
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
  );
}

export default Introduction;
