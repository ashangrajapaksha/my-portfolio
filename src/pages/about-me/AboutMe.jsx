import React from "react";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
</style>;

function AboutMe() {
  return (
    <div
      id="home"
      className="h-screen flex flex-col justify-between align-middle"
    >
      <div className="flex  gap-4 justify-center">
        <div>
          <img src="../../assets/img.png" alt="Description of image" />
        </div>
        <div>
          <div className="max-w-lg p-6 bg-white">
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-xl  righteous-regular">HI !</span>
                <br />
                <span className="text-xl  righteous-regular">
                  I am Ashan Rajapaksha,
                </span>
                <br />
              </div>
              <span className="text-lg roboto-regular">
                As a person who always learn from every experience. I always
                seek new challenges to explore and develop myself up to a better
                state than I was. My curiosity , analytical mindset , open
                minded attitude and my inter- personal skill always help me to
                blend in, learn fast and adopt to new domain easily.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
