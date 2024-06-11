import React from "react";
import Card from "../../shared/card/Card";

function Experience() {
  return (
    <div id="experience" className="h-screen flex flex-col gap-10">
      {" "}
      <h2 className="text-4xl bold text-center uppercase text-red-500 fredericka-the-great-regular">
        Work Experience
      </h2>
      <div className=" flex  justify-center gap-3">
        <Card
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
          position="Tranee Software Engineer"
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
