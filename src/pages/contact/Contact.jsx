import React from "react";
import { MdAddCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";

function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const handleCallClick = () => {
    window.location.href = "tel:+94766475044";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:ashanrajapaksha954@gmail.com";
  };

  const handleGithubClick = () => {
    window.open("https://github.com/ashangrajapaksha", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/in/ashan-rajapaksha-11931316b/",
      "_blank"
    );
  };

  const handleFacebookClick = () => {
    window.open("https://web.facebook.com/ashan.peellalage.9/", "_blank");
  };

  return (
    <div
      id="contact"
      className="h-screen flex flex-col justify-between relative"
    >
      <div>
        <div>
          <h2 className="text-4xl uppercase text-center"> Contact Me</h2>
          <div className="flex justify-center mt-10">
            <div className="flex justify-between gap-10">
              <div className="flex flex-col gap-1 items-center">
                <span className="text-center" onClick={handleCallClick}>
                  <MdAddCall className="w-16 h-16 cursor-pointer" />
                </span>
                <span className="text-center">+94 766475044</span>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <span className="text-center" onClick={handleEmailClick}>
                  <MdOutlineEmail className="w-16 h-16 cursor-pointer" />
                </span>
                <span className="text-center">
                  ashanrajapaksha954@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-4xl uppercase text-center"> Find Me On</h2>
          <div className="flex justify-center gap-10 mt-10">
            <div className="flex flex-col gap-1 items-center">
              <span className="text-center" onClick={handleGithubClick}>
                <FaGithub className="w-16 h-16" />
              </span>
              <span className="text-center">ashangrajapaksha</span>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <span className="text-center" onClick={handleLinkedinClick}>
                <CiLinkedin className="w-16 h-16" />
              </span>
              <span className="text-center">Ashan Rajapaksha</span>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <span className="text-center" onClick={handleFacebookClick}>
                <FaFacebook className="w-16 h-16" />
              </span>
              <span className="text-center">Ashan Rajapaksha</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center mt-10 absolute bottom-20 w-full">
        <p>© {getCurrentYear()}, ASHAN RAJAPAKSHA. ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  );
}

export default Contact;
