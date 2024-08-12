import React from "react";
// import { FaWhatsapp, FaBehance, FaDribbble, FaLinkedin } from "react-icons/fa";

function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:ashanrajapaksha954@gmail.com";
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col justify-between bg-black text-white pt-20"
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Find me on
        </h2>
        <div
          className="flex flex-col space-y-4 mb-12"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <a
            href="https://www.linkedin.com/in/ashan-rajapaksha-11931316b/"
            target="_blank"
            className="hover:text-gray-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ashangrajapaksha"
            target="_blank"
            className="hover:text-gray-300"
          >
            Git Hub
          </a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3
            className="text-xl mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Let's work together
          </h3>
          <h1
            className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            SAY HI!
          </h1>
          <button
            onClick={handleEmailClick}
            className="text-xl hover:underline"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            ashanrajapaksha954@gmail.com
          </button>
          <p
            className="text-xl hover:underline"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            +94 76 647 5044
          </p>
        </div>
      </div>
      <footer className="w-full p-4 border-t border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span>ASHAN RAJAPAKSHA.</span>
          </div>
          <p className="text-sm">Copy Right | © {getCurrentYear()}</p>
          <button className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center">
            ↑
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
