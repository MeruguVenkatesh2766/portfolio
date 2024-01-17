import React from "react";
import EducationCard from "../layouts/EducationCard";
import { techstackDescriptions } from "../data";
import { expertiseDescriptions } from "../data";
import ServicesCard from "../layouts/ServicesCard";

const Experience = ({ darkMode }) => {
  return (
    <div className={`min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-10 ${darkMode ? "bg-black" : "bg-backgroundColor"}`}>
      <h1 className={`text-center font-semibold text-4xl pt-24 lg:pt-16 pb-8 ${darkMode ? "text-white" : "text-gray-900"}`}>
        Work Experience
      </h1>

      <div className={`rounded-md${darkMode ? "bg-black" : "bg-backgroundColor"} ${darkMode ? "text-white" : ""}`}>
        {/* Add the new work experience section here */}
        <div className={`${darkMode ? "text-white" : ""}`}>
          <h2 className="font-semibold text-xl mb-2">
            Buildbot Technologies Pvt Ltd, Software Engineer
          </h2>
          <p className={`text-sm font-normal leading-none ${darkMode ? "text-gray-400 dark:text-gray-500" : "text-gray-400 dark:text-gray-500"}`}>Oct 2022 - Present</p>
          <p className={`mt-4 text-base font-normal ${darkMode ? "text-gray-500 dark:text-gray-400" : "text-gray-500 dark:text-gray-400"}`}>
            The primary focus is on the architecture, development and crafting responsive and seamless web applications using React, coupled with robust state management through React Redux.
            Expertise extends to RESTful API development using Node.js, ensuring scalable and efficient back-end solutions.
            Bringing a holistic approach to software engineering, consistently delivering high-quality solutions that prioritize user experience and functionality.
          </p>
        </div>

        {/* Techsatck cards */}
        <div className="flex flex-wrap items-center justify-between w-full gap-5 mt-4 mb-4">
          <div className="w-full md:w-custom-width lg:w-custom-width">
            <EducationCard title="Frontend Development" values={techstackDescriptions.Frontend} darkMode={darkMode} />
          </div>
          <div className="w-full md:w-custom-width lg:w-custom-width">
            <EducationCard title="Backend Development" values={techstackDescriptions.Backend} darkMode={darkMode} />
          </div>
          <div className="w-full md:w-custom-width lg:w-custom-width">
            <EducationCard title="Database Management" values={techstackDescriptions.Database} darkMode={darkMode} />
          </div>
          <div className="w-full md:w-custom-width lg:w-custom-width">
            <EducationCard title="Cross-Platform Development" values={techstackDescriptions.CrossPlatform} darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
