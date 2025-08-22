import React from "react";

function Projects_card({ ProjectsImg, description, description1 }) {
  return (
    <div
      id="project"
      className="p-3 bounce-limited shadow-amber-100/40 shadow-lg bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] hover:scale-105 transition-all duration-200 flex flex-col rounded-2xl text-amber-50 w-full max-w-[90vw] sm:max-w-[300px]"
    >
      {/* Image */}
      <div className="rounded-2xl overflow-hidden h-[180px] w-full">
        <img
          src={ProjectsImg}
          alt="project"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col text-center px-2 py-3">
        <p className="text-lg sm:text-xl font-semibold text-white break-words">
          {description1}
        </p>
        <p className="text-sm mt-2 text-gray-300 font-mono break-words">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Projects_card;
