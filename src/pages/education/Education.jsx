import React from "react";

function Education() {
  const educationData = [
    {
      collage: "",
      institution: "University of Colombo school of Computing",
      degree: "Bachelor of Science in Computer Science",
      year: "2018 - 2021",
      result: "Graduated in july 2022",
    },
    {
      collage: "Embilipitiya Maha Vidyalaya",
      institution: "G.C.E Advanced level",
      degree: "Physical Science stream (2016)",
      year: "2014 - 2018",
      result: "A B B",
    },
    // Add more education entries as needed
  ];
  return (
    <div className="h-screen flex justify-center " id="education">
      <div className=" container mx-auto flex flex-col gap-10">
        <h2 className="text-4xl bold text-center uppercase text-red-500">
          Education history
        </h2>
        <div className=" flex items-center justify-center ">
          <div className="flex gap-10 ">
            {educationData.map((education, index) => (
              <div
                key={index}
                className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-xl "
              >
                <div className="md:flex">
                  <div className="p-8">
                    {education.collage != "" && (
                      <div className="uppercase tracking-wide text-sm text-gray-500 font-semibold">
                        {education.collage}
                      </div>
                    )}
                    <div className="uppercase tracking-wide text-sm text-gray-500 font-semibold">
                      {education.institution}
                    </div>
                    <div className="uppercase tracking-wide text-sm text-gray-500 font-semibold">
                      {education.year}
                    </div>

                    <p className="mt-2 text-gray-500">{education.degree}</p>
                    <p className="mt-2 text-gray-500">{education.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
