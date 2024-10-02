import React from "react";
import Photo from "../images/photo.jpg";
import Resume from "../images/Sushil-Kumar-(Front-end-Web-Developer).pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Cover = () => {
  return (
    <section className="py-20">
      <div className="container flex flex-col md:flex-row justify-evenly items-center md:space-y-0 md:space-x-10">
        <div className="text-center md:text-left md:ml-10">
          <h2 className="text-3xl font-semibold text-gray-800">Hello,</h2>
          <h2 className="text-5xl font-bold text-c4 mt-2">I'm Sushil.</h2>

          <h3 className="text-2xl md:text-3xl font-semibold italic mt-4">
            A Passionate
            <span className="bg-c2 text-p px-3 py-1 shadow-sh1 rounded-lg ml-3">
              Web Developer
            </span>
          </h3>

          <p className="mt-10 text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            I am a front-end web developer with experience in creating visually
            appealing and user-friendly web solutions that effectively drive
            business results.
          </p>

          <div className="mt-8 flex justify-center md:justify-start items-center space-x-4">
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-c5 text-black px-4 py-2 rounded-full hover:bg-c4 hover:text-white transition duration-250 ease-out"
            >
              <FontAwesomeIcon className="mr-2" icon={faBriefcase} />
              Hire Me
            </a>

            <a
              href="https://www.linkedin.com/in/sushilkumar567895/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="text-2xl text-h hover:text-c4"
                icon={faLinkedin}
              />
            </a>
            <a
              href="https://github.com/SushilKumar567"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="text-2xl text-h hover:text-c4"
                icon={faGithub}
              />
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            src={Photo}
            alt="Sushil Kumar"
            className="mx-auto rounded-full w-40 mb-20 border-4 border-gray-200 shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Cover;
