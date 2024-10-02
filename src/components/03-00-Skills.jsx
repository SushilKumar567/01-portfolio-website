import React from "react";
import Skill from "./03-01-Skill";
import { faPaintbrush, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faGithub,
  faWordpress,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

const SkillObj = [
  { name: "HTML", icon: faHtml5 },
  { name: "CSS", icon: faCss3 },
  { name: "Bootstrap", icon: faBootstrap },
  { name: "Tailwind", icon: faPaintbrush },
  { name: "JavaScript", icon: faJsSquare },
  { name: "React.js", icon: faReact },
  { name: "GitHub", icon: faGithub },
  { name: "WordPress", icon: faWordpress },
  { name: "SEO", icon: faSearch },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center py-20 rounded-3xl bg-c1 text-center"
    >
      <div className="mx-auto">
        <h3 className="text-4xl font-extrabold text-gray-800 mb-6">
          My Skills
        </h3>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Equipped with a versatile skill set, I bring together design and
          development to craft efficient, responsive, and visually appealing web
          solutions.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 w-11/12 md:w-3/4 mx-auto">
          {SkillObj.map((skill) => (
            <Skill key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
