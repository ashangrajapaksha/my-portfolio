import React from "react";
import Card from "../../shared/card/Card";

function Experience() {
  return (
    <div
      id="experience"
      className="min-h-screen relative flex flex-col gap-10 bg-gradient-to-b from-black to-purple-900 py-13 overflow-hidden"
    >
      <h2
        className="text-6xl font-bold text-white mb-8 text-center uppercase text-white relative z-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Work Experience
      </h2>
      <div
        className="flex flex-wrap justify-center gap-6 px-4 relative z-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Card
          data-aos="fade-left"
          company="Revox (pvt)Ltd"
          position="Software Engineer"
          duration="2021 May - Present"
          experience={[
            "Skilled in creating user-friendly interfaces for websites using Angular and React.",
            "Proficient in using Node.js to build strong backend systems.",
            "Proficient in using Node.js to build strong backend systems.",
            "Entry-level proficiency in PHP with a focus on Laravel, contributing to back-end processes.",
            "Worked with Agile methodology in development.",
            "Consulting and supervising intern",
          ]}
        />
        <Card
          company="Info Nexus"
          position="Trainee Software Engineer"
          duration="2021 May - Present"
          experience={[
            "Developed proficiency in Angular and Ionic for mobile app and web development during training.",
            "Applied skills to contribute to dynamic and responsive mobile applications",
            "Gained valuable experience in the supply chain management domain.",
          ]}
        />
      </div>
    </div>
  );
}

export default Experience;
