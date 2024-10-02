import React from "react";
import Project from "./04-01-Project";
import calculatorImg from "../images/2-calculator-app.png";
import todoImg from "../images/3-to-do-list-app.png";
import weatherImg from "../images/4-weather-app.png";

const ProjectObj = [
  {
    title: "Calculator App",
    img: calculatorImg,
    technologies: ["HTML", "CSS", "JS"],
    link: "https://sushilkumar567.github.io/2-calculator-app/",
  },
  {
    title: "To-Do List App",
    img: todoImg,

    technologies: ["React", "CSS", "JS"],
    link: "https://sushilkumar567.github.io/3-to-do-list-app/",
  },
  {
    title: "Weather App",
    img: weatherImg,
    description:
      "An app that fetches weather data from an API to display current weather conditions.",
    technologies: ["HTML", "CSS", "JS"],
    link: "https://sushilkumar567.github.io/4-weather-app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h3 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
          My Projects
        </h3>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A curated collection of personal projects that demonstrates my
          development skills, creativity, and commitment to delivering
          high-quality web solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-6 px-4">
          {ProjectObj.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              img={project.img}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
