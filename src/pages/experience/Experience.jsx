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
          duration="2022 January - Present"
          experience={[
            "Contributed to and Actively Participated in Numerous Projects: Demonstrated versatility in both front-end and back-end development across various projects.",
            "Experience with MERN and MEAN Stacks: Proficient in developing full-stack applications using MongoDB, Express.js, React, Node.js (MERN), and MongoDB, Express.js, Angular, Node.js (MEAN).",
            "Experienced in PHP with a Focus on Laravel: Contributed to both front-end and back-end processes using PHP and Laravel.",
            "Worked with Agile Methodology: Applied Agile principles and practices to development projects for efficient and effective delivery.",
            "Consulting and Supervising Interns: Provided guidance and oversight to interns, ensuring their development and successful contribution to projects.",
          ]}
        />
        <Card
          data-aos="fade-left"
          company="Revox (pvt)Ltd"
          position="Associate Software Engineer"
          duration="2021 May - 2021 Dec"
          experience={[
            "Contributed to the Development of a Comprehensive Platform: Utilized Node.js, Angular, and MongoDB to build and enhance the platform.",
            "Delivered Robust Solutions for Client Needs: Ensured the platform met and exceeded client expectations by providing reliable and effective solutions.",
            "Worked with Agile Methodology: Applied Agile principles and practices to development projects for efficient and effective delivery.",
          ]}
        />
        <Card
          company="Info Nexus"
          position="Trainee Software Engineer"
          duration="2020 Oct - 2021 April"
          experience={[
            "Developed proficiency in Angular and Ionic for mobile app and web development during training.",
            "Applied skills to contribute to dynamic and responsive mobile applications",
            "Gained valuable experience in the supply chain management domain.",
            "Worked with Agile Methodology: Applied Agile principles and practices to development projects for efficient and effective delivery.",
          ]}
        />
      </div>
      {/* <div
        className="flex flex-wrap justify-center gap-6 px-4 relative z-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h3 className="text-2xl font-bold text-white mb-8 text-center uppercase text-white relative z-10">
          Technical Exposure
        </h3>
      </div> */}
    </div>
  );
}

export default Experience;
