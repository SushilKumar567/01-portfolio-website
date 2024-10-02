import React from "react";

const Project = ({ title, img, technologies, link }) => {
  return (
    <div className="w-72 h-96 bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
      <img
        src={img}
        alt={title}
        className="w-full h-82 object-cover rounded-t-lg"
      />
      <div className="p-4 flex flex-col items-center">
        <h4 className="text-lg font-semibold text-gray-800 text-center">
          {title}
        </h4>
        <p className="text-xs text-gray-500 mb-2 text-center">
          Technologies: {technologies.join(", ")}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm transition duration-200 ease-in-out transform hover:scale-110" // Added scale on hover
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Project;
