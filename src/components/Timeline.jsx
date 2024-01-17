import React from 'react';

const Timeline = ({ darkMode }) => {
  return (
    <div className={`min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 py-10 ${darkMode ? "bg-black" : "bg-backgroundColor"}`}>
      <h1 className={`text-center font-semibold text-4xl pt-24 lg:pt-16 pb-8 ${darkMode ? "text-white" : "text-gray-900"}`}>
        Timeline
      </h1>
      <ul className="relative list-none p-0">
        <li className={`mt-3 ${darkMode ? "bg-gray-900" : "bg-white"} p-6`}>
          <span className={`absolute flex items-center justify-center mt-2 w-3 h-3 bg-blue-100 rounded-full ring-8 ring-white ${darkMode ? "dark:ring-gray-900 dark:bg-blue-900" : ""}`}>
            <svg className={`w-2.5 h-2.5 text-blue-800 ${darkMode ? "dark:text-blue-300" : ""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className={`mb-1 pl-8 text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Software Engineer &nbsp;&nbsp;&nbsp;&nbsp;2022 - Present</h3>
          <time className={`block mb-2 pl-8 text-sm font-normal leading-none ${darkMode ? "text-gray-400 dark:text-gray-500" : "text-gray-400 dark:text-gray-500"}`}>Buildbot Technologies Pvt Ltd</time>
          <p className={`mb-4 pl-8 text-base font-normal ${darkMode ? "text-gray-500 dark:text-gray-400" : "text-gray-500 dark:text-gray-400"}`}>
          The primary focus is on the architecture, development and crafting responsive and seamless web applications using React, coupled with robust state management through React Redux. Expertise extends to RESTful API development using Node.js, ensuring scalable and efficient back-end solutions. Bringing a holistic approach to software engineering, consistently delivering high-quality solutions that prioritize user experience and functionality.
          </p>
        </li>
        <li className={`mt-3 ${darkMode ? "bg-gray-900" : "bg-white"} p-6`}>
          <span className={`absolute flex items-center justify-center mt-2 w-3 h-3 bg-blue-100 rounded-full ring-8 ring-white ${darkMode ? "dark:ring-gray-900 dark:bg-blue-900" : ""}`}>
            <svg className={`w-2.5 h-2.5 text-blue-800 ${darkMode ? "dark:text-blue-300" : ""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className={`flex items-center mb-1 pl-8 text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Bachelor of Technology &nbsp;&nbsp;&nbsp;&nbsp;2018 - 2022</h3>
          <time className={`block mb-2 pl-8 text-sm font-normal leading-none ${darkMode ? "text-gray-400 dark:text-gray-500" : "text-gray-400 dark:text-gray-500"}`}>National Institute of Technology, Warangal</time>
          <p className={`mb-4 pl-8 text-base font-normal ${darkMode ? "text-gray-500 dark:text-gray-400" : "text-gray-500 dark:text-gray-400"}`}>Earned a degree in Electronics and Communication Engineering, yet my passion lies in coding and development within the realm of Computer Science and Engineering</p>
        </li>
        <li className={`mt-3 ${darkMode ? "bg-gray-900" : "bg-white"} p-6`}>
          <span className={`absolute flex items-center justify-center mt-2 w-3 h-3 bg-blue-100 rounded-full ring-8 ring-white ${darkMode ? "dark:ring-gray-900 dark:bg-blue-900" : ""}`}>
            <svg className={`w-2.5 h-2.5 text-blue-800 ${darkMode ? "dark:text-blue-300" : ""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className={`mb-1 text-lg pl-8 font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Primary and Higher Education</h3>
          <p className={`text-base pl-8 font-normal ${darkMode ? "text-gray-500 dark:text-gray-400" : "text-gray-500 dark:text-gray-400"}`}>I have completed my higher secondary education with major subjects as Physics, Chemistry & Maths with 96 merit. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
