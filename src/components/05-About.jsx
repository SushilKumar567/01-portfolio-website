import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faUserGraduate,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section id="about" className="py-20 rounded-3xl bg-c1">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-extrabold text-gray-800 mb-6">About Me</h3>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          I am a front-end developer skilled in React.js and Tailwind CSS,
          dedicated to building visually appealing web solutions with a strong
          focus on user experience.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
          <div className="bg-c2 p-8 rounded-lg shadow-md max-w-xs">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="text-c4 text-4xl mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Experience
            </h4>
            <p className="text-gray-600 bg-c2">
              I have experience in building and maintaining various WordPress
              websites, focusing on design, performance, and user experience.
              Additionally, I have implemented effective on-page SEO strategies
              to enhance visibility.
            </p>
          </div>

          <div className="bg-c2 p-8 rounded-lg shadow-md max-w-xs">
            <FontAwesomeIcon
              icon={faUserGraduate}
              className="text-c4 text-4xl mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Education
            </h4>
            <p className="text-gray-600">
              I hold a Bachelor's degree and have recently completed a one-year
              certification in web development. This program has equipped me
              with essential skills in front-end technologies, including
              React.js and Tailwind CSS.
            </p>
          </div>

          <div className="bg-c2 p-8 rounded-lg shadow-md max-w-xs">
            <FontAwesomeIcon icon={faMusic} className="text-c4 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Hobbies
            </h4>
            <p className="text-gray-600">
              I enjoy listening to music, which stimulates my imagination.
              Playing sports keeps me active and promotes teamwork, while
              reading books broadens my knowledge. Practicing meditation helps
              me maintain balance and focus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
