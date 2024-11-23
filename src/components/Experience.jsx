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

      <div className={`rounded-md`}>
        {/* Add the new work experience section here */}
        <div className={`p-6 rounded-md ${darkMode ? "bg-gray-900" : "bg-white"} ${darkMode ? "text-white" : ""}`}>
          <h2 className="font-semibold text-xl mb-2">
            Nestor Analytics Pvt Ltd &nbsp;&nbsp;|&nbsp;&nbsp; <span className={`${darkMode ? "text-gray-400 dark:text-gray-400" : "text-gray-400 dark:text-gray-400"}`}> Frontend Engineer</span> 
          </h2>
          <p className={`text-sm font-normal leading-none ${darkMode ? "text-gray-400 dark:text-gray-500" : "text-gray-400 dark:text-gray-500"}`}>May 2024 - Present</p>
          <ul className="list-disc pl-8 pt-4 space-y-3">
            <li className={`text-md font-normal leading-relaxed ${darkMode ? "text-gray-500 dark:text-gray-400" : "text-gray-500 dark:text-gray-400"}`}>
              Leveraged <strong>Prompt Engineering</strong> and <strong>Python Development</strong>, integrating <strong>AI models like ChatGPT, Gemini-AI, Llama, and Qwen with Python</strong> for generating large-scale, high-quality datasets, <strong>achieving an 80% efficiency improvement</strong> with efficient algorithms.
            </li>
            <li className={`text-md font-normal leading-relaxed ${darkMode ? "text-gray-500 dark:text-gray-400" : "text-gray-500 dark:text-gray-400"}`}>
              <strong>Automated data validation pipelines</strong>, ensuring data integrity and <strong>eliminating 100% manual effort in validation</strong> and Excel reporting for large-scale datasets.
            </li>
            <li className={`text-md font-normal leading-relaxed ${darkMode ? "text-gray-500 dark:text-gray-400" : "text-gray-500 dark:text-gray-400"}`}>
              Contributed to modifying the main <strong>Python-based server</strong> and engineering responsive, user-friendly note-types using JavaScript and jQuery, enhancing UI/UX and overall product performance.
            </li>
          </ul>
        </div>
        <br />
        <div className={`p-6 rounded-md ${darkMode ? "bg-gray-900" : "bg-white"} ${darkMode ? "text-white" : ""}`}>
          <h2 className="font-semibold text-xl mb-2">
            Buildbot Technologies Pvt Ltd &nbsp;&nbsp;|&nbsp;&nbsp; <span className={`${darkMode ? "text-gray-400 dark:text-gray-400" : "text-gray-400 dark:text-gray-400"}`}> Software Engineer</span> 
          </h2>
          <p className={`text-sm font-normal leading-none ${darkMode ? "text-gray-400 dark:text-gray-500" : "text-gray-400 dark:text-gray-500"}`}>Oct 2022 - Nov 2023</p>
          <ul className="list-disc pl-8 pt-4 space-y-3">
            <li className={`text-md font-normal leading-relaxed ${darkMode ? "text-gray-500 dark:text-gray-400" : "text-gray-500 dark:text-gray-400"}`}>
              Transformed Windows-based application into a fully responsive web application using <strong>Vite+React</strong> and Material UI, <strong>achieving an 80% improvement in UI\UX and 70% reduction in build time</strong>.
            </li>
            <li className={`text-md font-normal leading-relaxed ${darkMode ? "text-gray-500 dark:text-gray-400" : "text-gray-500 dark:text-gray-400"}`}>
              Optimized data management with <strong>React Redux</strong>, ensuring <strong>99% uptime</strong> and seamless offline functionality.
            </li>
            <li className={`text-md font-normal leading-relaxed ${darkMode ? "text-gray-500 dark:text-gray-400" : "text-gray-500 dark:text-gray-400"}`}>
              Integrated <strong>RESTful APIs with Node.js</strong>, delivering a <strong>75% query speed improvement</strong>.
            </li>
            <li className={`text-md font-normal leading-relaxed ${darkMode ? "text-gray-500 dark:text-gray-400" : "text-gray-500 dark:text-gray-400"}`}>
              <strong>Built a cross-platform mobile application with React-Native</strong> for real-time monitoring of pharmaceutical environments.
            </li>
          </ul>
        </div>

        {/* Techsatck cards */}
        {/* <div className="flex flex-wrap items-center justify-between w-full gap-5 mt-4 mb-4">
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
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
