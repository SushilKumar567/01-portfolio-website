import React, { useState } from "react";
import Resume from "../images/Sushil-Kumar-(Front-end-Web-Developer).pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitMessage("Thank you for your message! I'll get back to you soon.");
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-extrabold text-gray-800 mb-6">
          Get In Touch
        </h3>
        <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto">
          I am currently seeking opportunities in front-end web development.
          Please feel free to reach out with any relevant positions available.
        </p>

        <div className="flex flex-col md:flex-row justify-center md:space-x-16 space-y-12 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-4 bg-white p-6 shadow-md rounded-lg">
            <h4 className="text-2xl font-bold text-gray-800">Contact Info</h4>
            <p className="text-lg text-gray-700">
              <span className="font-bold mr-2">Email:</span>
              <a
                href="mailto:sushilkumar567895@gmail.com"
                className="text-gray-700 hover:underline"
              >
                sushilkumar567895@gmail.com
              </a>
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-bold mr-2">Phone:</span>
              <a
                href="tel:+919871357023"
                className="text-gray-700 hover:underline"
              >
                +91 98713 57023
              </a>
            </p>

            <div className="mt-8 flex items-center space-x-4">
              <a
                href={Resume}
                target="blank"
                className="bg-c5 text-black px-4 py-2 rounded-full hover:bg-c4 hover:text-white transition duration-250 ease-out"
              >
                Resume
                <FontAwesomeIcon className="ml-2" icon={faDownload} />
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

          <form
            className="w-full text-start max-w-md bg-white p-8 shadow-md rounded-lg"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-c4 transition duration-300"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-c4 transition duration-300"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-1 focus:ring-c4 transition duration-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-c5 text-c3 px-6 py-2 rounded-full hover:bg-c4 hover:text-white transition duration-300"
            >
              Submit
            </button>

            {submitMessage && (
              <div className="mt-4 text-c4 font-semibold">{submitMessage}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
