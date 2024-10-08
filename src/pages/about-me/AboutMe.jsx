import React from "react";
import backgroundImage from "../../assets/background.jpg";

function Introduction() {
  console.log("Dibuger");
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white p-4">
      <div
        className="w-56 h-56 rounded-full overflow-hidden mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 p-1"
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
        {/* As a person who always learns from every experience, I always seek new
        challenges to explore and develop myself to a better state than I was.
        My curiosity, analytical mindset, open-minded attitude and my
        inter-personal skills always help me to blend in, learn fast and adapt
        to new domains easily. */}
        I am an Experienced Software Engineer with a robust background in
        implementing scalable solutions. Proficient in multiple programming
        languages and frameworks, I excel at collaborating with cross-functional
        teams to deliver high-quality software products. I am passionate about
        staying current with emerging technologies and leveraging them to drive
        innovation in software development.
      </p>
    </div>
  );
}

export default Introduction;
