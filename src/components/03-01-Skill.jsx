import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skill = ({ name, icon }) => {
  return (
    <div className="w-40 bg-c2 rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
      <div className="text-5xl text-c4 mb-4">
        <FontAwesomeIcon icon={icon} />
      </div>

      <h4 className="text-xl font-semibold">{name}</h4>
    </div>
  );
};

export default Skill;
