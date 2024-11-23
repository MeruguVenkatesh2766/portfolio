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
          <h3 className={`mb-1 pl-8 text-lg font-semibold flex justify-between ${darkMode ? "text-white" : "text-gray-900"}`}><span>Frontend Engineer</span> <span className='text-sm text-gray-400'>May 2024 - Present</span></h3>
          <time className={`block mb-2 pl-8 text-sm font-normal leading-none ${darkMode ? "text-gray-400 dark:text-gray-500" : "text-gray-400 dark:text-gray-500"}`}>Nestor Analytics Pvt Ltd</time>
          <p className={`mb-4 pl-8 text-base font-normal ${darkMode ? "text-gray-500 dark:text-gray-400" : "text-gray-500 dark:text-gray-400"}`}><strong>AI Prompt & Python Engineering</strong>: Engineering <strong>multi-AI model integration</strong>, and automated validation pipelines, revolutionizing large-scale dataset processing and also enhancing <strong>development in UI/UX frontend</strong> for overall product performance.</p>
        </li>
        <li className={`mt-3 ${darkMode ? "bg-gray-900" : "bg-white"} p-6`}>
          <span className={`absolute flex items-center justify-center mt-2 w-3 h-3 bg-blue-100 rounded-full ring-8 ring-white ${darkMode ? "dark:ring-gray-900 dark:bg-blue-900" : ""}`}>
            <svg className={`w-2.5 h-2.5 text-blue-800 ${darkMode ? "dark:text-blue-300" : ""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className={`mb-1 pl-8 text-lg font-semibold flex justify-between ${darkMode ? "text-white" : "text-gray-900"}`}><span>Software Engineer</span> <span className='text-sm text-gray-400'>Oct 2022 - Nov 2023</span></h3>
          <time className={`block mb-2 pl-8 text-sm font-normal leading-none ${darkMode ? "text-gray-400 dark:text-gray-500" : "text-gray-400 dark:text-gray-500"}`}>Buildbot Technologies Pvt Ltd</time>
          <p className={`mb-4 pl-8 text-base font-normal ${darkMode ? "text-gray-500 dark:text-gray-400" : "text-gray-500 dark:text-gray-400"}`}><strong>Full Stack Development</strong>: Contributed to convert a Windows app to robust web app, achieving 80% UI/UX enhancement, 70% build time reduction, and 75% query speed improvement using frontend - Vite+React, Redux, and backend - Nodejs, REST APIs.</p>
        </li>
        <li className={`mt-3 ${darkMode ? "bg-gray-900" : "bg-white"} p-6`}>
          <span className={`absolute flex items-center justify-center mt-2 w-3 h-3 bg-blue-100 rounded-full ring-8 ring-white ${darkMode ? "dark:ring-gray-900 dark:bg-blue-900" : ""}`}>
            <svg className={`w-2.5 h-2.5 text-blue-800 ${darkMode ? "dark:text-blue-300" : ""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className={`flex items-center mb-1 pl-8 text-lg flex justify-between font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}><span>Bachelor of Technology</span> <span className='text-sm text-gray-400'>July 2018 - May 2022</span></h3>
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
