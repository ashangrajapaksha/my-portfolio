import React, { useState, useEffect } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link as ScrollLink, scrollSpy, scroller } from "react-scroll";

function Nav() {
  const links = [
    { name: "Home", link: "home" },
    { name: "Experience", link: "experience" },
    { name: "Project", link: "project" },
    { name: "Education", link: "education" },
    { name: "Contact Me", link: "contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition === 0) {
        setActiveNavItem(0);
        return;
      }

      links.forEach((link, index) => {
        const element = document.getElementById(link.link);

        if (element) {
          const elementTop = element.offsetTop - 110;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveNavItem(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [links]);

  const handleSetActive = (index) => {
    setActiveNavItem(index);
  };

  return (
    <div className="w-full fixed top-0 left-0 nav-wrap z-50">
      <div className="glassmorphism md:px-10 md:py-4 py-4 px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Logo</h1>
        {/* Mobile Hamburger Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-12 glassmorphism" : "top-[-490px]"
          } md:top-auto md:relative`}
        >
          {links.map((link, index) => (
            <li key={index} className="md:ml-8 my-6 md:my-0">
              <ScrollLink
                to={link.link}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive={() => handleSetActive(index)}
                onClick={() => setIsOpen(false)}
                className={`hover:text-black relative ${
                  activeNavItem === index ? "border-b-2 border-red-500" : ""
                }`}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
