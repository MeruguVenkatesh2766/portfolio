import React from "react";
import SkillCard from "../layouts/SkillCard";
import { skillPercentage, skillColors } from "../data";

const About = ({ darkMode }) => {
  console.log(darkMode)
  const textColor = darkMode ? "text-white" : "text-black";

  return (
    <div className={`min-h-screen flex flex-col justify-around lg:gap-8 lg:px-32 px-5 ${darkMode ? "bg-black" : "bg-backgroundColor"}`}>
      <div className="mt-10">
        <h1 className={`text-center font-semibold text-4xl mt-16 lg:mt-8 mb-4 lg:mb-4 ${textColor}`}>About Me</h1>
      </div>

      <div className="px-3">
        <div className="mb-10">
          <h2 className={`text-2xl font-semibold ${textColor}`}>Who am I?</h2>
          <p className={`mt-4 lg:mt-2 ${textColor}`}>
            I am a grad student from the National Institute of Technology Warangal with ECE as my major. I love exploring new technologies and am often amazed by the progress we, as a human species, have made so far in recent years.
            <br />
            <br />
            I have started reflecting my ideas and thoughts through the medium of words recently, so spelling and grammar mistakes are very often. You can write me back if you spot any and don't want to live anymore. 😄
          </p>
        </div>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-12">
          <div className="mb-5 flex flex-col gap-4 flex-1 md:w-1/3">
            <h2 className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-2xl font-semibold`}>Language Proficiency</h2>
            <SkillCard title="C++" width={skillPercentage[85]} val={skillPercentage[85]} colors={skillColors.column1} darkMode={darkMode}/>
            <SkillCard title="Html" width={skillPercentage[90]} val={skillPercentage[90]} colors={skillColors.column1} darkMode={darkMode}/>
            <SkillCard title="CSS" width={skillPercentage[90]} val={skillPercentage[90]} colors={skillColors.column1} darkMode={darkMode}/>
            <SkillCard title="JavaScript" width={skillPercentage[85]} val={skillPercentage[85]} colors={skillColors.column1} darkMode={darkMode}/>
            <SkillCard title="TypeScript" width={skillPercentage[70]} val={skillPercentage[70]} colors={skillColors.column1} darkMode={darkMode}/>
          </div>

          <div className="mb-5 flex flex-col gap-4 flex-1 md:w-1/3">
            <h2 className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-2xl font-semibold`}>Frameworks & Tech</h2>
            <SkillCard title="React" width={skillPercentage[90]} val={skillPercentage[90]} colors={skillColors.column2} darkMode={darkMode}/>
            <SkillCard title="Redux" width={skillPercentage[85]} val={skillPercentage[85]} colors={skillColors.column2} darkMode={darkMode}/>
            <SkillCard title="React Native" width={skillPercentage[80]} val={skillPercentage[80]} colors={skillColors.column2} darkMode={darkMode}/>
            <SkillCard title="Angular" width={skillPercentage[75]} val={skillPercentage[75]} colors={skillColors.column2} darkMode={darkMode}/>
            <SkillCard title="Nodejs" width={skillPercentage[80]} val={skillPercentage[80]} colors={skillColors.column2} darkMode={darkMode}/>
            <SkillCard title="Material UI & Ant design" width={skillPercentage[90]} val={skillPercentage[90]} colors={skillColors.column2} darkMode={darkMode}/>
          </div>

          <div className="mb-5 flex flex-col gap-4 flex-1 md:w-1/3">
            <h2 className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-2xl font-semibold`}>Databases & Others</h2>
            <SkillCard title="MongoDB" width={skillPercentage[80]} val={skillPercentage[80]} colors={skillColors.column3} darkMode={darkMode}/>
            <SkillCard title="Postgres" width={skillPercentage[80]} val={skillPercentage[80]} colors={skillColors.column3} darkMode={darkMode}/>
            <SkillCard title="REST API Integration" width={skillPercentage[80]} val={skillPercentage[80]} colors={skillColors.column3} darkMode={darkMode}/>
            <SkillCard title="Git" width={skillPercentage[85]} val={skillPercentage[85]} colors={skillColors.column3} darkMode={darkMode}/>
            <SkillCard title="Azure" width={skillPercentage[75]} val={skillPercentage[75]} colors={skillColors.column3} darkMode={darkMode}/>
            <SkillCard title="Bitbucket" width={skillPercentage[75]} val={skillPercentage[75]} colors={skillColors.column3} darkMode={darkMode}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
