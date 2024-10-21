import React from "react";

function Education() {
  const educationData = [
    {
      collage: "",
      institution: "University of Colombo School of Computing",
      degree: "Bachelor of Science in Computer Science",
      year: "2018 - 2021",
      result: "Year of Graduation 2021",
    },
    {
      collage: "Embilipitiya Maha Vidyalaya",
      institution: "G.C.E Advanced Level",
      degree: "Physical Science Stream (2016)",
      year: "2016",
      result: " Results : A B B",
    },
    {
      collage: "Kella Maha Vidyalaya",
      institution: "G.C.E Ordinary Level",
      degree: "G.C.E. O/L (2011)",
      year: "2011",
      result: " Results : A - 4 , B - 2 , C - 3",
    },
  ];

  return (
    <div
      className="h-auto pt-24 sm:pt-48 relative bg-gradient-to-br from-pink-600 via-orange-400 to-red-500 flex justify-center"
      id="education"
    >
      <div className="container mx-auto flex flex-col gap-10 pb-40 sm:pb-80">
        {/* Heading with responsive font size */}
        <h2
          className="text-3xl sm:text-6xl font-bold text-white text-center uppercase z-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Education History
        </h2>

        <div
          className="flex items-center justify-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col sm:flex-row gap-10 flex-wrap justify-center">
            {educationData.map((education, index) => (
              <div
                key={index}
                className="max-w-xs sm:max-w-md mx-auto rounded-xl shadow-md overflow-hidden bg-white w-full sm:w-96"
              >
                <div className="p-6 sm:p-8">
                  {/* College or Institution */}
                  {education.collage && (
                    <div className="uppercase tracking-wide text-center text-lg text-gray-500 font-semibold">
                      {education.collage}
                    </div>
                  )}
                  <div className="uppercase tracking-wide text-center text-lg text-gray-500 font-semibold">
                    {education.institution}
                  </div>
                  <div className="uppercase tracking-wide text-sm text-center text-gray-500 font-semibold">
                    ({education.year})
                  </div>
                  {/* Degree and Result */}
                  <p className="mt-2 text-md text-center text-gray-500">
                    {education.degree}
                  </p>
                  <p className="mt-2 text-md text-center text-gray-500">
                    {education.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
          transform="rotate(180)"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 70C840 80 960 100 1080 110C1200 120 1320 120 1380 120H1440V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
}

export default Education;
